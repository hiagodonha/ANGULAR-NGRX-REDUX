import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UsuarioModel } from '../Models/UsuarioModel';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UsuarioService {

    private URL_API = 'http://localhost:3000/usuarios';

    constructor(private http: HttpClient) { }

    getUsuarios() {
        console.log('url: ', this.URL_API);
        return this.http.get<UsuarioModel[]>(this.URL_API);
    }

    getUsuarioById(id: number) {
        return this.http.get<UsuarioModel>(this.URL_API + '/' + id)
    }

    addUsuario(record: UsuarioModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8')

        return this.http.post<UsuarioModel>(this.URL_API, JSON.stringify(record), { headers : headers})
    }

    updateUsuario(record: UsuarioModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8')
        console.log(this.URL_API + '/' + record.id, JSON.stringify(record), { headers : headers});
        return this.http.put<UsuarioModel>(this.URL_API + '/' + record.id, JSON.stringify(record), { headers : headers})
    }

    deleteUsuario(id: number) {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8')

        return this.http.delete(this.URL_API + '/' + id, {headers : headers})
    }

} 