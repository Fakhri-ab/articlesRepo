import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path:'',
    component:ListeArticlesComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'category/:idcat',
    component:ListeArticlesComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
