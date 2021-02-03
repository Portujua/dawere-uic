import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: String = '';
  @Input() colorClass: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'universal-white' | 'universal-black' = 'primary';
  @Input() disabled: Boolean = false;
  @Input() size: 'xs' | 'sm' | 'lg' | '' = '';
  @Input() block: Boolean = false;
  @Input() outline: Boolean = false;
  @Input() rounded: Boolean = false;
  @Input() borderless: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get allClasses(): Array<String> {
    return [
      `btn-${this.outline || this.borderless ? 'outline-' : ''}${this.colorClass}`,
      this.size !== '' ? `btn-${this.size}` : '',
      this.block ? 'btn-block' : '',
      this.rounded ? 'btn-rounded' : '',
      this.borderless ? 'btn-borderless' : '',
    ]
  }

}
