//declare variabel dan constant
let nama = "fikri"; //string
let jenis_kelamin = "L"; //char
let pinter = true; //boolean
let umur = 25; //int
let tinggi_badan = 172.5; //float
const phi = 3.14; //conts
// Array = ['a','b','c']; 
let angka = [1,2,3,4,5]; //array

//if else
var b = 1;
if (b = 1) {
    console.log("hasil sama dengan satu");
} else {
    console.log("hasil tidak sama dengan satu");
};

//else if
let a = '5';
if (a >= 1 && a < 5) {
    console.log("mulai");
} else if (a === 5) {
    console.log("selesai");
} else {
    console.log("angka tidak sesuai");
};

let buah = "pisang";

//switch case
switch (buah) {
    case "pisang":
        console.log("warna kuning");
        break;
    case "jeruk":
        console.log("wanra oren");
        break;
    case "apel":
        console.log("warna merah");
        break;
    default:
        console.log("masukkan nama buah");
        break;
};

//for
for (let c = 1; c <= 3; c++) {
    console.log(c);
};

let d = 0;
while (d < 4) {
    console.log(d);
    d++;
};

//global and local scope
let x = 10;

function test() {
    let y = 5;
    console.log("nilai x di dalam fungsi adalah = ", x);
    console.log("nilai y di dalam fungsi adalah = ", y);
};

test();
console.log("nilai x di luar fungsi adalah = ", x);

// boolean
let lari = true;
let jalan =  false;

if (lari) {
    console.log("capek")
}
if (jalan) {
    console.log("sehat")
}

let lapangan = false;
if (lari && !lapangan) {
    console.log("istirahat")
}

//string
console.log(nama)

//char
console.log(jenis_kelamin)

//integer
console.log(umur)

//float
console.log(phi)
let diameter = 10
let keliling_lingkaran = phi * diameter
console.log("keliling lingkaran adalah =", keliling_lingkaran)

//float
let harga_barang = 20000;
let diskon = 0.1;
let setelah_diskon = harga_barang - (harga_barang*diskon);

console.log("harga awal =", harga_barang)
console.log("besar diskon =", diskon)
console.log("harga setelah di diskon =",setelah_diskon)

//double
let jari_jari = 100;
let phi_double = 3.14159265358979;
let luas_lingkaran = phi_double * jari_jari * jari_jari;

console.log(luas_lingkaran)

//array
let kota =["solo","jogja","wonogiri"]
console.log(kota[1])

//object
let peserta = {
    nama : "saiful",
    jenis_kelamin : "laki-laki",
    alamat :"wonogiri"
}

console.log(peserta.alamat)

//function without parameter
function hewan() {
    console.log("kucing")
}

hewan()

//function with parameter
function hewan1(darat){
    console.log(`hewan darat =, ${darat}`);
}

hewan1("kucing")
hewan1("anjing")

//function with return
function bulan (nomor){
    if (nomor === 1) {
        return "january"
    } else if (nomor === 2) {
        return "february"
    } else if (nomor === 3){
        return "march"
    } else{
        return "salah"
    }
}

console.log(bulan(3))

//function void (undefined)
//tanpa return
function msg(message){
    console.log(message)
}
msg("Hello World!")

//dengan return
function logerror(errormessage){
    console.error(errormessage)
    return;
}
logerror("ada error");

