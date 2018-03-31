"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
* Description: 	Prevent the application from starting with the /cart or /order URL.
*/
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_component_1 = require("./store/store.component");
var StoreFirstGuard = (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    /*
    * Description: Uses the context objects that Angular provides that describe the route that is about
    *	to be navigated to and checks to see whether the target component is a StoreComponent.
    *
    *	If this is the first time that the canActivate method has been called and a different component
    *	is about to be used, then the Router.navigateByUrl method is used to navigate to the root URL.
    */
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != store_component_1.StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StoreFirstGuard);
    return StoreFirstGuard;
}());
exports.StoreFirstGuard = StoreFirstGuard;
