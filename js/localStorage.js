

$("#salvar").on("click", function() {

	var objeto = {
		nome: $("#nome").val(),
		idade: $("#idade").val(),
		profissao: $("#profissao").val(),
	};
	
	console.log(objeto.nome);
	
	var nomeDaPersona = $("#nome").val();

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