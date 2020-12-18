import {SearchPage} from './search.po';
import {browser} from 'protractor';

describe('imple search', () => {
  let searchPage: SearchPage;

  beforeEach(() => {
    searchPage = new SearchPage();
   });

  it('should perform the search for products that cost from $10 to $100',  ()
      => {
    searchPage.navigateToLandingPage();
    let url =  browser.getCurrentUrl();
    expect(url).toContain('/categories/all');

    searchPage.performSearch(10, 100);
     url =  browser.getCurrentUrl();
    expect(url).toContain('/search?minPrice=10&maxPrice=100');

    const firstProductPrice = searchPage.getFirstProductPrice();
     expect(firstProductPrice).toBeGreaterThan(10);
     expect(firstProductPrice).toBeLessThan(100);
   });
});


