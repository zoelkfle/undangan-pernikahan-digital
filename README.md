# 💍 Undangan Pernikahan Digital Terintegrasi Firebase

Sebuah aplikasi web undangan pernikahan *single-page* yang responsif, dilengkapi dengan sistem autentikasi tamu dan buku tamu (RSVP) *real-time* menggunakan Firebase Cloud Firestore. Proyek ini difokuskan pada antarmuka Front-End yang elegan dan interaktif tanpa bergantung pada *framework* berat.

## ✨ Fitur Utama

*   **🔐 Autentikasi Tamu Terpusat:** Pengunjung hanya dapat membuka undangan jika nomor telepon mereka telah didaftarkan di dalam *database* (koleksi `tamu`).
*   **✉️ Real-Time RSVP & Doa Restu:** Pengunjung dapat mengirimkan konfirmasi kehadiran dan ucapan yang langsung tersimpan secara persisten dan ditampilkan ke semua tamu secara *real-time* menggunakan Cloud Firestore (koleksi `ucapan`).
*   **📱 Desain Responsif & Mobile-First:** Antarmuka (UI) dirancang dengan tata letak yang proporsional dan animasi transisi yang mulus untuk berbagai ukuran layar.
*   **⏳ Hitung Mundur H-Hari (Countdown):** Penghitung waktu otomatis menuju hari H acara.
*   **🎵 Background Music:** Fitur pemutar audio bawaan untuk memberikan nuansa syahdu saat undangan ditelusuri.
*   **🎁 Amplop Digital:** Fitur salin nomor rekening satu klik yang menggunakan *Clipboard API* modern.

## 🛠️ Teknologi yang Digunakan

*   **Front-End:** HTML5, CSS3 (Vanilla), JavaScript (ES6 Modules)
*   **Database (BaaS):** Firebase Cloud Firestore (NoSQL)
*   **Deployment Target:** GitHub Pages

## 🚀 Panduan Instalasi & Setup Lokal

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/zoelkfle/undangan-pernikahan.git](https://github.com/zoelkfle/undangan-pernikahan.git)
    cd undangan-pernikahan
    ```
2.  **Konfigurasi Firebase**
    *   Buat proyek baru di [Firebase Console](https://console.firebase.google.com/).
    *   Aktifkan **Firestore Database** dalam mode pengujian (*Test Mode*).
    *   Buat koleksi baru bernama `tamu`. Tambahkan dokumen dengan *Document ID* berupa nomor HP (misal: `081234567890`) dan tambahkan *field* `nama` (string) berisi nama tamu.
    *   Dapatkan kode `firebaseConfig` dari *Project settings*.
3.  **Terapkan Konfigurasi**
    Buka file `index.html`, cari blok `const firebaseConfig`, dan ganti nilainya dengan *credentials* milik Anda.
4.  **Jalankan Aplikasi**
    Gunakan ekstensi *Live Server* di VS Code atau cukup buka file `index.html` secara langsung di *browser* pilihan Anda.

## 👨‍💻 Author

**Zoelkiflie Ahmadhani** 
*   GitHub: [@zoelkfle](https://github.com/zoelkfle)
*   Website: [zoelkflie.me](https://zoelkflie.me/)