var inheritance;
(function (inheritance) {
    class Honigbiene extends inheritance.BieneData {
        constructor(_x, _y, _targetX, _targetY) {
            super(_x, _y);
        }
    }
    inheritance.Honigbiene = Honigbiene;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=honigbienen.js.map