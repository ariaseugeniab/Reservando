var expect = chai.expect; 

let resto = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
let resto2 = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
let resto3 = new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]);
let resto4 = new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [4, 8, 3, 5, 7, 5, 9]);
let resto5 = new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", []);
let resto6 = new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2])

//Testeo de reservarHorario(horario)
describe('Testeo de reservarHorario(horario)', function(){
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo', function(){
        let horariosViejos = resto.horarios;
        horariosViejos.splice(2,1);
        resto.reservarHorario("18:00");
        expect(resto.horarios).to.eql(horariosViejos);
    });
    it('Cuando se reserva un horario de un restaurant, la cantidad de horarios disponibles disminuye', function(){
        let horariosRest = resto.horarios.length;
        resto.reservarHorario("15:30");
        expect(horariosRest - 1).to.eql(resto.horarios.length);
    });
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual', function(){
        let horarios = resto2.horarios;
        resto2.reservarHorario("18:30");
        expect(horarios).to.eql(resto2.horarios);
    });

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual', function(){
        let horarios = resto3.horarios;
        resto3.reservarHorario();
        expect(horarios).to.eql(resto3.horarios);
    });
})

//Testeá la función obtenerPuntuación()
describe('Testeo de la función obtenerPuntuación()', function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function(){
        // let calificaciones = [];
        let promedio = resto4.obtenerPuntuacion();
        expect(promedio).to.equal(5.9);
        expect(promedio).to.be.a('number')
    });

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function(){
        let promedio2 = resto5.obtenerPuntuacion();
        expect(promedio2).to.equal(0);
        expect(promedio2).to.be.an('number')
    });
})

//Testear la función calificar()
describe('Testeo de la función calificar()', function(){
    it('Testeo de incorporación de u    na nueva calificación en el array de calificaciones', function(){
        let calific = resto6.calificaciones;
        calific.push(5);
        resto6.calificar(5);
        expect(resto6.calificaciones).to.equal(calific);        
    });

    it('La nueva calificación debe ser mayor a cero', function(){
        let calific = resto6.calificaciones
        resto6.calificar(-1);
        expect(resto6.calificaciones).to.equal(calific); 
    });

    it('La nueva calificación debe ser menor a diez', function(){
        let calific = resto6.calificaciones
        resto6.calificar(15);
        expect(resto6.calificaciones).to.equal(calific); 
    });

    it('La nueva calificación pasada por parámetro no es un número, no se agrega al array', function(){
        let calific = resto6.calificaciones
        resto6.calificar("5");
        expect(resto6.calificaciones).to.equal(calific); 
    });

    it('Sin ninguna calificación pasada por parámetro, el array se mantiene igual', function(){
        let calific = resto6.calificaciones
        resto6.calificar();
        expect(resto6.calificaciones).to.equal(calific); 
    });
});

let listadoDeRest = [
    new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
    new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
    new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
    new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
    new Restaurant(11, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),
    new Restaurant(12, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7]),
    new Restaurant(13, "The Counter", "Hamburguesa", "Nueva York", ["17:00", "18:00", "19:30"], "../img/hamburguesa2.jpg", [6, 9, 7, 6, 7, ]),
    new Restaurant(14, "TGood Seed Salads & Market", "Ensalada", "Nueva York", ["17:00", "19:00", "22:30"], "../img/ensalada4.jpg", [8, 8, 8, 8, 5, 7]),
    new Restaurant(15, "Carmine's", "Pasta", "Nueva York", ["14:30", "16:30", "19:00"], "../img/pasta1.jpg", [9, 8, 5, 5, 9]),
]

let list = new Listado(listadoDeRest)

//Testeo de la función buscarRestaurante(id)
describe('Testeo de la función buscarRestaurante(id)', function(){
    it('Bucar restaurante correctamente con un id de parámetro', function(){
       let result = list.buscarRestaurante(7);
       let rest7 = new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]);
       expect(result).to.eql(rest7);
       expect(result).to.be.a('object')
    });

    it('Buscar restaurante con id no numérico, debe retornar "No se ha encontrado ningún restaurant"', function(){
        let err = "No se ha encontrado ningún restaurant";
        let result = list.buscarRestaurante("3");
        expect(result).to.equal(err);
        expect(result).to.be.a('String');
    });

    it('Buscar restaurante sin id debe retornar "No se ha encontrado ningún restaurant"', function(){
        let err = "No se ha encontrado ningún restaurant";
        let result = list.buscarRestaurante();
        expect(result).to.equal(err);
        expect(result).to.be.a('String');
    });
    it('Buscar restaurante con id que no existe, retornar "No se ha encontrado ningún restaurant"', function(){
        let err = "No se ha encontrado ningún restaurant";
        let result = list.buscarRestaurante(25);
        expect(result).to.equal(err);
        expect(result).to.be.a('String');
    });
});

//Testeá la función obtenerRestaurantes()
describe('Testeo de la función obtenerRestaurantes()', function(){
    it('Obtener ningun restaurante con ningún filtro aplicado por parámetro', function(){
       let result = list.obtenerRestaurantes();
       expect(result.length).to.equal(0);
       expect(result).to.be.an('array');
    });

    it('Obtener restaurante aplicando filtro de rubro', function(){
        let result = list.obtenerRestaurantes("Desayuno",null, null);
        expect(result.length).to.equal(2);
        expect(result).to.be.an('array');
    });

    it('Obtener restaurante aplicando filtro de ciudad', function(){
        let result = list.obtenerRestaurantes(null,"París", null);
        expect(result.length).to.equal(3);
        expect(result).to.be.an('array');
    });

    it('Obtener restaurante aplicando filtro de horario', function(){
        let result = list.obtenerRestaurantes(null, null, "13:00");
        expect(result.length).to.equal(2);
        expect(result).to.be.an('array');
    });

    it('Obtener restaurante aplicando los tres filtros juntos', function(){
        let result = list.obtenerRestaurantes("Pasta","Roma", "18:00");
        expect(result.length).to.equal(1);
        expect(result).to.be.an('array');
    });
});

//TESTEO de objeto Reserva
var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");


describe('Testeo de funcion de CalcularPrecioBase()', function(){
    it('Testeo de correcto cálculo del precio base con reserva1', function(){
       let result = reserva1.calcularPrecioBase();
       expect(result).to.equal(2800);
       expect(result).to.be.a('number');
    });

    it('Testeo de calcular precio con reserva2', function(){
        let result = reserva2.calcularPrecioBase();
        expect(result).to.equal(300);
        expect(result).to.be.a('number');
    });
});


describe('Testeo de funcion de CalcularPrecioFinal()', function(){
    it('Testeo de correcto cálculo del precio final con reserva1', function(){
       let result = reserva1.calcularPrecioTotal();
       expect(result).to.equal(2450);
       expect(result).to.be.a('number');
    });

    it('Testeo de cálculo del precio final con reserva2', function(){
        let result = reserva2.calcularPrecioTotal();
        expect(result).to.equal(100);
        expect(result).to.be.a('number');
    });
});


// describe('', function(){
//     it('', function(){
       
//     });

//     it('', function(){

//     });

//     it('', function(){

//     });
// });


