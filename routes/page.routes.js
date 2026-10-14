const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller');

// Halaman GET
router.get('/', pageController.getBeranda);
router.get('/about', pageController.getTentang);
router.get('/katalog', pageController.getKatalog);

// Form tambah wisata menggunakan POST
router.post('/katalog/tambah', pageController.postTambahWisata);

module.exports = router;
