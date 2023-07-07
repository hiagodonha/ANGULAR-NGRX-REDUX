import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../repository/UsuarioService';
import { UsuarioModel } from '../Models/UsuarioModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit, OnDestroy {

  listaUsuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService) {}
  
  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe((usuarios:UsuarioModel[]) => {
        this.listaUsuarios = usuarios;
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
