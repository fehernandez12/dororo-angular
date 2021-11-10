import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DemonioformComponent } from './components/demonioform/demonioform.component';
import { MainComponent } from './components/main/main.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { DemonioslistComponent } from './components/demonioslist/demonioslist.component';

const router: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'demonios', component: DemonioslistComponent },
  { path: 'demonios/crear', component: DemonioformComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    DemonioformComponent,
    MainComponent,
    SidemenuComponent,
    DemonioslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
