
interface User {
    name: string,
    readonly id: number;
    email?: string;
};


const user: User = {
    name: "akash",
    id: 123,
    email: "akash@gmail.com"
};

// type UserActivated = User & { auth: boolean; };

// const user2: UserActivated = {
//     ...user1,
//     auth: true
// };

interface User {
    auth?: true;
}

console.log(user);
