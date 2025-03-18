// document.addEventListener("DOMContentLoaded", () => {
//     // Fetch and render projects
//     const projectsGrid = document.querySelector(".projects-grid");

//     async function loadProjects() {
//         for (let i = 1; i <= 6; i++) {
//             const response = await fetch(`data/project${i}.json`);
//             const project = await response.json();

//             const projectCard = document.createElement("div");
//             projectCard.classList.add("project-card");
//             projectCard.innerHTML = `
//                 <img src="${project.image}" alt="${project.name}" class="project-img">
//                 <div class="project-info">
//                     <h3>${project.name}</h3>
//                     <p>${project.description}</p>
//                 </div>
//                 <div class="project-links">
//                     <a href="${project.github}" target="_blank" class="github-link">
//                         <img src="assets/github-icon.png" alt="GitHub" class="link-icon">
//                     </a>
//                     <a href="${project.website}" target="_blank" class="website-link">
//                         <img src="assets/website-icon.png" alt="Website" class="link-icon">
//                     </a>
//                 </div>
//             `;
//             projectsGrid.appendChild(projectCard);
//         }
//     }

//     loadProjects();

//     // Rest of your existing script.js code (GSAP, hamburger, EmailJS, etc.) remains here
//     // ...
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // GSAP Animations
//     gsap.from(".navbar", { y: -100, opacity: 0, duration: 1, ease: "power2.out" });
//     gsap.from(".text-content h2, .text-content p", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "power2.out",
//         delay: 0.5
//     });
//     gsap.from(".profile-img", {
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         delay: 0.8
//     });
//     gsap.from("#about h2, #about p", {
//         scrollTrigger: "#about",
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "power2.out"
//     });
//     gsap.from(".project-card", {
//         scrollTrigger: "#projects",
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power2.out"
//     });
//     gsap.from(".contact-form > *", {
//         scrollTrigger: "#contact",
//         y: 50,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power2.out"
//     });
//     gsap.from(".footer-section", {
//         scrollTrigger: ".footer",
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power2.out"
//     });

//     // Project Card Hover Effects
// // Project Card Hover Effects (already handled by CSS, but keeping JS for consistency)
// document.querySelectorAll(".project-card").forEach(card => {
//     card.addEventListener("mouseenter", () => {
//         gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
//     });
//     card.addEventListener("mouseleave", () => {
//         gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
//     });
// });

//     // Hamburger Menu Toggle
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");

//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle("nav-active");
//         navMenu.classList.toggle("nav-active");
//     });

//     // Close menu when clicking a link
//     document.querySelectorAll(".nav-menu a").forEach(link => {
//         link.addEventListener("click", () => {
//             hamburger.classList.remove("nav-active");
//             navMenu.classList.remove("nav-active");
//         });
//     });

//     // EmailJS Form Submission
//     const form = document.getElementById("contact-form");
//     const formMessage = document.getElementById("form-message");

//     const script = document.createElement("script");
//     script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
//     script.onload = () => {
//         emailjs.init("template_q5uxa9f"); // Replace with your EmailJS Public Key
//     };
//     document.body.appendChild(script);

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const formData = {
//             name: form.name.value,
//             phone: form.phone.value,
//             email: form.email.value,
//             message: form.message.value
//         };
//         emailjs.send("service_ons9ny8", "template_q5uxa9f", formData)
//             .then(() => {
//                 formMessage.textContent = "Message sent successfully!";
//                 formMessage.style.color = "#8e2de2";
//                 form.reset();
//                 setTimeout(() => formMessage.textContent = "", 3000);
//             })
//             .catch((error) => {
//                 formMessage.textContent = "Failed to send message. Please try again.";
//                 console.error("EmailJS error:", error);
//             });
//     });
// });


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
    gsap.from(".about-box", {
        scrollTrigger: "#about",
        y: 50,
        opacity: 0,
        duration: 1,
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

    // Fetch and render projects from single JSON file
    const projectsGrid = document.querySelector(".projects-grid");

    async function loadProjects() {
        try {
            const response = await fetch("data/projects.json");
            if (!response.ok) throw new Error("Failed to fetch projects.json");
            const projects = await response.json();

            projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.name}" class="project-img">
                    <div class="project-info">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="github-link">
                            <img src="./assets/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="GitHub" class="link-icon">
                        </a>
                        <a href="${project.website}" target="_blank" class="website-link">
                            <img src="./assets/link-icon-172190.png" alt="Website" class="link-icon">
                        </a>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);

                // Add hover effects immediately after appending
                projectCard.addEventListener("mouseenter", () => {
                    gsap.to(projectCard, { scale: 1.05, duration: 0.3, ease: "power2.out" });
                });
                projectCard.addEventListener("mouseleave", () => {
                    gsap.to(projectCard, { scale: 1, duration: 0.3, ease: "power2.out" });
                });
            });
        } catch (error) {
            console.error("Error loading projects:", error);
            projectsGrid.innerHTML = "<p>Sorry, there was an error loading the projects.</p>";
        }
    }

    loadProjects();

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("nav-active");
        navMenu.classList.toggle("nav-active");
    });

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
        emailjs.init("ITC_rW9nWH9c0xcy3");
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