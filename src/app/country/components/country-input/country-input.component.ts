import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe((value) => {
      this.onDebounce.emit(value)
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  pressKey() {
    this.debouncer.next(this.term);
  }
}
