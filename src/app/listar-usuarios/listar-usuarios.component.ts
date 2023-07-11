import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../repository/UsuarioService';
import { UsuarioModel } from '../Models/UsuarioModel';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../store/usuarios/usuarios.actions'
import * as fromUsuariosSelector from '../store/usuarios/usuarios.reducer'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios)
  usario$: Observable<UsuarioModel | null> = this.store.select(fromUsuariosSelector.getUsuario) 

  constructor( private store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }

  editar(id: number) {
    console.log('editar')
    this.store.dispatch(fromUsuariosAction.LoadUsuario({payload: id}));
  }

  excluir(id: number) {
    console.log('excluir')
    this.store.dispatch(fromUsuariosAction.DeleteUsuario({payload: id}));
  }

}
