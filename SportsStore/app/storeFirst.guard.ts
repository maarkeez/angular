/*
* Description: 	Prevent the application from starting with the /cart or /order URL.
*/
import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot, RouterStateSnapshot,
	Router
} from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class StoreFirstGuard {

	private firstNavigation = true;

	constructor(private router: Router) { }

	/*
	* Description: Uses the context objects that Angular provides that describe the route that is about
	*	to be navigated to and checks to see whether the target component is a StoreComponent.
	*
	*	If this is the first time that the canActivate method has been called and a different component 
	*	is about to be used, then the Router.navigateByUrl method is used to navigate to the root URL.
	*/
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.firstNavigation) {
			this.firstNavigation = false;
			if (route.component != StoreComponent) {
				this.router.navigateByUrl("/");
				return false;
			}
		}
		return true;
	}
}