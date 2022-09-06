import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Select from 'react-select';
import type { ComponentProps } from 'react';
import { ReactComponentDirective } from '../react-component.directive';

@Component({
  selector: 'app-react-select',
  standalone: true,
  imports: [CommonModule, ReactComponentDirective],
  template: `
    <h1>Todos page</h1>
    <button (click)="changeProps()">Change</button>
    <div [reactComponent]="Select" [props]="selectProps"></div>
  `,
})
export class ReactSelectComponent {
  Select = Select;
  selectProps: ComponentProps<Select> = {
    onChange(v) {
      console.log(v);
    },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  };

  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{ value: 'changed', label: 'Leifer' }],
    };
  }
}
