import { Component, Injector, OnInit, ViewContainerRef, NgModuleFactory, Input, ComponentFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { PluginMetadata } from './plugin-metadata.model';

@Component({
    selector: 'dynamic-component-loader',
    template: ' ' // There has to be a template or angular complains at runtime
})
export class DynamicComponentLoader implements OnInit {

    @Input() name: string;

    constructor(
        private injector: Injector,
        private viewRef: ViewContainerRef,
        private http: HttpClient
    ) {}

    ngOnInit() {
        const metadataFilename: string = 'plugin-metadata.json';
        const factoryFilename: string = 'plugin-factory.umd.js';
        const pluginUrlPrefix: string = 'plugins';
        const factorySuffix: string = 'NgFactory';
        const pluginEntryPointToken = 'PLUGIN_ENTRY_POINT';

        // Retrieve the plugin metadata
        this.http.get<PluginMetadata>(`${pluginUrlPrefix}/${this.name}/${metadataFilename}`)
            .subscribe(
                (metadata) => {

                // Create the element to load in the module and factories
                const script = document.createElement('script');
                script.src = `${pluginUrlPrefix}/${this.name}/${factoryFilename}`;

                // Set up the script's onload event to inject the component
                script.onload = () => {
                    // Rollup builds the bundle so it's attached to the window object when loaded in
                    const moduleFactory: NgModuleFactory<any> = window[metadata.name][metadata.moduleName + factorySuffix];
                    const moduleRef = moduleFactory.create(this.injector);

                    // Use the entry point token to grab the component type that we should be rendering
                    const componentType = moduleRef.injector.get(pluginEntryPointToken);
                    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(componentType);

                    // Push the component to the view
                    this.viewRef.createComponent(componentFactory);
                }

                // Add the script to the page
                document.head.appendChild(script);

            });
    }

}