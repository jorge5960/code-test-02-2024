import { Component, Input } from '@angular/core';

@Component({
    selector: 'loader',
    template: `<div class="mask" *ngIf="show">
                    <div class="center">
                        <div class="d-flex justify-content-center">
                            <div class="custom-loader"></div>
                        </div>
                    </div>
                </div>`,
    styles: [":host{display:block}"]
})
export class LoaderComponent {

    @Input()
    show: boolean = false;

}
