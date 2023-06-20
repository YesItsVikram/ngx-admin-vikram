import { NgModule } from "@angular/core";
import { NbMenuModule, NbTabsetModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { TriggerComponent } from "./credit/trigger/trigger.component";
import { LenderComponent } from "./credit/lender/lender.component";
import { CompletedComponent } from "./credit/completed/completed.component";
// import { CreditModule } from "./credit/credit.module";
// import { CreditComponent } from "./credit/credit.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbTabsetModule,
    // CreditModule,
  ],
  declarations: [
    PagesComponent,
    TriggerComponent,
    LenderComponent,
    CompletedComponent,
  ],
})
export class PagesModule {}
