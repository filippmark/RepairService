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
require("./OrderDay.css");
var OrderStore = require("../../../../store/Order");
var OrderDay = /** @class */ (function (_super) {
    __extends(OrderDay, _super);
    function OrderDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderDay.prototype.render = function () {
        return (React.createElement("div", { className: "card m-2 flex-shrink-0 flex-grow-0", style: { width: '12rem' } },
            React.createElement("div", { className: "card-body" },
                React.createElement("h6", { className: "card-subtitle mb-2 text-muted text-center" }, " \u0424\u0435\u0432\u0440\u0430\u043B\u044C "),
                React.createElement("p", { className: "card-title display-1 text-center" }, " 31 "),
                React.createElement("p", { className: "card-text text-center" }, "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"))));
    };
    return OrderDay;
}(React.Component));
exports.default = OrderDay;
react_redux_1.connect(function (state) { return state.order; }, OrderStore.actionCreators)(OrderDay);
//# sourceMappingURL=OrderDay.js.map