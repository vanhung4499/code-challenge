export class Page<T> {
	list: T[];
	total: number

	constructor(list: any, total: number) {
		this.list = list;
		this.total = total;
	}

	static of<T>(list: any, total: number): Page<T> {
		return new Page<T>(list, total);
	}

	static empty<T>(): Page<T> {
		return new Page<T>([], 0);
	}
}