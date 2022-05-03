// Crea y agrega las filas y su contenido

function create_rows(num, user, pass, fecha, hora) {

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var td_user = document.createElement('td');
    var td_pass = document.createElement('td');
    var td_fecha = document.createElement('td');
    var td_hora = document.createElement('td');

    th.scope = "row";
    th.innerHTML = num;
    td_user.innerHTML = user;
    td_pass.innerHTML = pass;
    td_fecha.innerHTML = fecha;
    td_hora.innerHTML = hora;

    tr.appendChild(th);
    tr.appendChild(td_user);
    tr.appendChild(td_pass);
    tr.appendChild(td_fecha)
    tr.appendChild(td_hora);

    $('#table').append(tr);
}

function formatDate(date_time) {
    var d = new Date(date_time);
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


function get_data() {

    $.ajax({
        url: 'https://143.244.172.240:8001/ctrl_fichas/php/consulta_datos.php',
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            // console.log(data);



            $.each(data, function(index, value) {

                var hoy = new Date(value['fecha_hora']);
                var fecha = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getUTCFullYear();
                var hora = formatDate(value['fecha_hora']);

                create_rows(index, value['user'], value['pass'], fecha, hora);
            });
        },
        error: function(xhr, status) {
            console.log('Error: ' + xhr.status);

        },
    });


}

get_data();