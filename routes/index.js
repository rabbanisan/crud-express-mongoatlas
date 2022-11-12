var express = require("express");
var router = express.Router();
var {
	getSiswa,
	insertSiswa,
	deleteSiswa,
	getsatuSiswa,
	updatesatuSiswa,
} = require("../controllers/siswaController");

router.get("/", getSiswa);
router.post("/insert-siswa", insertSiswa);
router.get("/delete-siswa/:id", deleteSiswa);
router.get("/update-siswa/:id", getsatuSiswa);
router.post("/update-siswa/:id", updatesatuSiswa);

module.exports = router;
