# Undangan Wisuda Digital

Undangan digital berbasis HTML, CSS, dan JavaScript. Siap di-hosting melalui GitHub Pages.

## 1. Personalisasi data acara

Buka `script.js`, lalu ubah bagian `CONFIG`:

- `graduateName`: nama wisudawan.
- `graduateDegree`: gelar wisudawan.
- `university`: nama universitas.
- `eventDate`: tanggal dan waktu acara format ISO 8601. Contoh: `2026-11-28T10:00:00+07:00`.
- `eventTime`: teks jam acara.
- `venue`: nama gedung/tempat.
- `address`: alamat lengkap.
- `mapsUrl`: tautan Google Maps yang dibagikan dari Google Maps.

## 2. Foto wisudawan

Letakkan foto di `assets/images/` dengan nama `wisudawan.jpg`. Jika belum ada foto, ornamen pengganti akan ditampilkan.

## 3. Backsound

Letakkan file audio milik sendiri atau audio yang memiliki izin penggunaan di `assets/music/` dengan nama `backsound.mp3`.

Browser biasanya memblokir autoplay sebelum pengunjung berinteraksi. Musik mulai dicoba saat tombol **Buka Undangan** ditekan dan dapat dikendalikan dari tombol Musik.

## 4. Membuat link khusus penerima

Gunakan URL dasar GitHub Pages ditambah parameter `?untuk=`.

Contoh:
- `https://USERNAME.github.io/undangan-wisuda/?untuk=Bapak%20Ahmad`
- `https://USERNAME.github.io/undangan-wisuda/?untuk=Ibu%20Siti`
- `https://USERNAME.github.io/undangan-wisuda/?untuk=Keluarga%20Besar`

Nama penerima otomatis ditampilkan di halaman pembuka dan isi undangan. Gunakan `%20` untuk spasi. Untuk nama dengan karakter khusus, encode URL terlebih dahulu.

## 5. Publikasi ke GitHub Pages

1. Buat repository GitHub bernama `undangan-wisuda`.
2. Upload seluruh isi folder project ini (bukan folder ZIP-nya).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses deployment selesai. Alamat situs biasanya `https://USERNAME.github.io/undangan-wisuda/`.

## Catatan

- Repository harus public jika ingin memakai GitHub Pages pada konfigurasi akun yang tidak menyediakan Pages untuk repository private.
- Jangan menaruh data pribadi sensitif di URL. Nama penerima pada parameter URL dapat terlihat dan diteruskan saat link dibagikan.
- Pastikan tanggal, alamat, tautan Maps, dan nomor WhatsApp sudah benar sebelum membagikan undangan.
