import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() public label: string;
  @Input() public name: string;
  @Input() public abstractControl: AbstractControl;
  @Output() public onKeyUp: EventEmitter<void> = new EventEmitter();
  @Output() public queryChanges: EventEmitter<string> = new EventEmitter();
  @Input() public queryDebounceTime = 0;
  @Input() public queryLength = 0;
  @Input() public readonly: boolean;
  @Input() public type = 'text';
  @Input() public required: boolean;
  @Input() public placeholder: string;
  public query: Subject<string> = new Subject<string>();
  constructor() {
    this.query
      .pipe(distinctUntilChanged(), debounceTime(this.queryDebounceTime))
      .subscribe(query => {
        if (query.length > this.queryLength) {
          this.onKeyUp.emit();
          this.queryChanges.emit(query);
        }
      });
  }

  ngOnInit() {}
}
