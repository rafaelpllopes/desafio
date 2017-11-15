import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { JogadoresService  } from '../services/jogadores-service';
import { JogadorModel } from '../models/jogador-model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarComponent implements OnInit {
  private jogador: JogadorModel;
  private id;
  private route: ActivatedRoute;
  private router: Router;
  private jogadorForm = new FormGroup({
    nome: new FormControl()
  });

  private mensagem: string = '';

  
  constructor(private formBuilder: FormBuilder, private jogadoresService: JogadoresService, route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.jogador = jogadoresService.getJogadores(this.id);
    });
    this.jogadorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {
  }

  editar(event) {
    event.preventDefault();    
    if(!this.jogadorForm.invalid) {
      this.jogadoresService.jogadores[this.id].name = this.jogadorForm.value.name;
      this.exibeMensagem();
    }
  }

  exibeMensagem(): void{
    this.mensagem = 'Nome alterado com sucesso';
    setTimeout(() => {
      this.mensagem = '';
      this.router.navigate(['']);
    }, 1500);
  }
}
