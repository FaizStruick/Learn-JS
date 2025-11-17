var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {

    // Jika angkot kosong
    if (penumpang.length == 0){
        // Menambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Mengembalikan dan keluar
        return penumpang;
    } else {
        // Telurusuri seluruh kursi awal
        for ( var i = 0; i < penumpang.length; i++){
            // Jika ada kursi kosong
            if ( penumpang[i] == undefined){
                // Tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
                // Kembalikan isi array dan keluar dari function
                return penumpang;

                // Jika ada nama penumpang yang sama
            } else if (penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' Sudah di dalam angkot!');
                // kembalikan isi array dan keluar dari function
                return penumpang;

                // Jika seluruh kursi sudah terisi
            } else if ( i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}
var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0){
        console.log('Angkot masih kosong!');
    } else {
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
            } else if(i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada dalam angkot.');
            }
        }
    }
    return penumpang;
}
