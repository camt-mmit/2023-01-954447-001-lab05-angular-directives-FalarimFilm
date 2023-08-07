import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  items = [{ value: 0 }];

  onChange(index: number, elem: HTMLInputElement): void {
    this.items[index].value = elem.valueAsNumber;
  }

  add(): void {
    this.items.push({ value: 0 });
  }

  delete(index: number): void {
    if (this.items.length > 1) {
      this.items.splice(index, 1);
    }
  }

  getResult(): number {
    return this.items.reduce((sum, item) => sum + item.value, 0);
  }
}
