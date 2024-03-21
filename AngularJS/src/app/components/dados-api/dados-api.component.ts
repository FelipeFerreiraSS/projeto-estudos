import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-dados-api',
  templateUrl: './dados-api.component.html',
  styleUrls: ['./dados-api.component.css']
})
export class DadosApiComponent implements OnInit {
  dados: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDados().subscribe(
      (data) => {
        this.dados = data;
        console.log('Dados recebidos:', this.dados);
      },
      (error) => {
        console.error('Erro na chamada GET:', error);
      }
    );
  }
}
