import { Directive, ElementRef, EventEmitter, Output, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollEnd]',
})

export class ScrollEndDirective {

  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Input() marginBottom: number = 0;
  private tableContainer: HTMLElement;
  constructor(
    private el: ElementRef,
  ) {
    this.tableContainer = this.el.nativeElement as HTMLElement;
   }

  @HostListener('scroll', ['$event'])
    onWindowScroll() {
        if (this.tableContainer.scrollTop >= this.tableContainer.scrollHeight - this.tableContainer.offsetHeight - this.marginBottom) {
            this.callback.emit();
        }
    }
}
