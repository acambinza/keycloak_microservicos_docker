"use strict";
exports.__esModule = true;
exports.Logic = exports.DecisionEffect = exports.DecisionStrategy = void 0;
var DecisionStrategy;
(function (DecisionStrategy) {
    DecisionStrategy["AFFIRMATIVE"] = "AFFIRMATIVE";
    DecisionStrategy["UNANIMOUS"] = "UNANIMOUS";
    DecisionStrategy["CONSENSUS"] = "CONSENSUS";
})(DecisionStrategy = exports.DecisionStrategy || (exports.DecisionStrategy = {}));
var DecisionEffect;
(function (DecisionEffect) {
    DecisionEffect["Permit"] = "PERMIT";
    DecisionEffect["Deny"] = "DENY";
})(DecisionEffect = exports.DecisionEffect || (exports.DecisionEffect = {}));
var Logic;
(function (Logic) {
    Logic["POSITIVE"] = "POSITIVE";
    Logic["NEGATIVE"] = "NEGATIVE";
})(Logic = exports.Logic || (exports.Logic = {}));
//# sourceMappingURL=policyRepresentation.js.map