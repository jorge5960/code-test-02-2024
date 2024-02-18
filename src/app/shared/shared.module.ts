import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableHeader } from './sortable/sortable-header.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [SortableHeader,LoaderComponent],
    imports: [
        CommonModule
    ],
    exports: [SortableHeader,LoaderComponent]
})
export class SharedModule {}
