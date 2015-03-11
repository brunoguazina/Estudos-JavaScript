
if (localStorage.getItem("Pessoas") == null) {
		localStorage.setItem( "Pessoas" ,JSON.stringify([]));
}

$("#salvar").on("click", function() {

	var objeto = {
		nome: $("#nome").val(),
		idade: $("#idade").val(),
		profissao: $("#profissao").val(),
	};

	salvar(objeto);

});


function salvar(pessoa, nome) {
	var pessoas = JSON.parse(localStorage.getItem("Pessoas"));
	pessoas.push(pessoa);
	localStorage.setItem( "Pessoas" ,JSON.stringify(pessoas));
	listar();
}


function listar() {
	console.log(localStorage.getItem("Pessoas"));
}



