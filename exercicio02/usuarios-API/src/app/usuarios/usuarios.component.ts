import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios;

  constructor(public usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario() {
    this.usuarioService.getUsuarios().subscribe(data => this.usuarios = data)
  }

}
