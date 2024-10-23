import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
 import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
 import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {
        path:"home",component:HomeComponent
    },
    {
        path:"login",component :LoginComponent
    },
     {
         path:"register",component :RegisterComponent
    },
    {
        path:"menu",component :MenuComponent
    },
    {
         path:"about",component :AboutComponent
     },
    {
        path:"pages",component :PagesComponent
    },
    {
        path:"contact",component :ContactComponent
    },
    // {
    //     path:'',component:HomeComponent
    // },

    // {
    //     path:"**",redirectTo:"home",pathMatch:"full"
    // }

];

