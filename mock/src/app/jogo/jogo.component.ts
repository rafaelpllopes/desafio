import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

import { JogadoresService  } from '../services/jogadores-service';
import { JogadorModel } from '../models/jogador-model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JogoComponent implements OnInit {
  private jogadores: JogadorModel[] = [];
  @Output() idJogador = new EventEmitter();
  private fim: boolean;
  private mensagem: String = '';

  constructor(private jogadoresService: JogadoresService) {
  }

  ngOnInit() {
    this.jogadoresService.addJogador.subscribe(jogadores => this.jogadores = jogadores);
    this.jogadores = this.jogadoresService.jogadores;
  }

  atacar(alvo: number) {
    this.jogadores[alvo].life -= 20;
    this.vencedor();
  }

  vencedor(): void {
    setTimeout(() => {
      if(this.jogadores[0].life == 0){
        this.mensagem = `${this.jogadores[1].name} venceu`;
        this.fim = true;
      }
      if(this.jogadores[1].life == 0){
        this.mensagem =`${this.jogadores[0].name} venceu`;
        this.fim = true;
      }
    }, 300);   
  }

  reiniciar(): void {
    this.jogadores.forEach(jogador => jogador.life = 100);
    this.fim = false;
    this.mensagem = '';
  }

  atribuirNome(): void {
    this.jogadores.forEach(jogador => jogador.name = `Jogador ${jogador.id}`);
  }
}
