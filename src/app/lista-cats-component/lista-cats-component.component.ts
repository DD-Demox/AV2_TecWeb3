import { Component, NgZone } from '@angular/core';
import { CatApiServiceService } from '../cat-api-service.service';

@Component({
  selector: 'app-lista-cats-component',
  templateUrl: './lista-cats-component.component.html',
  styleUrl: './lista-cats-component.component.css'
})
export class ListaCatsComponentComponent {

  constructor(private catapi:CatApiServiceService,ngzone:NgZone){}

  listCats:any =[]

  ngOnInit(){
    this.loadcats()
  }
  loadcats(){
    this.catapi.getCats().subscribe((data:{})=>{
      this.listCats = data
    })
  }

}
