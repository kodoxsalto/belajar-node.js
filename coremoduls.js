// File system 

const fs = require('fs')
// Readline
const readline = require('readline')
const { json } = require('stream/consumers')
// Menuliskan string ke file ( synchronus)
// try{
//     FS.writeFileSync('data/test.txt','Hello world secara synchronus')
// }
// catch(e){
//     console.log(e)
// }

// Menuliskan string ke file (asynchronus)

// fs.writeFile( 'data/test.txt', 'Hello world secara asynchronus', (e) => {
//     console.log(e)
// })

// Membaca isi file secara Synchonus
// const data = fs.readFileSync('data/test.txt','latin1')
// console.log(data)

// Membaca isi file secara asynchronus
// fs.readFile('data/test.txt','utf8',(err,data) => {
//     if (err) throw err
//     console.log(data)})

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question("Masukkan nama anda : ", (nama) =>{
    rl.question("Masukkkan Nomer Hp Anda : ",(no) => {
        const objek = {
            "Nama" : nama,
            "Nomor" : no
        }
        // const file = fs.readFile('data/kontak.json','utf-8',(err,data)=>{
        //     if (err) throw err
        //     console.log(data)})
        const file = fs.readFileSync('data/kontak.json','utf8')
        const parse = JSON.parse(file)
        parse.push(objek)
        fs.writeFileSync("data/kontak.json",JSON.stringify(parse))
        rl.close()
    })
})
