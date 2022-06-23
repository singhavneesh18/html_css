import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PagebodyComponent } from './pagebody/pagebody.component';
import { InterpollationComponent } from './interpollation/interpollation.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PagebodyComponent,
    InterpollationComponent,
    PipesComponent,
    PropertybindingComponent,
    StylebindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
