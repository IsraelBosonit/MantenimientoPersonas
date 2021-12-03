import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() persona: Persona = {
    id_persona: 0,
    usuario: "",
    password: "",
    name: "",
    surname: "",
    company_email: "",
    personal_email: "",
    city: "",
    active: false,
    created_date: new Date(),
    imagen_url: "",
    termination_date: new Date()
  };
  @Output() personaBorrada: EventEmitter<Persona> = new EventEmitter();
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }
  deletePersona(persona:Persona){
    this.personaService.delete(persona)
      .subscribe();
      this.personaBorrada.emit(this.persona);
    
  }

}
