import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-songs-menu",
  templateUrl: "./songs-menu.component.html",
  styleUrls: ["./songs-menu.component.css"]
})
export class SongsMenuComponent implements OnInit {
  @Input() songs: Array<{ title: string }>;

  constructor() {}

  ngOnInit() {}
}
