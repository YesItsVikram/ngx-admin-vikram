import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationStart,
  Params,
  Router,
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "ngx-credit",
  templateUrl: "./credit.component.html",
  styleUrls: ["./credit.component.scss"],
})
export class CreditComponent implements OnInit {
  showSearch = true;
  tabs = [
    {
      title: "Core Underwriting (Upscoring)",
      route: "/pages/credit/core",
      queryParams: { heading: "Core Underwriting (Upscoring)" },
    },
    {
      title: "Triggers",
      // link: "/pages/layout/tabs",
      route: "/pages/credit/trigger",
    },
    {
      title: "Lender Allocation",
      // link: "/pages/layout/tabs",
      route: "/pages/credit/lender",
    },
    {
      title: "Complete Leads",
      route: "/pages/credit/complete",
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((e: any) => {
        // console.log(e);
        this.showSearch =
          e.url.substr(0, e.url.indexOf("?")) == "/pages/credit/core";
      });
  }
}
