console.log("script chargé")
const T_NOUV = 30;
const T_RENOUV = 20;
const T_ATELIER = 8;
const T_CARTE =5;
const MAX_ATELIER = 10;
//------------------------------------------------------//
const champcotisation = document.getElementById("cotisation");
const CaretPosition = document.getElementById("carte");
const nbAtelier = document.getElementById("nbatelier");
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



function name(params) {
    let something = parseInt(nbAtelier.value);
    if(Number.isNaN(nbatelier)||nbatelier<0|| nbAtelier>10){
        alert("kys you fkng nigger");
    }else{
        let total = something * 8;
    }

    if (CaretPosition.checked) {
        total += T_CARTE;
    }

    function calculerCotisation(){
        const total = calculerCotisation();
        if (total!=null) {
            champcotisation.value = total;
             }else {
                champcotisation.value="";
             }
    }
}
