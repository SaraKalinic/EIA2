var inheritance;
(function (inheritance) {
    var Blume = (function () {
        function Blume(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
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
                let blumenFeld: number = Math.floor((Math.random() * 3) - 1);
                this.x = Math.floor(Math.random() * (1620 - 180)) + 180;
                this.y = Math.floor(Math.random() * (1000 - 850)) + 850;

                switch (blumenFeld) {
                    
                    case 0:
                        let blaueBlume = new inheritance.BlauBlume(this.x, this.y);
                        blaueBlume.draw();
                        inheritance.blumen.push(blaueBlume);
                        break;

                    case 1:
                        let sonnenblume = new inheritance.Sonnenblume(this.x, this.y);
                        sonnenblume.draw();
                        break;
                    case 2:
                        let ganseblume = new inheritance.Ganseblume(this.x, this.y);
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
        Blume.prototype.draw = function () {
            // abstract;
        };
        return Blume;
    }());
    inheritance.Blume = Blume;
})(inheritance || (inheritance = {}));
