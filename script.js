const header = document.querySelector('.site-header');
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  header.classList.toggle('open');
});

const faqData = [
    ["Which Minecraft versions are supported?", "Fabric 1.21 and above. Any java version"],
    ["Virus?", "No, the mod is safe to use, scanning it WILL return clean. Always download mods from trusted sources to avoid malware. The only external request the mod makes is to this very same website to check the version and see if an update is available, absolutely no telemetry, no data collection."],
    ["How do I install?", "<div style='text-align: center;'>Installation is simple:<br><br>1) Make sure you have Java installed (<a href='https://docs.fabricmc.net/players/installing-java/windows' target='_blank'>see Fabric guide</a>)<br><br>2) Download and run the Fabric installer from the <a href='https://fabricmc.net/use/' target='_blank'>official site</a> for Minecraft version 1.21 or later <br><br>3) Download both the <a href='https://www.curseforge.com/minecraft/mc-mods/fabric-api' target='_blank'>Fabric API</a> and <a href='index.html'>dlad mod</a> .jar files for your selected Minecraft version <br><br>4) Place both .jar files in your Minecraft's <a href='https://docs.fabricmc.net/players/installing-mods' target='_blank'><code>mods/</code> folder</a><br><br>5) Launch Minecraft using the <a href='https://docs.fabricmc.net/players/installing-fabric' target='_blank'>Fabric profile</a> in the launcher<br><br>For detailed instructions, visit the <a href='https://docs.fabricmc.net/players/faq' target='_blank'>Fabric Player FAQ</a>.</div>"],
    ["Is the mod detectable?", "No, as long as you're responsible and use the features wisely, in itself dlad is not detectable as it's all client side. But be cautious as mods can still see suspicious behaviour."],
    ["Will there be more features?", "We're constantly working on new updates. If you got any suggestions, feel free to fill out the form on the feedback page."],
    ["Why not open source?", "Open source would mean devs and staff could see how the code works, allowing them to potentially make patches and bypasses. Overall, keeping it closed source helps make the mod's features last longer"],
    ];

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

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            
            if (!isOpen) {
                answer.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
}

if (window.location.pathname.includes('faq.html')) {
    initFAQ();
}

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

const changelogData = [
    {
        version: "1.0",
        changes: [
            "Still WIP",
        ]
    }
];

function initChangelog() {
    const changelogSection = document.getElementById('changelog');
    if (!changelogSection) return;

    const changelogHTML = changelogData.map(release => `
        <h3>Version ${release.version}</h3>
        <ul>
            ${release.changes.map(change => `<li>${change}</li>`).join('')}
        </ul>
    `).join('');
    changelogSection.innerHTML = '<h2>Changelog</h2>' + changelogHTML;
}

if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    initChangelog();
}