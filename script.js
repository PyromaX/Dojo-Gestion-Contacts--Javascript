var listcontact = [{
    name: "Jean Aymare",
    numero: "06 85 45 69 95"
  },
  {
    name: "Léa Ricault",
    numero: "06 28 32 78 65"
  },
  {
    name: "Mélanie Zetaufré",
    numero: "07 35 78 46 22"
  },
]



var formulaire = "<form>" +
  "<label> Entrez son nom </label>" +
  "<input id='nom' type='text'></input>" +
  "<label> Entrez son prénom </label>" +
  "<input id='prenom' type='text'></input>" +
  "<label> Entrez son numéro </label>" +
  "<input id='num' type='text'></input>" +
  "<input id='button' type='button' value='Valider'></input>" +
  "</form>"



function form() {
  document.getElementById("block-1").innerHTML = formulaire;
}



function insertion() {

  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;
  var num = document.getElementById('num').value;
  var objet_formulaire = new Object();
  objet_formulaire.name = nom + " " + prenom;
  objet_formulaire.numero = num;
  listcontact.push(objet_formulaire);
}




document.getElementById('opt1').selected = "true";


document.getElementById('select').onchange = function() {

  if (this.selectedIndex === 0) {

    document.getElementById('block-1').innerHTML = "<p> Choisir une option </p>";

  } else if (this.selectedIndex === 1) {

    var contacts = "<ul>"

    for (var i = 0; i < listcontact.length; i++) {

      contacts += "<li><ul><li>- <span>" + listcontact[i].name + "</span></li><li>- " + listcontact[i].numero + "</li></ul></li>";

    }

    contacts += "</ul>"
    document.getElementById('block-1').innerHTML = "<p> Liste de vos contacts</p> " + contacts;

  } else if (this.selectedIndex === 2) {

    form();

    document.getElementById("button").addEventListener("click", function() {
      insertion()
      alert("Votre contact a bien été enregistré");
      form();
    });

  } else if (this.selectedIndex === 3) {
    document.getElementById('block-1').innerHTML = "<p id='nombres'>Vous avez " + listcontact.length + " contacts</p>";
  }
}
