import { 
    Compiler, 
    Component, 
    ComponentFactory, 
    Injector, 
    Input, 
    NgModuleFactory, 
    NgModuleRef, 
    OnInit, 
    Type,
    ViewContainerRef 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PluginMetadata } from './plugin-metadata.model';

@Component({
    selector: 'plugin',
    template: ' ' // There has to be a default template or angular complains at runtime
})
export class PluginLoaderComponent implements OnInit {

    @Input() name: string;

    constructor(
        private viewRef: ViewContainerRef,
        private http: HttpClient,
        private compiler: Compiler,
        private injector: Injector
    ) {}

    /** This code loads the main.js script of the child plugin, embeds it on the page, compiles the module, and renders
     * the component. In a real-life scenario you'd use a service to load the scripts and cache the component factories,
     * and only do the actual rendering of the component factories in this function. */
    ngOnInit() {
        const metadataFilename: string = 'plugin-metadata.json';
        const factoryFilename: string = 'main.js';
        const pluginUrlPrefix: string = 'plugins';
        const pluginEntryPointToken = 'PLUGIN_ENTRY_POINT';

        this.viewRef.clear();

        // Retrieve the plugin metadata
        this.http.get<PluginMetadata>(`${pluginUrlPrefix}/${this.name}/${metadataFilename}`)
            .subscribe(
                (metadata) => {

                // Create the DOM element to load in the compiled child plugin .js file
                const script = document.createElement('script');
                script.src = `${pluginUrlPrefix}/${this.name}/${factoryFilename}`;

                // Set up the script's onload event to actually compile and render the component
                script.onload = () => {
                    // The plugin module's type should be stored against the window using its module name
                    let moduleType: Type<{}> = window[metadata.moduleName];

                    // Get the moduleType from the window, and compile an NgModuleFactory for it
                    let moduleFactory: NgModuleFactory<any> = this.compiler.compileModuleSync(moduleType);

                    // From the NgModuleFactory, use *this* app's injector to create an NgModuleRef (if we let the 
                    // child module be bootstrapped, it will create its own injector, which bootstraps all of the 
                    // Material/CDK modules again, which creates a lot of headaches for us - think two CDK Overlay 
                    // containers)
                    let moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);

                    // Use the entry point token to grab the component type that we should be rendering
                    const componentType: Type<{}> = moduleRef.injector.get(pluginEntryPointToken);

                    // Resolve the component factory
                    const componentFactory: ComponentFactory<{}> = moduleRef.componentFactoryResolver.resolveComponentFactory(componentType);

                    // Push the component to the view
                    this.viewRef.createComponent(componentFactory);
                };

                // Add the script to the page
                document.head.appendChild(script);
            });
    }
}