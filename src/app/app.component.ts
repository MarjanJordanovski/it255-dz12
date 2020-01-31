import { Component } from '@angular/core';
import { Soba} from './soba/soba.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  sobe: Soba[];
  constructor(){
    this.sobe = [
      new Soba('Soba 244', 'Fantasticna soba sa divnim pogledom', '2'),
      new Soba('Soba 151', 'Porodicni apartman za odmor kakav zasluzujete', '4'),
      new Soba('Soba 25', 'Luksuzna soba za nezaboravno iskustvo', '2')
    ];
  }
    
      public deleteSoba(soba: Soba) {
        this.sobe = this.sobe.filter(item => {
        return item.title !== soba.title
        })
        }
        public updateSoba(soba: Soba) {
          let index = this.sobe.findIndex(i => i.title === soba.title);
          this.sobe[index].title = "Nova soba"
          }
          public addSoba(soba: Soba) {
            this.sobe.push(soba);
            }
            
          
        
}
