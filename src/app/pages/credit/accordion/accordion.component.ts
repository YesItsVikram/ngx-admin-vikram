import { Component, Input } from "@angular/core";
import * as jsonData from "./upscoring.json";
import * as jsonData22 from "./upscoring3.json";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-excel-rows",
  template: `
    <!-- excel-view.component.html -->
    <!-- <nb-tabset fullWidth>
      <nb-tab tabTitle="Core Underwriting (Upscoring)"> -->
    <div class="container">
      <h6>{{ heading }}</h6>

      <div *ngIf="true" class="card card-success">
        <div class="card-header">
          <h3 class="card-title">Search Parameters</h3>
        </div>
        <div class="card-body">
          <table class="table">
            <tbody style="background-color: none !important">
              <tr>
                <td>
                  <input
                    class="form-control"
                    type="Loan Id"
                    placeholder="Loan/Customer Id"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="nbtn btn-block bg-gradient-success"
                  >
                    L
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    class="nbtn btn-block bg-gradient-success"
                  >
                    C
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="nbtn btn-block bg-gradient-success"
                  >
                    Load100
                  </button>
                </td>

                <td>
                  <input
                    class="form-control"
                    type="Mobile No"
                    placeholder="Mobile no"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="Loan Id"
                    placeholder="Full name"
                  />
                </td>

                <td>
                  <input
                    class="form-control"
                    type="Email Id"
                    placeholder="Email id"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="Loan Id"
                    placeholder="Pan"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="nbtn btn-block bg-gradient-success"
                  >
                    Search
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th *ngFor="let heading of headings22" [attr.colspan]="2" st>
              {{ heading[1] }}
              <div
                class="display: flex; justify-content: center"
                *ngIf="heading[1] === 'LK Engine Data'"
              >
                <button
                  *ngIf="!showLKData"
                  class="smbtn success"
                  (click)="updateLK()"
                >
                  Show
                </button>

                <button
                  *ngIf="showLKData"
                  class="smbtn danger"
                  (click)="updateLK()"
                >
                  Hide
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody style="background-color: rgba(0,0,0,.05)" class="tbody">
          <tr *ngFor="let row of jsonArr22; let j = index">
            <td *ngFor="let heading of headings22; let i = index" colspan="2">
              <div class="outer">
                <div
                  [class.lk]="heading[1] === 'LK Engine Data' && !showLKData"
                  class="inner"
                >
                  <span class="inner-span">
                    <b>{{ row[heading[0]] ? row[heading[0]] + " : " : "" }}</b>
                    &nbsp;&nbsp;{{
                      row["col" + (+heading[0].substring(3) + 1)] || ""
                    }}
                  </span>
                  <div *ngIf="j === 0 && i === 0">
                    <span class="pill">New Journey</span>
                  </div>

                  <div
                    *ngIf="j === 7 && i === 0"
                    style="display: flex; width: 100%; justify-content: center"
                  >
                    <button class="btn success">Approve</button>
                    <button class="btn danger">Reject</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- </nb-tab> -->
    <!-- <nb-tab tabTitle="Triggers"> -->
    <!-- <router-outlet></router-outlet> -->
    <!-- </nb-tab> -->
    <!-- <nb-tab tabTitle="Lender Allocation"></nb-tab> -->
    <!-- <nb-tab tabTitle="Utilities"></nb-tab> -->
    <!-- </nb-tabset> -->

    <!-- <div class="container">
      <h6>{{ heading }}</h6>

      <table>
        <thead>
          <tr>
            <th *ngFor="let heading of headings" [attr.colspan]="2">
              {{ heading }}
            </th>
          </tr>
        </thead>
        <tbody style="background-color: rgba(0,0,0,.05)">
          <tr *ngFor="let row of jsonArr">
            <td *ngFor="let heading of headings; let i = index" colspan="2">
              <div class="outer">
                <div class="inner">
                  <b>{{ row[heading] ? row[heading] + " : " : "" }}</b>
                  &nbsp;&nbsp;{{ row["Column" + getIndex(i)] || "" }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <!-- Core Underwriting -->
    <!-- <div class="table-container">
    <div class="table-row" *ngFor="let row of jsonArr; let i = index">
      <div class="table-cell" [ngClass]="{'header-cell': isFirstCell(i)}" *ngFor="let heading of headings">
        <div class="header" *ngIf="i===0"> {{heading}}</div>
        <div class="non-header"  *ngIf="i !==0"><b>{{ row[heading] + ' : ' || '' }}</b> {{ row['Column'+(i+1)] || '' }}</div>
      </div>
    </div>
  </div> -->
  `,
  styleUrls: ["accordion.component.scss"],
})
export class AccordionComponent {
  jsonArr2 = [
    {
      "Customer information": "Loan id",
      Column2: 90001,
      "Personal Identification and Socials": "PAN #",
    },
  ];
  // jsonArr = [{}, ...(jsonData as any).default];
  jsonArr = (jsonData as any).default;
  jsonArr1 = (jsonData as any).default;
  headings = [];
  headingsDup = [];
  heading = "Heading";
  map = {};

  jsonArr22: any[] = (jsonData22 as any).default;
  headings22 = [];
  tabs: string[] = [];

  showLKData = false;

  constructor(private route: ActivatedRoute) {
    this.headings = Object.keys(this.jsonArr1[0]).filter(
      (d) => !d.startsWith("Column")
    );
    this.headingsDup = this.headings.reduce(
      (acc, val) => [...acc, val, val],
      []
    );

    this.headings22 = Object.entries(this.jsonArr22[0]).filter(([_, v]) => v);
    this.jsonArr22 = this.jsonArr22.slice(1);

    // const map = {};
    // let col = 1;
    // this.headings.forEach((v, i) => {
    //   map[i] = col + 1;
    //   col++;
    // });

    // this.map = map;
    // console.log(this.headingsDup);
    // console.log(this.jsonArr);
  }

  isFirstCell(index: number): boolean {
    return index === 0;
  }

  getIndex(i) {
    // return this.map[i];
    if (i == 0) return i + 2;
    if (i == 1) return i + 3;

    if (i % 2 === 0) return i * 2;

    return i * 2 - 1;
  }

  updateLK() {
    this.showLKData = !this.showLKData;
    console.log(this.showLKData);
  }

  ngOnInit() {
    // this.tabs = this.route.snapshot.queryParamMap.get('tabs');

    this.route.queryParams.subscribe((params: Params) => {
      this.heading = params["heading"];
    });

    console.log("headings", this.headings);

    this.route.queryParams.subscribe((params: Params) => {
      this.tabs = params["tabs"]?.split(",");
      // console.log(token);

      console.log("tabs: ", this.tabs);
    });
  }
}

// @Input() rows: any[] = [
//   {"heading": "row 1 col 1", "colspan": 2},
//   {"heading": "row 2 col 1", "colspan": 3},
//   {"heading": "row 3 col 1", "colspan": 2},
//   {"heading": "row 4 col 1", "colspan": 1},
// ];;

// export class AccordionComponent {

// styleUrls: ['accordion.component.scss'],
