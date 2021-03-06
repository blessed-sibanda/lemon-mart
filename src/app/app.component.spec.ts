import { TestBed } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { commonTestingModules, commonTestingProviders } from './common/common.testing'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: commonTestingModules,
      declarations: [AppComponent],
      providers: commonTestingProviders,
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.mat-toolbar h1')?.textContent).toContain('LemonMart')
  })
})
