import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-trigger",
  templateUrl: "./trigger.component.html",
  styleUrls: ["./trigger.component.scss"],
})
export class TriggerComponent implements OnInit {
  tabs: string[] = [
    "Download Cases to Underwrite",
    "Change Loan Stage",
    "Download Loan Auto Underwriting Data",
    "Assign Lender",
    "Trigger CIBIL",
    "Trigger Perfios PDF Analysis",
  ];

  constructor() {}

  ngOnInit(): void {}
}
