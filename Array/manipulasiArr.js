// Manipulasi Array

//1. Menambahkan isi array
// var arr = [];
// arr [0] = "Faiz";
// arr [1] = "Muhammad";
// arr [2] = "Ilham";
// arr [3] = "Hariry";
// console.log(arr);

//2. Menghapus isi array
// var arr = ["Faiz", "Muhammad", "Ilham", "Hariry"];
// arr[3] = undefined;
// console.log(arr);

//3. Menampilkan array
// var arr = ["Faiz", "Muhammad", "Ilham", "Struick"];
//     for(i = 0; i < arr.length; i++){
//         console.log('Mahasiswa ke-' + (i+1) + ' :', arr[i]);
//     }

// Method pada array

//1. Join
// console.log(arr.join(' '));

//2. Push and pop
// Pada elemen terakhir
// // arr.push('Lionel');
// arr.pop();

//3. Unshift dan shift
// Pada elemen awal
// arr.unshift('Nama saya : ');
// arr.shift();
// console.log(arr.join(' '));

// 4. Splice
// splice(indexAwal, mauDiHapusBerapa, elemenBaru);
// arr.splice(1, 2, 'Ganteng', 'struick');
// console.log(arr.join(' '));

// 5. Slice
// slice(awal,akhir);
// index yang dihapus bisa tengah dengan atau belakang
// var arr = ['Faiz', ' Muhammad', ' Ilham', 'Lionel', 'Sensai'];
// var arr2 = arr.slice(0, 5);
// console.log(arr2.join(' '));

// 6. ForEach
// var angka = [1,2,3,4,5,6,7,8];

// var nama = ['Faiz', 'Muhammad', 'Ilham', 'Hariry'];

// var cetak = function(e){
//     console.log(e);
// }
// angka.forEach(function(e){
//     console.log(e);
// });

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e)
// });

// 7. Map
// Mengembalikan elemen array
// var angka = [2,6,8,4,3,5];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' | '));

// 8. Sort
// Pengurutan angka
// var angka = [2,10,22,6,8,4,3,5];
// console.log('Sebelum');
// console.log(angka.join(' | '));
// angka.sort(function(a,b){
//     return a - b;
// });
// console.log('Sesudah');
// console.log(angka.join(' | '));

// 9. Filter and Find
// Filter mencari nilai array dan mengembalikannya dalam bentuk array banyak nilai

    // var angka = [2,10,22,6,8,4,3,5];
    // var angka2 = angka.filter(function(e){
    //     return e > 5;
    // });
    // console.log(angka2.join(' | '));

// Find untuk mencari satu nilai array saja
    var angka = [2,6,8,3,4,5,6,7];
    var angka2 = angka.find(function(e){
        return e > 7;
    })
    console.log(angka2);
