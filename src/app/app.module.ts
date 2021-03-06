import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


import { Routes, RouterModule } from '@angular/router';
import {  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,} from '@angular/material';
import 'hammerjs';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MainwrapperComponent } from './mainwrapper/mainwrapper.component';
import { WidgetHeaderButtonCompComponent } from './widget-header-button-comp/widget-header-button-comp.component';
import { ButtonFooterComponent } from './button-footer/button-footer.component';

const routes : Routes = [
  {path:'' ,component:MainwrapperComponent},
  {path:'content' ,component:ContentComponent },
  {path:'content/:id' ,component:ContentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HeaderComponent,
    ContentComponent,
    MainwrapperComponent,
    WidgetHeaderButtonCompComponent,
    ButtonFooterComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


