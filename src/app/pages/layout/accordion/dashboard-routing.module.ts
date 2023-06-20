import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AccordionComponent } from "./accordion.component";
import { Tab1Component } from "../tabs/tabs.component";

const routes: Routes = [
  {
    path: "",
    component: AccordionComponent,
    children: [
      {
        path: "dashboard",
        component: Tab1Component,
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccRoutingModule {}
