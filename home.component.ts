import { Component, ChangeDetectorRef } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink,RouterOutlet,RouterLinkActive,NgClass,NgStyle],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  giftimage = [{
    image1:'https://firstculinary.com/wp-content/uploads/9682DCAD-97B3-4B44-88AC-4F734BFBEB3D.jpeg',
    image2:'https://www.pngarts.com/files/1/Gift-Card-PNG-Image.png',
  },
  {
    image1:'https://www.tobycarvery.co.uk/content/dam/toby-carvery/images/2023/jansales/tob-2023-jansale-banner-tuetothurs.jpg.asset/1672310731949.jpg',
    image2:'https://www.pngarts.com/files/1/Gift-Card-PNG-Image.png',
  },
  {
   image1:'https://alarahi.com.pk/_next/image?url=https:%2F%2Fassets.indolj.io%2Fimages%2F1694781423-2.jpg&w=1200&q=75',
   image2:'https://www.pngarts.com/files/1/Gift-Card-PNG-Image.png',
  },
  {
  image1:'https://s3-ap-southeast-1.amazonaws.com/getz-prod/9df2027a-f8c7-4971-80a6-6180179f3190/-809122054_haizhongbao2.jpg',
  image2:'https://www.pngarts.com/files/1/Gift-Card-PNG-Image.png',
},
{
  image1:'https://firstculinary.com/wp-content/uploads/orderonlinebanner-20off.jpg',
  image2:'https://www.pngarts.com/files/1/Gift-Card-PNG-Image.png',
},
   ];
  swap(index1: number, index2: number) {
    // Ensure the swap indices are within bounds of the array
    if (index2 >= 0 && index2 < this.giftimage.length) {
      const temp = this.giftimage[index1];
      this.giftimage[index1] = this.giftimage[index2];
      this.giftimage[index2] = temp;
    }
  }
   getBackgroundColor(index: number): string {
    const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D']; 
    return colors[index % colors.length];
    }
  }

