document.addEventListener('DOMContentLoaded', function() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)

      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    })
  });


  document.querySelectorAll('.fade-in-up').forEach((element) => {
    observer.observe(element)
  })
});

// Dit dient om de stroke-Dasharray van elke letter in 'walkaway' te bepalen.
// zo kan ik dan de stroke-dashoffest animeren met keyframes met de juiste lengte per letter
let heroBrandName = document.querySelectorAll('.hero__animation__name__path');
for (let i = 0; i < heroBrandName.length; i++) {
  console.log(`Letter ${i} os ${heroBrandName[i].getTotalLength()}`)
}