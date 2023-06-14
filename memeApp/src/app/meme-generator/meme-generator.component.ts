import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.css']
})
export class MemeGeneratorComponent {

  @ViewChild('myCanvas', {static:false}) canvas: ElementRef<HTMLCanvasElement> | any;
  topFont : string = 'Arial';
  bottomFont : string = 'Arial';
  topColor : string = '#000000';
  bottomColor : string = '#000000';
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
    c.fillStyle = this.topColor
    c.fillText(this.topTxt, this.canvas.nativeElement.width/2, 90);
    c.font = '40px '+ this.bottomFont;
    c.fillStyle = this.bottomColor
    c.fillText(this.bottomTxt, this.canvas.nativeElement.width/2, 640);
   
  }

  onSelectedFontTop(input: any)
  {
    
    this.topFont = input;
    this.fillTopText();

  }

  onSelectedFontBottom(input: any)
  {
   
    this.bottomFont = input;
    this.fillTopText();


  }

  onSelectedColorTop($input: ColorEvent)
  {
    
    this.topColor = $input.color.hex;
    this.fillTopText();

  }

  onSelectedColorBottom($input: any)
  {
   
    this.bottomColor = $input.color.hex;
    this.fillTopText();


  }

  
}

