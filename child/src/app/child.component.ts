import { Component } from '@angular/core';

/** If you can see this comment, you have full mapping information from the child plugin in the browser! */
@Component({
    templateUrl: 'child.component.html',
    styleUrls: ['child.component.scss']
})
export class ChildComponent {

    /** The counter that's incremented by the @see incrementCounter function. */
    counter: number = 0;

    /** Increments the @see counter. */
    incrementCounter() {
        this.counter++;
    }

    /** Throws an error with full stack info. */
    error() {
        this.stack1();
    }

    /** A layer on the stack. */
    stack1() {
        this.stack2();
    }

    /** Another layer on the stack. Actually throws the error. */
    stack2() {
        console.error("This is an error with hopefully lots of state information.");
    }
}