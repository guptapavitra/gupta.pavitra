import { RcSidebarPage } from './app.po';

describe('rc-sidebar App', function() {
  let page: RcSidebarPage;

  beforeEach(() => {
    page = new RcSidebarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
