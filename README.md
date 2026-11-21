# RAJIP DIGITAL
Website portfolio & katalog jasa (HTML + CSS + JavaScript, tanpa build).

## Cara pakai
1. Buka `index.html` langsung di browser.
2. Upload SEMUA isi folder ini ke root repository GitHub.
3. Settings → Pages → Deploy from branch → `main` / root.

## Edit data
Semua data ada di bagian `CONFIG` paling atas `script.js`: nomor WhatsApp (`6282311511550`), kontak, layanan, project, skill, proses kerja.
- Tambah project: salin satu blok `{ ... }` di `projects`, ganti isi, taruh gambar di `assets/`.
- Isi `demo:` / `link:` untuk memunculkan tombol demo. Kosong = tombol otomatis hilang.
- Ganti `assets/profile.jpg` dan gambar `project-1..6.jpg` dengan foto/screenshot asli (rasio 8:5).
- Semua project awal adalah **contoh konsep**, bukan project nyata.

## Setelah publish
Di `index.html` ganti `https://USERNAME.github.io/REPO/` pada `og:image`, `og:url`, dan `twitter:image` dengan URL asli website Anda.
