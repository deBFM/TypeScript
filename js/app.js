/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */
define(["require", "exports", "./Controller/Controller"], function (require, exports, Controller_1) {
    "use strict";
    var controller = new Controller_1.Controller();
    window['controller'] = controller; // make the controller global, so i could use onlick in HTML
    require(['domReady!'], function (doc) {
        console.log("addEventListener");
        document.getElementById("js").addEventListener("click", function () {
            controller.drive();
        });
    });
});
//# sourceMappingURL=app.js.map