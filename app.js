const express = require('express');
const app = express();
const PORT = 3000;

const pageRoutes = require('./routes/page.routes');

// Konfigurasi EJS
app.set('view engine', 'ejs');

// Middleware untuk file statis dan data form
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Menggunakan router
app.use('/', pageRoutes);

// Penanganan halaman yang tidak ditemukan
app.use((req, res) => {
    res.status(404).send('404 - Halaman tidak ditemukan');
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server MVC Aktif di http://localhost:${PORT}`);
});
