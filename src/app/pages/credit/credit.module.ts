import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionComponent } from "./accordion/accordion.component";
import {
  NbCardModule,
  NbRouteTabsetModule,
  NbTabsetModule,
} from "@nebular/theme";
import { CreditComponent } from "./credit.component";
import { CreditRoutingModule } from "./credit-routing.module";

@NgModule({
  declarations: [AccordionComponent, CreditComponent],
  imports: [
    CreditRoutingModule,
    CommonModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
  ],
})
export class CreditModule {}
