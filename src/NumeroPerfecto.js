miapp = {};

miapp.NumeroPerfecto = function(){};

miapp.NumeroPerfecto.prototype.getDivisores = function(number){
	var divisores = Array();

	for(i = 1; i < number - 1; i++){
		if(number % i == 0)
			divisores.push(i);
	}

	return divisores;
};

miapp.NumeroPerfecto.prototype.esPerfecto = function(number){
	var sumaDivisores = this.getSumaDivisores(number);

	if(number == sumaDivisores){
		return true;
	}
	
	return false;
};

miapp.NumeroPerfecto.prototype.getSumaDivisores = function(number){
	var divisores = this.getDivisores(number);

	var sumaDivisores = 0;

	for(i = 0; i < divisores.length; i++){
		sumaDivisores += divisores[i];
	}

	return sumaDivisores;
};

miapp.NumeroPerfecto.prototype.devuelveMayor = function(number){
	for(var i = number - 1; i > 0; i--){
		if(this.esPerfecto(i)){
			return i;
		}
	}

	return null;
};
