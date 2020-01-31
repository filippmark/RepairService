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
var OrderStore = require("../../../store/Order");
var react_redux_1 = require("react-redux");
var OrderAddress = /** @class */ (function (_super) {
    __extends(OrderAddress, _super);
    function OrderAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._townInputHandler = function (event) {
            _this.props.setTownOrder(event.target.value);
        };
        _this._streetHouseInputHandler = function (event) {
            _this.props.setStreetHouseOrder(event.target.value);
        };
        return _this;
    }
    OrderAddress.prototype.render = function () {
        return (React.createElement("div", { className: "border-bottom mb-2" },
            React.createElement("h2", null, " \u0410\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 "),
            React.createElement("form", null,
                React.createElement("label", { htmlFor: "town" }, " \u0413\u043E\u0440\u043E\u0434 "),
                React.createElement("input", { type: "text", className: "form-control w-25", name: "townAddress", id: "town", onChange: this._townInputHandler }),
                React.createElement("label", { htmlFor: "StreetHouse" }, " \u0423\u043B\u0438\u0446\u0430, \u0434\u043E\u043C "),
                React.createElement("input", { type: "text", className: "form-control w-50 mb-1", name: "streetHouse", id: "StreetHouse", "aria-describedby": "orderShortDescHelp" }))));
    };
    return OrderAddress;
}(React.Component));
exports.default = react_redux_1.connect(null, OrderStore.actionCreators)(OrderAddress);
//# sourceMappingURL=OrderAddress.js.map