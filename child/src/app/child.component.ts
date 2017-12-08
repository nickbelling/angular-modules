import { Component } from '@angular/core';

@Component({
    selector: "child-plugin",
    template: `
    <h1>I'M A CHILD THAT WAS LOADED</h1>
    <h2>My name is {{name}}</h2>
    <!--<button mat-raised-button>I'm a material button!</button>-->
    `
})
export class ChildComponent {
    name: string;

    constructor() {
        this.name = "Bob";
    }
}