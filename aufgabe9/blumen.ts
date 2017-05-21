namespace inheritance {

    export class Blume {
        x: number;
        y: number;
        r: number;
        strokeColor: string;
        fillColor: string;
        fillColor1: string;
        strokeColor1: string;
        fillColor2: string;
        strokeColor2: string;
        fillColor3: string;
        strokeColor3: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.placeRandom();
           
        }

        placeRandom(): void {
            for (var i: number = 0; i < 1; i++) {
                let blumenFeld: number = Math.floor((Math.random() * 3) - 1);
                this.x = Math.floor(Math.random() * (1620 - 180)) + 180;
                this.y = Math.floor(Math.random() * (1000 - 850)) + 850;

                switch (blumenFeld) {
                    
                    case 0:
                        this.drawBlume1();
                        break;

                    case 1:
                        this.drawBlume3();
                        break;
                }
            }

        }

        //Sonnenblume
        drawBlume(): void {
           //abstract
        }

        // Gänseblümchen
        drawBlume1(): void {
           //abstract
        }


        // Blaue Blume
        drawBlume3(): void {
            //abstract
        }


    }

}