import { Component, OnInit,Inject } from '@angular/core';
import { Persona } from '../persona';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  persona:Persona;
  constructor(dialogRef: MatDialogRef<PersonaDetalleComponent>,@Inject(MAT_DIALOG_DATA) data: {persona: Persona} ) {
    this.persona=data.persona;
   }

  ngOnInit(): void {
  }

}
