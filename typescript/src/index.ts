
document.body.style.backgroundColor = "rgb(94, 91, 91)";


abstract class UserTemplate
{
    constructor(
        public name: string,
        public readonly id: number,

    ) {}

    abstract getLogin(): number;

}

class User extends UserTemplate
{
    constructor(
        name: string,
        id: number,
        public readonly email: string
    )
    {
        super(name, id);
    }

    getLogin(): number
    {
        return 1;
    }
}

const user = new User("akash", 1012, "gmail.com");

const div = document.querySelector('div');

div?.insertAdjacentHTML("afterbegin",
    `<h1 class='m-5'>${user.name}</h1>`

);


interface IKeyValueProcessor<T, S>
{
    process(key: T, val: S): void;
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void
    {
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc = new kvProcessor<string, string>();
proc.process('1', 'Bill');

interface Admin
{
    name: string;
    isAdmin(): boolean;
}

const admin: Admin = {
    name: "akash",
    isAdmin: function () { return true; }
};


