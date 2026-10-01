document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. EFEK TYPING (KETIKAN OTOMATIS HERO)
    // ==========================================
    const texts = [
        "Spesialis Pemrograman PLC Omron (CX-Programmer)",
        "Desainer Layout PCB Presisi Tinggi (KiCad)",
        "Penguji Simulasi Rangkaian Elektro (LTspice)"
    ];
    let count = 0;
    let index = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        if (!typingElement) return;

        const fullText = texts[count];

        if (isDeleting) {
            index--;
        } else {
            index++;
        }

        typingElement.textContent = fullText.substring(0, index);

        let typeSpeed = isDeleting ? 30 : 70;

        if (!isDeleting && index === fullText.length) {
            typeSpeed = 2000; // Tahan teks selama 2 detik
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            count = (count + 1) % texts.length;
            typeSpeed = 400;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // ==========================================
    // 2. HIGHLIGHT NAVIGASI SAAT DI-SCROLL
    // ==========================================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${currentSection}`) {
                a.classList.add("active");
            }
        });
    });

    // ==========================================
    // 3. EFEK KLIK MOUSE NEON (GEOMETRY DASH STYLE)
    // ==========================================
    document.addEventListener("click", (e) => {
        const clickGlow = document.createElement("div");
        clickGlow.className = "click-glow";
        clickGlow.style.left = `${e.clientX}px`;
        clickGlow.style.top = `${e.clientY}px`;
        document.body.appendChild(clickGlow);

        setTimeout(() => {
            clickGlow.remove();
        }, 500);
    });

    // ==========================================
    // 4. ANIMASI MUNCUL SAAT DI-SCROLL (FADE IN)
    // ==========================================
    const observerOptions = {
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".cyber-card, .project-card, .skills-container, .contact-container");
    revealElements.forEach((el) => {
        el.classList.add("reveal-hidden");
        scrollObserver.observe(el);
    });

    // ==========================================
    // 5. HANDLING FORM KONTAK
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            
            formStatus.className = "form-status success";
            formStatus.style.display = "block";
            formStatus.textContent = `[SYSTEM // SUCCESS] Terima kasih, ${name}! Pesan Anda berhasil dikirim.`;

            contactForm.reset();

            setTimeout(() => {
                formStatus.style.display = "none";
            }, 4000);
        });
    }
});