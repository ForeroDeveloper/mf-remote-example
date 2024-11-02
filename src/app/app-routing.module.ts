import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Configura tus rutas aquí
];
@NgModule({
    imports: [
      RouterModule.forChild(routes) // Cambia 'forRoot' por 'forChild'
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
