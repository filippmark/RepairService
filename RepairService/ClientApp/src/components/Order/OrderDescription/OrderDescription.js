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
var OrderDescription = /** @class */ (function (_super) {
    __extends(OrderDescription, _super);
    function OrderDescription() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shortDescriptionHandler = function (event) {
            _this.props.setShortOrderDescription(event.target.value);
        };
        _this._fullDescriptionHandler = function (event) {
            _this.props.setFullOrderDescription(event.target.value);
        };
        return _this;
    }
    OrderDescription.prototype.render = function () {
        return (React.createElement("div", { className: "border-bottom mb-1" },
            React.createElement("h2", null, " \u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0430 "),
            React.createElement("form", null,
                React.createElement("label", { htmlFor: "ShortDesc" }, " \u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"),
                React.createElement("input", { type: "text", className: "form-control form-control-lg w-25", id: "ShortDesc", "aria-describedby": "orderShortDescHelp", onChange: this._shortDescriptionHandler }),
                React.createElement("small", { id: "orderShortDescHelp", className: "form-text text-muted" }, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430, \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E\u043A\u043B\u0435\u0439\u043A\u0430 \u043E\u0431\u043E\u0435\u0432. "),
                React.createElement("label", { htmlFor: "FullDesc" }, " \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 "),
                React.createElement("textarea", { className: "form-control form-control-lg w-50 mb-1", id: "FullDesc", "aria-describedby": "orderShortDescHelp", onChange: this._fullDescriptionHandler }),
                React.createElement("small", { id: "orderShortDescHelp", className: "form-text text-muted" }, " \u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E\u043A\u043B\u0435\u0438\u0442\u044C \u0442\u0440\u0451\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0443\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u043C\u0435\u0442\u0440\u043E\u0432\u044B\u043C\u0438 \u043E\u0431\u043E\u044F\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0434\u0435\u043B\u0438. "))));
    };
    return OrderDescription;
}(React.Component));
exports.default = react_redux_1.connect(null, OrderStore.actionCreators)(OrderDescription);
//# sourceMappingURL=OrderDescription.js.map