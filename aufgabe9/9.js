/*Aufgabe: (Nummer 8)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (09.05.17)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
/* Die Regenbogenflügel sind geplant gewesen. */
var inheritance;
(function (inheritance) {
    window.addEventListener("load", init);
    let bee = [];
    let honeybee = [];
    inheritance.flowers = [];
    let n = 20;
    let image;
    let m = 6;
    let h = 4;
    let flowerAmount = 20;
    function init() {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);
        inheritance.crc2 = canvas.getContext("2d");
        console.log(inheritance.crc2);
        inheritance.crc2.fillStyle = "#ccffff";
        inheritance.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Wolke + Himmel
        drawCloud(0, 100, "#f2f2f2", "#f2f2f2");
        drawCloud(350, 60, "#ffe6f2", "#ffe6f2");
        drawCloud(900, 50, "#ffe6f2", "#ffe6f2");
        drawCloud(170, 0, "#ffffff", "#ffffff");
        drawCloud(570, 20, "#f2f2f2", "#f2f2f2");
        drawCloud(1600, 20, "#ffe6f2", "#ffe6f2");
        drawCloud(1290, 70, "#f2f2f2", "#f2f2f2");
        drawCloud1(770, 150, "#ffffff", "#ffffff");
        drawCloud1(880, 0, "#f2f2f2", "#f2f2f2");
        drawCloud1(1080, 0, "#ffffff", "#ffffff");
        drawCloud1(1500, 150, "#ffffff", "#ffffff");
        drawCloud1(1760, 10, "#ffffff", "#ffffff");
        drawSun(0, 0, "#ffffff", "#ffff99");
        //Berge
        drawBerg(2000, 540, "#cccccc", "#cccccc");
        drawBerg1(1800, 540, "#bfbfbf", "#bfbfbf");
        drawBerg2(1900, 540, "#d9d9d9", "#d9d9d9");
        drawBerg(1500, 540, "#cccccc", "#cccccc");
        drawBerg1(1300, 540, "#bfbfbf", "#bfbfbf");
        drawBerg2(1400, 540, "#d9d9d9", "#d9d9d9");
        drawBerg(1000, 540, "#cccccc", "#cccccc");
        drawBerg1(900, 540, "#bfbfbf", "#bfbfbf");
        drawBerg2(700, 540, "#d9d9d9", "#d9d9d9");
        drawBerg(500, 540, "#cccccc", "#cccccc");
        drawBerg1(600, 540, "#bfbfbf", "#bfbfbf");
        drawBerg2(700, 540, "#d9d9d9", "#d9d9d9");
        //Wiesen
        drawWiese3(0, 473, "#2d8659", "#2d8659");
        drawFluss(1100, 473, "#004d00", "#99e6ff", " #cceeff", "#cceeff");
        drawWiese1(1920, 473, "#339966", "#339966");
        drawWiese2(0, 540, "#adebad", "#adebad");
        //Haus
        drawHaus(0, 540, "#734d26", "#d9b38c", "#663300", "#cc9966");
        drawTure(0, 540, "#4d2600", "#ac7339");
        drawFenster(0, 540, "#4da6ff", "#cce6ff");
        drawFenster(165, 540, "#4da6ff", "#cce6ff");
        drawBank(20, 700, "#734d26", "#d9b38c", "#4d2600", "#4d2600");
        drawStrasse(0, 540, "#4d4d4d", "#999999");
        drawBusch(0, 540, "#339966", "#339966");
        drawBusch1(190, 540, "#339966", "#339966");
        drawKorb(1620, 940, "#663300", "#663300", "#000000", "#000000");
        console.log(inheritance.flowers);
        // Hintergrundbild abspeichern
        image = inheritance.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Blume platzieren
        for (let i = 0; i < flowerAmount; i++) {
            let x = Math.random() * (1620 - 180) + 180;
            let y = Math.random() * (1000 - 850) + 850;
            let type = Math.round(Math.random() * 2);
            switch (type) {
                case 0:
                    inheritance.flowers.push(new inheritance.Ganseblume(x, y));
                    break;
                case 1:
                    inheritance.flowers.push(new inheritance.BlauBlume(x, y));
                    break;
                case 2:
                default:
                    inheritance.flowers.push(new inheritance.Sonnenblume(x, y));
            }
        }
        //Startposition der Bienen 
        for (let i = 0; i < n; i++) {
            bee[i] = new inheritance.BieneData();
            let h = new inheritance.Honigbiene();
            honeybee.push(h);
        }
        window.setTimeout(animate, 20);
        // Eventlistener -> bei Klick neue Biene
        canvas.addEventListener("touch", drawNeueBiene);
        canvas.addEventListener("click", drawNeueBiene);
    }
    //Wolken und Sonne
    function drawCloud(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x, _y, 100, 180, 470);
        inheritance.crc2.arc(_x + 100, _y - 50, 100, 180, 470);
        inheritance.crc2.arc(_x + 120, _y + 50, 100, 180, 270);
        inheritance.crc2.arc(_x + 270, _y, 100, 180, 470);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Wolken zeichnen 
    function drawCloud1(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x, _y, 50, 0, 360);
        inheritance.crc2.arc(_x + 50, _y + 30, 50, 0, 360);
        inheritance.crc2.arc(_x + 110, _y + 30, 50, 0, 360);
        inheritance.crc2.arc(_x + 70, _y - 20, 60, 0, 360);
        inheritance.crc2.arc(_x + 140, _y, 50, 0, 360);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Sonne zeichnen
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x, _y, 140, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Wiese 1 zeichnen
    function drawWiese1(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.lineTo(_x - 1920, _y + 470);
        inheritance.crc2.lineTo(_x, _y + 470);
        inheritance.crc2.lineTo(_x, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Wiese 2 zeichnen 
    function drawWiese2(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.lineTo(_x + 300, _y);
        inheritance.crc2.lineTo(_x + 1920, _y + 400);
        inheritance.crc2.lineTo(_x + 1920, _y + 540);
        inheritance.crc2.lineTo(_x, _y + 540);
        inheritance.crc2.lineTo(_x, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // wiese 3 zeichnen 
    function drawWiese3(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.lineTo(_x + 1920, _y);
        inheritance.crc2.lineTo(_x + 1920, _y + 400);
        inheritance.crc2.lineTo(_x + 1920, _y + 540);
        inheritance.crc2.lineTo(_x, _y + 540);
        inheritance.crc2.lineTo(_x, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // BERGE 
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 30, _y);
        inheritance.crc2.lineTo(_x - 150, _y - 250);
        inheritance.crc2.lineTo(_x - 300, _y);
        inheritance.crc2.lineTo(_x, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Berg 1 zeichnen
    function drawBerg1(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 30, _y);
        inheritance.crc2.lineTo(_x - 180, _y - 300);
        inheritance.crc2.lineTo(_x - 360, _y);
        inheritance.crc2.lineTo(_x, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Berg 2 zeichnnen
    function drawBerg2(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 30, _y);
        inheritance.crc2.lineTo(_x - 150, _y - 200);
        inheritance.crc2.lineTo(_x - 300, _y);
        inheritance.crc2.lineTo(_x, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Haus
    function drawHaus(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.lineTo(_x + 300, _y);
        inheritance.crc2.lineTo(_x + 300, _y - 200);
        inheritance.crc2.lineTo(_x + 150, _y - 300);
        inheritance.crc2.lineTo(_x, _y - 200);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x, _y - 200);
        inheritance.crc2.lineTo(_x + 300, _y - 200);
        inheritance.crc2.lineTo(_x + 150, _y - 300);
        inheritance.crc2.lineTo(_x, _y - 200);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Türe zeichnen
    function drawTure(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 125, _y);
        inheritance.crc2.lineTo(_x + 175, _y);
        inheritance.crc2.lineTo(_x + 175, _y - 60);
        inheritance.crc2.lineTo(_x + 125, _y - 60);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Straße zeichnen
    function drawStrasse(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 175, _y);
        inheritance.crc2.lineTo(_x + 175, _y);
        inheritance.crc2.lineTo(_x + 175, _y + 60);
        inheritance.crc2.lineTo(_x + 179, _y + 68);
        inheritance.crc2.lineTo(_x + 350, _y + 270);
        inheritance.crc2.lineTo(_x + 200, _y + 340);
        inheritance.crc2.lineTo(_x, _y + 540);
        inheritance.crc2.lineTo(_x, _y + 480);
        inheritance.crc2.lineTo(_x + 180, _y + 290);
        inheritance.crc2.lineTo(_x + 270, _y + 240);
        inheritance.crc2.lineTo(_x + 130, _y + 70);
        inheritance.crc2.lineTo(_x + 125, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Fenster zeichnen
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 50, _y - 100);
        inheritance.crc2.lineTo(_x + 80, _y - 100);
        inheritance.crc2.lineTo(_x + 80, _y - 130);
        inheritance.crc2.lineTo(_x + 50, _y - 130);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Busch zeichnen
    function drawBusch(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 10, _y - 10, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 20, _y - 10, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 30, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 20, _y + 5, 15, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 40, _y + 25);
        inheritance.crc2.arc(_x + 40, _y + 25, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 50, _y + 15);
        inheritance.crc2.arc(_x + 50, _y + 15, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 65, _y + 15);
        inheritance.crc2.arc(_x + 65, _y + 15, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 75, _y + 25);
        inheritance.crc2.arc(_x + 75, _y + 25, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 55, _y + 25);
        inheritance.crc2.arc(_x + 55, _y + 25, 15, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 80, _y);
        inheritance.crc2.arc(_x + 80, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 90, _y);
        inheritance.crc2.arc(_x + 90, _y - 8, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 100, _y);
        inheritance.crc2.arc(_x + 100, _y - 8, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 110, _y);
        inheritance.crc2.arc(_x + 110, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 100, _y);
        inheritance.crc2.arc(_x + 100, _y + 5, 15, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Busch zeichnen
    function drawBusch1(_x, _y, _strokeColor, _fillColor) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 10, _y - 10, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 20, _y - 10, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 30, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.arc(_x + 20, _y + 5, 15, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 70, _y);
        inheritance.crc2.arc(_x + 70, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 80, _y);
        inheritance.crc2.arc(_x + 80, _y - 10, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 90, _y);
        inheritance.crc2.arc(_x + 90, _y - 10, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 100, _y);
        inheritance.crc2.arc(_x + 100, _y, 15, 180, 270);
        inheritance.crc2.moveTo(_x + 90, _y);
        inheritance.crc2.arc(_x + 90, _y + 5, 15, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Bank zeichnen
    function drawBank(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 30, _y - 2);
        inheritance.crc2.lineTo(_x + 50, _y - 5);
        inheritance.crc2.lineTo(_x + 50, _y + 93);
        inheritance.crc2.lineTo(_x + 30, _y + 100);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 120, _y - 14);
        inheritance.crc2.lineTo(_x + 140, _y - 17);
        inheritance.crc2.lineTo(_x + 140, _y + 80);
        inheritance.crc2.lineTo(_x + 120, _y + 85);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 120, _y + 40);
        inheritance.crc2.lineTo(_x + 140, _y + 38);
        inheritance.crc2.lineTo(_x + 165, _y + 45);
        inheritance.crc2.lineTo(_x + 145, _y + 45);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 30, _y + 48);
        inheritance.crc2.lineTo(_x + 50, _y + 44);
        inheritance.crc2.lineTo(_x + 75, _y + 60);
        inheritance.crc2.lineTo(_x + 55, _y + 58);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 145, _y + 38);
        inheritance.crc2.lineTo(_x + 160, _y + 45);
        inheritance.crc2.lineTo(_x + 160, _y + 95);
        inheritance.crc2.lineTo(_x + 145, _y + 100);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 55, _y + 63);
        inheritance.crc2.lineTo(_x + 75, _y + 60);
        inheritance.crc2.lineTo(_x + 75, _y + 115);
        inheritance.crc2.lineTo(_x + 55, _y + 120);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x, _y);
        inheritance.crc2.lineTo(_x + 160, _y - 20);
        inheritance.crc2.lineTo(_x + 160, _y - 5);
        inheritance.crc2.lineTo(_x, _y + 15);
        inheritance.crc2.closePath();
        inheritance.crc2.moveTo(_x, _y + 28);
        inheritance.crc2.lineTo(_x + 160, _y + 8);
        inheritance.crc2.lineTo(_x + 160, _y + 22);
        inheritance.crc2.lineTo(_x, _y + 43);
        inheritance.crc2.closePath();
        inheritance.crc2.moveTo(_x + 5, _y + 49);
        inheritance.crc2.lineTo(_x + 160, _y + 28);
        inheritance.crc2.lineTo(_x + 175, _y + 32);
        inheritance.crc2.lineTo(_x + 20, _y + 55);
        inheritance.crc2.closePath();
        inheritance.crc2.moveTo(_x + 27, _y + 59);
        inheritance.crc2.lineTo(_x + 184, _y + 37);
        inheritance.crc2.lineTo(_x + 197, _y + 40);
        inheritance.crc2.lineTo(_x + 40, _y + 64);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Fluss zeichen
    function drawFluss(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 50, _y - 2);
        inheritance.crc2.lineTo(_x + 10, _y + 50);
        inheritance.crc2.lineTo(_x, _y + 60);
        inheritance.crc2.lineTo(_x - 8, _y + 65);
        inheritance.crc2.lineTo(_x - 20, _y + 70);
        inheritance.crc2.lineTo(_x - 30, _y + 80);
        inheritance.crc2.lineTo(_x - 40, _y + 89);
        inheritance.crc2.lineTo(_x - 50, _y + 95);
        inheritance.crc2.lineTo(_x - 60, _y + 105);
        inheritance.crc2.lineTo(_x - 110, _y + 135);
        inheritance.crc2.lineTo(_x - 200, _y + 165);
        inheritance.crc2.lineTo(_x - 290, _y + 185);
        inheritance.crc2.lineTo(_x - 340, _y + 195);
        inheritance.crc2.lineTo(_x - 360, _y + 210);
        inheritance.crc2.lineTo(_x - 400, _y + 230);
        inheritance.crc2.lineTo(_x - 550, _y + 200);
        inheritance.crc2.lineTo(_x - 410, _y + 140);
        inheritance.crc2.lineTo(_x - 260, _y + 110);
        inheritance.crc2.lineTo(_x - 180, _y + 90);
        inheritance.crc2.lineTo(_x - 150, _y + 80);
        inheritance.crc2.lineTo(_x - 80, _y + 50);
        inheritance.crc2.lineTo(_x - 50, _y + 30);
        inheritance.crc2.lineTo(_x + 10, _y);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 45, _y + 3);
        inheritance.crc2.lineTo(_x + 30, _y + 3);
        inheritance.crc2.moveTo(_x - 15, _y + 15);
        inheritance.crc2.lineTo(_x + 5, _y + 15);
        inheritance.crc2.moveTo(_x + 24, _y + 30);
        inheritance.crc2.lineTo(_x - 10, _y + 30);
        inheritance.crc2.moveTo(_x - 59, _y + 40);
        inheritance.crc2.lineTo(_x - 25, _y + 45);
        inheritance.crc2.moveTo(_x - 25, _y + 70);
        inheritance.crc2.lineTo(_x - 50, _y + 68);
        inheritance.crc2.moveTo(_x - 120, _y + 70);
        inheritance.crc2.lineTo(_x - 80, _y + 80);
        inheritance.crc2.moveTo(_x - 69, _y + 110);
        inheritance.crc2.lineTo(_x - 100, _y + 104);
        inheritance.crc2.moveTo(_x - 205, _y + 100);
        inheritance.crc2.lineTo(_x - 145, _y + 115);
        inheritance.crc2.moveTo(_x - 165, _y + 150);
        inheritance.crc2.lineTo(_x - 210, _y + 140);
        inheritance.crc2.moveTo(_x - 349, _y + 130);
        inheritance.crc2.lineTo(_x - 300, _y + 150);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Bienenkorb Zeichnen
    function drawKorb(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 125, _y);
        inheritance.crc2.lineTo(_x + 145, _y);
        inheritance.crc2.lineTo(_x + 145, _y - 250);
        inheritance.crc2.lineTo(_x + 125, _y - 250);
        inheritance.crc2.moveTo(_x + 125, _y - 250);
        inheritance.crc2.lineTo(_x + 80, _y - 250);
        inheritance.crc2.lineTo(_x + 80, _y - 400);
        inheritance.crc2.lineTo(_x + 185, _y - 400);
        inheritance.crc2.lineTo(_x + 185, _y - 250);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor;
        inheritance.crc2.strokeStyle = _strokeColor;
        inheritance.crc2.moveTo(_x + 133, _y - 400);
        inheritance.crc2.arc(_x + 133, _y - 400, 52, 180, 270);
        inheritance.crc2.moveTo(_x + 80, _y - 380);
        inheritance.crc2.arc(_x + 80, _y - 380, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 70, _y - 350);
        inheritance.crc2.arc(_x + 70, _y - 350, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 70, _y - 320);
        inheritance.crc2.arc(_x + 70, _y - 320, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 70, _y - 290);
        inheritance.crc2.arc(_x + 70, _y - 290, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 80, _y - 260);
        inheritance.crc2.arc(_x + 80, _y - 260, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 133, _y - 250);
        inheritance.crc2.arc(_x + 133, _y - 250, 52, 180, 270);
        inheritance.crc2.moveTo(_x + 185, _y - 260);
        inheritance.crc2.arc(_x + 185, _y - 260, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 195, _y - 290);
        inheritance.crc2.arc(_x + 195, _y - 290, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 195, _y - 320);
        inheritance.crc2.arc(_x + 195, _y - 320, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 195, _y - 350);
        inheritance.crc2.arc(_x + 195, _y - 350, 20, 180, 270);
        inheritance.crc2.moveTo(_x + 185, _y - 380);
        inheritance.crc2.arc(_x + 185, _y - 380, 20, 180, 270);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
        inheritance.crc2.beginPath();
        inheritance.crc2.fillStyle = _fillColor1;
        inheritance.crc2.strokeStyle = _strokeColor1;
        inheritance.crc2.moveTo(_x + 120, _y - 250);
        inheritance.crc2.lineTo(_x + 145, _y - 250);
        inheritance.crc2.lineTo(_x + 145, _y - 290);
        inheritance.crc2.lineTo(_x + 120, _y - 290);
        inheritance.crc2.closePath();
        inheritance.crc2.fill();
        inheritance.crc2.stroke();
    }
    // Neue Biene zeichnen
    function drawNeueBiene() {
        let b = new inheritance.BieneData();
        bee.push(b);
        let h = new inheritance.Honigbiene();
        honeybee.push(h);
        n++;
    }
    // Animate Funktion
    function animate() {
        // Hintergrundbild abrufen
        inheritance.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < bee.length; i++) {
            let b = bee[i];
            b.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            // Biene malen lassen
            b.update();
        }
        for (let i = 0; i < honeybee.length; i++) {
            honeybee[i].draw();
        }
        for (let i = 0; i < inheritance.flowers.length; i++) {
            inheritance.flowers[i].draw();
        }
        window.setTimeout(animate, 20);
    }
})(inheritance || (inheritance = {}));
//# sourceMappingURL=9.js.map