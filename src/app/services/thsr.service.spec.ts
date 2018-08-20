import { TestBed, inject } from '@angular/core/testing';

import { ThsrService } from './thsr.service';

describe('ThsrService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ThsrService]
        });
    });

    it('should be created', inject([ThsrService], (service: ThsrService) => {
        expect(service).toBeTruthy();
    }));
});
