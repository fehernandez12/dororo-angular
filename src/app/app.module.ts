import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// PrimeNG
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
// Locales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { LugarformComponent } from './components/lugarform/lugarform.component';
import { ParteformComponent } from './components/parteform/parteform.component';
import { LugarlistComponent } from './components/lugarlist/lugarlist.component';
import { TableComponent } from './components/table/table.component';
import { PartelistComponent } from './components/partelist/partelist.component';
import { DemonioscrudComponent } from './components/demonioscrud/demonioscrud.component';

const router: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lugares', component: LugarlistComponent },
  { path: 'lugares/crear', component: LugarformComponent },
  { path: 'lugares/editar/:id', component: LugarformComponent },
  { path: 'partes', component: PartelistComponent },
  { path: 'partes/crear', component: ParteformComponent },
  { path: 'partes/editar/:id', component: ParteformComponent },
  { path: 'demonios', component: DemonioscrudComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    SidemenuComponent,
    LugarformComponent,
    ParteformComponent,
    LugarlistComponent,
    TableComponent,
    PartelistComponent,
    DemonioscrudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ToolbarModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
