/*
* Description: 	Angular building block that will manage the contents of the
* 	app element in the HTML document.
*/
import { Component } from "@angular/core";

@Component({
	selector:	"app",
	template:	`<div class="bg-success p-a-1 text-xs-center">
					This is SportsStore
				</div>`
})

export class AppComponent { }