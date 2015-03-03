
function ConsultarImovel(){
		$.getJSON("imovel/casa.json", function(dados) {
	                   
	        $("#tipo").html(dados.tipo);
	        $("#valor").html(dados.valor);
	        $("#bairro").html(dados.bairro);
	        $("#cidade").html(dados.localidade);
	                    
	});
};

ConsultarImovel();