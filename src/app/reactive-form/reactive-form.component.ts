import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';  
import { PersonaService } from '../persona.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private location: Location, private route: ActivatedRoute, private personaService: PersonaService) { }

  id:number=parseInt(this.route.snapshot.paramMap.get('id')!);

  registerForm= this.formBuilder.group({
    usuario:[''],
    surname:[''],
    password:[''],
    name:[''],
    company_email:[''],
    personal_email:[''],
    city:[''],
    active:[false],
    created_date:[''],
    imagen_url:[''],
    termination_date:[''],
  })

  ngOnInit(): void {
    if(isNaN(this.id)==false){
      this.personaService.getPersonaById(this.id).subscribe(persona => this.registerForm= this.formBuilder.group({
        usuario:[persona.usuario],
        surname:[persona.surname],
        password:[persona.password],
        name:[persona.name],
        company_email:[persona.company_email],
        personal_email:[persona.personal_email],
        city:[persona.city],
        active:[persona.active],
        created_date:[persona.created_date],
        imagen_url:[persona.imagen_url],
        termination_date:[persona.termination_date],
      }));
      
    }
  }

  submit(){
    console.log(this.registerForm.value);
  if(isNaN(this.id)==false){
    fetch('http://localhost:8080/'+this.id,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.registerForm.value)
  })
  }else{
    fetch('http://localhost:8080',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.registerForm.value)
  })
  }
  
  }
  goBack(): void {
    this.location.back();
  }
  
 

}
