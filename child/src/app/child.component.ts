import { Component } from '@angular/core';

@Component({
    selector: "child-plugin",
    template: `
    <h1>HOLY SHIT I'M A CHILD THAT WAS LOADED</h1>
    <h2>My name is {{name}}</h2>
    `
})
export class ChildComponent {
    name: string;

    constructor() {
        this.name = "Bob";
    }
}