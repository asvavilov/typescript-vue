import Student from './lib/Student';
import Test from './Test';
import greeter from './lib/greeter';

let user = new Student("Vasya", "Pupkin");
console.log(greeter(user));

Test();

// FIXME "Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i @types/node` and then add `node` to the types field in your tsconfig."
//       правильно ли объявлены аргументы?
declare function require(modules: string[], callback: any): void;
require(['vue!static'], function(theApp: any){
	// mount app
	theApp.$mount('#app');
});