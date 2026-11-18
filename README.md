# 💍 Undangan Pernikahan Digital Tara & Riza

Undangan pernikahan digital berbentuk *single-page application* yang responsif. Aplikasi menggunakan Firebase Cloud Firestore untuk autentikasi tamu, RSVP, dan ucapan doa restu secara real-time.

## Fitur

- **Autentikasi tamu:** undangan hanya terbuka setelah nomor telepon ditemukan pada koleksi `tamu`.
- **Scroll lock:** halaman di belakang cover autentikasi tidak dapat digulir sebelum akses berhasil.
- **Countdown:** hitung mundur menuju 30 November 2026 pukul 10.00 WIB.
- **RSVP wajib:** tamu harus memilih `Hadir` atau `Tidak Hadir`.
- **Nama RSVP terkunci:** nama diambil dari data nomor telepon dan tidak dapat diedit oleh tamu.
- **Ucapan real-time:** ucapan disimpan pada koleksi `ucapan` dan ditampilkan berdasarkan waktu terbaru.
- **Pagination ucapan:** hanya 6 ucapan dirender per halaman. Tombol kiri menampilkan halaman lebih baru, tombol tengah menunjukkan halaman aktif, dan tombol kanan menampilkan halaman lebih lama.
- **Amplop digital:** nomor rekening dapat disalin menggunakan Clipboard API.
- **Musik latar:** pemutar musik menggunakan berkas audio lokal dari folder `src`.
- **Responsif:** layout desktop dan mobile memiliki penyesuaian spacing, dekorasi, dan keterbacaan masing-masing.
- **Atribusi karya:** credit LinkedIn dan Instagram tersedia di bagian footer.

## Teknologi

- HTML5, CSS3, dan JavaScript tanpa framework UI.
- Firebase Web SDK 10.7 untuk Firestore.
- Google Fonts: Cormorant Garamond dan Pinyon Script.
- Node.js hanya digunakan oleh utilitas di `src` untuk import data.

## Struktur Proyek

```text
.
├── index.html              # Halaman undangan dan logika frontend
├── README.md
├── .gitignore
└── src/
    ├── import.js           # Utilitas import data, bila diperlukan
    ├── package.json        # Dependensi utilitas Node.js
    ├── package-lock.json
    └── *.mp3               # Audio lokal yang dipakai aplikasi
```

File berikut sengaja tidak dilacak Git:

- `src/node_modules/`
- `src/serviceAccountKey.json`
- file `.env`
- file sumber `src/*.xlsx`

## Setup Lokal

### 1. Konfigurasi Firebase

1. Buat atau gunakan project pada [Firebase Console](https://console.firebase.google.com/).
2. Aktifkan Cloud Firestore.
3. Buat koleksi `tamu`. Setiap document ID harus berupa nomor telepon yang telah dinormalisasi, misalnya `081234567890`, dengan field:

   ```text
   nama: "Nama Tamu"
   ```

4. Buat atau gunakan koleksi `ucapan` dengan field:

   ```text
   n: "Nama"
   a: "Hadir" atau "Tidak Hadir"
   w: "Ucapan dan doa"
   timestamp: server timestamp
   ```

5. Salin konfigurasi Web App Firebase ke blok `const firebaseConfig` di `index.html`.
6. Gunakan Firestore Security Rules yang sesuai untuk produksi. Jangan mengandalkan **Test Mode** setelah deployment.

### 2. Menjalankan Undangan

Karena halaman mengimpor modul Firebase dan memuat audio lokal, jalankan melalui server lokal, bukan hanya membuka file dengan `file://`:

```bash
npx serve .
```

Alternatifnya, gunakan ekstensi Live Server di VS Code, lalu buka URL yang diberikan.

### 3. Menjalankan Utilitas Import

Dependensi utilitas berada di folder `src`:

```bash
cd src
npm install
node import.js
```

Utilitas import memerlukan kredensial service account. Simpan file tersebut sebagai `src/serviceAccountKey.json`; file ini sudah masuk `.gitignore` dan tidak boleh di-commit.

## Deployment

Proyek dapat dideploy ke GitHub Pages atau hosting statis lain. Pastikan:

- konfigurasi Firebase sudah benar;
- domain deployment diizinkan pada pengaturan Firebase;
- Firestore Rules sudah aman untuk produksi;
- semua berkas audio yang diperlukan ikut dipublikasikan.

## Credit

Designed & developed by [Zoelkiflie Ahmadhani](https://www.linkedin.com/in/zoelkiflie-ahmadhani-209a44426) · [Instagram @zoelkie](https://www.instagram.com/zoelkie)