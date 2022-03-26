import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './summary.pipe';
import { ArticleComponent } from './article/article.component';
import { ModalComponent } from './modal/modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    SummaryPipe,
    ArticleComponent,
    ModalComponent,
    SignUpComponent,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
