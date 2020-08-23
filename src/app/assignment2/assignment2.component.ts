import { Component } from '@angular/core'

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class  Assignmen2Component {
  showText: boolean = false;
  log: string[] = [];

  onToggleText(): void {
    this.showText = !this.showText;
    var entry = "Button clicked at " + new Date();
    this.log.push(entry);
  }

  getBackgroundColor(i: number) : string {
    return i>=5 ? 'blue' : 'default';
  }
}
