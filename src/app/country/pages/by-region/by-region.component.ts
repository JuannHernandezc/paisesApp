import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  getClassCss( region: string): string{
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion( region: string){
    this.activeRegion = region;
  }
}
