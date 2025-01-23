// seleziono gli elementi della pagina
const listaOutput = document.getElementById("listaEmail");
const button = document.getElementById("button");

// invoco la funzione
creaEmailRandom()

const emailRandom = [];

// creo una funzione che genera le 10 email random
function creaEmailRandom() {    

    // creo un ciclo for che genera 10 email random
    for (let i = 0; i < 10; i++) {


        // genero la mail random tramite l'api
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risposta => {

                // prendo il dato della email
                emailRandom.push(risposta.data.response);
                console.log(risposta.data.response);

                // creo un ciclo che verifica se l'array è pieno
                if (emailRandom.length == 10) {

                    // ciclo su tutto l'array
                    for ( let k in emailRandom) {
                        
                            // stampo in pagina le mail
                            listaOutput.innerHTML += `<li>${emailRandom[k]}</li>  `                   }

                }               
             

            })
            .catch(error => {
                console.error(error);
            })

    }

}

// creo al click la simulazione del fetch
button.addEventListener("click", function () {
    emailRandom.length = 0;
    listaOutput.innerHTML = "";
    return creaEmailRandom()
})