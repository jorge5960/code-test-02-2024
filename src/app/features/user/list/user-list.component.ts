import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { SortEvent, compare } from 'src/app/interfaces/sortable.interface';
import { SortableHeader } from 'src/app/shared/sortable/sortable-header.directive';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styles: [':host{display:block}']
})
export class UserListComponent {

    @Input()
    users: IUser[] | null;

    @Output()
    onSelectionChange: EventEmitter<IUser> = new EventEmitter();

    @ViewChildren(SortableHeader)
    private _headers: QueryList<SortableHeader>;

    private _selected: IUser | null = null;

    constructor() { }

    rowClass(row: IUser) {
        return this._selected && row.id == this._selected.id;
    }

    changeSelection(row: IUser) {
        this._selected = row;
        this.onSelectionChange.emit(row);
    }

    onSort({ column, direction }: SortEvent) {
        for (const header of this._headers) {
            if (header.sortable !== column) {
                header.direction = '';
            }
        }
        if (!(direction === '' || column === '')) {
            this.users = [...this.users].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    }

}
