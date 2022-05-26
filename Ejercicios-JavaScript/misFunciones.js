/**
 * convercion de unidades, metros, yardas, pies, y pulgadas
 * @method cambiarUnidades
 * @param   {string} id- El id de los imputs de metros, yardas, pies, pulgadas
 * @param {number} valor valor de los imputs de metros yardas, pies ,o pulgadas
 * @return
 */
function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en " + id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_pulgada.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.833333;
        document.lasUnidades.unid_yarda.value = valor * 0.027778;
    } else if (id == "yarda ") {
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
        document.lasUnidades.unid_metro.value = valor * 0.9144;
    } else if (id == "pie") {
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_yarda.value = valor * 0.3333;
        document.lasUnidades.unid_metro.value = valor * 0.3048;

    }
}

function convertirGR(id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;

    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrarOcultar(valorMo){
    if(valorMo=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block'
    }else if (valorMo=="val_ocultar"){
        document.getElementById("divMO").style.display= 'none'

    }

}
function calcularsuma (){
    var num1, num2;

    num1= Number( document.getElementsByName("sum_num1") [0].value);
    num2= Number(document.getElementsByName("sum_num2") [0].value);
    document.getElementsByName("sum_total")[0].value= num1+num2;
}

function calcularresta(){
    var num1, num2;
    num1= Number( document.getElementsByName("res_num1") [0].value);
    num2= Number(document.getElementsByName("res_num2") [0].value);
    document.getElementsByName("res_total")[0].value= num1-num2;

}
function calcularmultiplicacion(){
    var num1, num2;
    num1= Number( document.getElementsByName("mul_num1") [0].value);
    num2= Number(document.getElementsByName("mul_num2") [0].value);
    document.getElementsByName("mul_total")[0].value= num1*num2;

}
function calculardivision(){
    var num1, num2;
    num1= Number( document.getElementsByName("div_num1") [0].value);
    num2= Number(document.getElementsByName("div_num2") [0].value);
    document.getElementsByName("div_total")[0].value= num1/num2;

}
function cargarweb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad ;
    window.open(urlComp) ;

}

function cargarresultados() {
    var urlComp , can, un ;

    urlComp= window.location.href.split("/")[5];

    can= urlComp.split( "#")[1];
    un= urlComp.split( "#")[2];

    document.getElementById("dist").value = can + " " + un;

}



function guardarLocalStorage () {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("unidadesLS", unidad);
    localStorage.setItem("distanciaLS", distancia);
    window.open('2_Web.html');
}

function cargarlocalStorage() {
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}

function dibujarCirCuadr(){
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   var xMax =canvas.width;
   var yMax= canvas.height;
   var margen= 5
   ctx.fillStyle= "#333899";
   ctx.fillRect (0 + margen, yMax-40- margen,   40, 40) ;


   ctx.arc (xMax/2, yMax/2, 20  ,0, 2*Math.PI );
   ctx.stroke ();
   ctx.fill();
}
