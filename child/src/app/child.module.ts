import { NgModule, Injector } from '@angular/core';
import { MatCommonModule, MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';

import { ChildComponent } from './child.component';

@NgModule({
    imports: [
        MatCommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule
    ],
    declarations: [
        ChildComponent
    ],
    entryComponents: [
        // This makes sure a ComponentFactory is created in the bundle for this component.
        // This allows us to render the component into a ViewContainerRef in the hosting app.
        ChildComponent
    ],
    providers: [
        // Provide a token for the base to know which component to render.
        // You can make many of these available as long as your hosting app also knows about them.
        { provide: 'PLUGIN_ENTRY_POINT', useValue: ChildComponent }
    ]
})
export class ChildModule {}