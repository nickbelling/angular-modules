import { NgModule, InjectionToken } from '@angular/core';

import { ChildComponent } from './child.component';

@NgModule({
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
export class ChildModule {}