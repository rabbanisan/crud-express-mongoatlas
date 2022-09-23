var Siswa = require('../model/siswa')

// function Get Siswa
const getSiswa = async (req, res) => {
    try {
        const dataSiswa = await Siswa.find();
        res.render('index',{data:dataSiswa})
    } catch (error){
        res.status(500).json({message: error.message});
    }    
}

const formSiswa = async(req,res) =>  {
    res.render('submit-siswa')
   
}
//function insert siswa
const saveSiswa = async (req, res) => {

    try {
        const newSiswa = new Siswa({
            nama : req.body.nama,
            kelas : req.body.kelas
          });
        await newSiswa.save();
        res.redirect('/')         
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports={
    getSiswa,
    saveSiswa,
    formSiswa
}