import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.css']
})
export class MemeGeneratorComponent {

  @ViewChild('myCanvas', {static:false}) canvas: ElementRef<HTMLCanvasElement> | any;
  topFont : string = 'Arial';
  bottomFont : string = 'Arial';
  topColor : string = '';
  bottomColor : string = '';
  file:any;



  topTxt : string = '';
  bottomTxt : string ='';

  
  loadImage(input:any):void
  {
   
    this.file = input;
    let c = this.canvas?.nativeElement.getContext('2d');   
    let file = new FileReader();
    file.readAsDataURL(input.target.files[0]);
    file.onload = function (event)
    {

      const image = new Image();
      image.src = event.target?.result as string;
      image.onload = function()
      {
        c.drawImage(image, 60, 100, 400, 500);
      }
    }

  }

  fillTopText()
  {
    
    let c = this.canvas?.nativeElement.getContext('2d');  
    c.clearRect(0, 0, this.canvas?.nativeElement.width, this.canvas?.nativeElement.height); 
    if(this.file)
    {
    this.loadImage(this.file);
    }
    c.textAlign = 'center';
    c.font = '40px ' + this.topFont;
    c.color = this.topColor
    c.fillText(this.topTxt, this.canvas.nativeElement.width/2, 90);
    c.font = '40px '+ this.bottomFont;
    c.color = this.bottomColor
    c.fillText(this.bottomTxt, this.canvas.nativeElement.width/2, 640);
   
  }

  onSelectedTop(input: any)
  {
    this.topFont = input;
    this.fillTopText();

  }

  onSelectedBottom(input: any)
  {
    this.bottomFont = input;
    this.fillTopText();


  }

}

