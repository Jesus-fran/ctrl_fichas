function formatDate() {
    var d = new Date();
    var hh = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
        h = hh - 12;
        dd = "PM";
    }
    if (h == 0) {
        h = 12;
    }
    m = m < 10 ? "0" + m : m;

    s = s < 10 ? "0" + s : s;

    /* if you want 2 digit hours:
    h = h<10?"0"+h:h; */

    var pattern = new RegExp(hh + ":" + m + ":" + s);

    var replacement = h + ":" + m;
    // if you want to add seconds
    replacement += ":" + s;
    replacement += " " + dd;

    return replacement;
}


function subir_data() {

    var user = $('#user').val()
    var pass = $('#pass').val();

    $.ajax({
        url: 'http://143.244.172.240/ctrl_fichas/php/registro_datos.php',
        data: { user: user, pass: pass },
        type: 'POST',
        dataType: 'text',
        success: function(data) {
            console.log(data);

        },
        error: function(xhr, status) {
            console.log('Error: ' + xhr.status);

        },
    });

}