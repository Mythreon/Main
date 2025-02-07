// DO NOT ASK
// DO NOT MODIFY
// I HAVE SPENT MANY MANY MANY HOURS WITH THIS CODE
// I DO NOT KNOW HOW IT FUNCTIONS
// ONLY NOBODY KNOWS, NEVER ANYONE KNOWS.
// THIS CODE IS A TOTAL MESS. DO NOT TRY TO OPTIMIZE IT, YOU WILL BREAK IT!
// - Mythreon
// Total hours spent optimizing the code: 2

              ///////////////////////////////////////////////
              // Functions and text from this point on     //
              // Are actual comments, please follow them.  //
              // - Mythreon (The solo developer)           //
              ///////////////////////////////////////////////

// Function to update the preview of the page
let sectionCount = 0;
let debounceTimeout;

// Debounced updatePreview function
function updatePreview() {
    // Clear the previous timeout, and set a new one
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        // Get values from the input fields for the main page
        let title = document.getElementById("pageTitle").value || "My Website";
        let header = document.getElementById("headerText").value || "Welcome!";
        let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
        let bgColor = document.getElementById("bgColor").value || "#ffffff";
        let headerAlign = document.getElementById("headerAlign").value || "left";
        let paragraphAlign = document.getElementById("paragraphAlign").value || "left";
        let headerTextColor = document.getElementById("headerTextColor").value || "#000000";
        let paragraphTextColor = document.getElementById("paragraphTextColor").value || "#000000";

        // Create styles for the main header and paragraph
        let headerStyle = `text-align: ${headerAlign}; color: ${headerTextColor};`;
        let paragraphStyle = `text-align: ${paragraphAlign}; color: ${paragraphTextColor};`;

        // Start building the HTML content
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
                        font-family: Arial, sans-serif; 
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

        // Add dynamically created sections
        const sections = document.getElementById("sectionsContainer").children;
        for (let i = 0; i < sections.length; i++) {
            let sectionHeader = sections[i].querySelector('.section-header').value || "New Section";
            let sectionParagraph = sections[i].querySelector('.section-paragraph').value || "Content goes here.";
            
            // Get color and alignment values for each section
            let sectionHeaderTextColor = sections[i].querySelector('.section-header-color').value || "#000000";
            let sectionParagraphTextColor = sections[i].querySelector('.section-paragraph-color').value || "#000000";
            let sectionHeaderAlign = sections[i].querySelector('.section-header-align').value || "left";
            let sectionParagraphAlign = sections[i].querySelector('.section-paragraph-align').value || "left";

            // Add section content with styles
            let sectionHeaderStyle = `text-align: ${sectionHeaderAlign}; color: ${sectionHeaderTextColor}; margin: 0 auto;`;
            let sectionParagraphStyle = `text-align: ${sectionParagraphAlign}; color: ${sectionParagraphTextColor}; margin: 0 auto;`;

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
    }, 300); // Adjust 300ms to whatever delay feels appropriate
}

function downloadHTML() {
    let title = document.getElementById("pageTitle").value || "My Website";
    let header = document.getElementById("headerText").value || "Welcome!";
    let paragraph = document.getElementById("paragraphText").value || "This is my new page.";
    let bgColor = document.getElementById("bgColor").value || "#ffffff";
    let headerAlign = document.getElementById("headerAlign").value || "left";
    let paragraphAlign = document.getElementById("paragraphAlign").value || "left";
    let headerTextColor = document.getElementById("headerTextColor").value || "#000000";
    let paragraphTextColor = document.getElementById("paragraphTextColor").value || "#000000";

    // Build HTML content (same as updatePreview function)
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
                    font-family: Arial, sans-serif; 
                    padding: 50px;
                    margin: 0;
                    box-sizing: border-box;
                }
                h1 { 
                    text-align: ${headerAlign}; 
                    color: ${headerTextColor};
                    margin: 0 auto;
                }
                p { 
                    text-align: ${paragraphAlign}; 
                    color: ${paragraphTextColor};
                    margin: 0 auto;
                }
            </style>
        </head>
        <body>
            <h1>${header}</h1>
            <p>${paragraph}</p>
    `;

    // Add dynamically created sections
    const sections = document.getElementById("sectionsContainer").children;
    for (let i = 0; i < sections.length; i++) {
        let sectionHeader = sections[i].querySelector('.section-header').value || "New Section";
        let sectionParagraph = sections[i].querySelector('.section-paragraph').value || "Content goes here.";
        
        // Get color and alignment values for each section
        let sectionHeaderTextColor = sections[i].querySelector('.section-header-color').value || "#000000";
        let sectionParagraphTextColor = sections[i].querySelector('.section-paragraph-color').value || "#000000";
        let sectionHeaderAlign = sections[i].querySelector('.section-header-align').value || "left";
        let sectionParagraphAlign = sections[i].querySelector('.section-paragraph-align').value || "left";

        let sectionHeaderStyle = `text-align: ${sectionHeaderAlign}; color: ${sectionHeaderTextColor}; margin: 0 auto;`;
        let sectionParagraphStyle = `text-align: ${sectionParagraphAlign}; color: ${sectionParagraphTextColor}; margin: 0 auto;`;

        htmlContent += `
            <h2 style="${sectionHeaderStyle}">${sectionHeader}</h2>
            <p style="${sectionParagraphStyle}">${sectionParagraph}</p>
        `;
    }

    // Close HTML content and prepare for download
    htmlContent += `
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

function addNewSection() {
    sectionCount++;

    // Create new section with header, paragraph, color pickers, and alignment options
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");

    const sectionHeaderInput = document.createElement("input");
    sectionHeaderInput.type = "text";
    sectionHeaderInput.classList.add("section-header");
    sectionHeaderInput.placeholder = `Section ${sectionCount} Header`;

    const sectionParagraphInput = document.createElement("textarea");
    sectionParagraphInput.classList.add("section-paragraph");
    sectionParagraphInput.placeholder = `Section ${sectionCount} Content`;

    const sectionHeaderColorInput = document.createElement("input");
    sectionHeaderColorInput.type = "color";
    sectionHeaderColorInput.classList.add("section-header-color");

    const sectionParagraphColorInput = document.createElement("input");
    sectionParagraphColorInput.type = "color";
    sectionParagraphColorInput.classList.add("section-paragraph-color");

    const sectionHeaderAlignSelect = document.createElement("select");
    sectionHeaderAlignSelect.classList.add("section-header-align");
    sectionHeaderAlignSelect.innerHTML = `
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
    `;

    const sectionParagraphAlignSelect = document.createElement("select");
    sectionParagraphAlignSelect.classList.add("section-paragraph-align");
    sectionParagraphAlignSelect.innerHTML = `
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
    `;

    // Add inputs to the section div, This one should be really used for new stuff, Umh.. Yeah?
    sectionDiv.appendChild(sectionHeaderInput);
    sectionDiv.appendChild(sectionParagraphInput);
    sectionDiv.appendChild(sectionHeaderColorInput);
    sectionDiv.appendChild(sectionParagraphColorInput);
    sectionDiv.appendChild(sectionHeaderAlignSelect);
    sectionDiv.appendChild(sectionParagraphAlignSelect);

    document.getElementById("sectionsContainer").appendChild(sectionDiv);

    updatePreview();
}

document.getElementById("addSectionButton").addEventListener("click", addNewSection);

document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});
