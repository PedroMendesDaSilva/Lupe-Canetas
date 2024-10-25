import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-mov-produtos',
  templateUrl: './mov-produtos.component.html',
  styleUrl: './mov-produtos.component.scss'
})
export class MovProdutosComponent {
  formulario=new FormControl({
    nome:new FormControl(''),
    preco:new FormControl(''),
    garantia:new FormControl(''),
    descricao:new FormControl(''),
    iD:new FormControl(''),
    cor:new FormControl(''),
    fabricante:new FormControl(''),
    tipo:new FormControl('')
  })
  
  onSave(){
    let dados = this.formulario.value
    
    
    this.movimentacaoService.salvar(dados).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(erro)=>{
        console.log(erro);
        
      },
    })  
    }
    onCancelar(){
      this.formulario.reset()
    }
    
    
    constructor(
      private movimentacaoService:MovimentacaoService
    ){}
    
    }