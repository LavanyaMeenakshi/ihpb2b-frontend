import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimSearchComponent } from './claim-search.component';
import { TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

describe('ClaimSearchComponent', () => {
  let component: ClaimSearchComponent;
  let fixture: ComponentFixture<ClaimSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimSearchComponent ],
      imports: [TableModule, HttpClientModule],
      providers: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
