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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var OrderDay_1 = require("./OrderDay/OrderDay");
var OrderStore = require("../../../store/Order");
var OrderTime = /** @class */ (function (_super) {
    __extends(OrderTime, _super);
    function OrderTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderTime.prototype.render = function () {
        return (React.createElement("div", { className: "border-bottom mb-1" },
            React.createElement("div", { className: "d-flex flex-nowrap overflow-auto" },
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null),
                React.createElement(OrderDay_1.default, null)),
            React.createElement("h5", null, " \u0412\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430 "),
            React.createElement("div", { className: "form-check form-check-inline" },
                React.createElement("input", { className: "form-check-input", name: "time", type: "radio", value: "1" }),
                React.createElement("label", { className: "form-check-label", htmlFor: "inlineCheckbox1" }, " 8:00 - 12:00 ")),
            React.createElement("div", { className: "form-check form-check-inline" },
                React.createElement("input", { className: "form-check-input", name: "time", type: "radio", value: "option2" }),
                React.createElement("label", { className: "form-check-label", htmlFor: "inlineCheckbox2" }, " 12:00 - 16:00 ")),
            React.createElement("div", { className: "form-check form-check-inline" },
                React.createElement("input", { className: "form-check-input", name: "time", type: "radio", value: "option3" }),
                React.createElement("label", { className: "form-check-label", htmlFor: "inlineCheckbox3" }, " 16:00 - 20:00"))));
    };
    return OrderTime;
}(React.Component));
exports.default = OrderTime;
react_redux_1.connect(function (state) { return state.order; }, OrderStore.actionCreators)(OrderTime);
//# sourceMappingURL=OrderTime.js.map