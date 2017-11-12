import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';

//import {AuthGuard} from './guards/auth.guard';

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    //{path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  //{path:'login', component:LoginComponent},
  //{path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  //{path:'profile', component:ProfileComponent, canActivate:[AuthGuard]}

];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
