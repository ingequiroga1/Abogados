$(function() {
   setCookie("username","");
  //alert(document.cookie);
});


function logear() {
     if ($('#user').val() == "") {
            var status = "<a class=\"close\" data-dismiss=\"alert\">×</a><strong>¡Error!</strong>"
                + " Favor de llenar todos los campos.";
            $('#divstatus').html("<div>" + status + "</div>");
            return;
        }

     debugger;
        var pageUrl = "clases/conexion.aspx/validarusuario"; 
        var user = $('#user').val();
        var pass = $('#pass').val();

    var parameter = { "user": user, "pass": pass }

       $.ajax({
            type: 'POST',
            url: pageUrl,
            data: JSON.stringify(parameter),
            contentType: 'application/json; charset= utf-8',
            dataType: 'json',
            success: function(data){
                //document.cookie = "";
                usuarioaut(data,user);       
                //setCookie("Rol","1");
                //window.location.replace("index.html");
                //$('body').load("index.html");

            },
            error: function(data, success, error){
                alert("Error : "+ error);
            }

        });
         return false;  
        

       
}

function usuarioaut(data,user){
    debugger;
    var res = data.d;
    if(res){
         setCookie("username",user);
         window.location.href = "index.html";
    }
    else{
        var popup = document.getElementById("mypopup");
        popup.classList.toggle("show");
    }
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteAllCookies() {
    debugger;
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}





