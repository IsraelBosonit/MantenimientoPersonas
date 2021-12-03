import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas()
          .subscribe(personas => this.personas = personas);
  }
  borrarPersona(persona:Persona){
    this.personas=this.personas.filter(function (f:Persona){return f.id_persona!==persona.id_persona});
  }

}
