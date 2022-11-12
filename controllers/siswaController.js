var Siswa = require("../model/siswa");

// function Get Siswa
const getSiswa = async (req, res) => {
	try {
		const dataSiswa = await Siswa.find();
		res.status(200).json(dataSiswa);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//function insert siswa
const insertSiswa = async (req, res) => {
	try {
		const newSiswa = new Siswa({
			nama: req.body.nama,
			jurusan: req.body.jurusan,
			kelas: req.body.kelas,
		});
		await newSiswa.save();
		res.redirect("/");
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// tampilkan satu siswa
const getsatuSiswa = async (req, res) => {
	try {
		const id = req.params.id;
		console.log(id);
		const satuSiswa = await Siswa.findById(id).exec();
		res.render("edit-siswa", { data: satuSiswa });
	} catch (error) {
		res.status(400).send(error.message);
	}
};

//update satu siswa
const updatesatuSiswa = async (req, res) => {
	try {
		const id = req.params.id;
		const data = req.body;
		let siswa = await Siswa.findByIdAndUpdate(
			id,
			{
				nama: data.nama,
				kelas: data.kelas,
			},
			{ new: true }
		);
		if (!siswa) return res.status(404).send("Siswa Tidak di temukan");
		res.redirect("/");
	} catch (error) {
		res.status(400).send(error.message);
	}
};

// delete satu siswa
const deleteSiswa = async (req, res) => {
	try {
		const id = req.params.id;
		//console.log(id);
		const siswa = await Siswa.findByIdAndDelete(id);
		if (!siswa) return res.status(404).send("siswa tidak di temukan");
		res.redirect("/");
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	getSiswa,
	insertSiswa,
	getsatuSiswa,
	updatesatuSiswa,
	deleteSiswa,
};
