import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget', // was 'color-picker',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class AppComponent implements OnInit {
  @Output() themeChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() theme;


}



