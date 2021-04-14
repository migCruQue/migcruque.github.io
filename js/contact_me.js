//Movement Animation to happen
const cards = document.querySelectorAll('.contact_card');
const circle_backgroun = document.querySelector('.circle_background');
const title = document.querySelector('.title');
const contact_logo = document.querySelector('.contact_logo img');

// Moving Animation Event
// card.addEventListener('mouseover', (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });


// Animate In
cards.forEach(card => {
    card.addEventListener("mouseenter", (e) => {
        // card.style.transform = `rotateY(25deg) rotateX(25deg)`;
        // //Pop out
        // title.style.transform = "translateZ(150px)";
        contact_logo.style.transform = "translateZ(200px) rotateZ( -45deg)";
    });
});


cards.forEach(card => {
    card.addEventListener("mouseleave", (e) => {
        // card.style.transition = "all 0.5a ease";
        // card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        // //Pop back
        // title.style.transform = "translateZ(0px)";
        contact_logo.style.transform = "translateZ(0px) rotateZ( 0deg)";
    });
});


//Animate Out
// card.addEventListener('mouseleave', (e) => {
//   card.style.transition = "all 0.5a ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Pop back
//   title.style.transform = "translateZ(0px)";
//   contact_logo.style.transform = "translateZ(0px) rotateZ( 0deg)";
// });
