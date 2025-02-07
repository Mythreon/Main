const changelogButton = document.getElementById('changelogButton');
const changelogText = document.getElementById('changelogText');

changelogButton.addEventListener('click', () => {
    changelogText.classList.toggle('visible');
});
