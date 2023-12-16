interface Person {
	name: string;
	age: number;
}

const person: Person = {name: 'Patrick', age: 25};

console.log(`Hi ${person.name}!`);

const a = (input: number) => 2 * input;

export const roundTo = (
	input: number,

	f = 2,
) => {
	const powerOfTen = Math.pow(10, f);

	return Math.round(input * powerOfTen) / powerOfTen;
};

console.log(`The variable a was being used also insite the function roundto`);

enum BalanceType {
	CREDIT = 'CREDIT',
	DEBIT = 'DEBIT',
}

interface Memorandum {
	balance: BalanceType;
	amount: string;
}

export const calculateBalance = (
	memorandums: Memorandum[],
	initialAmount: number = 0,
): number => {
	return memorandums.reduce((acc, item) => {
		const amount = Number(item.amount) as number;
		const isCredit = item.balance === BalanceType.CREDIT;
		return isCredit ? acc - amount : acc + amount;
	}, initialAmount);
};

const memorandums: Memorandum[] = [
	{balance: BalanceType.CREDIT, amount: '100'},
	{balance: BalanceType.DEBIT, amount: '50'},
];

const result = calculateBalance(memorandums);
console.log(`Final Balance: ${result}`);
