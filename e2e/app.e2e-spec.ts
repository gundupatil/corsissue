import { GoogleauthPage } from './app.po';

describe('googleauth App', function() {
  let page: GoogleauthPage;

  beforeEach(() => {
    page = new GoogleauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
