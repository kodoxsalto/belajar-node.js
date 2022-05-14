function nama(nama) {
    return `${nama}`
}
const pi = 3.14

console.log("Hallo perkenalkan saya : ")

const mahasiswa ={
    nama : 'Maulana Ahmad Fahreza',
    umur : 20,
    cetakmhs (){
        return `Halo,nama saya ${this.nama} umur saya ${this.umur} tahun`
    }
}

class orang {
    constructor(nama,umur){
     this.nama = nama
     this.umur = umur
    }
    perkenalan(){
        return`perkenalkan saya ${this.nama} saya berusia ${this.umur} tahun`
    }
}

// module.exports = nama
// KAlau ingin export dua item bisa dengan cara dibuat methid
// module.exports.pi = pi
// module.exports.nama = nama
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang =orang

// Bisa juga dengan cara dibuat objek terlebih dahulu atau context dictionary di django
module.exports={
    nama : nama,
    pi : pi,
    mahasiswa : mahasiswa,
    Orang : orang
}