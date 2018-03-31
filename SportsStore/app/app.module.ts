/*
* Description: 	The root module is used to describe the application to Angular. 
* 	The description includes which feature modules are required to run the application, 
* 	which custom features should be loaded, and the name of the	root component.
*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
	imports: [BrowserModule, StoreModule,
	RouterModule.forRoot([
		{
			path: "store", component: StoreComponent,
			canActivate: [StoreFirstGuard]
		},
		{
			path: "cart", component: CartDetailComponent,
			canActivate: [StoreFirstGuard]
		},
		{
			path: "checkout", component: CheckoutComponent,
			canActivate: [StoreFirstGuard]
		},
		{
			path: "admin",
			loadChildren: "app/admin/admin.module#AdminModule",
			canActivate: [StoreFirstGuard]
		},
		{ path: "**", redirectTo: "/store" }
	])],
	providers: [StoreFirstGuard],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }