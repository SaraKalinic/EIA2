namespace inheritance {
    
export class BlauBlume extends Blume {
    fillColor2: string = "#ffff00";
    strokeColor2: string = "#ffff00";
    fillColor3: string = "#663300";
    strokeColor3: string = "#663300";

   constructor(_x: number, _y: number) {
            super(_x, _y, "#66ccff", "#66ccff", "#3399ff", "#3399ff");
            
        }     

   
        // Blaue Blume
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(this.x + 30, this.y - 26);
            crc2.arc(this.x + 30, this.y - 26, 21, 180, 270);
            crc2.moveTo(this.x + 7, this.y - 13);
            crc2.arc(this.x + 7, this.y - 13, 21, 180, 270);
            crc2.moveTo(this.x + 52, this.y - 12);
            crc2.arc(this.x + 52, this.y - 12, 21, 180, 270);
            crc2.moveTo(this.x + 7, this.y + 7);
            crc2.arc(this.x + 7, this.y + 7, 21, 180, 270);
            crc2.moveTo(this.x + 55, this.y + 12);
            crc2.arc(this.x + 55, this.y + 12, 21, 180, 270);
            crc2.moveTo(this.x + 30, this.y + 23);
            crc2.arc(this.x + 30, this.y + 25, 21, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.fillColor1;
            crc2.strokeStyle = this.strokeColor1;
            crc2.moveTo(this.x + 30, this.y - 26);
            crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            crc2.moveTo(this.x + 7, this.y - 13);
            crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            crc2.moveTo(this.x + 52, this.y - 12);
            crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            crc2.moveTo(this.x + 7, this.y + 7);
            crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            crc2.moveTo(this.x + 55, this.y + 12);
            crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            crc2.moveTo(this.x + 30, this.y + 23);
            crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.fillColor2;
            crc2.strokeStyle = this.strokeColor2;
            crc2.moveTo(this.x + 28, this.y);
            crc2.arc(this.x + 30, this.y, 17, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.fillColor3;
            crc2.strokeStyle = this.strokeColor3;
            crc2.moveTo(this.x + 28, this.y);
            crc2.arc(this.x + 30, this.y, 9, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    
}
}