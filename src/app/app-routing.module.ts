import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './modules/portafolio/portafolio.component';
import { NotFoundComponent } from './errors/404/not-found.component';

const routes:Routes = [
  {path:'', redirectTo:'system', pathMatch:'full',},
  {
    path:'system',
    children:[
      {
        path:'',
        redirectTo:'portafolio',
        pathMatch:'full',
      },
      {
        path:'portafolio',
        children:[
          {
            path:'',
            component:PortafolioComponent,
          },
        ]
      }
    ]
  },
  { path: '**', component: NotFoundComponent },
]


// const routes: Routes = [
//   { path: '', redirectTo: 'portafolio', pathMatch: 'full' },
//   {
//     path: 'system',
//     loadChildren: () =>
//       import('./layout/layout.module').then((m) => m.LayoutModule),
//   },
//   {
//     path: 'modules',
//     loadChildren: () =>
//       import('./modules/modules.module').then((m) => m.ModulesModule),
//   },
//   { path: '**', component: NotFoundComponent },
// ];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),]
})
export class AppRoutingModule { }
