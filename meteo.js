let ville = 'Marseille';

// Afficher à l'entrée de la page une température d'une ville par défaut, ici Paris
// Pour ça, on appelle la fonction recevoirTemperature();
recevoirTemperature(ville);

function recevoirTemperature(ville) {
    let appid = '5dd4a3cfb9e347e4e1b4e7fd61fe21dd';
    
    // Construire l'URL de l'API en utilisant la ville et l'ID d'application
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + appid + '&lang=fr&units=metric';

    let requete = new XMLHttpRequest();

    // Envoyer une requête GET à l'URL de l'API
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    // Callback appelé lorsque la requête est terminée
    requete.onload = function () {
        console.log(requete);
        if (requete.readyState == XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                // Extraire les données de la réponse JSON
                let temp = requete.response.main.temp;
                let ville = requete.response.name;
                let icone = requete.response.weather[0].icon;
                let min = requete.response.main.temp_min;
                let max = requete.response.main.temp_max;
                
                // Créer des éléments HTML pour afficher les données de température
                let newDiv = document.createElement('div');
                newDiv.innerHTML = '<p>Min : <span class="text-primary font-weight-bold">'+ min + '°C</span>' + '</p> <p>Max : <span class="text-danger font-weight-bold"> ' + max + '°C</span></p>';
                
                let img = document.createElement('img');
                img.src = 'https://openweathermap.org/img/wn/' + icone + '@2x.png';

                // Mettre à jour les éléments HTML de la page avec les données de température
                let selectVille = document.querySelector('#ville')
                selectVille.innerHTML = '<h2>' + ville + '</h2>';
                selectVille.append(img);
                selectVille.append(newDiv);

                let selectTemp = document.querySelector('#temperature_label')
                selectTemp.textContent = temp;
            }
            else {
                alert('Un problème est intervenu, merci de ressaisir une nouvelle ville ou revenir plus tard.');
            }
        }
    }
}

// Sélectionner le bouton avec l'ID 'changer'
let bouton = document.querySelector('#changer');
// Ajouter un événement de clic au bouton
bouton.addEventListener('click', () => {
    let villeChoisie = ville;

    // Demander à l'utilisateur de saisir une nouvelle ville
    villeChoisie = prompt('Quelle ville souhaitez-vous choisir ?');
    // Appeler la fonction recevoirTemperature avec la nouvelle ville choisie
    recevoirTemperature(villeChoisie);
})

