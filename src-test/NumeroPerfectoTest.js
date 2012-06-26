NumeroPerfectoTest = TestCase("NumeroPerfectoTest");

NumeroPerfectoTest.prototype.testDevuelveTrueSiEsPerfectoDe6 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(true, perfecto.esPerfecto(6));
};

NumeroPerfectoTest.prototype.testDevuelveFalseSiEsPerfectoDe8 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(false, perfecto.esPerfecto(8));
};

NumeroPerfectoTest.prototype.testDevuelveNullSiNumeroEs1 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(null, perfecto.devuelveMayor(1));
};

NumeroPerfectoTest.prototype.testDevuelveNullSiNumeroEs6 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(null, perfecto.devuelveMayor(6));
};

NumeroPerfectoTest.prototype.testDevuelve6SiNumeroEs8 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(6, perfecto.devuelveMayor(8));
};

NumeroPerfectoTest.prototype.testDevuelve6SiNumeroEs10 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(6, perfecto.devuelveMayor(10));
};

NumeroPerfectoTest.prototype.testDevuelve28SiNumeroEs30 = function(){
	var perfecto = new miapp.NumeroPerfecto();

	assertEquals(28, perfecto.devuelveMayor(30));
};



