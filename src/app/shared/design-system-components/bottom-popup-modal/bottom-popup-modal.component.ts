import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-bottom-popup-modal',
  templateUrl: './bottom-popup-modal.component.html',
  styleUrls: ['./bottom-popup-modal.component.scss']
})
export class BottomPopupModalComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Output() didClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.didClose.emit(true);
  }

}
