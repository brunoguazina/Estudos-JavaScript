

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
}


function listar() {
	
	var obj = JSON.parse(localStorage.getItem("Pessoas"));
    
	obj.forEach(function(item){
    	console.log("nome:" + item.nome);
    	console.log("idade:" + item.idade);
  	});

}





