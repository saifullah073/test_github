function luas_persegi_panjang (p,l){
    return p * l
}

let hasil = luas_persegi_panjang(5,6)
console.log(hasil)

let hasil1 = void luas_persegi_panjang (4,3)
console.log(hasil1)

let array = [1,2,3,4,5,6,7,8,9,10]
for (let x = 1; x < array.length; x++) {
const element = array[x];
console.log("ini adalah angka", array)
    console.log("ini adalah angka", array[x])
}

let x = 0;
while (x < array.length) {
    console.log("ini adalah angka", array[x])
    x++
}

let nama = "saifullah fikri"
let jenis_kelamin = "L"
let umur = 25
let tinggi_badan = 172.5
const adik = 1
let aplikasi = ["vscode", "telegram", "chromium"]
let manusia = true
let peserta_pre_course = {
    nama : "fikri",
    alamat : "wonogiri",
    jurusan : "tekkom"
}

let z = 85
if (z >= 90) {
    console.log("A")
} else if (z >= 80){
    console.log("B")
} else if (z >= 70) {
    console.log("C")
}else{
    console.log("salah memasukkan nilai")
}

switch (true) {
    case a >= 90:
        console.log("A")
        break;
    case a >= 80:
        console.log("B")
        break;
    case a >= 70:
        console.log("C")
        break;
    default:
        console.log("salah memasukkan nilai")
        break;
}

let a = 10

function coba() {
    let b = 5
    console.log("nilai a adalah", a)
    console.log("nilai b adalah", b)
}

coba()
console.log("nilai b adalah", a)