import { WagonPage } from './app.po';

describe('wagon App', () => {
  let page: WagonPage;

  beforeEach(() => {
    page = new WagonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
