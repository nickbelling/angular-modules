import { Component, OnInit, ViewContainerRef, ComponentFactory, Input, NgModuleFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

import { PluginMetadata } from './plugin-metadata.model';

@Component({
    selector: 'plugin',
    template: ' ' // There has to be a default template or angular complains at runtime
})
export class PluginLoaderComponent implements OnInit {

    @Input() name: string;

    constructor(
        private viewRef: ViewContainerRef,
        private http: HttpClient
    ) {}

    ngOnInit() {
        const metadataFilename: string = 'plugin-metadata.json';
        const factoryFilename: string = 'main.js';
        const pluginUrlPrefix: string = 'plugins';
        const pluginEntryPointToken = 'PLUGIN_ENTRY_POINT';

        // Retrieve the plugin metadata
        this.http.get<PluginMetadata>(`${pluginUrlPrefix}/${this.name}/${metadataFilename}`)
            .subscribe(
                (metadata) => {

                // Create the element to load in the module and factories
                const script = document.createElement('script');
                script.src = `${pluginUrlPrefix}/${this.name}/${factoryFilename}`;

                // Set up the script's onload event to actually fetch and render the component
                script.onload = () => {
                    // The plugin module's injector should be stored against the window using its module name
                    let moduleInjector = window[metadata.moduleName];

                    // Use the entry point token to grab the component type that we should be rendering
                    const componentType: any = moduleInjector.get(pluginEntryPointToken);
                    const componentFactory: ComponentFactory<{}> = moduleInjector.componentFactoryResolver.resolveComponentFactory(componentType);

                    // Push the component to the view
                    this.viewRef.createComponent(componentFactory);
                }

                // Add the script to the page
                document.head.appendChild(script);
            });
    }
}