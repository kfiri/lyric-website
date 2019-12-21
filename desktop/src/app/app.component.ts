import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
import SONGS from "./songs.json";
import NOTES from "./midiNotes.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "desktop";
  songs = SONGS;
  notes = NOTES;
  // console.log(this.songs);
  @ViewChild("jumbotron", { static: true }) jambotron: ElementRef;

  // How much should the header be above the page in pixles.
  private headerOffset = 100;

  // Set an event listener for when the user scrolls the page.
  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event: Event) {
    // The window's scroll event current target should always be the window.
    if (event.currentTarget === window) {
      const scrollTop = (<Window>event.currentTarget).scrollY;
      // Set the header to the top of the page when scrolling past the height of the jumbotron.
      const headerThreshold = this.jambotron.nativeElement.offsetHeight;
      this.headerOffset = scrollTop > headerThreshold ? 0 : headerThreshold;
    } else {
      console.error("window scroll event current target is not the window");
    }
  }
}
