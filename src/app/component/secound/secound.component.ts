import { Component } from '@angular/core';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent {

img =[
  "assets/imges/img1.png",
  "assets/imges/img2.png",
  "assets/imges/img3.png",
  "assets/imges/img4.png"
]
i=0;
photo="assets/imges/img1.png";
timeout:any=null;

showall(){
   if(this.i<=3){
    this.photo =this.img[this.i];
    this.i++;
  }
  else{
    this.i=0;
    this.photo =this.img[this.i];
    this.i++
  }

  
}

prev(){
  if(this.i==0){
   return;
  }
  this.i--;
  this.photo=this.img[this.i];
}


slide(){
  if(this.timeout !=null){
    clearTimeout(this.timeout);
   }
if(this.img.length-1==this.i){
  this.i=0;
}else{
  this.i++;
}
this.photo=this.img[this.i];
  this.timeout = setTimeout(()=>this.slide(),500);
}


stop(){
  clearTimeout(this.timeout);
}



}

