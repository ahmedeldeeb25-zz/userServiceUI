export class User {

    private id;
    private firstName: String;
    private lastName: String;
    private email: String;
    private password: String;
    private active: Number;
    private phone: Number;
    private address1: String;
    private address2: String;
    private city: String;
    private state: String;
    private country: String;
    private postalCode: Number;

	public get $lastName(): String {
		return this.lastName;
	}

	public set $lastName(value: String) {
		this.lastName = value;
	}

	public get $firstName(): String {
		return this.firstName;
	}

	public set $firstName(value: String) {
		this.firstName = value;
	}

	public get $email(): String {
		return this.email;
	}

	public set $email(value: String) {
		this.email = value;
	}

	public get $password(): String {
		return this.password;
	}

	public set $password(value: String) {
		this.password = value;
	}

	public get $active(): Number {
		return this.active;
	}

	public set $active(value: Number) {
		this.active = value;
	}

	public get $phone(): Number {
		return this.phone;
	}

	public set $phone(value: Number) {
		this.phone = value;
	}

	public get $address1(): String {
		return this.address1;
	}

	public set $address1(value: String) {
		this.address1 = value;
	}

	public get $address2(): String {
		return this.address2;
	}

	public set $address2(value: String) {
		this.address2 = value;
	}

	public get $city(): String {
		return this.city;
	}

	public set $city(value: String) {
		this.city = value;
	}

	public get $state(): String {
		return this.state;
	}

	public set $state(value: String) {
		this.state = value;
	}

	public get $country(): String {
		return this.country;
	}

	public set $country(value: String) {
		this.country = value;
	}

	public get $postalCode(): Number {
		return this.postalCode;
	}

	public set $postalCode(value: Number) {
		this.postalCode = value;
	}

	public get $registerDate(): Date {
		return this.registerDate;
	}

	public set $registerDate(value: Date) {
		this.registerDate = value;
	}
    private registerDate: Date;
}