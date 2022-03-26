import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article ;

  badge="New";

  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changed(){
    this.badge="old" ;
    this.change.emit(this.article);
  }

}
