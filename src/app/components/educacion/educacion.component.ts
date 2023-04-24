import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;
  cursosList:any;
  languagesList:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.educacionList = data.educacion;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.cursosList = data.cursos;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.languagesList = data.languages;
    });
  }
}
