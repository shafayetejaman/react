var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.body.style.backgroundColor = "rgb(94, 91, 91)";
var UserTemplate = /** @class */ (function () {
    function UserTemplate(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserTemplate;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, id, email) {
        var _this = _super.call(this, name, id) || this;
        _this.email = email;
        return _this;
    }
    User.prototype.getLogin = function () {
        return 1;
    };
    return User;
}(UserTemplate));
var user = new User("akash", 1012, "gmail.com");
var div = document.querySelector('div');
div === null || div === void 0 ? void 0 : div.insertAdjacentHTML("afterbegin", "<h1 class='m-5'>".concat(user.name, "</h1>"));
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process('1', 'Bill');
