var angka = prompt('Masukan Angka : ');

if ( angka % 2 == 0 ) {
    alert(angka + ' adalah angka GENAP');
} else if ( angka % 3 == 0 ) {
    alert(angka + ' adalah angka GANJIL');
} else {
    alert( 'Yang anda masukan tidak termasuk angka GENAP atau GANJIL');
}