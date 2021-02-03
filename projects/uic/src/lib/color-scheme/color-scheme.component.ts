import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dawere-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.scss']
})
export class ColorSchemeComponent implements OnInit {
  @Input() colorClass: String = '';
  @Input() typeClass: 'Normal' | 'Hover' | 'Disabled' = 'Normal';

  constructor() {
  }

  ngOnInit(): void {
  }

  get allClasses(): Array<String> {
    return [`bg-${this.colorClass}`, this.state]
  }

  get state(): String {
    if (!this.typeClass || this.typeClass === 'Normal') {
      return ''
    }
    else {
      return this.typeClass.toLowerCase()
    }
  }

}
