var item = prompt('Pilih item yang ingin anda beli : \n (cnth : nasi, telor, ayam, hamburger, sushi');

    switch ( item ) {
        case 'nasi' :
            alert('Anda memilih makanan sehat NASI.');
            break;
        case 'telor' :
            alert('Anda memilih makanan sehat TELOR.');
            break;
        case 'ayam' :
            alert('Anda memilih makanan sehat AYAM.');
            break;
        case 'hamburger' :
            alert('Anda memilih makanan tidak sehat HAMBURGER.');
            break;
        case 'sushi' :
            alert('Anda memilih makanan tidak sehat SUSHI.');
            break;
        default:
            alert('Anda memilih makanan yang tidak ada dimenu.');
            break;
    }