import Person from './Person';

export default function greeter(person : Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}
