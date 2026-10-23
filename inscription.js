console.log("script chargé")
const T_NOUV = 30;
const T_RENOUV = 20;
const T_ATELIER = 8;
const T_CARTE =5;
const MAX_ATELIER = 10;
//------------------------------------------------------//
const champcotisation = document.getElementById("cotisation");
const CaretPosition = document.getElementById("carte");
const nbatelier = document.getElementById("nbatelier");
const btnCalculer = document.getElementById("btnCalculer");
const champatelier = document.getElementById("nbatelier");
const adhNouveau = document.getElementById("adhnouveau");
//------------------------------------------------------//

const champNom = document.getElementById("nom");
const champPrenom = document.getElementById("prenom");
const champemail = document.getElementById("email");
const champnaissance = document.getElementById("naissance");
const champMDP = document.getElementById("motdepasse");

//------------------------------------------------------//



function calculerCotisation() {
    let something = parseInt(nbatelier.value);
    if(Number.isNaN(nbatelier)||nbatelier<0|| nbatelier>10){
        alert("AZIZ YA KAHLOUUUUCH");
    }else{
        //CONDITION ? valeur_si_vrai : valeur_si_faux
        const base = adhNouveau.checked ? T_NOUV : T_RENOUV;
        let total = base + nbAteliers * T_ATELIER;
        if (CaretPosition.checked) {
            total += T_CARTE;
        }
        return total;
    }
}
