function adicionar(caracter) {
  const valorinput = document.querySelector(".display").value;

  document.querySelector(".display").value = valorinput + caracter;
}

function limpar() {
  const botaoac = document.getElementById("ac");
  document.querySelector(".display").value = "";
}

function calcular() {
  const valorinput = document.querySelector(".display").value;
  document.querySelector(".display").value = eval(valorinput);
}

function inverte(){
    const valorinput = document.querySelector(".display").value
    document.querySelector(".display").value = valorinput * -1
}
