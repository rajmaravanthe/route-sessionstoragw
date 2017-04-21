import { SessionstoragePage } from './app.po';

describe('sessionstorage App', function() {
  let page: SessionstoragePage;

  beforeEach(() => {
    page = new SessionstoragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
