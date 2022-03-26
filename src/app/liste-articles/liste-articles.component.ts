import { Component, OnInit } from '@angular/core';
import{ArticlesService} from '../articles.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  title = "liste of articles";
  i= 0;
  articles=[];
  name="Fakhri";

  view = "tab1" ;

  course=
    {
    title:"complete angular course",
    rating:1.975 ,
    price:150.95,
    realeaseDate:new Date(2022,4,11)
    }
 
  constructor(private articlesService: ArticlesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.articles=this.articlesService.getarticles();
    this.route.paramMap.subscribe(params => {console.log("id",params.get('idcat'));})
    //setInterval(()=>{this.i++},1000)
  }

  // getTitltes(){
  //   return this.title;
  // } 
  save(){
    console.log("your name is",this.name);
  }

  // change($event){
  //   this.name=$event.target.value;
  //   console.log(event);
  // }

  articleChange(event){
    console.log("this is the badge changed",event);
  }

}
