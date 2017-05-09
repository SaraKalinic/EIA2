/*Aufgabe: (Nummer 7a)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (07.05.17)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
/* Die Regenbogenflügel sind geplant gewesen. */
var L6_Classes;
(function (L6_Classes) {
    window.addEventListener("load", init);
    let bee = [];
    let n = 10;
    let image;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);
        L6_Classes.crc2 = canvas.getContext("2d");
        console.log(L6_Classes.crc2);
        L6_Classes.crc2.fillStyle = "#ccffff";
        L6_Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Wolke + Himmel
        drawCloud(0, 100, 100, 180, 370, "#f2f2f2", "#f2f2f2");
        drawCloud(350, 60, 100, 180, 370, "#ffe6f2", "#ffe6f2");
        drawCloud(900, 50, 100, 180, 370, "#ffe6f2", "#ffe6f2");
        drawCloud(170, 0, 100, 180, 370, "#ffffff", "#ffffff");
        drawCloud(570, 20, 100, 180, 370, "#f2f2f2", "#f2f2f2");
        drawCloud(1600, 20, 100, 180, 370, "#ffe6f2", "#ffe6f2");
        drawCloud(1290, 70, 100, 180, 370, "#f2f2f2", "#f2f2f2");
        drawCloud1(770, 150, 100, 180, 70, "#ffffff", "#ffffff");
        drawCloud1(880, 0, 100, 180, 70, "#f2f2f2", "#f2f2f2");
        drawCloud1(1080, 0, 100, 180, 70, "#ffffff", "#ffffff");
        drawCloud1(1500, 150, 100, 180, 70, "#ffffff", "#ffffff");
        drawCloud1(1760, 10, 100, 180, 70, "#ffffff", "#ffffff");
        drawSun(0, 0, 100, 180, 270, "#ffffff", "#ffff99");
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
        drawStraße(0, 540, "#4d4d4d", "#999999");
        drawBusch(0, 540, 100, 180, 270, "#339966", "#339966");
        drawBusch1(190, 540, 100, 180, 270, "#339966", "#339966");
        drawKorb(1620, 940, "#663300", "#663300", "#000000", "#000000");
        //Blume zufällig platzieren
        for (var i = 0; i < 19; i++) {
            let blumenFeld = Math.floor((Math.random() * 4) - 1);
            let _x = Math.floor(Math.random() * (1620 - 180)) + 180;
            let _y = Math.floor(Math.random() * (1000 - 850)) + 850;
            switch (blumenFeld) {
                case 0:
                    drawBlume(_x, _y, 5, 180, 270, "#ffff99", "#ffff99", "#4d2600", "#4d2600");
                    break;
                case 1:
                    drawBlume1(_x, _y, 5, 180, 270, "#ffffff", "#ffffff", "#ffff1a", "#ffff1a");
                    break;
                case 2:
                    drawBlume3(_x, _y, 5, 180, 270, "#66ccff", "#66ccff", "#3399ff", "#3399ff", "#ffff00", "#ffff00", "#663300", "#663300");
                    break;
            }
        }
        // Hintergrundbild abspeichern
        image = L6_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Startposition der Bienen 
        for (let i = 0; i < n; i++) {
            let b = new L6_Classes.BieneData();
            b.setStart();
            bee[i] = b;
        }
        window.setTimeout(animate, 20);
        // Eventlistener -> bei Klick neue Biene
        canvas.addEventListener("touch", drawNeueBiene);
        canvas.addEventListener("click", drawNeueBiene);
    }
    //Wolken und Sonne
    function drawCloud(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x, _y, 100, 180, 470);
        L6_Classes.crc2.arc(_x + 100, _y - 50, 100, 180, 470);
        L6_Classes.crc2.arc(_x + 120, _y + 50, 100, 180, 270);
        L6_Classes.crc2.arc(_x + 270, _y, 100, 180, 470);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Wolken zeichnen 
    function drawCloud1(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x, _y, 50, 0, 360);
        L6_Classes.crc2.arc(_x + 50, _y + 30, 50, 0, 360);
        L6_Classes.crc2.arc(_x + 110, _y + 30, 50, 0, 360);
        L6_Classes.crc2.arc(_x + 70, _y - 20, 60, 0, 360);
        L6_Classes.crc2.arc(_x + 140, _y, 50, 0, 360);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Sonne zeichnen
    function drawSun(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x, _y, 140, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Wiese 1 zeichnen
    function drawWiese1(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.lineTo(_x - 1920, _y + 470);
        L6_Classes.crc2.lineTo(_x, _y + 470);
        L6_Classes.crc2.lineTo(_x, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Wiese 2 zeichnen 
    function drawWiese2(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.lineTo(_x + 300, _y);
        L6_Classes.crc2.lineTo(_x + 1920, _y + 400);
        L6_Classes.crc2.lineTo(_x + 1920, _y + 540);
        L6_Classes.crc2.lineTo(_x, _y + 540);
        L6_Classes.crc2.lineTo(_x, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // wiese 3 zeichnen 
    function drawWiese3(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.lineTo(_x + 1920, _y);
        L6_Classes.crc2.lineTo(_x + 1920, _y + 400);
        L6_Classes.crc2.lineTo(_x + 1920, _y + 540);
        L6_Classes.crc2.lineTo(_x, _y + 540);
        L6_Classes.crc2.lineTo(_x, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // BERGE 
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 30, _y);
        L6_Classes.crc2.lineTo(_x - 150, _y - 250);
        L6_Classes.crc2.lineTo(_x - 300, _y);
        L6_Classes.crc2.lineTo(_x, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Berg 1 zeichnen
    function drawBerg1(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 30, _y);
        L6_Classes.crc2.lineTo(_x - 180, _y - 300);
        L6_Classes.crc2.lineTo(_x - 360, _y);
        L6_Classes.crc2.lineTo(_x, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Berg 2 zeichnnen
    function drawBerg2(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 30, _y);
        L6_Classes.crc2.lineTo(_x - 150, _y - 200);
        L6_Classes.crc2.lineTo(_x - 300, _y);
        L6_Classes.crc2.lineTo(_x, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Haus
    function drawHaus(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.lineTo(_x + 300, _y);
        L6_Classes.crc2.lineTo(_x + 300, _y - 200);
        L6_Classes.crc2.lineTo(_x + 150, _y - 300);
        L6_Classes.crc2.lineTo(_x, _y - 200);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x, _y - 200);
        L6_Classes.crc2.lineTo(_x + 300, _y - 200);
        L6_Classes.crc2.lineTo(_x + 150, _y - 300);
        L6_Classes.crc2.lineTo(_x, _y - 200);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Türe zeichnen
    function drawTure(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 125, _y);
        L6_Classes.crc2.lineTo(_x + 175, _y);
        L6_Classes.crc2.lineTo(_x + 175, _y - 60);
        L6_Classes.crc2.lineTo(_x + 125, _y - 60);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Straße zeichnen
    function drawStraße(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 175, _y);
        L6_Classes.crc2.lineTo(_x + 175, _y);
        L6_Classes.crc2.lineTo(_x + 175, _y + 60);
        L6_Classes.crc2.lineTo(_x + 179, _y + 68);
        L6_Classes.crc2.lineTo(_x + 350, _y + 270);
        L6_Classes.crc2.lineTo(_x + 200, _y + 340);
        L6_Classes.crc2.lineTo(_x, _y + 540);
        L6_Classes.crc2.lineTo(_x, _y + 480);
        L6_Classes.crc2.lineTo(_x + 180, _y + 290);
        L6_Classes.crc2.lineTo(_x + 270, _y + 240);
        L6_Classes.crc2.lineTo(_x + 130, _y + 70);
        L6_Classes.crc2.lineTo(_x + 125, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Fenster zeichnen
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 50, _y - 100);
        L6_Classes.crc2.lineTo(_x + 80, _y - 100);
        L6_Classes.crc2.lineTo(_x + 80, _y - 130);
        L6_Classes.crc2.lineTo(_x + 50, _y - 130);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Busch zeichnen
    function drawBusch(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 10, _y - 10, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 20, _y - 10, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 30, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 20, _y + 5, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 40, _y + 25);
        L6_Classes.crc2.arc(_x + 40, _y + 25, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 50, _y + 15);
        L6_Classes.crc2.arc(_x + 50, _y + 15, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 65, _y + 15);
        L6_Classes.crc2.arc(_x + 65, _y + 15, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 75, _y + 25);
        L6_Classes.crc2.arc(_x + 75, _y + 25, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 55, _y + 25);
        L6_Classes.crc2.arc(_x + 55, _y + 25, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 80, _y);
        L6_Classes.crc2.arc(_x + 80, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 90, _y);
        L6_Classes.crc2.arc(_x + 90, _y - 8, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 100, _y);
        L6_Classes.crc2.arc(_x + 100, _y - 8, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 110, _y);
        L6_Classes.crc2.arc(_x + 110, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 100, _y);
        L6_Classes.crc2.arc(_x + 100, _y + 5, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Busch zeichnen
    function drawBusch1(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 10, _y - 10, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 20, _y - 10, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 30, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x + 20, _y + 5, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 70, _y);
        L6_Classes.crc2.arc(_x + 70, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 80, _y);
        L6_Classes.crc2.arc(_x + 80, _y - 10, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 90, _y);
        L6_Classes.crc2.arc(_x + 90, _y - 10, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 100, _y);
        L6_Classes.crc2.arc(_x + 100, _y, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 90, _y);
        L6_Classes.crc2.arc(_x + 90, _y + 5, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    //Sonnenblume
    function drawBlume(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _fillColor1, _strokeColor1) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 30, _y - 26);
        L6_Classes.crc2.arc(_x + 30, _y - 26, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y - 13);
        L6_Classes.crc2.arc(_x + 7, _y - 13, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 52, _y - 12);
        L6_Classes.crc2.arc(_x + 52, _y - 12, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y + 7);
        L6_Classes.crc2.arc(_x + 7, _y + 7, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 55, _y + 12);
        L6_Classes.crc2.arc(_x + 55, _y + 12, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 30, _y + 23);
        L6_Classes.crc2.arc(_x + 30, _y + 25, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 28, _y);
        L6_Classes.crc2.arc(_x + 30, _y, 17, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Gänseblümchen
    function drawBlume1(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _fillColor1, _strokeColor1) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 30, _y - 26);
        L6_Classes.crc2.arc(_x + 30, _y - 26, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y - 13);
        L6_Classes.crc2.arc(_x + 7, _y - 13, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 52, _y - 12);
        L6_Classes.crc2.arc(_x + 52, _y - 12, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y + 7);
        L6_Classes.crc2.arc(_x + 7, _y + 7, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 55, _y + 12);
        L6_Classes.crc2.arc(_x + 55, _y + 12, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 30, _y + 23);
        L6_Classes.crc2.arc(_x + 30, _y + 25, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 28, _y);
        L6_Classes.crc2.arc(_x + 30, _y, 17, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Blaue Blume
    function drawBlume3(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _fillColor1, _strokeColor1, _fillColor2, _strokeColor2, _fillColor3, _strokeColor3) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 30, _y - 26);
        L6_Classes.crc2.arc(_x + 30, _y - 26, 21, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y - 13);
        L6_Classes.crc2.arc(_x + 7, _y - 13, 21, 180, 270);
        L6_Classes.crc2.moveTo(_x + 52, _y - 12);
        L6_Classes.crc2.arc(_x + 52, _y - 12, 21, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y + 7);
        L6_Classes.crc2.arc(_x + 7, _y + 7, 21, 180, 270);
        L6_Classes.crc2.moveTo(_x + 55, _y + 12);
        L6_Classes.crc2.arc(_x + 55, _y + 12, 21, 180, 270);
        L6_Classes.crc2.moveTo(_x + 30, _y + 23);
        L6_Classes.crc2.arc(_x + 30, _y + 25, 21, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 30, _y - 26);
        L6_Classes.crc2.arc(_x + 30, _y - 26, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y - 13);
        L6_Classes.crc2.arc(_x + 7, _y - 13, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 52, _y - 12);
        L6_Classes.crc2.arc(_x + 52, _y - 12, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 7, _y + 7);
        L6_Classes.crc2.arc(_x + 7, _y + 7, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 55, _y + 12);
        L6_Classes.crc2.arc(_x + 55, _y + 12, 15, 180, 270);
        L6_Classes.crc2.moveTo(_x + 30, _y + 23);
        L6_Classes.crc2.arc(_x + 30, _y + 25, 15, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor2;
        L6_Classes.crc2.strokeStyle = _strokeColor2;
        L6_Classes.crc2.moveTo(_x + 28, _y);
        L6_Classes.crc2.arc(_x + 30, _y, 17, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor3;
        L6_Classes.crc2.strokeStyle = _strokeColor3;
        L6_Classes.crc2.moveTo(_x + 28, _y);
        L6_Classes.crc2.arc(_x + 30, _y, 9, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Bank zeichnen
    function drawBank(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 30, _y - 2);
        L6_Classes.crc2.lineTo(_x + 50, _y - 5);
        L6_Classes.crc2.lineTo(_x + 50, _y + 93);
        L6_Classes.crc2.lineTo(_x + 30, _y + 100);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 120, _y - 14);
        L6_Classes.crc2.lineTo(_x + 140, _y - 17);
        L6_Classes.crc2.lineTo(_x + 140, _y + 80);
        L6_Classes.crc2.lineTo(_x + 120, _y + 85);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 120, _y + 40);
        L6_Classes.crc2.lineTo(_x + 140, _y + 38);
        L6_Classes.crc2.lineTo(_x + 165, _y + 45);
        L6_Classes.crc2.lineTo(_x + 145, _y + 45);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 30, _y + 48);
        L6_Classes.crc2.lineTo(_x + 50, _y + 44);
        L6_Classes.crc2.lineTo(_x + 75, _y + 60);
        L6_Classes.crc2.lineTo(_x + 55, _y + 58);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 145, _y + 38);
        L6_Classes.crc2.lineTo(_x + 160, _y + 45);
        L6_Classes.crc2.lineTo(_x + 160, _y + 95);
        L6_Classes.crc2.lineTo(_x + 145, _y + 100);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 55, _y + 63);
        L6_Classes.crc2.lineTo(_x + 75, _y + 60);
        L6_Classes.crc2.lineTo(_x + 75, _y + 115);
        L6_Classes.crc2.lineTo(_x + 55, _y + 120);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.lineTo(_x + 160, _y - 20);
        L6_Classes.crc2.lineTo(_x + 160, _y - 5);
        L6_Classes.crc2.lineTo(_x, _y + 15);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.moveTo(_x, _y + 28);
        L6_Classes.crc2.lineTo(_x + 160, _y + 8);
        L6_Classes.crc2.lineTo(_x + 160, _y + 22);
        L6_Classes.crc2.lineTo(_x, _y + 43);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.moveTo(_x + 5, _y + 49);
        L6_Classes.crc2.lineTo(_x + 160, _y + 28);
        L6_Classes.crc2.lineTo(_x + 175, _y + 32);
        L6_Classes.crc2.lineTo(_x + 20, _y + 55);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.moveTo(_x + 27, _y + 59);
        L6_Classes.crc2.lineTo(_x + 184, _y + 37);
        L6_Classes.crc2.lineTo(_x + 197, _y + 40);
        L6_Classes.crc2.lineTo(_x + 40, _y + 64);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Fluss zeichen
    function drawFluss(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 50, _y - 2);
        L6_Classes.crc2.lineTo(_x + 10, _y + 50);
        L6_Classes.crc2.lineTo(_x, _y + 60);
        L6_Classes.crc2.lineTo(_x - 8, _y + 65);
        L6_Classes.crc2.lineTo(_x - 20, _y + 70);
        L6_Classes.crc2.lineTo(_x - 30, _y + 80);
        L6_Classes.crc2.lineTo(_x - 40, _y + 89);
        L6_Classes.crc2.lineTo(_x - 50, _y + 95);
        L6_Classes.crc2.lineTo(_x - 60, _y + 105);
        L6_Classes.crc2.lineTo(_x - 110, _y + 135);
        L6_Classes.crc2.lineTo(_x - 200, _y + 165);
        L6_Classes.crc2.lineTo(_x - 290, _y + 185);
        L6_Classes.crc2.lineTo(_x - 340, _y + 195);
        L6_Classes.crc2.lineTo(_x - 360, _y + 210);
        L6_Classes.crc2.lineTo(_x - 400, _y + 230);
        L6_Classes.crc2.lineTo(_x - 550, _y + 200);
        L6_Classes.crc2.lineTo(_x - 410, _y + 140);
        L6_Classes.crc2.lineTo(_x - 260, _y + 110);
        L6_Classes.crc2.lineTo(_x - 180, _y + 90);
        L6_Classes.crc2.lineTo(_x - 150, _y + 80);
        L6_Classes.crc2.lineTo(_x - 80, _y + 50);
        L6_Classes.crc2.lineTo(_x - 50, _y + 30);
        L6_Classes.crc2.lineTo(_x + 10, _y);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 45, _y + 3);
        L6_Classes.crc2.lineTo(_x + 30, _y + 3);
        L6_Classes.crc2.moveTo(_x - 15, _y + 15);
        L6_Classes.crc2.lineTo(_x + 5, _y + 15);
        L6_Classes.crc2.moveTo(_x + 24, _y + 30);
        L6_Classes.crc2.lineTo(_x - 10, _y + 30);
        L6_Classes.crc2.moveTo(_x - 59, _y + 40);
        L6_Classes.crc2.lineTo(_x - 25, _y + 45);
        L6_Classes.crc2.moveTo(_x - 25, _y + 70);
        L6_Classes.crc2.lineTo(_x - 50, _y + 68);
        L6_Classes.crc2.moveTo(_x - 120, _y + 70);
        L6_Classes.crc2.lineTo(_x - 80, _y + 80);
        L6_Classes.crc2.moveTo(_x - 69, _y + 110);
        L6_Classes.crc2.lineTo(_x - 100, _y + 104);
        L6_Classes.crc2.moveTo(_x - 205, _y + 100);
        L6_Classes.crc2.lineTo(_x - 145, _y + 115);
        L6_Classes.crc2.moveTo(_x - 165, _y + 150);
        L6_Classes.crc2.lineTo(_x - 210, _y + 140);
        L6_Classes.crc2.moveTo(_x - 349, _y + 130);
        L6_Classes.crc2.lineTo(_x - 300, _y + 150);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Bienenkorb Zeichnen
    function drawKorb(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 125, _y);
        L6_Classes.crc2.lineTo(_x + 145, _y);
        L6_Classes.crc2.lineTo(_x + 145, _y - 250);
        L6_Classes.crc2.lineTo(_x + 125, _y - 250);
        L6_Classes.crc2.moveTo(_x + 125, _y - 250);
        L6_Classes.crc2.lineTo(_x + 80, _y - 250);
        L6_Classes.crc2.lineTo(_x + 80, _y - 400);
        L6_Classes.crc2.lineTo(_x + 185, _y - 400);
        L6_Classes.crc2.lineTo(_x + 185, _y - 250);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor;
        L6_Classes.crc2.strokeStyle = _strokeColor;
        L6_Classes.crc2.moveTo(_x + 133, _y - 400);
        L6_Classes.crc2.arc(_x + 133, _y - 400, 52, 180, 270);
        L6_Classes.crc2.moveTo(_x + 80, _y - 380);
        L6_Classes.crc2.arc(_x + 80, _y - 380, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 70, _y - 350);
        L6_Classes.crc2.arc(_x + 70, _y - 350, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 70, _y - 320);
        L6_Classes.crc2.arc(_x + 70, _y - 320, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 70, _y - 290);
        L6_Classes.crc2.arc(_x + 70, _y - 290, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 80, _y - 260);
        L6_Classes.crc2.arc(_x + 80, _y - 260, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 133, _y - 250);
        L6_Classes.crc2.arc(_x + 133, _y - 250, 52, 180, 270);
        L6_Classes.crc2.moveTo(_x + 185, _y - 260);
        L6_Classes.crc2.arc(_x + 185, _y - 260, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 195, _y - 290);
        L6_Classes.crc2.arc(_x + 195, _y - 290, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 195, _y - 320);
        L6_Classes.crc2.arc(_x + 195, _y - 320, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 195, _y - 350);
        L6_Classes.crc2.arc(_x + 195, _y - 350, 20, 180, 270);
        L6_Classes.crc2.moveTo(_x + 185, _y - 380);
        L6_Classes.crc2.arc(_x + 185, _y - 380, 20, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _fillColor1;
        L6_Classes.crc2.strokeStyle = _strokeColor1;
        L6_Classes.crc2.moveTo(_x + 120, _y - 250);
        L6_Classes.crc2.lineTo(_x + 145, _y - 250);
        L6_Classes.crc2.lineTo(_x + 145, _y - 290);
        L6_Classes.crc2.lineTo(_x + 120, _y - 290);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    //Biene zeichnen
    function drawBiene(_x, _y, _color, _size) {
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = _color;
        L6_Classes.crc2.strokeStyle = _color;
        L6_Classes.crc2.moveTo(_x + 2, _y - 12);
        L6_Classes.crc2.arc(_x + 2, _y - 12, _size, 180, 270);
        L6_Classes.crc2.moveTo(_x + 9, _y - 12);
        L6_Classes.crc2.arc(_x + 9, _y - 12, _size, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = "yellow";
        L6_Classes.crc2.strokeStyle = "yellow";
        L6_Classes.crc2.moveTo(_x + 9, _y);
        L6_Classes.crc2.arc(_x + 9, _y, _size, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = "black";
        L6_Classes.crc2.strokeStyle = "black";
        L6_Classes.crc2.moveTo(_x + 4, _y);
        L6_Classes.crc2.arc(_x + 4, _y, _size, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = "yellow";
        L6_Classes.crc2.strokeStyle = "yellow";
        L6_Classes.crc2.moveTo(_x, _y);
        L6_Classes.crc2.arc(_x, _y, _size, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
        L6_Classes.crc2.beginPath();
        L6_Classes.crc2.fillStyle = "black";
        L6_Classes.crc2.strokeStyle = "black";
        L6_Classes.crc2.moveTo(_x - 5, _y - 2);
        L6_Classes.crc2.arc(_x - 5, _y - 2, _size, 180, 270);
        L6_Classes.crc2.closePath();
        L6_Classes.crc2.fill();
        L6_Classes.crc2.stroke();
    }
    // Neue Biene zeichnen
    function drawNeueBiene() {
        let b = new L6_Classes.BieneData();
        b.setStart();
        bee.push(b);
        n++;
    }
    // Animate Funktion
    function animate() {
        // Hintergrundbild abrufen
        L6_Classes.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < n; i++) {
            let b = bee[i];
            // Bewegungsrichtung der Bienen 
            b.move();
            // Wenn Bienen aus dem Bild fliegen
            b.catch();
            b.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            // Biene malen lassen
            drawBiene(b.x, b.y, b.color, b.size);
        }
        window.setTimeout(animate, 20);
    }
})(L6_Classes || (L6_Classes = {}));
//# sourceMappingURL=8.js.map