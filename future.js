/* hello people!!! This page’s sole purpose is to inflate the javascript number so I can show off to my friends.

I’ll just copypaste some useless code I can use in the future here

let count = 0; 

function increment() {
    count++;
    display();
}

function decrement() {
    count--;
    display();
}

function display() {
    document.body.innerText = count;
}

document.body.onclick = increment;
document.body.oncontextmenu = function(e) {
    e.preventDefault();
    decrement();
};

display();


let darkMode = false;

function toggleTheme() {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
    button.innerText = darkMode ? "Light Mode" : "Dark Mode";
}

let button = document.createElement("button");
button.innerText = "Dark Mode";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.onclick = toggleTheme;

document.body.appendChild(button);


Qr code

function generateQR(text) {
    let qr = document.createElement("img");
    qr.src = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(text)}`;
    document.body.innerHTML = "";
    document.body.appendChild(qr);
}

let input = document.createElement("input");
input.placeholder = "Enter text...";
input.style.display = "block";

let button = document.createElement("button");
button.innerText = "Generate QR";
button.onclick = () => generateQR(input.value);

document.body.appendChild(input);
document.body.appendChild(button);


class ButtonManager {
    constructor(text) {
        this.button = document.createElement("button");
        this.text = text;
        this.init();
    }

    init() {
        this.setText(this.text);
        this.addStyles();
        this.addEventListeners();
        this.appendToBody();
    }

    setText(text) {
        this.button.innerText = text;
    }

    addStyles() {
        this.button.style.padding = "10px 20px";
        this.button.style.fontSize = "16px";
        this.button.style.border = "2px solid black";
        this.button.style.backgroundColor = "#f0f0f0";
        this.button.style.cursor = "pointer";
    }

    addEventListeners() {
        this.button.addEventListener("click", () => {
            this.handleClick();
        });
    }

    handleClick() {
        new AlertManager("Button Clicked!");
    }

    appendToBody() {
        document.body.appendChild(this.button);
    }
}

class AlertManager {
    constructor(message) {
        this.message = message;
        this.showAlert();
    }

    showAlert() {
        setTimeout(() => {
            alert(this.message);
        }, 200);
    }
}

new ButtonManager("Click Me");

class TimeDisplay {
    constructor() {
        this.container = document.createElement("div");
        this.container.style.fontSize = "24px";
        this.container.style.fontFamily = "Arial, sans-serif";
        this.container.style.textAlign = "center";
        this.container.style.marginTop = "20px";
        document.body.appendChild(this.container);
        this.updateTime();
    }

    updateTime() {
        this.container.innerText = this.getCurrentTime();
        this.scheduleNextUpdate();
    }

    getCurrentTime() {
        return new TimeFormatter(new Date()).formatTime();
    }

    scheduleNextUpdate() {
        setTimeout(() => this.updateTime(), 1000);
    }
}

class TimeFormatter {
    constructor(date) {
        this.date = date;
    }

    formatTime() {
        return `${this.formatNumber(this.date.getHours())}:${this.formatNumber(this.date.getMinutes())}:${this.formatNumber(this.date.getSeconds())}`;
    }

    formatNumber(num) {
        return num < 10 ? "0" + num : num;
    }
}

new TimeDisplay();


class Garden {
    constructor() {
        this.flowers = [];
        this.init();
    }

    init() {
        this.createGardenArea();
        this.startGrowing();
    }

    createGardenArea() {
        this.gardenArea = document.createElement("div");
        this.gardenArea.style.position = "relative";
        this.gardenArea.style.width = "100vw";
        this.gardenArea.style.height = "100vh";
        this.gardenArea.style.overflow = "hidden";
        this.gardenArea.style.backgroundColor = "#87CEEB";
        document.body.appendChild(this.gardenArea);
    }

    startGrowing() {
        setInterval(() => this.growFlower(), 1500);
    }

    growFlower() {
        if (this.flowers.length >= 20) return;
        let flower = new Flower(this.gardenArea);
        this.flowers.push(flower);
    }
}

class Flower {
    constructor(container) {
        this.container = container;
        this.element = document.createElement("div");
        this.size = this.randomSize();
        this.position = this.randomPosition();
        this.color = this.randomColor();
        this.createFlower();
    }

    createFlower() {
        this.element.style.position = "absolute";
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.borderRadius = "50%";
        this.element.style.backgroundColor = this.color;
        this.element.style.left = `${this.position.x}px`;
        this.element.style.bottom = `0px`;
        this.element.style.transition = "bottom 3s ease-in-out";
        
        this.stem = document.createElement("div");
        this.stem.style.position = "absolute";
        this.stem.style.width = "5px";
        this.stem.style.height = "50px";
        this.stem.style.backgroundColor = "green";
        this.stem.style.left = "50%";
        this.stem.style.bottom = "-50px";
        this.stem.style.transform = "translateX(-50%)";

        this.element.appendChild(this.stem);
        this.container.appendChild(this.element);
        
        setTimeout(() => {
            this.element.style.bottom = `${this.position.y}px`;
        }, 100);
    }

    randomSize() {
        return Math.floor(Math.random() * 30) + 20;
    }

    randomPosition() {
        return {
            x: Math.random() * (window.innerWidth - 50),
            y: Math.random() * (window.innerHeight - 100)
        };
    }

    randomColor() {
        let colors = ["red", "yellow", "pink", "purple", "orange"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

new Garden();

*/