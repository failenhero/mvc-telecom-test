import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public addStackItemForm!: FormGroup;
  public peekItem: string = '';
  public popItem: string = '';

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addStackItemForm = new FormGroup({
      itemText: new FormControl('', [
        Validators.required
      ])
    })
  }

  addStackItem(){
    let newItem = {
      Text:this._itemText
    }

    this.httpService.push(newItem).subscribe(res => {
      this.initForm();
    });
  }

  peek() {
    this.httpService.peek().subscribe(res => {
      this.peekItem = res;
      this.initForm();
    })
  }

  pop() {
    this.httpService.pop().subscribe(res => {
      this.popItem = res;
      this.initForm();
    })
  }

  get _itemText() {
    return this.addStackItemForm.get('itemText')?.value;
  }

}
