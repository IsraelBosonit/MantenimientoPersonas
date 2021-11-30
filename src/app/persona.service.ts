import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }
  getPersonas(): Observable<Persona[]> {
    const url = 'http://localhost:8080';
    const personas = this.http.get<Persona[]>(url);
    return personas;
  }
  getPersonaById(id:number): Observable<Persona>{
    return this.http.get<Persona>('http://localhost:8080/'+id);
  }

  delete(persona: Persona) {
    return this.http.delete('http://localhost:8080/' + persona.id_persona);
  }
  
  buscarPersona(term:string):Observable<Persona[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Persona[]>('http://localhost:8080/nombre/'+term);

  }
  getPersonaByNombre(nombre:string):Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:8080/nombre/'+nombre);
  }
}
