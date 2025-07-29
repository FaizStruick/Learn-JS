function volumeKubus(a,b) {

    var volumeA;
    var volumeB;
    var total;

        volumeA = a * a * a;
        volumeB = b * b * b;
        total = volumeA + volumeB;
        
        return(total);
    }
    var lanjut = true;
    while ( lanjut ) {
    var a = parseInt(prompt('Masukan nilai a : '));
    var b = parseInt(prompt('Masukan nilai b : '));

    alert(volumeKubus(a,b));

    
    lanjut = confirm('Apakah mau lanjut program ini?');
}

alert('Terima kasih sudah pakai program ini.');