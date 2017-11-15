import { EventEmitter, Injectable } from '@angular/core';

import { JogadorModel } from '../models/jogador-model';

@Injectable()
export class JogadoresService {
    jogadores: JogadorModel[] = [];
    addJogador = new EventEmitter(); 
    
    constructor() {}

    public setJogador(jogador: JogadorModel){
        this.jogadores.push(jogador);
        this.addJogador.emit(this.jogadores);
    }  
  
    public getJogadores(id: number): JogadorModel {  
      let jogador: JogadorModel;  
      jogador = this.jogadores[id];  
      return jogador;
    }

    public getLength(): Number {
        return this.jogadores.length;
    }
}