
if (localStorage.getItem("Pessoas") == null) {
		localStorage.setItem( "Pessoas" ,JSON.stringify([]));
	}

var pessoas = "";

$(window).load(function() {

	pessoas = JSON.parse(localStorage.getItem("Pessoas"));
	listar(pessoas);
	return pessoas;
});


$("#salvar").on("click", function() {

	var pessoa = {
		nome: $("#nome").val(),
		idade: $("#idade").val(),
		profissao: $("#profissao").val(),
	};

	salvar(pessoa);
});


function salvar(pessoa) {
	
	pessoas.push(pessoa);
	localStorage.setItem( "Pessoas" ,JSON.stringify(pessoas));
}
 

function listar(pessoas) {
	
	pessoas.forEach(function(pessoa) {
    	$("#listaDePessoas").append("<li>" + "Nome: " + pessoa.nome + "</li>");
  	});
}


