// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

//     for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//         if ( noAngkot <= angkotBeroprasi) {
//             console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
//         } else {
//             console.log('Angkot No. ' + noAngkot + ' tidak beroprasi dengan baik.');
//         }
//     }

var jmlAngkot = 10;
var angkotBeroprasi = 6;
var angkotLembur = 8;

    for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

        if ( noAngkot <= angkotBeroprasi){
            console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
        } else if ( noAngkot == angkotLembur){
            console.log('Angkot No. ' + noAngkot + ' sedang lembur');
        } else {
            console.log('Angkot No. ' + noAngkot + ' tidak beroprasi dengan baik');
        }
    }