$(function() {

debugger;
var user=getCookie("username");
document.getElementById("usuario").innerHTML=user;

if (!user) {
   window.location.replace("login.html");
}

switch(user){
    case "rchessani": 
        $('#main-container').css("display","block");
        var dkpis = '<option>% Impuestos Atrasados vs Impuestos Totales</option><option>% Variación vs Dictamen de Carga Social</option><option>4 Proyectos Trascendentales</option><option>Disponibilidad de SAP > 99.%</option><option>Entrega KPIs Trimestrales < 15 días</option><option>Renovación Líneas de Crédito Bancarias</option>'
        break;
     case "grabago": 
        $('#main-container').css("display","block");
        var dkpis = '<option>Evaluación Personal</option><option>Salud Organizacional</option><option>Objetivos AGH (UOP)</option><option>% KPIs del Equipo</option><option>Generación de Efectivo</option><option>Incremento Anual de AGH</option><option>Facturación por Persona</option><option>Ventas Netas vs PPTO Nuevos Clientes</option><option>Ventas Netas vs PPTO Nuevas Tecn.</option><option>Ventas Netas vs PPTO Ventas Cruzadas</option><option>Ventas Transmedia vs PPTO</option><option>Ventas Netas vs PPTO Servicios Añadidos</option><option>Ventas de Nuevos Negocios VS PPTO</option><option>Porcentaje de Cartera en Convenio</option><option>Inventario PT > 60 días / Ventas</option><option>Satisfacción del Cliente</option><option>Fletes Externos / Venta</option><option>Fletes Internos / Venta</option><option>Inventario Teórico vs Físico</option><option>Anulaciones de Facturas</option><option>Inventario de MP  > 30 días</option><option>Accidentes IMSS </option><option>Contratación Efectiva < 90 días</option><option>Rotación de Personal</option><option>Asistencia</option><option>Capacitación</option><option>Paros por Avería</option><option>Control de Gasto</option><option>NC Rechazos</option><option>Sistema de Gestión de Calidad</option><option>OF Reposición</option><option>Días Proveedores</option><option>Ahorro en Gasto vs PPTO</option><option>Ahorros MP Estratégica</option><option>Competitivad Directivo y Gerencial</option>'
        break;
     case "acastaneda": 
        $('#main-container').css("display","block");
        var dkpis = '<option>Generación de Efectivo</option><option>Porcentaje de Cartera en Convenio</option><option>Inventario Teórico vs Físico</option>'
        break;

     case "hquiroga": 
        $('#main-container').css("display","block");
        var dkpis = '<option>% Impuestos Atrasados vs Impuestos Totales</option><option>% Variación vs Dictamen de Carga Social</option><option>4 Proyectos Trascendentales</option><option>Disponibilidad de SAP > 99.%</option><option>Entrega KPIs Trimestrales < 15 días</option><option>Renovación Líneas de Crédito Bancarias</option><option>Evaluación Personal</option><option>Salud Organizacional</option><option>Objetivos AGH (UOP)</option><option>% KPIs del Equipo</option><option>Generación de Efectivo</option><option>Incremento Anual de AGH</option><option>Facturación por Persona</option><option>Ventas Netas vs PPTO Nuevos Clientes</option><option>Ventas Netas vs PPTO Nuevas Tecn.</option><option>Ventas Netas vs PPTO Ventas Cruzadas</option><option>Ventas Transmedia vs PPTO</option><option>Ventas Netas vs PPTO Servicios Añadidos</option><option>Ventas de Nuevos Negocios VS PPTO</option><option>Porcentaje de Cartera en Convenio</option><option>Inventario PT > 60 días / Ventas</option><option>Satisfacción del Cliente</option><option>Fletes Externos / Venta</option><option>Fletes Internos / Venta</option><option>Inventario Teórico vs Físico</option><option>Anulaciones de Facturas</option><option>Inventario de MP  > 30 días</option><option>Accidentes IMSS </option><option>Contratación Efectiva < 90 días</option><option>Rotación de Personal</option><option>Asistencia</option><option>Capacitación</option><option>Paros por Avería</option><option>Control de Gasto</option><option>NC Rechazos</option><option>Sistema de Gestión de Calidad</option><option>OF Reposición</option><option>Días Proveedores</option><option>Ahorro en Gasto vs PPTO</option><option>Ahorros MP Estratégica</option><option>Competitivad Directivo y Gerencial</option><option>Generación de Efectivo</option><option>Porcentaje de Cartera en Convenio</option><option>Inventario Teórico vs Físico</option>'
        break;
     default:
        $('#divnoaut').css("display","block");
}

document.getElementById('kpis').innerHTML = dkpis;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = yyyy+mm+dd;

$('#fecha').html("Fecha: "+dd+'/'+mm+'/'+yyyy);

$('#select1').change(function() {
    var v = $(this).val()
    //var dcampo = '<select id="select2"><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option>2022</option></select>'
    switch(v){
        case "Anual":
            var dcampo = ''
            break;    
        case "Trimestral":
            var dcampo = 'Periodo: <select class="tbw" id="select2"><option>Enero-Marzo</option><option>Abril-Junio</option><option>Julio-Septiembre</option><option>Octubre-Diciembre</option></select>'
            break;
         case "Semestral":
            var dcampo = 'Periodo: <select class="tbw" id="select2"><option>Enero-Junio</option><option>Julio-Diciembre</option></select>'
            break;
    }
    $('#fval').html(dcampo);
});


$('#kpis').change(function() {
    var k = $(this).val()
    //var dcampo = '<select id="select2"><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option>2022</option></select>'
    switch(k){
        case "Evaluación Personal":
            var dkcampo = '<option>CEO</option><option>CCO y COO</option><option>Director Planta Purísima</option><option>Director MKT y NN</option><option>Gte Planta</option><option>Gte de Ventas</option><option>Gte de Logística</option><option>Ejecutivo Abridor</option><option>Gte Oficina Técnica</option><option>Gte Desarrollo Humano</option><option>Gte de Mantenimiento</option><option>Gte Servicio Cliente </option><option>Gte Calidad</option><option>Gte Producción</option><option>Gte Gestión e Ingeniería</option><option>Gte Talento y Des Org</option><option>Gte Contraloría</option><option>Gte TI</option>'
            break;    
        case "Salud Organizacional":
            var dkcampo = '<option>CEO</option><option>Director Planta Purísima</option><option>Gte Planta</option><option>Gte de Logística</option><option>Gte Oficina Técnica</option><option>Gte Desarrollo Humano</option><option>Gte de Mantenimiento</option><option>Gte Servicio Cliente </option><option>Gte Calidad</option><option>Gte Producción</option><option>Gte Talento y Des Org</option><option>Gte Contraloría</option><option>Gte TI</option>'
            break;
         case "Generación de Efectivo":
            var dkcampo = '<option>CEO</option>'
            break;
        case "Ventas Netas vs PPTO Servicios Añadidos":
            var dkcampo = '<option>Gte de Ventas</option><option>Ejecutivo de Ventas</option><option>Ejecutivo Abridor</option>'
            break;
        case "Porcentaje de Cartera en Convenio":
            var dkcampo = '<option>Director MKT y NN</option>'
            break;
        case "Satisfacción del Cliente":
            var dkcampo = '<option>Gte de Ventas</option><option>Ejecutivo de Ventas</option>'
            break;
        case "Inventario Teórico vs Físico":
            var dkcampo = '<option>Gte de Logística</option>'
            break;
        case "Accidentes IMSS":
            var dkcampo = ' <option>Gte Desarrollo Humano</option>'
            break;
        case "Asistencia":
            var dkcampo = ' <option>Gte Desarrollo Humano</option>'
            break;
        case "Capacitación":
            var dkcampo = ' <option>Gte Desarrollo Humano</option>'
            break;
        case "Sistema de Gestión de Calidad":
            var dkcampo = '<option>Gte Calidad</option>'
            break;
        case "Competitivad Directivo y Gerencial":
            var dkcampo = '<option>Gte Talento y Des Org</option>'
            break;
        case "% Impuestos Atrasados vs Impuestos Totales":
            var dkcampo = '<option>Gte Contraloría</option>'
            break;
        case "% Variación vs Dictamen de Carga Social":
            var dkcampo = '<option>Gte Contraloría</option>'
            break;
        case "4 Proyectos Trascendentales":
            var dkcampo = '<option>Gte TI</option>'
            break;
        case "Disponibilidad de SAP > 99.%":
            var dkcampo = '<option>Gte TI</option>'
            break;
        case "Entrega KPIs Trimestrales < 15 días":
            var dkcampo = '<option>Gte TI</option>'
            break;
        case "Renovación Líneas de Crédito Bancarias":
            var dkcampo = '<option>Gte TI</option>'
            break;

    }
    document.getElementById("selectdpto").innerHTML = dkcampo;
});



    $('#btenviar').on("click", function Guardar() {
        if ($('#calif').val() == "") {
            var status = "<a class=\"close\" data-dismiss=\"alert\">×</a><strong>¡Error!</strong>"
                + " Favor de llenar todos los campos.";
            $('#divstatus').html("<div>" + status + "</div>");
            return;
        }
        debugger;
        var pageUrl = "clases/conexion.aspx/Guardar"; 
        var Fcaptura = today;
        var tipo = $('#select1').val();
        var anio = $('#selectanio').val();
        var feval = anio;
        var depto = $('#selectdpto').val();

        if(tipo != "Anual"){
           feval = $('#select2').val();
        }
        var vkpi = $('#kpis').val();
        var calif = $('#calif').val();

        var parameter = { "fcaptura": Fcaptura, "tipo": tipo, "anio": anio, "fvalor": feval,"nomkpi": vkpi,"depto": depto, "calif": calif, "usuario": user }

        $.ajax({
            type: 'POST',
            url: pageUrl,
            data: JSON.stringify(parameter),
            contentType: 'application/json; charset= utf-8',
            dataType: 'json',
            success: function(data){
                succguardar();

            },
            error: function(data, success, error){
                alert("Error : "+ error);
            }

        });
         return false;  
        


    });
function succguardar(){
   alert("Registro insertado"); 
   document.getElementById("calif").value = "";
   
}
   

});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            
        }
    }
    return "";
}

