"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var OrderDescription_1 = require("./OrderDescription/OrderDescription");
var OrderAddress_1 = require("./OrderAddress/OrderAddress");
var OrderTime_1 = require("./OrderTime/OrderTime");
var OrderPrice_1 = require("./OrderPrice/OrderPrice");
var Order = function () { return (React.createElement("div", { className: "container-md bg-light p-3 mb-2" },
    React.createElement("h1", null, "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"),
    React.createElement(OrderDescription_1.default, null),
    React.createElement(OrderAddress_1.default, null),
    React.createElement(OrderTime_1.default, null),
    React.createElement(OrderPrice_1.default, null),
    React.createElement("input", { className: "btn btn-primary mt-2", type: "submit", value: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" }))); };
exports.default = react_redux_1.connect()(Order);
//# sourceMappingURL=Order.js.map