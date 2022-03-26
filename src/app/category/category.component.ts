import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public articlesService: ArticlesService) { }

  articles=[];
  ngOnInit(): void {
    this.articles=this.articlesService.getarticles();
   // setInterval(()=>{this.articlesService.index++},1000)
  }

}
