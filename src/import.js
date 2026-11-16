const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const xlsx = require('xlsx');

// 1. Inisialisasi Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');
initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();

// 2. Baca file Excel revisi terbaru
const workbook = xlsx.readFile('./TARA & RIZA WEDDING INVITATION(new).xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

function formatPhoneNumber(rawPhone) {
  if (rawPhone === undefined || rawPhone === null) return null;
  
  let phoneStr = String(rawPhone).trim();
  if (phoneStr.endsWith('.0')) {
    phoneStr = phoneStr.slice(0, -2);
  }
  
  phoneStr = phoneStr.replace(/\D/g, '');
  if (!phoneStr) return null;

  if (phoneStr.startsWith('8')) {
    phoneStr = '0' + phoneStr;
  }
  return phoneStr;
}

async function updateData() {
  const batch = db.batch();
  let count = 0;

  rows.forEach((row) => {
    const nama = row[1] ? String(row[1]).trim() : '';
    const formattedPhone = formatPhoneNumber(row[2]);

    if (!nama || nama.toUpperCase() === 'TBA' || !formattedPhone) {
      return;
    }

    const docRef = db.collection('tamu').doc(formattedPhone);
    batch.set(docRef, { nama: nama }, { merge: true });
    count++;
  });

  await batch.commit();
  console.log(`Selesai! Total ${count} data tamu berhasil diperbarui dan ditambahkan.`);
}

updateData().catch(console.error);