import { ReactComponentDirective } from './../react-component.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import PlanbyComponent from './PlanbyComponent';

@Component({
  selector: 'planby',
  standalone: true,
  styleUrls: ['./planby.css'],
  imports: [CommonModule, ReactComponentDirective],
  template: `<div
    [reactComponent]="reactComponent"
    [props]="reactProps"
  ></div>`,
})
export class PlanbyComponentNG {
  reactComponent = PlanbyComponent;
  reactProps = { loading: false };
}
