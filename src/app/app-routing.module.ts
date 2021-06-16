import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormComponent } from './components/form/form.component';
import { Page404Component } from './components/page404/page404.component';
import { ParamComponent } from './components/param/param.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { ServiceComponent } from './components/service/service.component';
import { NumberParamGuard } from './guards/number-param.guard';

const routes: Routes = [
  { path: '', redirectTo: 'binding', pathMatch: 'full' },
  { path: 'binding', component: BindingComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'redirect', component: RedirectComponent },
  { path: 'param/:nbr', component: ParamComponent, canActivate: [ NumberParamGuard ] },
  {path:'pipe', component: PipesComponent },
  { path: 'com', component: ParentComponent },
  { path: 'form', component: FormComponent },
  { path: 'service', component: ServiceComponent },
  { path: '404', component: Page404Component},
  { path: '**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
