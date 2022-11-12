var mongoose = require("mongoose");

const Siswa = new mongoose.Schema(
	{
		nama: {
			type: String,
		},
		jurusan: {
			type: String,
		},
		kelas: {
			type: String,
		},
	},
	{
		collection: "siswa",
	}
);

module.exports = mongoose.model("siswa", Siswa);
