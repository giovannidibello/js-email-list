// seleziono gli elementi della pagina
const listaOutput = document.getElementById("listaEmail");

// creo un ciclo for che genera 10 email random
for (let i=0; i < 10; i++) {

// genero la mail random tramite l'api
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(risposta =>{

    // prendo il dato della email
    const emailRandom = risposta.data.response;
    console.log(emailRandom);

    // stampo in pagina le mail
    listaOutput.innerHTML += `<li>${emailRandom}</li>`   

})
.catch(error => {
    console.error(error);    
})

}