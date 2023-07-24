import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-try-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './try-two.component.html',
  styleUrls: ['./try-two.component.scss'],
})
export class TryTwoComponent {
  items = [{ value: 0 }, { value: 0 }];

  onChange(index: number, elem: HTMLInputElement): void {
    this.items[index].value = elem.valueAsNumber;
  }
}
