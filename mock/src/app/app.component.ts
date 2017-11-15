import { Component } from '@angular/core';

import { JogadoresService  } from './services/jogadores-service';
import { JogadorModel } from './models/jogador-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mock';
  
  constructor(private jogadoresService: JogadoresService){
    jogadoresService.setJogador(new JogadorModel(jogadoresService.getLength(), 'Jogador 1'));
    jogadoresService.setJogador(new JogadorModel(jogadoresService.getLength(), 'Jogador 2'));
  }
}
