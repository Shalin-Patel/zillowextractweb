import {Routes} from '@angular/router';
import {MainContentComponent} from "./components/main-content/main-content.component";
import {AreaFilterComponent} from "./components/area-filter/area-filter/area-filter.component";

export const routes: Routes = [{
    path: 'extract', component: MainContentComponent,
},{
    path: 'area-filter', component: AreaFilterComponent,
}];
