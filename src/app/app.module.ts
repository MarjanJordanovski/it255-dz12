import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { AddSobaComponent } from './add-soba/add-soba.component';
import { RoomServiceService } from './room-service.service';
import { SingleSobaComponent } from './components/single-soba/single-soba.component';

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    FilterPipePipe,
    AddSobaComponent,
    SingleSobaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RoomServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
