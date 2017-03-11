define(["require", "exports", "./Controller/Controller"], function (require, exports, Controller_1) {
    "use strict";
    var controller = new Controller_1.Controller();
    controller.drive();
    require(['domReady!'], function (doc) {
        console.log("attach");
        document.getElementById("js").addEventListener("click", function () {
            controller.drive();
        });
    });
});
//# sourceMappingURL=main.js.map