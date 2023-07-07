import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../repository/UsuarioService';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit, OnDestroy {

  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private usuarioService: UsuarioService) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  addUsuario() {
    if(this.model.id == 0) {
      this.usuarioService.addUsuario(this.model).subscribe();
    } else {
      
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
