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

// create a function to update the date and time
function updateDateTime() {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector('#datetime').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);