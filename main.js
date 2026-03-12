// ✅ CORRIGIDO: removado "import { api } from 'api'" — não existe e não é necessário
// O fetch nativo do navegador já faz a requisição HTTP

const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  });

  const data = await response.json();

  console.log(data);

});