function generateSecurePassword(length = 16, useNumbers = true, useSpecialChars = true) {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSpecialChars) charset += "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let password = "";
    const crypto = window.crypto || window.msCrypto;
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
        password += charset[randomValues[i] % charset.length];
    }
    return password;
}

function showPopup(password) {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "darkblue";
    popup.style.padding = "20px";
    popup.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    popup.style.borderRadius = "8px";
    popup.style.textAlign = "center";
    popup.style.width = "300px";
    popup.innerHTML = `<p>Your secure password:</p><strong>${password}</strong><br><button id="closePopup" style="background-color: darkblue; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">OK</button>`;
    
    document.body.appendChild(popup);
    
    document.getElementById("closePopup").addEventListener("click", () => {
        document.body.removeChild(popup);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.background = "navy";
    container.style.padding = "20px";
    container.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    container.style.borderRadius = "8px";
    container.style.textAlign = "center";
    container.style.width = "320px";
    
    const title = document.createElement("h2");
    title.textContent = "Password Generator";
    title.style.marginBottom = "10px";
    
    const lengthLabel = document.createElement("label");
    lengthLabel.textContent = "Length:";
    lengthLabel.style.display = "block";
    
    const lengthInput = document.createElement("input");
    lengthInput.type = "number";
    lengthInput.value = 16;
    lengthInput.min = 4;
    lengthInput.style.marginBottom = "10px";
    lengthInput.style.width = "100%";
    
    const numbersLabel = document.createElement("label");
    numbersLabel.innerHTML = `<input type="checkbox" checked> Include Numbers`;
    
    const specialCharsLabel = document.createElement("label");
    specialCharsLabel.innerHTML = `<input type="checkbox" checked> Include Special Characters`;
    
    const button = document.createElement("button");
    button.textContent = "Generate Secure Password";
    button.style.backgroundColor = "darkblue";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.display = "block";
    button.style.marginTop = "10px";
    
    button.addEventListener("click", () => {
        const length = parseInt(lengthInput.value, 10);
        const useNumbers = numbersLabel.querySelector("input").checked;
        const useSpecialChars = specialCharsLabel.querySelector("input").checked;
        const password = generateSecurePassword(length, useNumbers, useSpecialChars);
        showPopup(password);
    });
    
    container.appendChild(title);
    container.appendChild(lengthLabel);
    container.appendChild(lengthInput);
    container.appendChild(numbersLabel);
    container.appendChild(document.createElement("br"));
    container.appendChild(specialCharsLabel);
    container.appendChild(document.createElement("br"));
    container.appendChild(button);
    
    document.body.appendChild(container);
});


// Originally had some hiccups. Fixed problems with, you know including the code!
