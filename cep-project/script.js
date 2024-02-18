function getDataCep() {
  let CEP = $(".form-control").value;

  if (!CEP) {
    $("#city").innerText = ``
    $("#address").innerText = ``
    return;
  } else if (CEP.length < 9) {
    $(".alert").innerHTML = "<b>ERRO:</b> O Campo de CEP precisa ter no minímo 9 caracteres"
    $(".alert").style = "display: block"
    return;
  } 

  CEP = CEP.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
  .then(({data}) => {

    if (data.erro) {
      $(".alert").innerHTML = "<b>ERRO:</b> O CEP não existe :("
      $(".alert").style = "display: block"
      return;
    }

    const complemento = data.complemento ? `- ${data.complemento}` : ""

    $("#city").innerText = `${data.localidade} - ${data.uf}`
    $("#address").innerText = `${data.logradouro}, ${data.bairro} ${complemento}`

  })
}

const handleZipCode = (event) => {
  let input = event.target
  input.value = zipCodeMask(input.value)
}

const zipCodeMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{5})(\d)/,'$1-$2')
  return value
}

function $(q) {
  return document.querySelector(q);
}
