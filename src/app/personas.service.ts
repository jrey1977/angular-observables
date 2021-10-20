import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Persona {
  nombre: string;
  apellidos: string;
  empresa:string;
  email: string;
  telefono: number;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas: Persona[];
  private personas$: Subject<Persona[]>;

  constructor() {
      this.personas = [];
      this.personas$ = new Subject();
  }

  agregarPersona(pPersona: Persona){
    this.personas.push(pPersona);
    this.personas$.next(this.personas);
  }

  getPersonas$(): Observable<Persona[]> {
    return this.personas$.asObservable();
  }

}
