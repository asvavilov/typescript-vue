define(["require", "exports", "./lib/Student", "./Test", "./lib/greeter"], function (require, exports, Student_1, Test_1, greeter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var user = new Student_1.default("Vasya", "Pupkin");
    console.log(greeter_1.default(user));
    Test_1.default();
    require(['vue!static'], function (theApp) {
        theApp.$mount('#app');
    });
});
//# sourceMappingURL=app.js.map