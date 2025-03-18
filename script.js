document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from(".navbar", { y: -100, opacity: 0, duration: 1, ease: "power2.out" });
    gsap.from(".text-content h2, .text-content p", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
    });
    gsap.from(".profile-img", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8
    });
    gsap.from("#about h2, #about p", {
        scrollTrigger: "#about",
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
    gsap.from(".project-card", {
        scrollTrigger: "#projects",
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
    gsap.from(".contact-form > *", {
        scrollTrigger: "#contact",
        y: 50,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
    gsap.from(".footer-section", {
        scrollTrigger: ".footer",
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Project Card Hover Effects
// Project Card Hover Effects (already handled by CSS, but keeping JS for consistency)
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
});

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("nav-active");
        navMenu.classList.toggle("nav-active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("nav-active");
            navMenu.classList.remove("nav-active");
        });
    });

    // EmailJS Form Submission
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.onload = () => {
        emailjs.init("template_q5uxa9f"); // Replace with your EmailJS Public Key
    };
    document.body.appendChild(script);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            message: form.message.value
        };
        emailjs.send("service_ons9ny8", "template_q5uxa9f", formData)
            .then(() => {
                formMessage.textContent = "Message sent successfully!";
                formMessage.style.color = "#8e2de2";
                form.reset();
                setTimeout(() => formMessage.textContent = "", 3000);
            })
            .catch((error) => {
                formMessage.textContent = "Failed to send message. Please try again.";
                console.error("EmailJS error:", error);
            });
    });
});