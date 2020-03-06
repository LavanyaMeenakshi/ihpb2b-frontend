import { TestBed } from '@angular/core/testing';

import { ClaimService } from './claim.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClaimService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[],
    imports:[HttpClientModule],
    providers:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ClaimService = TestBed.get(ClaimService);
    expect(service).toBeTruthy();
  });
});
