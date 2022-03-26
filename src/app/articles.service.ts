import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  index = 0 ;
  articles =[
    {title:"Angular course",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    imagepath:"https://johnknox.com/wp-content/uploads/200x250.png",
    isFavorite:true},

    {title:"Nodejs course",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    imagepath:"https://johnknox.com/wp-content/uploads/200x250.png",
    isFavorite:false},

    {title:"Spring course",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    imagepath:"https://johnknox.com/wp-content/uploads/200x250.png",
    isFavorite:false},

    {title:"HTML course",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    imagepath:"https://johnknox.com/wp-content/uploads/200x250.png",
    isFavorite:true}
   ]

  getarticles(){
    return this.articles ;
  }

  AddArticles(){
   
  }

  DeleteArticles(){
    
  }

  UpdateArticles(){

  }

  constructor() { }
}
