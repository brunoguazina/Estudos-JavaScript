function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
    $("#ibge").val("");
}
            
//Quando o campo cep perde o foco.
$("#cep").blur(function() {

    //Nova variável com valor do campo "cep".
    var cep = $(this).val();

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{5}-?[0-9]{3}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $(".load").show();

                //Consulta o webservice viacep.com.br/
                $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                            $("#rua").html(dados.logradouro);
                            $("#bairro").html(dados.bairro);
                            $("#cidade").html(dados.localidade);
                            $("#uf").html(dados.uf);
                    } //end if.
                    
                    else
                    {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
        } //end if.
        else
        {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else
    {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
});