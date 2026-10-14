exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        namaPengguna: 'Wisatawan',
        judul: 'Selamat Datang di Portal Pariwisata Bali',
        deskripsi: 'Temukan destinasi wisata menarik di Pulau Bali.'
    });
};

exports.getTentang = (req, res) => {
    res.render('pages/about');
};

exports.getKatalog = (req, res) => {
    const daftarWisata = [
        {
            nama: 'Pantai Kuta',
            lokasi: 'Badung',
            harga: 20000,
            kategori: 'Pantai'
        },
        {
            nama: 'Pura Ulun Danu Beratan',
            lokasi: 'Tabanan',
            harga: 30000,
            kategori: 'Budaya'
        },
        {
            nama: 'Garuda Wisnu Kencana',
            lokasi: 'Badung',
            harga: 85000,
            kategori: 'Budaya'
        }
    ];

    res.render('pages/katalog', {
        daftarWisata: daftarWisata
    });
};

exports.postTambahWisata = (req, res) => {
    console.log('\n[BACK-END] Data wisata diterima:');
    console.log(req.body);

    res.redirect('/katalog');
};
