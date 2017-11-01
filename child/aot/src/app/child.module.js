var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
var ChildModule = (function () {
    function ChildModule() {
    }
    return ChildModule;
}());
ChildModule = __decorate([
    NgModule({
        declarations: [
            ChildComponent
        ],
        entryComponents: [
            // This makes sure a ComponentFactory is created in the bundle for this component
            ChildComponent
        ],
        providers: [
            // Provide a token for the base to know which component to render.
            // Theoretically we could have many of these available
            { provide: 'PLUGIN_ENTRY_POINT', useValue: ChildComponent }
        ]
    })
], ChildModule);
export { ChildModule };
