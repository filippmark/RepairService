"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var SignUpStore = require("../../store/SignUp");
var SignUp = /** @class */ (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            email: "",
            phone: "",
            password: "",
            password2: "",
            role: ""
        };
        _this._submitHandler = function (event) {
            event.preventDefault();
            _this.props.signUp({
                email: _this.state.email,
                phone: _this.state.phone,
                password: _this.state.password,
                role: _this.state.role,
            });
        };
        _this._handleChange = function (event) {
            var _a;
            _this.setState(__assign(__assign({}, _this.state), (_a = {}, _a[event.currentTarget.name] = event.currentTarget.value, _a)));
        };
        return _this;
    }
    SignUp.prototype.render = function () {
        return (React.createElement("form", null,
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "email" }, " \u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B"),
                React.createElement("input", { className: "form-control", type: "email", id: "email", name: "email", onChange: this._handleChange })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "phone" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),
                React.createElement("input", { type: "tel", className: "form-control", name: "phone", onChange: this._handleChange })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "password" }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                React.createElement("input", { type: "password", className: "form-control", id: "password", name: "password", onChange: this._handleChange })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "password2" }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"),
                React.createElement("input", { type: "password", className: "form-control", id: "password2", name: "password2", onChange: this._handleChange })),
            React.createElement("div", null,
                React.createElement("div", { className: "form-check form-check-inline" },
                    React.createElement("input", { type: "radio", value: "employer", name: "role", className: "form-check-input", id: "employer", onChange: this._handleChange }),
                    React.createElement("label", { className: "form-check-label", htmlFor: "employer" }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044F")),
                React.createElement("div", { className: "form-check form-check-inline" },
                    React.createElement("input", { type: "radio", value: "builder", name: "role", className: "form-check-input", id: "builder", onChange: this._handleChange }),
                    React.createElement("label", { className: "form-check-label", htmlFor: "builder" }, "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044F"))),
            React.createElement("button", { type: "submit", className: "btn btn-primary", onClick: this._submitHandler }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")));
    };
    return SignUp;
}(React.Component));
exports.default = react_redux_1.connect(null, SignUpStore.ActionCreators)(SignUp);
//# sourceMappingURL=SignUp.js.map