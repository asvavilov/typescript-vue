define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Student = (function () {
        function Student(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + " " + lastName;
        }
        return Student;
    }());
    exports.default = Student;
});
//# sourceMappingURL=Student.js.map