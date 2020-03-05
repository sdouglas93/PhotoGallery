import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageService } from '../service/imageService.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    RouterModule.forRoot([  
      { path: '', component: ImagesComponent, pathMatch: 'full' },
      { path: 'images', component: ImagesComponent },  
      { path: '**', redirectTo: 'home' }  
     ])  

    ],
    exports: [
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        MatSelectModule
  ],
  providers: [ImageService,{ provide: 'BASE_URL', useFactory: getBaseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}