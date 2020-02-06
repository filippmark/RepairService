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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "card  flex-shrink-0 flex-grow-0 m-1", style: { width: '15rem' } },
            React.createElement("div", { className: "card-body" },
                React.createElement("h5", { className: "card-title" }, "Card"),
                React.createElement("p", { className: "card-text" },
                    " ",
                    this.props.order.shortDescription,
                    " "),
                React.createElement("a", { href: "#", className: "btn btn-outline-primary" }, " \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0437\u0430\u043A\u0430\u0437\u0435"))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=OrderCard.js.map