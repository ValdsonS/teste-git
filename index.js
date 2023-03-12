/*alert("BEM VINDO!");

const escolha = "";

do {
  const escolha = prompt(
    "Escolha a opção:\n 1 - Taylor Swift \n 2 - Fearless \n 3 - 1989 \n 4 Reputation \n 5 - Sair"
  );
  switch (escolha) {
    case "1":
      alert("Boa escolha!");
      break;
    case "2":
      alert("Seja destemido!");
      break;
    case "3":
      alert("BEST ALBUM EVER!");
      break;
    case "4":
      alert("SHE IS DEAD!");
      break;
    case "5":
      alert("Encerrando albuns!");
      break;
    default:
      alert("NÚMERO INVALIDO, DIGITE AS OPÇÕES DISPONIVÉIS!");
  }
} while (escolha !== "5");*/

let money = parseFloat(prompt("Digite seu dinheiro atual: "));

let escolha = "";

do {
  const escolha = prompt(
    "Escolha o que fazer com seu dinheiro: \n 1 - Adicionar \n 2 - Remover \n 3 - SAIR"
  );
  switch (escolha) {
    case "1":
      let add = parseFloat(
        prompt("Digite a quantidade que quer adicionar (em reais): ")
      );
      let resultado = add + money;
      alert("Seu dinheiro foi atualizado: " + resultado);
      break;
    case "2":
      let menos = prompt("Digite a quantidade a ser retirada (em reais): ");
      let resultado2 = money - menos;
      alert("Seu dinheiro foi atualizado: " + resultado2);
    case "3":
      alert("Encerrando programa!");
      break;
    default:
      alert("Opção Inválida!");
  }
} while (escolha !== "3");
