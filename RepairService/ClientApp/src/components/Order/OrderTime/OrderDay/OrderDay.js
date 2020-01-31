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
var OrderStore = require("../../../../store/Order");
var react_redux_1 = require("react-redux");
var OrderDay = /** @class */ (function (_super) {
    __extends(OrderDay, _super);
    function OrderDay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._months = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Ноябрь',
            'Декабрь',
        ];
        _this._daysOfWeek = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];
        return _this;
    }
    OrderDay.prototype.render = function () {
        var _a, _b, _c;
        return (React.createElement("div", { className: "card m-2 flex-shrink-0 flex-grow-0", style: { width: '12rem' } },
            React.createElement("div", { className: "card-body" },
                React.createElement("h6", { className: "card-subtitle mb-2 text-muted text-center" },
                    " ",
                    this._months[(_a = this.props) === null || _a === void 0 ? void 0 : _a.date.getMonth()],
                    " "),
                React.createElement("p", { className: "card-title display-1 text-center" },
                    " ", (_b = this.props) === null || _b === void 0 ? void 0 :
                    _b.date.getDate(),
                    " "),
                React.createElement("p", { className: "card-text text-center" }, this._daysOfWeek[(_c = this.props) === null || _c === void 0 ? void 0 : _c.date.getDay()]))));
    };
    return OrderDay;
}(React.Component));
exports.default = react_redux_1.connect(null, OrderStore.actionCreators)(OrderDay);
//# sourceMappingURL=OrderDay.js.map