document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const postImages = document.querySelectorAll(".social-post img");

    // Au clic sur une image de post
    postImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src; // On copie le chemin de l'image
        });
    });

    // Fonction pour fermer
    const closeLightbox = () => {
        lightbox.style.display = "none";
    };

    // Fermer avec la croix
    closeBtn.onclick = closeLightbox;

    // Fermer en cliquant à côté de l'image (sur le fond noir)
    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    };
});

// Ton code pour le header sticky (si tu ne l'as pas déjà inclus)
window.onscroll = function() {
    const nav = document.getElementById("main-nav");
    if (window.pageYOffset > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};