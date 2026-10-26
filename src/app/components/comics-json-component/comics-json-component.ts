import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent implements OnInit{

  public comics!: Array<Comic>;

  constructor(private _detector: ChangeDetectorRef) {
    
  }

  getComics(): void{
    let comicsLocal = [];
    fetch("assets/comics.json").then(response => response.json()).then((data: any[]) => {
      for (const comicJson of data) {
        comicsLocal.push(new Comic(comicJson.nombre, comicJson.imagen, comicJson.descripcion))
        console.log(comicJson);
      }
      this.comics = comicsLocal;
      this._detector.detectChanges();
    })
  }

  ngOnInit(): void {
    this.getComics();
  }


}
