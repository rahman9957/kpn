# KPN Website

Website corporate CV Karya Putra Nusantara — General Trading, Distributor, Supplier, General Contractor, dan Business Consultant.

## Yang direvisi
- Tampilan diperbarui agar lebih premium dan tidak terasa seperti grid template polos.
- Font utama Poppins + Playfair Display.
- Section Tentang dibuat lebih editorial dan memiliki visual pendukung.
- Layanan menggunakan layout mosaic/asimetris, bukan 4 blok putih kaku.
- Portfolio memiliki kartu project yang benar-benar dapat dibuka ke halaman detail.
- Insight menggunakan nama **Kabar & Insight KPN**.
- Kartu insight dan halaman daftar/detail sudah saling terhubung.
- Logo client/project partner clean tanpa nama teks tambahan di bawah logo.
- WhatsApp, email, Instagram, Facebook, dan alamat KPN sudah terhubung.
- Admin CMS tersedia untuk tambah/edit/hapus portfolio, insight, client/partner, layanan, konten utama, dan kontak.
- Upload gambar dilakukan langsung dari admin; tidak perlu mengganti nama file atau menyentuh kode.

## Menjalankan project
```bash
npm install
npm run dev
```

## Membuka admin
Jalankan website lalu buka:

```text
http://localhost:5173/#admin
```

Password demo admin: `kpnadmin`

> CMS pada versi ini menyimpan perubahan di browser menggunakan localStorage. Artinya perubahan terlihat pada browser/perangkat yang digunakan untuk mengedit. Untuk CMS online yang dapat diedit dari perangkat mana pun, project ini masih perlu dihubungkan ke database + image storage + autentikasi server.

## Struktur aset
Semua aset asli pada folder `public/images` dan `public/logos` dipertahankan. Nama file gambar tidak perlu diubah ketika upload lewat admin.
