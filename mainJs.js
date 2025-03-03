function scrambleText(element, finalText, duration = 12000) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ 😎🚀💻✨💥🌍";
    let scrambled = finalText.split("").map(() => " "); 
    let startTime = Date.now();

    function update() {
        let elapsed = Date.now() - startTime;
        let progress = Math.min(elapsed / duration, 1);  

        scrambled = scrambled.map((char, i) => {
            if (Math.random() > progress) {
                return chars[Math.floor(Math.random() * chars.length)];  
            }
            return finalText[i];  
        });

        element.textContent = scrambled.join("");  

        if (progress < 1) {
            requestAnimationFrame(update);  
        } else {
            startTime = Date.now();  
            requestAnimationFrame(update);
        }
    }

    update();
}

document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header class="main-header">
            <div class="logo" id="logo">Mythreon</div>
            <nav>
                <ul class="nav-list">
                    <li class="dropdown">
                        <button id="menuButton" class="menu-button">☰</button>
                        <ul class="dropdown-menu">
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">Home</h3>
                                <a href="index.html">Home</a>
                            </li>
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">Projects</h3>
                                <a href="projects.html">Projects</a>
                                <a href="websiteBuilderIndex.html">HTML website builder</a>
                            </li>
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">More</h3>
                                <a href="news.html">News</a>
                                <a href="about.html">About</a>
                                <a href="index.html">Coming Soon</a>
                            </li>
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">Tools</h3>
                                <a href="password.html">Password generator</a>
                                <a href="index.html">Coming Soon</a>

                            </li>
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">-</h3>
                                <a href="WHY.html"><span id="comingSoonText" class="scrambled-text">Do not come.</span></a>
                            </li>
                        </ul>
                    </li>
                    <li><button id="changelogButton" class="changelog-button">📝</button></li>
                </ul>
            </nav>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    const comingSoonText = document.getElementById("comingSoonText");
    scrambleText(comingSoonText, "Do not press");

    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });

    const logo = document.getElementById('logo');
    let clickCount = 0;

    logo.addEventListener('click', () => {
        clickCount++;

        if (clickCount >= 5) {
            logo.classList.add('broken');
        }
    });

    const changelogButton = document.getElementById('changelogButton');
    const changelogText = document.getElementById('changelogText');
    changelogButton.addEventListener('click', () => {
        changelogText.classList.toggle('visible');
    });
});

