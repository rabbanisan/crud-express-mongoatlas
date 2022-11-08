var mongoose = require('mongoose')

const Siswa = new mongoose.Schema({
    nama:{
      type: String
    },
    kelas:{
      type: String
  }
  },{
  collection:"murid"
  });

module.exports = mongoose.model('siswa',Siswa)