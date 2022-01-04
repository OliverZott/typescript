var utility;
(function (utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.printHello = function (thing) {
            console.log(thing + "Says hello :)");
        };
        return useful;
    }());
    utility.useful = useful;
})(utility || (utility = {}));
/// <reference path="util.ts" />
var use = new utility.useful();
use.printHello("Olii");
