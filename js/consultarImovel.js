//
function ConsultarImovel(){
	$.getJSON("imovel/0001.txt", function(dados) {
	               
	    $("#tipo").prepend(dados.tipo);
	    $("#bairro").append(dados.bairro);
	    $("#cidade").append(dados.localidade);
	    tratarImagemPrincipal(dados.id);
	    tratarValorDoImovel(dados.valor);
		
	});
};

ConsultarImovel();

function tratarImagemPrincipal(idDoImovel) {
	$("img, #imagemPrincipal").append("<img src='img/"+idDoImovel+"/principal.jpg' width='100%'>")
}

function tratarValorDoImovel(valorDoImovel) {
	//TODO: tratar o valor do imovel
	var valorDoImovelTratado = valorDoImovel;
	$("#valor").html("R$ " + valorDoImovelTratado + ",00");
}