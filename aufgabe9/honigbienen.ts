namespace inheritance {
    export class Honigbiene extends BieneData {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create circle");
            this.speed = 0.1;
            this.setRandomTargetPosition();
           
        }

       setRandomTargetPosition(): void {
            let randomtargetflower: number = Math.round(Math.random() * (blumen.length - 1));
            this.xTarget = blumen[randomtargetflower].x;
            this.yTarget = blumen[randomtargetflower].y;
        }

       

        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }    
        }
    }
}