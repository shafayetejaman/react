
// document.body.style.backgroundColor = "rgb(94, 91, 91)";


// abstract class UserTemplate
// {
//     constructor(
//         public name: string,
//         public readonly id: number,

//     ) {}

//     abstract getLogin(): number;

// }

// class User extends UserTemplate
// {
//     constructor(
//         name: string,
//         id: number,
//         public readonly email: string
//     )
//     {
//         super(name, id);
//     }

//     getLogin(): number
//     {
//         return 1;
//     }
// }

// const user = new User("akash", 1012, "gmail.com");

// const div = document.querySelector('div');

// div?.insertAdjacentHTML("afterbegin",
//     `<h1 class='m-5'>${user.name}</h1>`

// );


// interface IKeyValueProcessor<T, S>
// {
//     process(key: T, val: S): void;
// };

// class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
// {
//     process(key: T, val: U): void
//     {
//         console.log(`Key = ${key}, val = ${val}`);
//     }
// }

// let proc = new kvProcessor<string, string>();
// proc.process('1', 'Bill');

// interface Admin
// {
//     name: string;

//     isAdmin(): boolean;
// }

interface User
{
    name: string,
    ID: number,
    isAdmin: boolean;
}

class AdminUser implements User
{
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

function UserType(user: User): boolean
{

    if (user instanceof AdminUser) return true;
    return false;
}

console.log(UserType(newUser)); // Output: True


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