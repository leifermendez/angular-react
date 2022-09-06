import { PlanbyComponentNG } from './planby/PlanbyComponentNG';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomReactComponentWrapperComponent } from './CustomReactComponentWrapper';
import { ReactSelectComponent } from './react-select/react-select.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    PlanbyComponentNG,
    CustomReactComponentWrapperComponent,
    ReactSelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
