/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});
sr.reveal(`.contact-headline, .projects-headline`,{
    delay:500,
});
sr.reveal(`.nav, .footer-home, .footer-social, .skills-tem, .projects-item`,{
    origin:"top",
    interval:100,
});
sr.reveal(`.contact-description, .contact-form`,{
    origin:"left",
    interval:100,
});

sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);
/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
//selecting elements
const contactForm=document.getElementById("contact-form"),
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail = async(e)=>{
    e.preventDefault(); //prevents default form submission

    sendButton.disbaled=true;
    sendButton.textContent="Sending....";

    try{
        await emailjs.sendForm(
        "service_0v6bmdn",
        "template_ygauvmb",
        "#contact-form",
        "JrPgaGuRHYQ_Fcr0S",
        );
        contactMessage.textContent="Message sent succesfully";
        setTimeout(()=>{
            contactMessage.textContent="";
        },4000);

        contactForm.reset();
    }
    catch(error){
        contactMessage.textContent="Message not sent(Network error)";
    }
    finally{
        sendButton.disbaled=false;
        sendButton.textContent="Send message";
    }
};
contactForm.addEventListener("submit",sendEmail);

function scrollToContent() {
    // Scroll to the hidden content when the button is pressed
    document.querySelector('.aboutme').scrollIntoView({
    behavior: 'smooth'
    });
}
function scrollToContent1() {
    // Scroll to the hidden content when the link is clicked
    var element = document.querySelector('.tech');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'skills-item' not found.");
    }
}
function scrollToContent2() {
    // Scroll to the hidden content when the link is clicked
    var element = document.querySelector('.projects');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'skills-item' not found.");
    }
}
function scrollToContent3() {
    // Scroll to the hidden content when the link is clicked
    var element = document.querySelector('.contact');

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error("Element with class 'skills-item' not found.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (2 hours from now)
    var countDownDate = new Date().getTime() + 2 * 60 * 60 * 1000;
  
    // Update the countdown every 1 second
    var x = setInterval(function () {
      // Get the current date and time
      var now = new Date().getTime();
  
      // Calculate the time remaining
      var distance = countDownDate - now;
  
      // Calculate hours, minutes, and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("countdown-clock").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-clock").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
  