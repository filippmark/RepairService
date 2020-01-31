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
var OrderPrice = /** @class */ (function (_super) {
    __extends(OrderPrice, _super);
    function OrderPrice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rewardHandler = function (event) {
            var numbers = /^[0-9]*$/gm;
            var value = event.target.value;
            if (numbers.test(value)) {
                var reward = value !== '' ? parseInt(value) : 0;
                _this.props.setRewardForOrder(reward);
            }
            else {
                event.target.value = _this.props.reward === 0 ? '' : _this.props.reward.toString();
            }
        };
        _this._isNegotiableHandler = function (event) {
            _this.props.setIsNegotiableOrderReward(event.target.checked);
        };
        return _this;
    }
    OrderPrice.prototype.componentDidMount = function () {
        console.log(this.props);
    };
    OrderPrice.prototype.render = function () {
        return (React.createElement("div", { className: "border-bottom mb-1" },
            React.createElement("h2", null, " \u041E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 "),
            React.createElement("form", null,
                React.createElement("input", { type: "text", className: "form-control form-control-lg w-25", id: "Price", "aria-describedby": "orderShortDescHelp", onChange: this._rewardHandler }),
                React.createElement("small", { id: "orderShortDescHelp", className: "form-text text-muted" }, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0432\u044B\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0437\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430. "),
                React.createElement("div", { className: "form-check form-check-inline  m-2" },
                    React.createElement("input", { className: "form-check-input", type: "checkbox", name: "bargain", id: "bargain", value: "true", onChange: this._isNegotiableHandler }),
                    React.createElement("label", { className: "form-check-label", htmlFor: "bargain" }, " \u0422\u043E\u0440\u0433 \u0443\u043C\u0435\u0441\u0442\u0435\u043D ")))));
    };
    return OrderPrice;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({ reward: state.order.reward }); }, OrderStore.actionCreators)(OrderPrice);
//# sourceMappingURL=OrderPrice.js.map