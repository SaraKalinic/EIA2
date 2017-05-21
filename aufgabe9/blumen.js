var inheritance;
(function (inheritance) {
    class Blume {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.placeRandom();
        }
        placeRandom() {
            for (var i = 0; i < 1; i++) {
                let blumenFeld = Math.floor((Math.random() * 3) - 1);
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
        drawBlume() {
            //abstract
        }
        // Gänseblümchen
        drawBlume1() {
            //abstract
        }
        // Blaue Blume
        drawBlume3() {
            //abstract
        }
    }
    inheritance.Blume = Blume;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=blumen.js.map