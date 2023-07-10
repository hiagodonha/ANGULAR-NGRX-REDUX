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
export class ListarUsuariosComponent implements OnInit, OnDestroy {

  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios)

  constructor(
    private store: Store<AppState>,
    private usuarioService: UsuarioService
    ) {}
  
  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
