import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comics-simple-component',
  standalone: false,
  styleUrl: './comics-simple-component.css',
  templateUrl: './comics-simple-component.html',
})
export class ComicsSimpleComponent implements OnInit {

  public comics!: Array<Comic>

  getComics(): void{
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8t05C7EpiQkd8th6vSM-rJCvfoYDHRlX9FaPDQXCqDQ&s=10",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ]; 
  }

  ngOnInit(): void {
    this.getComics();
  }
}
