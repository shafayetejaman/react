## Why are Type Guards Necessary?

**Typescript** is all about type enforcement in js code.
It makes your code more robust.  
Spatially when js has some odd behaver, 
**For example :-**

```javascript
const value = 10 + "10";
console.log(value);  // Output : 1010
```  
****

This code should show error but the js interpreter does not care.  
Typescript solves this problem but what if we do not know what is the type of our variables and objects. The solution to this problem is the type guard feature of typescript.

* CASE 1:
```javascript
function addTwoNumbers(x: unknown, y: unknown): number
{
    let a: number;
    let b: number;

    if (typeof x == "string") a = Number(x);
    else a = x as number;

    if (typeof y == "string") b = Number(y);
    else b = y as number;

    return a + b;
}

console.log(addTwoNumbers(10, "10")); // Output: 20
```
In this case addTwoNumbers function we are using the type guard to narrowing down the variables to number which we can perform addition operation on them.

****

* CASE 2:
```javascript
interface User {
    name: string,
    ID: number,
    isAdmin: boolean;
}

class AdminUser implements User {
    isAdmin: boolean = true;
    name: string;
    ID: number;
    constructor(name: string, ID: number)
    {
        this.name = name;
        this.ID = ID;
    }
}

const newUser = new AdminUser("shafayet", 12);

function AdminPrivilege(user: User): boolean {
    if (user instanceof AdminUser) return true;
    return false;
}

console.log(AdminPrivilege(newUser)); // Output: True
```
In this case the function AdminPrivilege determines if the user is admin user or not.


****

* CASE 3:
```javascript
type Dog = {
    name: string,
    bark():void
}

type Cat = {
    name: string,
    meow():void
};

function whatAnimal(animal: Dog | Cat): void
{
    if ("bark" in animal) console.log("It's a Dog");
    else console.log("It's a Cat");
    
}

const myPet: Dog = {
    name: "max", 
    bark:()=> console.log("Haw")
}
whatAnimal(myPet)
```
In this case we know what are the types could be and we can narrow down the type by searching for the key in our object if we have a unique key.