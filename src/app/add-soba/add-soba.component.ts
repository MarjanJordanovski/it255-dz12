import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Soba } from 'src/app/soba/soba.model';

@Component({
  selector: 'app-add-soba',
  templateUrl: './add-soba.component.html',
  styleUrls: ['./add-soba.component.styl']
})
export class AddSobaComponent implements OnInit {
  public sobaForm: FormGroup;

  @Output() sobaToAdd: EventEmitter<Soba>;

  constructor() { 
    this.sobaToAdd = new EventEmitter();
  }

  ngOnInit() {
    this.initForm();
    this.sobaToAdd = new EventEmitter();
  }
  public initForm() {
    this.sobaForm = new FormGroup({
    title: new FormControl('', [
    Validators.required
    ]),
    description: new FormControl('', [
    Validators.required
    ]),
    beds: new FormControl('', [
    Validators.required
    ])
    });
    }
    public submitForm() {
      let title = this.sobaForm.get('title').value;
      let description = this.sobaForm.get('description').value;
      let beds = this.sobaForm.get('beds').value;
      let soba = new Soba(title, description, beds);
      this.sobaToAdd.emit(soba);
      }

}
