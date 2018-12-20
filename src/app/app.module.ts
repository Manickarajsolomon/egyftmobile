import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
// HTTP_INTERCEPTORS
import { HttpinterceptorService } from './services/interceptor.service';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// App Component
import { AppComponent } from './app.component';
// Auth Guard
import { AuthGuard } from './authguard/auth.guard';
// Services
import { CommonService } from './services/common.service';
// Component
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// Module
import { SidebarModule } from './sidebar/sidebar.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { BuybuisnesscardComponent } from './buybuisnesscard/buybuisnesscard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonComponent,
    SignupComponent,
    MywalletComponent,
    BuybuisnesscardComponent,
    // SidebarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    SidebarModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule, MatButtonModule
  ],

  providers: [AuthGuard, CommonService,
    HttpinterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    },
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
