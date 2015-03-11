



$("#salvar").on("click", function() {

	var objeto = {
		nome: $("#nome").val(),
		idade: $("#idade").val(),
		profissao: $("#profissao").val(),
	};

	salvar(objeto);

});

function salvar(pessoa) {
	var pessoas = JSON.parse(localStorage.getItem("Pessoas"));
	pessoas.push(pessoa);
	localStorage.setItem( "Pessoas" ,JSON.stringify(pessoas));
	listar(pessoas);
}

function listar(key) {
	console.log(key);
}



