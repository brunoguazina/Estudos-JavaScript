

$("#salvar").on("click", function() {

	var nomeDaPersona = $("#nome").val();
	var idadeDaPersona = $("#idade").val();
	var profissaoDaPersona = $("#profissao").val();
	
	var objeto = {
		nome: nomeDaPersona,
		idade: idadeDaPersona,
		profissao: profissaoDaPersona,
	};

	salvar(objeto, nomeDaPersona);

});


function salvar(cliente, nomeDaPersona) {
	
	localStorage.setItem( nomeDaPersona ,JSON.stringify(cliente));
	listar(nomeDaPersona);	
}

function listar(nome) {

	var persona = JSON.parse(localStorage.getItem(nome));
	$(".nome").empty().append(persona.nome);
	$(".idade").empty().append(persona.idade);
	$(".profissao").empty().append(persona.profissao);

}