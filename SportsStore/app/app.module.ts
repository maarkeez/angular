/*
* Description: 	The root module is used to describe the application to Angular. 
* 	The description includes which feature modules are required to run the application, 
* 	which custom features should be loaded, and the name of the	root component.
*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }