import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CreditComponent } from "./credit.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { TriggerComponent } from "./trigger/trigger.component";
import { LenderComponent } from "./lender/lender.component";
// import { AccordionComponent } from "../layout/accordion.component";
// import { Tab1Component } from "../tabs/tabs.component";

const routes: Routes = [
  {
    path: "",
    component: CreditComponent,
    children: [
      {
        path: "core",
        component: AccordionComponent,
      },
      {
        path: "trigger",
        component: TriggerComponent,
      },
      {
        path: "lender",
        component: LenderComponent,
      },
      {
        path: "",
        redirectTo: "core",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditRoutingModule {}
