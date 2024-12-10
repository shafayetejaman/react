"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function repeatString(str, n) {
    var ans = '';
    for (var index = 0; index < n; index++) {
        ans += str;
    }
    return ans;
}
console.log(repeatString('-------abc--------', 5));
function findLargestNumber(arr) {
    return Math.max.apply(Math, arr);
}
console.log(findLargestNumber([10, 5, 8, 20, 3]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
function filterEvenNumbers(arr) {
    var ans = [];
    arr.forEach(function (e) {
        if (e % 2 === 0) {
            ans.push(e);
        }
    });
    return ans;
}
var array = ["apple", "banana", "cherry"];
console.log(array, reverseArray(array.slice()));
function reverseArray(arr) {
    return arr.reverse();
}
var student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};
function calculateAverageGrade(student) {
    return student.grades.reduce(function (sum, e, _, arr) { return sum + (e / arr.length); }, 0);
}
var averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);
var book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2010
};
function isRecentBook(book) {
    var CURRENT_YEAR = new Date().getFullYear();
    // console.log(CURRENT_YEAR);
    return Math.abs(book.publishedYear - CURRENT_YEAR) <= 5;
}
console.log(isRecentBook(book1));
function logString(str) {
    if (typeof str == "string") {
        console.log(str);
    }
    else {
        console.log("not a string!");
    }
}
logString("Hello, TypeScript!");
logString(42);
var Car = /** @class */ (function () {
    function Car(brand, model, date) {
        this.brand = brand;
        this.model = model;
        this.date = date;
    }
    Car.prototype.displayInfo = function () {
        console.log("Your car model is: ".concat(this.date.getFullYear(), " ").concat(this.brand, " ").concat(this.model));
    };
    return Car;
}());
var car = new Car("Toyota", "Corolla", new Date());
car.displayInfo();
