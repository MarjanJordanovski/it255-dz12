import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Soba } from './soba.model';
import { RoomServiceService } from '../room-service.service';
@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.styl']
})
export class SobaComponent implements OnInit {
  @Output() sobaToDelete: EventEmitter<Soba>;
  @Output() updateSoba: EventEmitter<Soba>;
  //@Output() sobaToAdd: EventEmitter<Soba>;
  @HostBinding('attr.class') cssClass = 'row';
  @Input() soba: Soba;
  constructor(private _sanitizer: DomSanitizer, private _roomService: RoomServiceService) {
    this.sobaToDelete = new EventEmitter();
    this.updateSoba = new EventEmitter();

   }

  ngOnInit() {
  }
  public deleteProduct(): void {
    this.sobaToDelete.emit(this.soba);
    }
  public changeContent(): void {
    this.updateSoba.emit(this.soba);
    let sum = this._roomService.getPrice(+this.soba.beds);
    console.log(sum);
    }

}
