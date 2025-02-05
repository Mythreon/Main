<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Website Builder</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        #editor { display: flex; justify-content: space-between; }
        #controls { width: 45%; }
        iframe { width: 50%; height: 400px; border: 1px solid #ccc; }
        textarea, input, button { width: 100%; margin-bottom: 10px; padding: 5px; }
    </style>
</head>
<body>
    <h1>Live Website Builder</h1>

    <div id="editor">
        <!-- Input Fields for Customization -->
        <div id="controls">
            <label>Page Title:</label>
            <input type="text" id="pageTitle" placeholder="Enter page title" oninput="updatePreview()"><br>

            <label>Header Text:</label>
            <input type="text" id="headerText" placeholder="Enter header text" oninput="updatePreview()"><br>

            <label>Paragraph Text:</label>
            <textarea id="paragraphText" placeholder="Enter paragraph content" oninput="updatePreview()"></textarea><br>

            <label>Background Color:</label>
            <input type="color" id="bgColor" oninput="updatePreview()"><br>

            <label>Text Color:</label>
            <input type="color" id="textColor" oninput="updatePreview()"><br>

            <button onclick="downloadHTML()">Download HTML</button>
        </div>

        <!-- Live Preview -->
        <iframe id="preview"></iframe>
    </div>

    <script>
        function updatePreview() {
            let title = document.getElementById("pageTitle").value || "My Website";
            let header = document.getElementById("headerText").value || "Welcome!";
            let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
            let bgColor = document.getElementById("bgColor").value || "#ffffff";
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

            // Update iframe preview
            let previewFrame = document.getElementById("preview");
            let doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
            doc.open();
            doc.write(htmlContent);
            doc.close();
        }

        function downloadHTML() {
            let title = document.getElementById("pageTitle").value || "My Website";
            let header = document.getElementById("headerText").value || "Welcome!";
            let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
            let bgColor = document.getElementById("bgColor").value || "#ffffff";
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

        // Initialize preview on page load
        window.onload = updatePreview;
    </script>
</body>
</html>