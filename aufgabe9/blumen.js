var inheritance;
(function (inheritance) {
    class Blume {
        constructor(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
            this.strokeColor1 = _strokeColor1;
            this.fillColor1 = _fillColor1;
        }
        draw() {
            //abstract
        }
    }
    inheritance.Blume = Blume;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=blumen.js.map