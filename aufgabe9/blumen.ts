namespace inheritance {

    export abstract class Blume {
        x: number;
        y: number;
        r: number;
        strokeColor: string;
        fillColor: string;
        fillColor1: string;
        strokeColor1: string;


        constructor(_x: number, _y: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
            this.strokeColor1 = _strokeColor1;
            this.fillColor1 = _fillColor1;

            //this.placeRandom();
        }

        /*placeRandom(): void {
            for (var i: number = 0; i < 1; i++) {
                let blumenFeld: number = Math.floor((Math.random() * 4) - 1);
                this.x = Math.floor(Math.random() * (1620 - 180)) + 180;
                this.y = Math.floor(Math.random() * (1000 - 850)) + 850;

                switch (blumenFeld) {
                    
                    case 0:
                    let blaueBlume: BlauBlume = new BlauBlume (this.x, this.y);
                        blaueBlume.draw();
                        blumen.push(blaueBlume);
                        break;

                    case 1:
                        let sonnenblume: Sonnenblume = new Sonnenblume (this.x, this.y);
                        sonnenblume.draw();
                        
                        break;
                        
                     case 2:
                        let ganseblume: Ganseblume = new Ganseblume (this.x, this.y);
                        ganseblume.draw();
                        
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
        }*/

        draw(): void {
            // abstract;
        }


    }

}