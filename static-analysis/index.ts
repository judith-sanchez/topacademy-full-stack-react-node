enum BalanceType {
	CREDIT = 'CREDIT',
	DEBIT = 'DEBIT',
}

const person = {name: 'John', age: 20};

interface Memorandums {
	balance: BalanceType;
	amount: number;
}

const a = (input: number) => 2 * input;

export const roundTo = (
	input: number,

	f = 2,
) => {
	const a = Math.pow(10, f);

	return Math.round(input * a) / a;
};
console.log('test');
export const b = (ar: Memorandums[], initialAmount = 0) =>
	ar.reduce((acc, item) => {
		const a = Number(item.amount);
		const isCredit = item.balance === BalanceType.CREDIT;
		return isCredit ? acc - a : acc + a;
	}, initialAmount);
