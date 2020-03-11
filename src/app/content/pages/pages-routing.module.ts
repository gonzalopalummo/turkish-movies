import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DemoPageComponent } from "./snippets/demo-page/demo-page.component";
import { LandingPageComponent } from "./snippets/landing-page/landing-page.component";
import { ErrorPageComponent } from "./snippets/error-page/error-page.component";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: "./components/components.module#ComponentsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
