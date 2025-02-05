function updatePreview() {
    let title = document.getElementById("pageTitle").value || "My Website";
    let header = document.getElementById("headerText").value || "Welcome!";
    let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
    let bgColor = document.getElementById("bgColor").value || "#000000";
    let textColor = document.getElementById("textColor").value || "#000000";

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { background-color: ${bgColor}; color: ${textColor}; font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            </style>
        </head>
        <body>
            <h1>${header}</h1>
            <p>${paragraph}</p>
        </body>
        </html>
    `;

    let previewFrame = document.getElementById("preview");
    let doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    doc.open();
    doc.write(htmlContent);
    doc.close();

    let codeDisplay = document.getElementById("htmlCode");
    codeDisplay.textContent = htmlContent;
}

function downloadHTML() {
    let title = document.getElementById("pageTitle").value || "My Website";
    let header = document.getElementById("headerText").value || "Welcome!";
    let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
    let bgColor = document.getElementById("bgColor").value || "#000000";
    let textColor = document.getElementById("textColor").value || "#000000";

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { background-color: ${bgColor}; color: ${textColor}; font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            </style>
        </head>
        <body>
            <h1>${header}</h1>
            <p>${paragraph}</p>
        </body>
        </html>
    `;

    let blob = new Blob([htmlContent], { type: "text/html" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "my_website.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});

const changelogButton = document.getElementById('changelogButton');
const changelogText = document.getElementById('changelogText');

changelogButton.addEventListener('click', () => {
    changelogText.classList.toggle('visible');
});
