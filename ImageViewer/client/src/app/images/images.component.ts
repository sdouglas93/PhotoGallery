import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Http, Headers } from '@angular/http';  
import { Router, ActivatedRoute } from '@angular/router';  
import { ImageService } from '../../service/imageService.service';
import { Observable } from 'rxjs';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
//import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface Image {
    url: string;
    id: number;
    width: number;
    height: number;

}

export interface Filtered {
    width: number;
    height: number;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
    public imageList: any; 

    filteredImages: Filtered[] = 
    [
        {width: 100, height: 100},
        {width: 250, height: 250},
        {width: 400, height: 200},
        {width: 300, height: 300}
    ];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    obs: Observable<any>;
    dataSource: MatTableDataSource<Image> = new MatTableDataSource<Image>();
    //dataSource = new MatTableDataSource<Image>();

    constructor(public http: Http, private _router: Router, private _imageService: ImageService, private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit(): void 
    {
        this.getImages();

        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
    }

    ngOnDestroy() {
      if (this.dataSource) { 
        this.dataSource.disconnect(); 
      }
    }

    getImages() {  
     ///this._imageService.getImages().subscribe( data => this.imageList = data)  
        this._imageService.getImages().subscribe(data => {this.dataSource.data = data;})
    } 

    filterChange(width,height) {

        alert(width);
        alert(height);


        this._imageService.getFilteredImages(width,height).subscribe(data => {
          this.dataSource.data = data;
        })
    }

}
