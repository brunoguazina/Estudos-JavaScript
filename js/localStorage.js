


var pessoas = "";

$(window).load(function() {

	if (localStorage.getItem("Pessoas") == null) {
		localStorage.setItem( "Pessoas" ,JSON.stringify([]));
	}
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
	location.reload();
}
 

function listar(pessoas) {
	if(pessoas == ""){
		$("#listaDePessoas").append("<li> Você não possui pessoas cadastradas </li>");
	}
	pessoas.forEach(function(pessoa) {
    	$("#listaDePessoas").append("<li>" + "Nome: " + pessoa.nome + "</li>");
  	});
}


