namespace L6_Classes { 

    export class Blume {
        _x: number; 
        _y: number; 
        _x1: number; 
        _y2: number; 
        r: number;
        _strokeColor: string;
        _fillColor: string; 
        _fillColor1: string; 
        _strokeColor1: string; 
        _fillColor2: string; 
        _strokeColor2: string;
        _fillColor3: string; 
        _strokeColor3: string;
         
        
   placeRandom (): void {
      
            let _x: number = Math.floor(Math.random() * (1620 - 180)) + 180;
            let _y: number = Math.floor(Math.random() * (1000 - 850)) + 850;

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
        
          //Sonnenblume
    drawBlume(): void {
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
    drawBlume1(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string, _fillColor1: string, _strokeColor1: string): void {
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

   
    // Blaue Blume
    drawBlume3(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string, _fillColor1: string, _strokeColor1: string, _fillColor2: string, _strokeColor2: string, _fillColor3: string, _strokeColor3: string): void {
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
        
        
}}