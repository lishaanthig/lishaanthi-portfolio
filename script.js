function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
