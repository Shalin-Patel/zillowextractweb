import {Component} from '@angular/core';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {DefaultConfigurationsService} from "../../_services/default-configurations.service";
import {PropertyTypeOption} from "../../_models/confiig/property-type-option";

@Component({
    selector: 'main-content',
    standalone: true,
    imports: [NgbDropdownModule],
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    providers: [DefaultConfigurationsService]
})
export class MainContentComponent {

    filterPropertyType: PropertyTypeOption = new PropertyTypeOption();
    propertyTypeOptions: Array<PropertyTypeOption> = [];

    constructor(public configurations: DefaultConfigurationsService) {
        this.configurations.propertyTypeOptions.subscribe(response => {
            this.propertyTypeOptions = response;
            this.propertyTypeOptions.filter(x => x.isDefault).forEach(x => {
                this.filterPropertyType = x;
            });
        });
    }

}
