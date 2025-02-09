// DO NOT ASK
// DO NOT MODIFY
// I HAVE SPENT MANY MANY MANY HOURS WITH THIS CODE
// I DO NOT KNOW HOW IT FUNCTIONS
// ONLY NOBODY KNOWS, NEVER ANYONE KNOWS.
// THIS CODE IS A TOTAL MESS. DO NOT TRY TO OPTIMIZE IT, YOU WILL BREAK IT!
// - Mythreon
// Total hours spent optimizing the code: 7

              ///////////////////////////////////////////////
              // Functions and text from this point on     //
              // Are actual comments, please follow them.  //
              // - Mythreon (The solo developer)           //
              ///////////////////////////////////////////////

// Function to update the preview of the page
let sectionCount = 0;
let debounceTimeout;

function updatePreview() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        // Get values from input fields for the main page
        let title = document.getElementById("pageTitle").value || "My Website";
        let header = document.getElementById("headerText").value || "Welcome!";
        let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
        let bgColor = document.getElementById("bgColor").value || "#ffffff";
        let headerTextSize = document.getElementById("headerTextSize").value || "36"; // Default header text size
        let paragraphTextSize = document.getElementById("paragraphTextSize").value || "16"; // Default paragraph text size
        let headerFont = document.getElementById("headerFontSelect").value || "Arial, sans-serif";
        let paragraphFont = document.getElementById("paragraphFontSelect").value || "Arial, sans-serif";

        let headerStyle = `text-align: center; color: #000000; font-family: ${headerFont}; font-size: ${headerTextSize}px;`;
        let paragraphStyle = `text-align: left; color: #000000; font-family: ${paragraphFont}; font-size: ${paragraphTextSize}px;`;

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
                        color: #000000; 
                        font-family: ${paragraphFont}; 
                        padding: 50px;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    h1 { 
                        ${headerStyle} 
                        margin: 0 auto;
                    }
                    p { 
                        ${paragraphStyle} 
                        margin: 0 auto;
                    }
                </style>
            </head>
            <body>
                <h1>${header}</h1>
                <p>${paragraph}</p>
        `;

        // Add dynamically created sections (each with its own font and size)
        const sections = document.getElementById("sectionsContainer").children;
        for (let i = 0; i < sections.length; i++) {
            let sectionHeader = sections[i].querySelector('.section-header').value || "New Section";
            let sectionParagraph = sections[i].querySelector('.section-paragraph').value || "Content goes here.";

            // Get font and color values for each section
            let sectionHeaderFont = sections[i].querySelector('.section-header-font-select').value || headerFont;
            let sectionParagraphFont = sections[i].querySelector('.section-paragraph-font-select').value || paragraphFont;
            
            let sectionHeaderTextSize = sections[i].querySelector('.section-header-text-size').value || "36";
            let sectionParagraphTextSize = sections[i].querySelector('.section-paragraph-text-size').value || "16";

            let sectionHeaderStyle = `text-align: center; color: #000000; font-family: ${sectionHeaderFont}; font-size: ${sectionHeaderTextSize}px; margin: 0 auto;`;
            let sectionParagraphStyle = `text-align: left; color: #000000; font-family: ${sectionParagraphFont}; font-size: ${sectionParagraphTextSize}px; margin: 0 auto;`;

            htmlContent += `
                <h2 style="${sectionHeaderStyle}">${sectionHeader}</h2>
                <p style="${sectionParagraphStyle}">${sectionParagraph}</p>
            `;
        }

        // Close HTML content and update iframe preview
        htmlContent += `
            </body>
            </html>
        `;

        let previewFrame = document.getElementById("preview");
        let doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        doc.open();
        doc.write(htmlContent);
        doc.close();

        // Update the HTML code display
        let codeDisplay = document.getElementById("htmlCode");
        codeDisplay.textContent = htmlContent;
    }, 300); // Adjust debounce delay as necessary
}

