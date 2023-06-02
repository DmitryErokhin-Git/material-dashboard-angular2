import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }]
  },
  // {
  //   // path: '',
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    // path: '',
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true// *
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

// *
// useHash: true - это опция, которая указывает Angular использовать хэш -
// фрагмент в URL для маршрутизации вместо пути без хэша.Когда эта опция
// включена, URL будет иметь вид http://example.com/#/route, где /route -
// это маршрут вашего приложения.Использование хэш - фрагмента в URL
// полезно в тех случаях, когда ваше приложение развернуто на статическом
// хостинге, который не поддерживает настройку сервера для поддержки HTML5
// History API.Хэш - фрагмент позволяет обходить это ограничение и
// обеспечивает правильную маршрутизацию в вашем приложении.
// Обратите внимание, что использование хэш - фрагмента также может
// привести к изменению структуры URL и может быть нежелательным для
// некоторых приложений.Поэтому перед включением этой опции внимательно
// оцените ее необходимость и соответствие требованиям вашего приложения.