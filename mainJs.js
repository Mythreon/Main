document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header class="main-header">
            <div class="logo">Mythreon</div>
            <nav>
                <ul class="nav-list">
                    <li class="dropdown">
                        <button id="menuButton" class="menu-button">☰</button>
                        <ul class="dropdown-menu">
                            <!-- Section 1 -->
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">Home</h3>
                                <a href="index.html">Home</a>
                            </li>
                            <!-- Section 2 -->
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">Projects</h3>
                                <a href="projects.html">Projects</a>
                                <a href="websiteBuilderIndex.html">HTML website builder</a>
                            </li>
                            <!-- Section 3 -->
                            <li class="dropdown-section">
                                <h3 class="dropdown-section-title">More</h3>
                                <a href="news.html">News</a>
                                <a href="about.html">About</a>
                                <a href="index.html">Coming Soon</a>
                            </li>
                        </ul>
                    </li>
                    <li><button id="changelogButton" class="changelog-button">📝</button></li>
                </ul>
            </nav>
        </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    const changelogButton = document.getElementById('changelogButton');
    const changelogText = document.getElementById('changelogText');
    changelogButton.addEventListener('click', () => {
        changelogText.classList.toggle('visible');
    });

    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });
});

