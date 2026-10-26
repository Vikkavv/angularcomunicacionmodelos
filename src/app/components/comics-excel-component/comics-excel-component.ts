import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent implements OnInit{

  public comics!: Array<Comic>;

  constructor(private _detector: ChangeDetectorRef){}

  getComics(): void{
    fetch("assets/comics.xlsx").then(response => response.arrayBuffer()).then((data) => {
      let woorkbook = XLSX.read(data, {type: "array"});
      let sheetName = woorkbook.SheetNames[0];
      let sheet = woorkbook.Sheets[sheetName];
      let comicsJson = XLSX.utils.sheet_to_json(sheet);
      this.comics = comicsJson.map((comicJson: any) => {
        return new Comic(comicJson.nombre, comicJson.imagen, comicJson.descripcion)
      })
      this._detector.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getComics();
  }

}
