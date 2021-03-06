var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#ccffff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
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
        drawWiese1(1920, 473, "#339966", "#339966");
        drawWiese2(0, 540, "#adebad", "#adebad");
        //Haus
        drawHaus(0, 540, "#734d26", "#d9b38c");
        drawTure(0, 540, "#ac7339", "#ac7339");
        drawFenster(0, 540, "#4da6ff", "#cce6ff");
        drawFenster(165, 540, "#4da6ff", "#cce6ff");
        drawBank(20, 700, "#734d26", "#d9b38c", "#4d2600", "#4d2600");
        //Blumen
        drawBlume(800, 800, 5, 180, 270, "#ffff99", "#ffff99", "#4d2600", "#4d2600");
        drawBlume1(900, 800, 5, 180, 270, "#ffffff", "#ffffff", "#ffff1a", "#ffff1a");
        //   drawBlume2(500, 800, 5, 180, 270, "#ff80df", "#ff80df", "#ff80df", "#ff80df");
        drawBlume3(500, 900, 5, 180, 270, "#66ccff", "#66ccff", "#3399ff", "#3399ff", "#ffff00", "#ffff00", "#663300", "#663300");
        for (var i = 0; i < 14; i++) {
            let blumenFeld = Math.floor((Math.random() * 4) + 0);
            let _x = Math.floor(Math.random() * (1620 - 140)) + 140;
            let _y = Math.floor(Math.random() * (1000 - 850)) + 850;
            switch (blumenFeld) {
                case 0:
                    drawBlume(_x, _y, 5, 180, 270, "#ffff99", "#ffff99", "#4d2600", "#4d2600");
                    break;
                case 1:
                    drawBlume1(_x, _y, 5, 180, 270, "#ffffff", "#ffffff", "#ffff1a", "#ffff1a");
                    break;
                /*     case 2:
                         drawBlume2(_x,_y,5, 180, 270, "#ff80df", "#ff80df", "#ff80df", "#ff80df");
                         break;  */
                case 2:
                    drawBlume3(_x, _y, 5, 180, 270, "#66ccff", "#66ccff", "#3399ff", "#3399ff", "#ffff00", "#ffff00", "#663300", "#663300");
                    break;
            }
        }
    }
    //Wolken und Sonne
    function drawCloud(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 100, 180, 470);
        crc2.arc(_x + 100, _y - 50, 100, 180, 470);
        crc2.arc(_x + 120, _y + 50, 100, 180, 270);
        crc2.arc(_x + 270, _y, 100, 180, 470);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawCloud1(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 50, 0, 360);
        crc2.arc(_x + 50, _y + 30, 50, 0, 360);
        crc2.arc(_x + 110, _y + 30, 50, 0, 360);
        crc2.arc(_x + 70, _y - 20, 60, 0, 360);
        crc2.arc(_x + 140, _y, 50, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSun(_x, _y, _x1, _y1, r, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 100, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWiese1(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 1920, _y + 470);
        crc2.lineTo(_x, _y + 470);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWiese2(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 300, _y);
        crc2.lineTo(_x + 1920, _y + 400);
        crc2.lineTo(_x + 1920, _y + 540);
        crc2.lineTo(_x, _y + 540);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWiese3(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1920, _y);
        crc2.lineTo(_x + 1920, _y + 400);
        crc2.lineTo(_x + 1920, _y + 540);
        crc2.lineTo(_x, _y + 540);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // BERGE 
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 30, _y);
        crc2.lineTo(_x - 150, _y - 250);
        crc2.lineTo(_x - 300, _y);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBerg1(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 30, _y);
        crc2.lineTo(_x - 180, _y - 300);
        crc2.lineTo(_x - 360, _y);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBerg2(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 30, _y);
        crc2.lineTo(_x - 150, _y - 200);
        crc2.lineTo(_x - 300, _y);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // Haus
    function drawHaus(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 300, _y);
        crc2.lineTo(_x + 300, _y - 200);
        crc2.lineTo(_x + 150, _y - 300);
        crc2.lineTo(_x, _y - 200);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawTure(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 125, _y);
        crc2.lineTo(_x + 175, _y);
        crc2.lineTo(_x + 175, _y - 60);
        crc2.lineTo(_x + 125, _y - 60);
        crc2.fill();
        crc2.stroke();
    }
    function drawFenster(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 50, _y - 100);
        crc2.lineTo(_x + 80, _y - 100);
        crc2.lineTo(_x + 80, _y - 130);
        crc2.lineTo(_x + 50, _y - 130);
        crc2.fill();
        crc2.stroke();
    }
    //Sonnenblume
    function drawBlume(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _fillColor1, _strokeColor1) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 30, _y - 26);
        crc2.arc(_x + 30, _y - 26, 15, 180, 270);
        crc2.moveTo(_x + 7, _y - 13);
        crc2.arc(_x + 7, _y - 13, 15, 180, 270);
        crc2.moveTo(_x + 52, _y - 12);
        crc2.arc(_x + 52, _y - 12, 15, 180, 270);
        crc2.moveTo(_x + 7, _y + 7);
        crc2.arc(_x + 7, _y + 7, 15, 180, 270);
        crc2.moveTo(_x + 55, _y + 12);
        crc2.arc(_x + 55, _y + 12, 15, 180, 270);
        crc2.moveTo(_x + 30, _y + 23);
        crc2.arc(_x + 30, _y + 25, 15, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 28, _y);
        crc2.arc(_x + 30, _y, 17, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    // Gänseblümchen
    function drawBlume1(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _fillColor1, _strokeColor1) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 30, _y - 26);
        crc2.arc(_x + 30, _y - 26, 15, 180, 270);
        crc2.moveTo(_x + 7, _y - 13);
        crc2.arc(_x + 7, _y - 13, 15, 180, 270);
        crc2.moveTo(_x + 52, _y - 12);
        crc2.arc(_x + 52, _y - 12, 15, 180, 270);
        crc2.moveTo(_x + 7, _y + 7);
        crc2.arc(_x + 7, _y + 7, 15, 180, 270);
        crc2.moveTo(_x + 55, _y + 12);
        crc2.arc(_x + 55, _y + 12, 15, 180, 270);
        crc2.moveTo(_x + 30, _y + 23);
        crc2.arc(_x + 30, _y + 25, 15, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 28, _y);
        crc2.arc(_x + 30, _y, 17, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //Tulpe
    /* function drawBlume2(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string,  _fillColor1:string, _strokeColor1: string): void {
         crc2.beginPath();
        crc2.arc(_x, _y-50, 35,0*Math.PI,1*Math.PI);
        crc2.lineTo(_x-28, _y-80);
        crc2.lineTo(_x-10, _y-52);
        crc2.lineTo(_x+2, _y-80);
        crc2.lineTo(_x+12, _y-52);
        crc2.lineTo(_x+28, _y-80);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill();
      
    }*/
    // Blaue Blume
    function drawBlume3(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _fillColor1, _strokeColor1, _fillColor2, _strokeColor2, _fillColor3, _strokeColor3) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 30, _y - 26);
        crc2.arc(_x + 30, _y - 26, 21, 180, 270);
        crc2.moveTo(_x + 7, _y - 13);
        crc2.arc(_x + 7, _y - 13, 21, 180, 270);
        crc2.moveTo(_x + 52, _y - 12);
        crc2.arc(_x + 52, _y - 12, 21, 180, 270);
        crc2.moveTo(_x + 7, _y + 7);
        crc2.arc(_x + 7, _y + 7, 21, 180, 270);
        crc2.moveTo(_x + 55, _y + 12);
        crc2.arc(_x + 55, _y + 12, 21, 180, 270);
        crc2.moveTo(_x + 30, _y + 23);
        crc2.arc(_x + 30, _y + 25, 21, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 30, _y - 26);
        crc2.arc(_x + 30, _y - 26, 15, 180, 270);
        crc2.moveTo(_x + 7, _y - 13);
        crc2.arc(_x + 7, _y - 13, 15, 180, 270);
        crc2.moveTo(_x + 52, _y - 12);
        crc2.arc(_x + 52, _y - 12, 15, 180, 270);
        crc2.moveTo(_x + 7, _y + 7);
        crc2.arc(_x + 7, _y + 7, 15, 180, 270);
        crc2.moveTo(_x + 55, _y + 12);
        crc2.arc(_x + 55, _y + 12, 15, 180, 270);
        crc2.moveTo(_x + 30, _y + 23);
        crc2.arc(_x + 30, _y + 25, 15, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor2;
        crc2.strokeStyle = _strokeColor2;
        crc2.moveTo(_x + 28, _y);
        crc2.arc(_x + 30, _y, 17, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor3;
        crc2.strokeStyle = _strokeColor3;
        crc2.moveTo(_x + 28, _y);
        crc2.arc(_x + 30, _y, 9, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBank(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 30, _y - 2);
        crc2.lineTo(_x + 50, _y - 5);
        crc2.lineTo(_x + 50, _y + 93);
        crc2.lineTo(_x + 30, _y + 100);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 120, _y - 14);
        crc2.lineTo(_x + 140, _y - 17);
        crc2.lineTo(_x + 140, _y + 80);
        crc2.lineTo(_x + 120, _y + 85);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 120, _y + 40);
        crc2.lineTo(_x + 140, _y + 38);
        crc2.lineTo(_x + 165, _y + 45);
        crc2.lineTo(_x + 145, _y + 45);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 30, _y + 48);
        crc2.lineTo(_x + 50, _y + 44);
        crc2.lineTo(_x + 75, _y + 60);
        crc2.lineTo(_x + 55, _y + 58);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 145, _y + 38);
        crc2.lineTo(_x + 160, _y + 45);
        crc2.lineTo(_x + 160, _y + 95);
        crc2.lineTo(_x + 145, _y + 100);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 55, _y + 63);
        crc2.lineTo(_x + 75, _y + 60);
        crc2.lineTo(_x + 75, _y + 115);
        crc2.lineTo(_x + 55, _y + 120);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 160, _y - 20);
        crc2.lineTo(_x + 160, _y - 5);
        crc2.lineTo(_x, _y + 15);
        crc2.closePath();
        crc2.moveTo(_x, _y + 28);
        crc2.lineTo(_x + 160, _y + 8);
        crc2.lineTo(_x + 160, _y + 22);
        crc2.lineTo(_x, _y + 43);
        crc2.closePath();
        crc2.moveTo(_x + 5, _y + 49);
        crc2.lineTo(_x + 160, _y + 28);
        crc2.lineTo(_x + 175, _y + 32);
        crc2.lineTo(_x + 20, _y + 55);
        crc2.closePath();
        crc2.moveTo(_x + 27, _y + 59);
        crc2.lineTo(_x + 184, _y + 37);
        crc2.lineTo(_x + 197, _y + 40);
        crc2.lineTo(_x + 40, _y + 64);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=a5.js.map