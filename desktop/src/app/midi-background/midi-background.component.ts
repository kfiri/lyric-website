import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-midi-background",
  templateUrl: "./midi-background.component.html",
  styleUrls: ["./midi-background.component.css"]
})
export class MidiBackgroundComponent implements OnInit {
  @Input() notes: Array<{ noteType: number; timing: number; length: number }>;

  constructor() {}

  ngOnInit() {
    console.log('calc(var(--thick) * ' + this.notes[0].noteType + ')');
  }
}
