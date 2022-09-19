var Siswa = require('../model/siswa')

// function Get Siswa
const getSiswa = async (req, res) => {
    try {
        const dataSiswa = await Siswa.find();
        res.json(dataSiswa);
    } catch (error){
        res.status(500).json({message: error.message});
    }    
}
//function insert siswa
const saveSiswa = async (req, res) => {
    const siswa = new Siswa(req.body);
    console.log(siswa);
    try {
        const savedSiswa = await siswa.save();
        res.status(201).json(savedSiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports={
    getSiswa,
    saveSiswa
}