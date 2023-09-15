import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FillCardDetailsComponent } from './components/fill-card-details/fill-card-details.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';

@NgModule({
  declarations: [AppComponent, FillCardDetailsComponent, CardPreviewComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
