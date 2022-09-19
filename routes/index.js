var express = require('express');
var router = express.Router();
var {getSiswa,saveSiswa} = require('../controllers/siswaController');

router.get('/', getSiswa);
router.post('/', saveSiswa);

module.exports = router;