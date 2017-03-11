/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Controller = (function () {
        function Controller() {
            this.speed = "14";
        }
        Controller.prototype.drive = function () {
            console.log("driving " + this.speed + " forward");
        };
        Controller.prototype.setup = function () {
            var _this = this;
            console.log("addEventListener");
            document.getElementById("js").addEventListener("click", function () {
                _this.drive();
            });
            //Example without Arrow Function
            var that = this;
            document.getElementById("js").addEventListener("click", function () {
                that.drive();
            });
            console.log("getCanvasElemet");
            var canvas = document.getElementById('canvas');
            var ctx2 = canvas.getContext('2d');
        };
        return Controller;
    }());
    exports.Controller = Controller;
});
//# sourceMappingURL=Controller.js.map