function consultaCep() {
  $(".barra-progress").show();
  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";
  console.log(url);

  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      $("#titulo-cep").html(" Informações do CEP " + cep);
      document.getElementById("logradouro").innerHTML = response.logradouro;
      document.getElementById("bairro").innerHTML = response.bairro;
      $("#complemento").html(response.complemento);
      $("#localidade").html(response.localidade);
      document.getElementById("uf").innerHTML = response.uf;
      $(".cep").show();
      $(".barra-progress").hide();
      //alert(response.cep);
    },
  });
}

$(function () {
  $(".cep").hide();
  $(".barra-progress").hide();
});
