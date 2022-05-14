// SYNTAX SYNCRONUS
const getUSer = (id) =>{
let nama = ''
if (id===1) {
    nama = 'maulana'
}
else{
    nama = "reza"
}
// ternary
// const nama = id === 1 ? 'maulana' : 'reza'
return {"id" : id , "nama" : nama}
}
const user1 = getUSer(1)
console.log(user1)

const user2 = getUSer(2)
console.log(user2)
// SYNTAX ASYNCRONUS
const getuser = (id,callback) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(()=>{
        const nama = id === 1 ? "maulana":"reza"
        callback({id,nama})
    },time)
}

const usersatu = getuser(1, (hasil)=>{
    console.log(hasil)
} )

const userdua = getuser(2 , (hasil)=>{
    console.log(hasil)
})

const halo = "hello world"
console.log('selesai')