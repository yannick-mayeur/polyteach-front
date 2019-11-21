function formatDate (date) {
    var dateFormated = new Date(date);
    var year = dateFormated.getFullYear();
    var month = dateFormated.getMonth() + 1;
    var dt = dateFormated.getDate();
    var hour = dateFormated.getHours();
    var min = dateFormated.getMinutes();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    return dt + '-' + month + '-' + year;
}

function dateDiff(date1, date2){
    var diff = {}                           // Initialisation du retour
    var tmp = date2 - date1;
 
    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
 
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
 
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
     
    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;
     
    return diff;
}

function formatTimeElapsed (date) {
    var dateNow = Date.now();
    var dateFormated = new Date(date);
    var diff = dateDiff(dateFormated, dateNow);
    return diff;
}

export  { formatDate, formatTimeElapsed };