
// const namaa = "maulana reza";
// const cetakNama = (nama) => `hi nama saya ${nama}`;
// console.log(cetakNama(namaa));

// Cara menjalankan file lain atau memanggil file lain bisa pakai require
const fs = require('fs')
// ini adalah import core modules. kalau gaaada di core modules akan di cari di third partymodule

const nama = require('./index.js')
// node akan menjalankan sinkronvasinkron dulu baru masuk ke file ini sama kaya import di python
// Import local module karena ada titik slas
// Kalau misal di module asalnya dia ngeekspor berupa method maka const nama diatas akan menjadi objek / Maka kalau mau memanggil perlu diikuti nama objeknya

// const moment = require('moment')
// ini third party module karena tidak ada di core modul / ini akan dicari di folder node_modules

// Kalau langsung manggil varibel dari file berbeda itu tidak bisa langsung gitu aja dengan require
// Namun dia bisa mengeksekusi index.js
// Kalau mau bisa dipanggil di file berbeda harus di exports dahulu di file masternya.
// console.log(nama('reza'))

console.log(nama.nama('reza'))
console.log(nama.pi)
console.log(nama.mahasiswa.cetakmhs())

const reza = new nama.Orang('rezaaaa',20)
console.log(reza.perkenalan())