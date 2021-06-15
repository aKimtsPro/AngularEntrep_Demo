import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NavComponent } from './components/nav/nav.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { Page404Component } from './components/page404/page404.component';
import { ParamComponent } from './components/param/param.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { VoiturePipe } from './pipes/voiture.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantAComponent } from './components/parent/enfant-a/enfant-a.component';
import { EnfantBComponent } from './components/parent/enfant-b/enfant-b.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    NavComponent,
    RedirectComponent,
    Page404Component,
    ParamComponent,
    PipesComponent,
    VoiturePipe,
    ParentComponent,
    EnfantAComponent,
    EnfantBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
