import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { routes } from './app.routes';
import { HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    NgIf,
    RouterLinkActive,
    NgFor,
    NgClass,
    HomeComponent,
    FormsModule,
    CommonModule,
   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-Restuarant';
  isDropdownOpen = false;
  showFooter: boolean = true;
  showHeader: boolean = true;
  showsearch:boolean=true;
  searchTerm: string = '';
  searchResults:any[]=[];
  newsletter={ 
    myemail :''
   };
   
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  
  constructor(private http: HttpClient) {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      this.showFooter = url !== '/login' && url !== '/register';
      this.showHeader = url !== '/login' && url !== '/register';
      this.showsearch = url !== '/login' && url !== '/register';
      
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target && !target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  menuItems = [
    {
      name: 'Bruschetta',
      price:'Price', 
      amt :'-10',
      image:'https://th.bing.com/th/id/R.a7d9403986c-1206e013e05ed698-12b25?rik=zl%2ffleBDE%2bTPBg&riu=http%3a%2f%2fimg.sndimg.com%2ffood%2fimage%2fupload%2fq_92%2cfl_progressive%2fv1%2fimg%2frecipes%2f22%2f55%2f71%2f222x87iSNegy7GYCYxxU_pesto-bruschetta-6690.jpg&ehk=suzcFh5w%2bKLjvOJqeXmieEQhnMJEGjJsl7%2bsFbNbq18%3d&risl=&pid=ImgRaw&r=0',
    },{  name: 'Gnoochi',
      price:'Price', 
      amt :'-25',
      image:'https://www.tasteandtellblog.com/wp-content/uploads/2014/11/Gnocchi-with-Meat-Sauce-Taste-and-Tell-1-374x561.jpg',
    },{  name: 'Tequila',
      price:'Price', 
      amt :'-5',
      image:'https://cianblog.com/wp-content/uploads/2019/08/1248-2-B1905.jpg',

    },
    {
      name: 'Spanish Sauage',
      price:'Price', 
      amt :'-12',
      image: 'https://th.bing.com/th/id/R.3bd5e659b94860dea7f3a2cef908a5ae?rik=mAV8a3JuoiezZg&riu=http%3a%2f%2fdigtoknow.com%2fwp-content%2fuploads%2f2015%2f09%2fStarter-Recipes.jpg&ehk=25DvV%2b7OL%2bX0flyyfA%2flqU4LpEUT2C%2bIbogbiCH3w8s%3d&risl=&pid=ImgRaw&r=0',
    },{  name: 'Sauteed Pork',
      price:'Price', 
      amt :'-25',
      image:'https://assets.marthastewart.com/styles/wmax-520-highdpi/d20/la102308_1006_mainv1/la102308_1006_mainv1_vert.jpg?itok=YP5sM4Bu',
    },{  name: 'Cocktail',
      price:'Price', 
      amt :'-5',
      image:'https://thegoosedarien.com/wp-content/uploads/2021/12/Wide-3-2-Happy-Hour.jpg',

    },
    {
      name: 'Vegetable Soup',
      price:'Price', 
      amt :'-12',
      image: 'https://www.cookingclassy.com/wp-content/uploads/2014/10/vegetable-soup-7.jpg',
    },{  name: 'Roasted Bacon',
      price:'Price', 
      amt :'-25',
      image:'https://th.bing.com/th/id/OIP.UVoXh3r31oNPFIq-CCyAxwAAAA?rs=1&pid=ImgDetMain',
    },{  name: 'Forzen Dirnks',
      price:'Price', 
      amt :'-5',
      image:'https://images.squarespace-cdn.com/content/v1/5f4e7155ce513218e4076c12/1624485851137-SLEWNB3B7QG0ZC8WBR1Z/_T1A4908.jpeg?format=1000w',

    },
    {
      name: 'Aloo Nazakat',
      price:'Price', 
      amt :'-12',
      image: 'https://i.pinimg.com/originals/09/10/08/0910082bd4a206a8f23da1059954c651.jpg',
    },{  name: 'Vegan Dinner',
      price:'Price', 
      amt :'-25',
      image:'https://assets.epicurious.com/photos/5c7d6ee0d6c37575ccdd79c3/master/pass/SMALL-PLATES-Chickpea-Flatbread-recipe-27022019.jpg',
    },{  name: 'Ice Coffee',
      price:'Price', 
      amt :'-5',
      image:'https://image.freepik.com/free-photo/clouse-up-fresh-ice-coffee-cold-americano-coffee-shop-background_1553-212.jpg',

    },
    {
      name: 'Chicken Skewwers',
      price:'Price', 
      amt :'-12',
      image: 'https://www.foodfusion.com/wp-content/uploads/2018/03/2-1.jpg',
    },{   name: 'Shillet Pork',
      price:'Price', 
      amt :'-25',
      image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/4/0/FNK_Skillet-Pork-Tenderloin-With-Spiced-Carrots-And-Couscous-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1507136270038.jpeg',
    },{  name: 'Blue Ice Cocktail',
      price:'Price', 
      amt :'-5',
      image:'https://th.bing.com/th/id/R.66723e80c568d9f4bcbb2a86858f4831?rik=MZDjr6j%2b5PyVjA&riu=http%3a%2f%2fyannys.in%2fimages%2fblue-iced.webp&ehk=wxO1EWpYLR2K17C%2fh3CKJHbL7B3LNkdDOMsIuov6XuM%3d&risl=&pid=ImgRaw&r=0',

    },
    {
      name: 'Quinoa With Beetroot',
      price:'Price', 
      amt :'-12',
      image: 'https://i.pinimg.com/originals/3e/b3/b3/3eb3b3688c84094a506825c02f63671c.jpg',
    },{  name: 'Skillet Salmon',
      price:'Price', 
      amt :'-25',
      image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg',
    },{  name: 'Rose Wine',
      price:'Price', 
      amt :'-5',
      image:'https://i1.wp.com/www.bms.co.in/wp-content/uploads/2014/08/rose-wine.jpg',

    },
    {
      name: 'Indian Chaat',
      price:'Price', 
      amt :'-12',
      image: 'https://i.pinimg.com/originals/9d/03/83/9d0383367e62389280c15af15a9fb415.jpg',
    },{  name: 'Tofu Chanpuru',
      price:'Price', 
      amt :'-25',
      image:'https://th.bing.com/th/id/R.d15364898741690146d39c0b52089e5c?rik=CIIKPILm2e33zw&riu=http%3a%2f%2fimages.media-allrecipes.com%2fimages%2f67886.jpg&ehk=Ruco8rQmEcJMzF%2b2nj2z6Oj5zFc2VBvS61sC1KoUoQQ%3d&risl=&pid=ImgRaw&r=0',
    },{  name: 'Graped Wine',
      price:'Price', 
      amt :'-5',
      image:'https://th.bing.com/th/id/OIP.ofE9tpztGXk5HQCM170xVAHaJQ?w=640&h=800&rs=1&pid=ImgDetMain',

    },
    {
      name: 'Veg Kebab Platter',
      price:'Price', 
      amt :'-12',
      image: 'https://assets.zeezest.com/images/PROD_1_1663427531378.jpg',
    },{ name: 'Spaghetti',
      price:'Price', 
      amt :'-25',
      image:'https://article-imgs.scribdassets.com/pa0w0g6kg7mt9fr/images/file620TI2B0.jpg',
    },{ name: 'Sparlink Wine',
      price:'Price', 
      amt :'-5',
      image:'https://pinotsquirrel.com/wp-content/uploads/2022/07/Depositphotos_34886951_L-1-960x640.jpg',

    },
    {
      name: 'Tamato Bruschetta',
      price:'Price', 
      amt :'-12',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Tomato-bruschetta-308295f.jpg?quality=45&resize=960,872',
    },{
      name: 'Shrimp Boil',
      price:'Price', 
      amt :'-25',
      image:'https://www.pinoycookingrecipes.com/uploads/7/6/7/8/7678114/img-1613263983917-1_orig.png',
    },{
      name: 'YellowStones',
      price:'Price', 
      amt :'-5',
      image:'https://cdn-s3.touchofmodern.com/products/002/557/588/bceed9f6f129b06604ddeb87da1b7ad2_large.jpg?1670354362',

    },
    {
      name: 'Deep Fried Brussels Sprouts',
      price:'Price', 
      amt :'-12',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2016/11/deep-fried-brussels-d3d9a88.jpg?quality=45&resize=2000,1818',
    },{
      name: 'Butter Chicken',
      price:'Price', 
      amt :'-25',
      image:'https://cookingchew.com/wp-content/uploads/2022/07/CO2191-What-to-Serve-With-Butter-Chicken-1080x1080.jpg',
    },{
      name: 'Cappuccino',
      price:'Price', 
      amt :'-5',
      image:'https://img.freepik.com/premium-photo/latte-art-cappuccino_1031776-27287.jpg',

    },
  ];

  onSearch():void {
    console.log(routes);
    if(this.searchTerm){
      this.searchResults =this.menuItems.filter(item=> item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      console.log('Searching Results:', this.searchResults);
    } else {
      this.searchResults=["Not found"];
    }
    
  } 
  private elementRef=inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const searchContainer = this.elementRef.nativeElement.querySelector('.search-container');

   
    if (searchContainer && !searchContainer.contains(target)) {
      this.searchResults = []; 
    }
  }

  onsubmit(): void {
    if(!this.newsletter.myemail){
      alert("please enter the email");
      return;
    }
    this.http.post("http://localhost:8080/api/newseltter", this.newsletter).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Subscription Successfully");
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        alert("An Error Occurred, Please try again");
      }
    });
  }
}
