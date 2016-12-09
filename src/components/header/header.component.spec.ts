import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HeaderComponent } from './header.component';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



describe('Header Component Test Suite', () => {
  class MockComponent {}

  const MOCK_ROUTES: Routes = [{
    path: 'home',
    component: MockComponent
  }];

  let fixture;
  let component;
  let debugElement;
  let nativeElement;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule.withRoutes(MOCK_ROUTES) ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css('header'));
    nativeElement = debugElement.nativeElement;
  });

  it('should test that the component has the expected template elements', () => {
    expect(nativeElement.querySelector('h2.header-text') !== null).toBe(true);
    expect(nativeElement.querySelector('div.header-banner') !== null).toBe(true);
    expect(nativeElement.querySelector('p.header-text-mobile') !== null).toBe(true);
  });

  it('should test that the header text has the expected content', () => {
    let headerTextElement = nativeElement.querySelector('h2.header-text');

    expect(headerTextElement.textContent).toBe('The Greenhouse');
  });

  it('should test that the mobile header text has the expected content', () => {
    let mobileHeaderTextElement = nativeElement.querySelector('p.header-text-mobile');

    expect(mobileHeaderTextElement.textContent).toBe('.io');
  });

});