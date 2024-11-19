function openNav() { // Ouvre le menu de navigation latéral //
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

}

function closeNav() { // Ferme le menu de navigation //
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

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