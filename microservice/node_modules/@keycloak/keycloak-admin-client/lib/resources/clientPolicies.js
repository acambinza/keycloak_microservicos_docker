"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ClientPolicies = void 0;
var resource_1 = __importDefault(require("./resource"));
var ClientPolicies = (function (_super) {
    __extends(ClientPolicies, _super);
    function ClientPolicies(client) {
        var _this = _super.call(this, client, {
            path: '/admin/realms/{realm}/client-policies',
            getUrlParams: function () { return ({
                realm: client.realmName
            }); },
            getBaseUrl: function () { return client.baseUrl; }
        }) || this;
        _this.listProfiles = _this.makeRequest({
            method: 'GET',
            path: '/profiles',
            queryParamKeys: ['include-global-profiles'],
            keyTransform: {
                includeGlobalProfiles: 'include-global-profiles'
            }
        });
        _this.createProfiles = _this.makeRequest({
            method: 'PUT',
            path: '/profiles'
        });
        _this.listPolicies = _this.makeRequest({
            method: 'GET',
            path: '/policies'
        });
        _this.updatePolicy = _this.makeRequest({
            method: 'PUT',
            path: '/policies'
        });
        return _this;
    }
    return ClientPolicies;
}(resource_1["default"]));
exports.ClientPolicies = ClientPolicies;
//# sourceMappingURL=clientPolicies.js.map