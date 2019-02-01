import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { CrosswordComponent } from './crossword/crossword.component';
import { MastheadComponent } from './masthead/masthead.component';
import { CreateOpEdComponent } from './create-op-ed/create-op-ed.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
 },
 {
   path: 'app-crossword',
   component: CrosswordComponent
 },
 {
   path: 'app-create-op-ed',
   component: CreateOpEdComponent
 },
 {
  path: 'articles/:id',
  component: ArticleComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
