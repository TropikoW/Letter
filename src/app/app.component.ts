import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  document = {
    title : 'Title',
    paragraph : 'Write your paragraph'
  };
  changeTitle(event : Event) {
    let element = event.target as HTMLInputElement;
    this.document.title = element.value
  };
  changeParagraph(event : Event) {
    let element = event.target as HTMLInputElement;
    this.document.paragraph = element.value;
  }
  deleteContain() {
    this.document.paragraph = '';
  };
}
