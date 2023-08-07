import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
  sections = [{ items: [{ value: 0 }] }];

  onChange(
    sectionIndex: number,
    itemIndex: number,
    elem: HTMLInputElement,
  ): void {
    this.sections[sectionIndex].items[itemIndex].value = elem.valueAsNumber;
  }

  add(): void {
    this.sections[0].items.push({ value: 0 });
  }

  deleteItem(sectionIndex: number, itemIndex: number): void {
    if (this.sections[sectionIndex].items.length > 1) {
      this.sections[sectionIndex].items.splice(itemIndex, 1);
    }
  }

  getResult(sectionIndex: number): number {
    return this.sections[sectionIndex].items.reduce(
      (sum, item) => sum + item.value,
      0,
    );
  }

  addSection(): void {
    this.sections.push({ items: [{ value: 0 }] });
  }

  addItem(sectionIndex: number): void {
    this.sections[sectionIndex].items.push({ value: 0 });
  }

  delete(sectionIndex: number): void {
    if (this.sections.length > 1) {
      this.sections.splice(sectionIndex, 1);
    }
  }
}
