import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './modules/portafolio/portafolio.component';
import { NotFoundComponent } from './errors/404/not-found.component';

const routes:Routes = [
  {path:'', redirectTo:'system', pathMatch:'full'},
  {
    path:'system',
    children:[
      {
        path:'',
        redirectTo:'portafolio',
        pathMatch:'full'
      },
      {
        path:'portafolio',
        children:[
          {
            path:'',
            component:PortafolioComponent
          },
        ]
      }
    ]
  },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),]
})
export class AppRoutingModule { }
