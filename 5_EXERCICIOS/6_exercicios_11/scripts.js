let idade = 28;
let cnh = false;

if (idade >= 18 && cnh == false) {
  console.log('Tem idade e não tem habilitação.');
} else if (idade >= 18 && cnh == true) {
  console.log('Tem idade e habilitação.');
} else {
  console.log('Não tem idade nem habilitãção.');
}
