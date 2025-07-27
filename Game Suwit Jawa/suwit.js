var tanya = true;

while ( tanya ) {
    var p = prompt('Pilih antara ini : ( Gajah, Semut, Orang ).');

    var comp = Math.random();

    if ( comp < 0.34 ) {
        comp = 'Gajah';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }

    var hasil = '';

    if ( p == comp ) {
        hasil = 'SERI!';
    } else if ( p == 'Gajah' ) {
        hasil = ( comp == 'orang') ? 'MENANG' : 'KALAH';

    } else if ( p == 'Orang' ) {
        hasil = ( comp == 'Semut') ? 'KALAH' : 'MENANG';

    } else if ( p == 'Semut') {
        hasil = ( comp == 'Orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memilih yang tidak ada di list.';
    }

    alert('Kamu memilih ' + p + ' dan komputer memilih ' + comp +'\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('Apakah mau lanjut?');
}
alert('Terima kasih sudah bermain game ini.');