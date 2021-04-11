import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { IntroComponent } from './intro/intro.component';
import { LearnComponent } from './learn/learn.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {component:IntroComponent, path:''},
  {component:LearnComponent, path:'learn'},
  {component:ProjectsComponent, path:'projects'},
  {component:ContactComponent, path:'contact'},
  {component:TopicsComponent, path:'topics'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
