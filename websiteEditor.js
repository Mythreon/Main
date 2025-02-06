function updatePreview() {
    let title = document.getElementById("pageTitle").value || "My Website";
    let header = document.getElementById("headerText").value || "Welcome!";
    let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
    let bgColor = document.getElementById("bgColor").value || "#000000";
    let headerAlign = document.getElementById("headerAlign").value || "left";
    let paragraphAlign = document.getElementById("paragraphAlign").value || "left";

    let headerTextColor = document.getElementById("headerTextColor").value || "#ffffff";
    let paragraphTextColor = document.getElementById("paragraphTextColor").value || "#ffffff";

    let headerStyle = `text-align: ${headerAlign}; color: ${headerTextColor};`;
    let paragraphStyle = `text-align: ${paragraphAlign}; color: ${paragraphTextColor};`;

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { 
                    background-color: ${bgColor}; 
                    color: #ffffff; 
                    font-family: Arial, sans-serif; 
                    padding: 50px;
                    margin: 0;
                    box-sizing: border-box;
                }
                h1 { 
                    ${headerStyle} 
                }
                p { 
                    ${paragraphStyle} 
                }
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
    let headerAlign = document.getElementById("headerAlign").value || "left";
    let paragraphAlign = document.getElementById("paragraphAlign").value || "left";

    let headerTextColor = document.getElementById("headerTextColor").value || "#ffffff";
    let paragraphTextColor = document.getElementById("paragraphTextColor").value || "#ffffff";

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { 
                    background-color: ${bgColor}; 
                    color: #ffffff; 
                    font-family: Arial, sans-serif; 
                    padding: 50px;
                    margin: 0;
                    box-sizing: border-box;
                }
                h1 { 
                    text-align: ${headerAlign}; 
                    color: ${headerTextColor};
                }
                p { 
                    text-align: ${paragraphAlign}; 
                    color: ${paragraphTextColor};
                }
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
    a.download = "generated_website.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});

