/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Controller = (function () {
        function Controller() {
            this.speed = "13";
        }
        Controller.prototype.drive = function () {
            console.log("driving " + this.speed + " forward");
        };
        return Controller;
    }());
    exports.Controller = Controller;
});
//# sourceMappingURL=Controller.js.map