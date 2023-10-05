function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Scrollování s animací
  }
};


const nadpisy = document.querySelectorAll('.animovany-nadpis');
const obsahy = document.querySelectorAll('.skryto');

// Přidejte k nadpisům "click" událostní posluchač
nadpisy.forEach(nadpis => {
    nadpis.addEventListener('click', () => {
        // Získejte data-target hodnotu nadpisu
        const target = nadpis.getAttribute('data-target');
        
        // Najděte odpovídající obsah pomocí ID a přepněte jeho zobrazení
        const cilovyObsah = document.getElementById(target);
        
        if (cilovyObsah.style.display === 'none' || cilovyObsah.style.display === '') {
            cilovyObsah.style.display = 'block';
        } else {
            cilovyObsah.style.display = 'none';
        }
    });
});





const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})







