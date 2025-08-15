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

var arr = ['Faiz', ' Muhammad', ' Ilham'];
//1. Join
// console.log(arr.join(' '));

//2. Push and pop
// Pada elemen terakhir
// // arr.push('Lionel');
// arr.pop();

//3. Unshift dan shift
// Pada elemen awal
arr.unshift('Nama saya : ');
arr.shift();
console.log(arr.join(' '));