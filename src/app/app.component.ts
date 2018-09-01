import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private elementRef: ElementRef,
        private renderer: Renderer2) {
    }

    goto(target: string) {
        // Unset all active elements
        this.elementRef.nativeElement.querySelectorAll('nav > div[class^="goto-"]').forEach(e => {
            this.renderer.removeClass(e, 'active');
        });
        // Set target element
        const div = this.elementRef.nativeElement.querySelector('div.goto-' + target);
        this.renderer.addClass(div, 'active');
        // Goto target component, without changing url path
        this.router.navigate([target], { relativeTo: this.route, skipLocationChange: true});
    }
}
