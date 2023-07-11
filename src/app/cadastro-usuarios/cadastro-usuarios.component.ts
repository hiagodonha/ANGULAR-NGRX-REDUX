import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../repository/UsuarioService';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import * as fromUsuariosAction from '../store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }


  addUsuario() {

    if(this.model.id == 0) {
      console.log('this.model = ', this.model);
      this.store.dispatch(fromUsuariosAction.CreateUsuario({payload: this.model}))
      
    } 
    else {
      console.log('atualizar', this.model);
      this.store.dispatch(fromUsuariosAction.UpdateUsuario({payload: this.model}))
    }

    this.clean()
  }

  clean() {
    this.model = { id: 0, nome: '', idade: 0, perfil: '' }
  }


}
