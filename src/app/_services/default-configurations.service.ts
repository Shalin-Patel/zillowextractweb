import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PropertyTypeOption} from "../_models/confiig/property-type-option";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DefaultConfigurationsService {


    private propertyTypeOptionsURL: string = "/assets/config/data/property-type-options.json";

    constructor(private http: HttpClient) {
        this.loadPropertyTypeOptions();
    }

    private _propertyTypeOptions: BehaviorSubject<Array<PropertyTypeOption>> = new BehaviorSubject<Array<PropertyTypeOption>>([]);

    get propertyTypeOptions(): Observable<Array<PropertyTypeOption>> {
        return this._propertyTypeOptions.asObservable();
    }

    private loadPropertyTypeOptions = (): void => {
        this.http.get<Array<any>>(this.propertyTypeOptionsURL).subscribe(response => {
            this._propertyTypeOptions.next(response.map((x: any): PropertyTypeOption => Object.assign<PropertyTypeOption, any>(new PropertyTypeOption(), x)));
        });
    }

}
