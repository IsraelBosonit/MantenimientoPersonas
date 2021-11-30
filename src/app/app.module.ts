import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  { path: '', redirectTo: '/personas', pathMatch: 'full' },
  { path: 'personas', component: PersonasComponent },
  { path: 'añadir', component: ReactiveFormComponent },
  { path: 'modificar/:id', component: ReactiveFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    ReactiveFormComponent,
    PersonaDetalleComponent,
  
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
