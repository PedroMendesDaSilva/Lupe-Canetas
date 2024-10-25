import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {
formulario=new FormGroup({
  id:new FormControl(''),
  datademovimentacao:new FormControl(''),
  produto:new FormControl(''),
  quantidade:new FormControl(''),
  tipo:new FormControl(''),
})

onSave(){
let dados=this.formulario.value;
this.ProdutoService.salvar(dados).subscribe({
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
private ProdutoService:ProdutoService
){}
}