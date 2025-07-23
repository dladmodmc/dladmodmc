// Toggle mobile nav
const header = document.querySelector('.site-header');
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  header.classList.toggle('open');
});

// FAQ Data
const faqData = [
    ["Which Minecraft versions are supported?", "dlad supports Fabric 1.21 and above. The versions required to play mlum"],
    ["How do I install?", "Drop the `.jar` into your `mods/` folder and run with the Fabric loader."],
    ["Is this mod detectable?", "No, as long as you're responsible and use the features wisely, in itself dlad is not detectable as it's all client side. But be cautious as mods can still see you being suspicious."],
    ["Will there be more features?", "Yes, we're constantly working on new updates! If you got any suggestions, feel free to fill out the form on the feedback page."],
    ["What should I do in the case of getting ss'd by a mod?", "If you get ss'd by a mod, you can use the self destruct feature to remove all traces of dlad ever being in your game."],
];

// FAQ Generation
function initFAQ() {
    const faqContainer = document.querySelector('main');
    if (!faqContainer) return;

    const faqHTML = faqData.map(([question, answer]) => `
        <div class="faq-item">
            <button class="faq-question">${question}</button>
            <div class="faq-answer"><p>${answer}</p></div>
        </div>
    `).join('');

    const faqSection = document.createElement('div');
    faqSection.innerHTML = faqHTML;
    faqContainer.appendChild(faqSection);

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            
            // Open clicked answer if it was closed
            if (!isOpen) {
                answer.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
}

// Initialize FAQ if we're on the FAQ page
if (window.location.pathname.includes('faq.html')) {
    initFAQ();
}
