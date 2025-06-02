setInterval(function()
{
    var display = document.getElementById('cursor').style.display;

    document.getElementById('cursor').style.display = (display == 'inline') ? 'none' : 'inline';
}, 500);

function openNav() { // Ouvre le menu de navigation latéral //
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.width = "auto";

}

function closeNav() { // Ferme le menu de navigation //
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.width = "100%";

}

document.querySelectorAll('nav a').forEach(link => { 
    link.addEventListener('click', (event) => { 
      event.preventDefault(); 
      const targetId = event.target.getAttribute('href'); 
      document.querySelector(targetId).scrollIntoView({ 
        behavior: 'smooth' 
      }); 
    }); 
  }); 

// Fonction pour ajouter un zéro devant les nombres < 10
function pad(number) {
  return number.toString().padStart(2, '0'); //Fait en sorte que les nombres étant composés de moins de deux chiffres gagnent un zéro au début du nombre
}

// Fonction pour mettre à jour la date et l'heure
function updateDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1); // Les mois commencent à 0
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  // ISO 8601
  const isoDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  document.querySelector('#datetime').textContent = isoDateTime;
}

// Met à jour chaque seconde
setInterval(updateDateTime, 1000);