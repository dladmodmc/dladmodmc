const header = document.querySelector('.site-header');
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  header.classList.toggle('open');
});

const faqData = [
    ["Which Minecraft versions are supported?", "Fabric 1.21 and above. Any java version"],
    ["How do I open the menu?", "The default key is shift + . This can be changed inside the menu"],
    ["Virus?", "Source: <a href='https://github.com/dladmodmc/dladmodsource' target='_blank'>GitHub</a><br>No, the mod is safe to use, scanning it WILL return clean. Always download/update this mod either from THIS website, modrinth or curseforge, we will NEVER send you the mod through discord. The only external request the mod makes is to this very same website to check the version and see if an update is available, absolutely no telemetry, no data collection."],
    ["How do I install?", "<div style='text-align: center;'>Installation is simple, you can either download it from curseforge/modrinth or doing it manually like so:<br><br>1) Make sure you have Java installed (<a href='https://docs.fabricmc.net/players/installing-java/windows' target='_blank'>see Fabric guide</a>)<br><br>2) Download and run the Fabric installer from the <a href='https://fabricmc.net/use/' target='_blank'>official site</a> for Minecraft version 1.21 or later <br><br>3) Download both the <a href='https://www.curseforge.com/minecraft/mc-mods/fabric-api' target='_blank'>Fabric API</a> and <a href='downloads.html'>dlad mod</a> .jar files for your selected Minecraft version <br><br>4) Place both .jar files in your Minecraft's <a href='https://docs.fabricmc.net/players/installing-mods' target='_blank'><code>mods/</code> folder</a><br><br>5) Launch Minecraft using the <a href='https://docs.fabricmc.net/players/installing-fabric' target='_blank'>Fabric profile</a> in the launcher<br><br>For detailed instructions, visit the <a href='https://docs.fabricmc.net/players/faq' target='_blank'>Fabric Player FAQ</a>.</div>"],
    ["Is the mod detectable?", "No, as long as you're responsible and use the features wisely, in itself dlad is not detectable as it's all client side. But be cautious as mods can still see suspicious behaviour."],
    ["Will I get banned?", "The quick answer is no, but that heavily depends on how you use the mod yourself. If you're going around going to every single escape, getting every sausage tm, you might get mods suspicious on you, this is just as people using hacked clients, you must use it responsibly."],
    ["Open source?", "Source: <a href='https://github.com/dladmodmc/dladmodsource' target='_blank'>GitHub</a><br>Yes, but partially. Every part of the code is able to be seen except for how the features detect and how the mod is enabled/disabled depending on if you're in mlum or not, these measures are set to prevent staff from making patches."],
    ["I still don't believe it aint a virus!!!", "Go scan it with <a href='https://www.virustotal.com/' target='_blank'>VirusTotal</a> you paranoid ahh. It's just going to say it's safe because it's SAFE!!!!"]
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
        version: "1.11",
        changes: [
            "Reworked meteor detector, can now reach greater distances (render distance) and shows different colors depending on meteor rarity",
            "Improved stability"
        ]
    },

    {
        version: "1.1",
        changes: [
            "Support for all 1.21.x versions",
            "The size of warnings can now be edited for each feature (except autofish)",
            "Sausage finder now will check in a radius around the camera, making it compatible with freecam mods",
            "Reworked escape detector, fixes bug when the player goes out of render distance",
            "Added meteor detector"
        ]
    },
    {
        version: "1.0",
        changes: [
            "Initial release"
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