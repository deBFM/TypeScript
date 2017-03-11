/**
 * Created by hubid on 11.03.2017.
 */


function Controller() {
    this.speed = "12";
}

Controller.prototype.drive = function() {
    console.log("driving " + this.speed + " forward")
};


//----------------------

var controller = new Controller();


window.onload = function(event) {
    document.getElementById("js").addEventListener("click", () => {controller.drive()});
};
