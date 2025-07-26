// Toggle mobile nav
const header = document.querySelector('.site-header');
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  header.classList.toggle('open');
});

// FAQ Data
const faqData = [
    ["Which Minecraft versions are supported?", "dlad supports Fabric 1.21 and above. The versions required to play mlum"],
    ["How do I install?", "<div style='text-align: center;'>Installation is simple:<br><br>1) Make sure you have Java installed (<a href='https://docs.fabricmc.net/players/installing-java/windows' target='_blank'>see Fabric guide</a>)<br><br>2) Download and run the Fabric installer from the <a href='https://fabricmc.net/use/' target='_blank'>official site</a> for Minecraft version 1.21 or later <br><br>3) Download both the <a href='https://www.curseforge.com/minecraft/mc-mods/fabric-api' target='_blank'>Fabric API</a> and <a href='index.html'>dlad mod</a> .jar files for your selected Minecraft version <br><br>4) Place both .jar files in your Minecraft's <a href='https://docs.fabricmc.net/players/installing-mods' target='_blank'><code>mods/</code> folder</a><br><br>5) Launch Minecraft using the <a href='https://docs.fabricmc.net/players/installing-fabric' target='_blank'>Fabric profile</a> in the launcher<br><br>For detailed instructions, visit the <a href='https://docs.fabricmc.net/players/faq' target='_blank'>Fabric Player FAQ</a>.</div>"],
    ["Is this mod detectable?", "No, as long as you're responsible and use the features wisely, in itself dlad is not detectable as it's all client side. But be cautious as mods can still see you being suspicious."],
    ["Will there be more features?", "Yes, we're constantly working on new updates! If you got any suggestions, feel free to fill out the form on the feedback page."],
    ["What should I do in the case of getting ss'd by a mod?", "If you get ss'd by a mod, you can use the self destruct feature to remove all traces of dlad ever being in your game."]
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

// Extras toggle
const extrasToggle = document.querySelector('.extras-toggle');
if (extrasToggle) {
    extrasToggle.addEventListener('click', () => {
        const content = document.querySelector('.extras-content');
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        extrasToggle.textContent = isOpen ? 'Extras ▼' : 'Extras ▲';
        extrasToggle.classList.toggle('active');
    });
}