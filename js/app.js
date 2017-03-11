define(["require", "exports", "./Controller/Controller"], function (require, exports, Controller_1) {
    "use strict";
    var controller = new Controller_1.Controller();
    window['controller'] = controller; // make the controller global, so i could use onlick in HTML
    // instead we can use jquery ready here.
    require(['domReady!'], function (doc) {
        controller.setup();
    });
});
//# sourceMappingURL=app.js.map