/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import * as chartsComponents from './components';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: chartsComponents.components,
    exports: chartsComponents.components,
})
export class ChartsModule {}
