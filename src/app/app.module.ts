import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule, MatSortModule, MatTableModule, MatPaginatorModule, MatNativeDateModule, MatCheckboxModule, MatDialogModule, MatRadioModule, MatDatepickerModule, MatSelectModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routingArr } from './app.routing';
import { LayoutModule } from '@angular/cdk/layout';
import { SignupformComponent } from './signupform/signupform.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupformComponent,
    PagenotfoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    routingArr,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
