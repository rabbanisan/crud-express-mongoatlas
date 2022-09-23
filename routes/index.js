var express = require('express');
var router = express.Router();
var {getSiswa,saveSiswa,formSiswa} = require('../controllers/siswaController');

router.get('/', getSiswa);
router.get('/submit-siswa',formSiswa)
router.post('/submit-siswa', saveSiswa);

module.exports = router;