function addSection() {
    let sectionContainer = document.createElement("div");
    sectionContainer.classList.add("section");

    // Section Header and Paragraph Inputs
    let sectionHeaderInput = document.createElement("input");
    sectionHeaderInput.classList.add("section-header");
    sectionHeaderInput.placeholder = "Section Header";
    sectionHeaderInput.oninput = updatePreview;

    let sectionParagraphInput = document.createElement("input");
    sectionParagraphInput.classList.add("section-paragraph");
    sectionParagraphInput.placeholder = "Section Content";
    sectionParagraphInput.oninput = updatePreview;

    // Font selectors for header and paragraph in the section
    let sectionHeaderFontSelect = document.createElement("select");
    sectionHeaderFontSelect.classList.add("section-header-font-select");
    sectionHeaderFontSelect.innerHTML = `
        <option value="Arial, sans-serif">Arial</option>
        <option value="'Courier New', Courier, monospace">Courier New</option>
        <option value="Georgia, serif">Georgia</option>
        <option value="'Times New Roman', Times, serif">Times New Roman</option>
        <option value="Verdana, Geneva, sans-serif">Verdana</option>
    `;
    sectionHeaderFontSelect.oninput = updatePreview;

    let sectionParagraphFontSelect = document.createElement("select");
    sectionParagraphFontSelect.classList.add("section-paragraph-font-select");
    sectionParagraphFontSelect.innerHTML = `
        <option value="Arial, sans-serif">Arial</option>
        <option value="'Courier New', Courier, monospace">Courier New</option>
        <option value="Georgia, serif">Georgia</option>
        <option value="'Times New Roman', Times, serif">Times New Roman</option>
        <option value="Verdana, Geneva, sans-serif">Verdana</option>
    `;
    sectionParagraphFontSelect.oninput = updatePreview;

    // Text size inputs for header and paragraph in the section
    let sectionHeaderTextSize = document.createElement("input");
    sectionHeaderTextSize.classList.add("section-header-text-size");
    sectionHeaderTextSize.type = "number";
    sectionHeaderTextSize.value = 36; // Default header text size
    sectionHeaderTextSize.placeholder = "Header Text Size (px)";
    sectionHeaderTextSize.oninput = updatePreview;

    let sectionParagraphTextSize = document.createElement("input");
    sectionParagraphTextSize.classList.add("section-paragraph-text-size");
    sectionParagraphTextSize.type = "number";
    sectionParagraphTextSize.value = 16; // Default paragraph text size
    sectionParagraphTextSize.placeholder = "Paragraph Text Size (px)";
    sectionParagraphTextSize.oninput = updatePreview;

    // Text alignment for both section header and paragraph
    let sectionHeaderAlign = document.createElement("select");
    sectionHeaderAlign.classList.add("section-header-align");
    sectionHeaderAlign.innerHTML = `
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
    `;
    sectionHeaderAlign.oninput = updatePreview;

    let sectionParagraphAlign = document.createElement("select");
    sectionParagraphAlign.classList.add("section-paragraph-align");
    sectionParagraphAlign.innerHTML = `
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
    `;
    sectionParagraphAlign.oninput = updatePreview;

    // Append all elements for the section
    sectionContainer.appendChild(sectionHeaderInput);
    sectionContainer.appendChild(sectionParagraphInput);
    sectionContainer.appendChild(sectionHeaderFontSelect);
    sectionContainer.appendChild(sectionParagraphFontSelect);
    sectionContainer.appendChild(sectionHeaderTextSize);
    sectionContainer.appendChild(sectionParagraphTextSize);
    sectionContainer.appendChild(sectionHeaderAlign);
    sectionContainer.appendChild(sectionParagraphAlign);

    document.getElementById("sectionsContainer").appendChild(sectionContainer);
}

document.getElementById("addSectionButton").addEventListener("click", addSection);

// Initialize preview
document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});
