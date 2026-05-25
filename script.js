
// navbar Highlight 
const sections = document.querySelectorAll("header, section, div[id]");
const navLinks = document.querySelectorAll(".Home a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});



// contact form 

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message").value.trim();

    const successMessage = document.getElementById("successMessage");

    // EMAIL VALIDATION
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === "" || email === "" || number === "" || address === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    if(!email.match(emailPattern)){
        alert("Please enter a valid email");
        return;
    }

    // SUCCESS MESSAGE
    successMessage.innerHTML = "Message Sent Successfully!";

    // CLEAR FORM
    form.reset();

});



// Back to top 


const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});