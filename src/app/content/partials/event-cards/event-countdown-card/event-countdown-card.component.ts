import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-event-countdown-card",
  templateUrl: "./event-countdown-card.component.html"
})
export class EventCountdownCardComponent implements OnInit {
  @Input() musicEvent: any = {};
  @Input() eventBorderRadiusClass = " ";

  countText: any = {};

  constructor() {}

  ngOnInit() {
    this.eventBorderRadiusClass =
      this.eventBorderRadiusClass + " h-100 event event-v bg-img bg-contain";

    this.countText = {
      Year: "",
      Month: "",
      Weeks: "",
      Days: "",
      Hours: "",
      Minutes: "",
      Seconds: "",
      MilliSeconds: ""
    };
  }
}
