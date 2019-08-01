import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ProdutosPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ProdutosPage),
  ],
})
export class ProdutosPageModule {}
