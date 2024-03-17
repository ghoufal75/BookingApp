import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscoverListPage } from './discover-list.page';

describe('DiscoverListPage', () => {
  let component: DiscoverListPage;
  let fixture: ComponentFixture<DiscoverListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscoverListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
