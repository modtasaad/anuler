import { Component } from '@angular/core';

@Component({
  selector: 'app-frist',
  templateUrl: './frist.component.html',
  styleUrls: ['./frist.component.css']
})
export class FristComponent {
  data = "";
getdata(e:any){
this.data=e.target.value
} 

  remove(){
    this.data="";
  }

}
