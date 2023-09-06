const form = document.getElementById('fomulario');
const boton = document.getElementById('boton');

boton.addEventListener('click',function(){
form.submit()
});

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Puedes hacer algo con la respuesta del servidor
  })
  .catch(error => {
    console.error("Error:", error);
  });
