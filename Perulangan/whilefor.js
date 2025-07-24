//var ulang = true;

//while ( ulang ) {
//    console.log('Hello World!');

//    ulang = confirm('Coba lagi?');
//}

var jmlAngkot = 10;
var angkotBeroprasi = 6
var NoAngkot = 1;

while ( NoAngkot <= angkotBeroprasi ) {
    console.log('Angkot No. ' + NoAngkot + ' beroprasi dengan baik.');
    
NoAngkot++;
}
 for ( NoAngkot = angkotBeroprasi + 1; NoAngkot <= jmlAngkot; NoAngkot++){
    console.log('Angkot No. ' + NoAngkot + ' tidak beroprasi dengan baik.');
 }
