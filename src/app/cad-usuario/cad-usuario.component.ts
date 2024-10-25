import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { TipoService } from '../services/tipo.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss',
})
export class CadUsuarioComponent {
  formulario = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    tipo: new FormControl(''),
    login: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    dt_nascimento: new FormControl(''),
  });

  mensagem:string = '';

  onSave() {
    let dados = this.formulario.value;
    this.usuarioService.salvar(dados).subscribe({
      next: (res) => {
        console.log(res);
        this.mensagem = 'Sucesso ao adicionar usuário'
      },
      error: (erro) => {
        console.log(erro);
        this.mensagem = 'Erro ao adicionar usuário'
      },
    });
  }
  onCancelar() {
    this.formulario.reset();
  }

  constructor(
    private usuarioService: UsuarioService,
    private tipoService: TipoService
  ) {
    this.buscaTipos()
  }

  arrTipos: any[] = [];

  buscaTipos() {
    this.tipoService.getTipos().subscribe({
      next: (res) => {
        this.arrTipos = res.body;
        console.log(this.arrTipos);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
