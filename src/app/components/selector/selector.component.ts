import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2 } from '@angular/core';

import { Node } from '../../models/selector';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

    @Input() nodes: Node[];
    @Input() node: Node;
    @Output() select: EventEmitter<Node> = new EventEmitter();

    // state
    private isOpen: boolean;
    private text: string;

    private clickedInside = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.isOpen = false;
    }

    get filteredNodes(): Node[] {
        if (!this.text) {
            return this.nodes;
        }

        const filterFn = (s: string): Node[] => {
            if (!this.nodes) {
                return [];
            }
            return this.nodes.filter(n => {
                return n.name.indexOf(this.text) !== -1;
            });
        };

        return filterFn(this.text);
    }

    @HostListener('click', ['$event'])
    clickInside(event) {
        this.clickedInside = true;
    }

    @HostListener('document:click', ['$event'])
    clickOutside(event) {
        if (!this.clickedInside) {
            this.close();
        }
        this.clickedInside = false;
    }

    ngOnInit() { }

    private open() {
        this.isOpen = true;
    }

    private close() {
        this.isOpen = false;
    }

    private selectNode(node: Node) {
        this.select.emit(node);
        this.close();
    }

}
