import { Directive, ElementRef, inject, Input } from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  standalone: true,
  selector: '[reactComponent]',
})
export class ReactComponentDirective<Comp extends ElementType> {
  @Input() reactComponent!: Comp;
  @Input() props!: ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnChanges() {
    this.root.render(createElement(this.reactComponent, this.props));
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
