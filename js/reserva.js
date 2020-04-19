var Reserva = function(horario, cantidadDePersonas, precioPorPersona, CodDescuento){
    this.horario = horario,
    this.cantidadDePersonas = cantidadDePersonas,
    this.precioPorPersona = precioPorPersona,
    this.CodDescuento = CodDescuento
}

Reserva.prototype.calcularPrecioBase = function(){
    return this.cantidadDePersonas * this.precioPorPersona;
}

Reserva.prototype.calcularPrecioTotal = function(){

    let precioFinal = this.calcularPrecioBase() + this.calcularAdicionales() - this.calcularDescuento();
    return precioFinal;
}

Reserva.prototype.calcularDescuento = function(){
    let precioBase = this.calcularPrecioBase();
    let descuentoGrupos = 0; 
    let descuentoCodigo = 0;

    if(this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6){
        descuentoGrupos = precioBase * 0.05;

    } else if(this.cantidadDePersonas == 7 || this.cantidadDePersonas == 8){
        descuentoGrupos = precioBase * 0.10;

    } else if(this.cantidadDePersonas > 8){
        descuentoGrupos = precioBase * 0.15;
    }

    // switch(this.CodDescuento){
    //     case "DES15":    
    //     descuentoCodigo = precioBase * 0.15;
    //     case "DES200":
    //     descuentoCodigo = precioBase * 0.200;
    //     case "DES1":
    //     descuentoCodigo = precioBase - this.precioPorPersona;
    //     default: 
    //     descuentoCodigo = 0
    // }
    if(this.CodDescuento == "DES15"){
        descuentoCodigo = precioBase * 0.15;
    }
    else if(this.CodDescuento == "DES200"){
        descuentoCodigo = 200;
    }
    else if(this.CodDescuento == "DES1"){
        descuentoCodigo = this.precioPorPersona;
    }
    else{
        descuentoCodigo = 0;
    }
    
    return descuentoGrupos += descuentoCodigo; 
}

Reserva.prototype.calcularAdicionales = function(){
    let precioBase = this.calcularPrecioBase();
    let horaReserva = this.horario.getHours();
    let diaReserva = this.horario.getDay();
    let adicionalHorario = 0;
    let adicionalDiaSemana = 0;

    if(horaReserva >= 13 && horaReserva <= 14 || horaReserva >= 20 && horaReserva <= 21 ){
        adicionalHorario = precioBase* 0.05;
    }

    if(diaReserva == 5 || diaReserva == 6 || diaReserva == 0){
        adicionalDiaSemana = precioBase* 0.10;
    }

    return adicionalHorario += adicionalDiaSemana; 
}