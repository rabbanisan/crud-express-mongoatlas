var express = require('express');
var router = express.Router();
var {getSiswa,saveSiswa,formSiswa,deleteSiswa,getsatuSiswa,updatesatuSiswa} = require('../controllers/siswaController');

router.get('/', getSiswa);
router.get('/submit-siswa', formSiswa);
router.post('/submit-siswa', saveSiswa);
router.get('/delete-siswa/:id', deleteSiswa);
router.get('/update-siswa/:id', getsatuSiswa);
router.post('/update-siswa/:id', updatesatuSiswa);

module.exports = router;