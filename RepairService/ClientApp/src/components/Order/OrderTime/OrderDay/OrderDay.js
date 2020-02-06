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
require("./OrderDay");
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
        _this.state = {
            isSelected: false,
        };
        _this._setDate = function (event) {
            _this.props.setDateExecutionOrderAction(_this.props.ownDate);
            _this.setState({ isSelected: true });
        };
        return _this;
    }
    OrderDay.prototype.componentDidUpdate = function () {
        var _a;
        if (((_a = this.props.date) === null || _a === void 0 ? void 0 : _a.getTime()) === this.props.ownDate.getTime()) {
            if (!this.state.isSelected) {
                this.setState({ isSelected: true });
            }
        }
        else if (this.state.isSelected) {
            this.setState({ isSelected: false });
        }
    };
    OrderDay.prototype.render = function () {
        var _a, _b, _c;
        return (React.createElement("div", { className: "card m-2 flex-shrink-0 flex-grow-0 " + (this.state.isSelected ? 'bg-success' : ''), style: { width: '12rem' } },
            React.createElement("div", { className: "card-body", onClick: this._setDate },
                React.createElement("h6", { className: "card-subtitle mb-2 ${this.state.isSelected ? 'text-white' : 'text-muted'} text-center" },
                    " ",
                    this._months[(_a = this.props) === null || _a === void 0 ? void 0 : _a.ownDate.getMonth()],
                    " "),
                React.createElement("p", { className: "card-title display-1 text-center" },
                    " ", (_b = this.props) === null || _b === void 0 ? void 0 :
                    _b.ownDate.getDate(),
                    " "),
                React.createElement("p", { className: "card-text text-center" }, this._daysOfWeek[(_c = this.props) === null || _c === void 0 ? void 0 : _c.ownDate.getDay()]))));
    };
    return OrderDay;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { var _a; return ({ date: (_a = state.order) === null || _a === void 0 ? void 0 : _a.date }); }, OrderStore.actionCreators)(OrderDay);
//# sourceMappingURL=OrderDay.js.map