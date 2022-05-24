/**
 * convercion de unidades, metros, yardas, pies, y pulgadas
 * @method cambiar unidades
 * @return
 * @para    id de los imputs de metro, yardas, pies o pulgadas
 * @para -  el valr de lso imouts de metros yardas, pies , o pulgadas
 */
function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido en " +id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_pulgada.value = "";
    }else if (id =="metro") {
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;
   }else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.833333;
        document.lasUnidades.unid_yarda.value = valor * 0.027778 ;
    }else if (id=="yarda "){
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor *  3;
        document.lasUnidades.unid_metro.value = valor*0.9144 ;
    }else if (id="pie"){
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_yarda.value = valor *  0.3333;
        document.lasUnidades.unid_metro.value = valor* 0.3048;

    }
}

