function pesquisa_produto() {
  let inputPesquisa = document.getElementById("barra-pesquisa").value;
  inputPesquisa = inputPesquisa.toLowerCase();
  let produto = document.getElementsByClassName("card");

  for (i = 0; i < produto.length; i++) {
    if (!produto[i].innerHTML.toLowerCase().includes(inputPesquisa)) {
      produto[i].style.display = "none";
    } else {
      produto[i].style.display = "flex";
    }
  }
}
