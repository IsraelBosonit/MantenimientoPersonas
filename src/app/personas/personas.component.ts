import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import { PersonaDetalleComponent } from '../persona-detalle/persona-detalle.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  selectedPersona?: Persona;
  personas: Persona[] = [];
  displayedColumns: string[] = ['id', 'usuario', 'apellido' , 'nombre', 'Opciones']
 @ViewChild(MatTable) table!: MatTable<Persona[]> ;

  constructor(private personaService: PersonaService, public dialog: MatDialog) { }

  ngOnInit(): void {
   this.getPersonas();

  }
  onSelect(persona: Persona): void {
      this.selectedPersona = persona;
    }
  getPersonas(): void {
      this.personaService.getPersonas()
          .subscribe(personas => this.personas = personas);
    }
  deletePersona(persona:Persona, i: number){
    this.personaService.delete(persona)
      .subscribe( p=>{  
        this.personas.splice(i,1);
        this.table.renderRows();
      });
    
  }
  
  openDialog(persona:Persona) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={persona}
    this.dialog.open(PersonaDetalleComponent,dialogConfig);
  }

  buscar(){
    const texto=(document.getElementById("buscar") as HTMLInputElement).value;
    if(texto!=''){
      this.personaService.getPersonaByNombre(texto).subscribe(personas=>this.personas=personas);
      this.table.renderRows;
    }else{
      this.getPersonas();
    }
  }
 }

 
