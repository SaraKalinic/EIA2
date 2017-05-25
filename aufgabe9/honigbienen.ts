namespace inheritance {

    export class Honigbiene extends BieneData {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor() {
            super();
            
            
        }

        setRandomTargetPosition(): void {
            let randomtargetflower: number = Math.round(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[randomtargetflower].x;
            this.yTarget = flowers[randomtargetflower].y;
        }

        setStartPosition(): void {
            this.x = 1750;
            this.y = 650;
        }
        
        update(): void {
             this.move();
             this.draw();
          }
        
        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
                }
            }

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.arc(this.x + 2, this.y - 12, this.size, 180, 270);
            crc2.moveTo(this.x + 9, this.y - 12);
            crc2.arc(this.x + 9, this.y - 12, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "blue";
            crc2.strokeStyle = "blue";
            crc2.moveTo(this.x + 9, this.y);
            crc2.arc(this.x + 9, this.y, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 4, this.y);
            crc2.arc(this.x + 4, this.y, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "blue";
            crc2.strokeStyle = "blue";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x - 5, this.y - 2);
            crc2.arc(this.x - 5, this.y - 2, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}
