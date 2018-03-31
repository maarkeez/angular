/*
* Description: 	Angular building block that will manage the contents of the
* 	app element in the HTML document.
*/
import { Component } from "@angular/core";

@Component({
	selector:	"app",
	template: "<router-outlet></router-outlet>"
})

export class AppComponent { }