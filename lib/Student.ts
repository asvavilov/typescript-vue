export default class Student {
	fullName: string;
	constructor(public firstName: string, public lastName: string) {
			this.fullName = firstName + " " + lastName;
	}
}
