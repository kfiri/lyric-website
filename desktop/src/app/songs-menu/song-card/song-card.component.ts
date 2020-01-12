import { Component, OnInit, Input } from "@angular/core";

enum Drawers {
  DOWNLOAD,
  SHARE
}

@Component({
  selector: "app-song-card",
  templateUrl: "./song-card.component.html",
  styleUrls: ["./song-card.component.css"]
})
export class SongCardComponent implements OnInit {
  @Input() song: { title: string; img: string };

  openedDrawer = null;
  DRAWERS = Drawers;

  constructor() {}

  ngOnInit() {}

  /**
   * Open a drawer, if it already open, close it
   * @param drawer the enum of the drawer.
   */
  toggleDrawer(drawer: Drawers) {
    this.openedDrawer = this.openedDrawer !== drawer ? drawer : null;
  }
}
