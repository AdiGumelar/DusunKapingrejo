# Website Dusun Kapingrejo

Website profil Dusun Kapingrejo, Wonokerto, Turi, Sleman. Situs ini menampilkan informasi profil dusun, jadwal sholat, visi dan misi, infografis kependudukan, potensi dusun, perangkat dusun, kegiatan warga, peta, serta kontak.

## Fitur

- Jadwal sholat Kabupaten Sleman yang mengambil data dari API Aladhan.
- Visi dan misi dengan tampilan responsif.
- Infografis kependudukan menggunakan Chart.js.
- Informasi potensi dusun, fasilitas keagamaan, perangkat dusun, dan kegiatan warga.
- Carousel gambar dan slider perangkat dusun.
- Peta lokasi dan informasi kontak.

## Teknologi

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- AOS
- Swiper
- Chart.js

## Struktur Proyek

```text
.
|-- index.html              # Halaman utama website
|-- assets/
|   |-- css/main.css        # Gaya utama website
|   |-- js/main.js          # Interaksi umum, AOS, carousel, dan Swiper
|   |-- js/data.js          # Data dan konfigurasi grafik Chart.js
|   |-- img/                # Gambar yang digunakan halaman utama
|   `-- vendor/             # Library frontend yang diperlukan
`-- README.md
```

## Menjalankan Secara Lokal

Karena proyek ini berupa website statis, cukup buka `index.html` di browser. Untuk pengalaman yang lebih baik, jalankan melalui *Live Server* pada VS Code atau server lokal lainnya.

Contoh menggunakan ekstensi Live Server:

1. Buka folder proyek di VS Code.
2. Klik kanan file `index.html`.
3. Pilih **Open with Live Server**.

## Catatan

- Jadwal sholat memerlukan koneksi internet karena menggunakan API Aladhan.
- Beberapa library dan font dimuat dari CDN, sehingga koneksi internet juga diperlukan untuk tampilan yang lengkap.
