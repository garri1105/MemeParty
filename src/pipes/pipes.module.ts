import { NgModule } from '@angular/core';
import { ToArrayPipe } from './to-array/to-array';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ToArrayPipe],
	imports: [IonicModule],
	exports: [ToArrayPipe]
})
export class PipesModule {}
