(function (window, document) {
  const markers = document.querySelectorAll('mark');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        setTimeout(() => {
          entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
        }, 200)
      }
    });
  }, {
    threshold: 0.8
  });
  
  markers.forEach(mark => {
    observer.observe(mark);
  });
})(window, document);


let navbar = document.querySelector('.header');
window.onscroll = () => {
  if (window.scrollY > 300) {
      navbar.classList.add('nav-active');
  } else {
      navbar.classList.remove('nav-active');
  }
};

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25, delay: 0.3 });
tl.to(".splash", { y: "-100%", duration: 1, delay: 1.5  }, "-=1");
tl.to(".slider", { y: "-100%", duration: 1, delay:-1});
tl.from("#hey", {x: -200, duration: 1, opacity: 0}, "-=0.4")
tl.from("#name", {x: -200, duration: 1, opacity: 0}, "-=.08")
tl.fromTo("#about-button", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 0.5 });

ScrollReveal({
  reset:false,
  distance: '60px',
  // duration:2500,
  // delay: 400
})

ScrollReveal().reveal('#portfolio-title', {delay: 100, origin: 'top'})
ScrollReveal().reveal('.portfolio-content', {delay: 100, origin: 'left'})
ScrollReveal().reveal('.content-info', {delay: 100, origin: 'right'})
