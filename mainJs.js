document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header class="main-header">
            <div class="logo">Mythreon</div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li> 
                    <li><a href="news.html">News</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
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
});
