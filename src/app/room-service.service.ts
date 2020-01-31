import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }

  public getPrice(numberOfNights: number){
    return 30 * numberOfNights;
  }
}
