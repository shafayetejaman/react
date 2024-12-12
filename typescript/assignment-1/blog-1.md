## **Why Are Type Guards Necessary?**

**TypeScript** enforces type safety in JavaScript code, making it more robust and less error-prone. This is especially important given JavaScript's sometimes unexpected behavior.

### **For example:**
```javascript
const value = 10 + "10";
console.log(value);  // Output: 1010
```  
In this example, JavaScript concatenates the number `10` and the string `"10"`, resulting in the output `"1010"`. While this behavior is valid in JavaScript, it can lead to unexpected bugs. TypeScript solves such problems by enforcing stricter type checks.  

But what if the types of variables or objects are unknown? This is where **TypeScript's type guards** come into play.

---

### **CASE 1: Type Guards with Primitive Types**
```javascript
function addTwoNumbers(x: unknown, y: unknown): number {
    let a: number;
    let b: number;

    if (typeof x === "string") a = Number(x);
    else a = x as number;

    if (typeof y === "string") b = Number(y);
    else b = y as number;

    return a + b;
}

console.log(addTwoNumbers(10, "10")); // Output: 20
```  
In this example, the `addTwoNumbers` function uses type guards to narrow down the types of the variables `x` and `y` to `number`. This ensures that addition can be performed safely. The `typeof` operator is used to check if the input is a string and convert it to a number when necessary.

---

### **CASE 2: Type Guards with Classes**
```javascript
interface User {
    name: string;
    ID: number;
    isAdmin: boolean;
}

class AdminUser implements User {
    isAdmin: boolean = true;
    name: string;
    ID: number;

    constructor(name: string, ID: number) {
        this.name = name;
        this.ID = ID;
    }
}

const newUser = new AdminUser("Shafayet", 12);

function AdminPrivilege(user: User): boolean {
    if (user instanceof AdminUser) return true;
    return false;
}

console.log(AdminPrivilege(newUser)); // Output: true
```  
In this example, the `AdminPrivilege` function uses the `instanceof` operator as a type guard to determine if the `user` is an instance of the `AdminUser` class. This ensures that only admin users are granted privileges.

---

### **CASE 3: Type Guards with Object Properties**
```javascript
type Dog = {
    name: string;
    bark(): void;
};

type Cat = {
    name: string;
    meow(): void;
};

function whatAnimal(animal: Dog | Cat): void {
    if ("bark" in animal) console.log("It's a Dog");
    else console.log("It's a Cat");
}

const myPet: Dog = {
    name: "Max",
    bark: () => console.log("Haw"),
};

whatAnimal(myPet); // Output: It's a Dog
```  
In this example, we know the possible types of the `animal` object: `Dog` or `Cat`. By using the `in` operator, we check for the presence of a unique property (`bark` in this case) to distinguish between the two types. This allows us to narrow down the type and perform type-specific operations.

---

### **Conclusion**

Type guards in TypeScript are powerful tools that enhance type safety and make your code more reliable. By using constructs like `typeof`, `instanceof`, or the `in` operator, you can handle complex type scenarios effectively, reduce runtime errors.
