var inheritance;
(function (inheritance) {
    class Honigbiene extends inheritance.BieneData {
        constructor(_x, _y) {
            super(_x, _y);
            this.drawBiene();
        }
        collect() {
            //
        }
    }
    inheritance.Honigbiene = Honigbiene;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=honigbienen.js.map