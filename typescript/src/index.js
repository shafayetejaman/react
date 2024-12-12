// document.body.style.backgroundColor = "rgb(94, 91, 91)";
var AdminUser = /** @class */ (function () {
    function AdminUser(name, ID) {
        this.isAdmin = true;
        this.name = name;
        this.ID = ID;
    }
    return AdminUser;
}());
var newUser = new AdminUser("shafayet", 12);
function UserType(user) {
    if (user instanceof AdminUser)
        return true;
    return false;
}
console.log(UserType(newUser)); // Output: True
function whatAnimal(animal) {
    if ("bark" in animal)
        console.log("It's a Dog");
    else
        console.log("It's a Cat");
}
var myPet = {
    name: "max",
    bark: function () { return console.log("Haw"); }
};
whatAnimal(myPet);
