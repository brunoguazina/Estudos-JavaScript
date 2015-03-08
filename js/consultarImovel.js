//
$.getJSON("imovel/0001.txt", function(dados) {
               
    $("#tipo").prepend(dados.tipo);
    $("#bairro").append(dados.bairro);
    $("#localidade").append(dados.localidade, " - " , dados.uf);
    tratarImagemPrincipal(dados.id);
    tratarValorDoImovel(dados.valor);
    $("p", "#descricao").append(dados.descricao);
	
});

function tratarImagemPrincipal(idDoImovel) {
	$("img, #imagemPrincipal").append("<img src='img/"+idDoImovel+"/principal.jpg' width='100%'>");
}

function tratarValorDoImovel(valorDoImovel) {
	$("#valor").html(valorDoImovel + "00");
	
	$('#valor').priceFormat({
    	prefix: 'R$ ',
    	centsSeparator: ',',
    	thousandsSeparator: '.'
	});
}
