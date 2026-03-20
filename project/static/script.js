function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

// Typing Effect
const words = ["Data Analyst", "Python Developer", "SQL Learner", "Excel Expert"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = words[i];
    
    if (!isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j++);
    } else {
        document.getElementById("typing").textContent = current.substring(0, j--);
    }

    if (j == current.length) isDeleting = true;
    if (j == 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Active nav glow
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
