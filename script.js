const text = "Information Technology Student | MIT AOE (Autonomous)";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();   
const sections = document.querySelectorAll("section");

function reveal() {
    sections.forEach(sec => {
        const windowHeight = window.innerHeight;
        const top = sec.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // page load pe bhi run hoga
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggle.innerHTML = "☀️";
    } else {
        toggle.innerHTML = "🌙";
    }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://yash-backend-3uo1.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Message Sent 🚀");
});
