export {};

function repeatString(str: string, n: number): string
{
    let ans: string = '';
    for (let index = 0; index < n; index++)
    {
        ans += str;
    }
    return ans;

}

console.log(repeatString('-------abc--------', 5));



function findLargestNumber(arr: number[]): number
{
    return Math.max(...arr);
}


console.log(findLargestNumber([10, 5, 8, 20, 3]));


console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

function filterEvenNumbers(arr: number[]): number[]
{
    const ans: number[] = [];
    arr.forEach(e =>
    {
        if (e % 2 === 0)
        {
            ans.push(e);
        }
    });
    return ans;
}
const array: string[] = ["apple", "banana", "cherry"];

console.log(array, reverseArray(array.slice()));


function reverseArray<T>(arr: T[]): T[]
{
    return arr.reverse();
}

type Student = {
    name: string,
    age: number,
    grades: number[];
};

const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};

function calculateAverageGrade(student: Student): number
{
    return student.grades.reduce((sum, e, _, arr) => sum + (e / arr.length), 0);
}

const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);


type Book = {
    title: string;
    author: string;
    publishedYear: number;
};

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2010
};

function isRecentBook(book: Book): boolean
{
    const CURRENT_YEAR = new Date().getFullYear();
    // console.log(CURRENT_YEAR);

    return Math.abs(book.publishedYear - CURRENT_YEAR) <= 5;
}

console.log(isRecentBook(book1));

function logString(str: unknown): void
{
    if (typeof str == "string")
    {
        console.log(str);
    }
    else
    {
        console.log("not a string!");
    }
}

logString("Hello, TypeScript!");
logString(42);

interface CarInterface
{
    brand: string,
    model: string,
    date: Date,
    displayInfo(): void;
}

class Car implements CarInterface
{
    constructor(
        public brand: string,
        public model: string,
        public date: Date,

    ) {}

    displayInfo(): void
    {
        console.log(`Your car model is: ${this.date.getFullYear()} ${this.brand} ${this.model}`)
    }
}

const car = new Car("Toyota", "Corolla", new Date());

car.displayInfo()