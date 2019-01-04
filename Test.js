define(["require", "exports", "./lib/ZipCodeValidator", "./lib/LettersOnlyValidator"], function (require, exports, ZipCodeValidator_1, LettersOnlyValidator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Test() {
        var strings = ["Hello", "98052", "101"];
        var validators = {};
        validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
        validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
        strings.forEach(function (s) {
            for (var name_1 in validators) {
                console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
            }
        });
    }
    exports.default = Test;
});
//# sourceMappingURL=Test.js.map