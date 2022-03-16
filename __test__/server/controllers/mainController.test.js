const {
  buildQuery,
  processCharities,
  getCharities,
} = require('../../../server/controllers/mainController');

xdescribe('mainController testing suite', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { body: {} };
    res = { locals: {} };
    next = () => { };
  });

  it('Should have a buildQuery method', () => {
    expect(typeof buildQuery).toBe('function');
  });

  it('buidQuery should ignore invalid inputs', () => {
    req.body.state = 1;
    req.body.fundraisingOrgs = 2;
    req.body.city = 12312;
    req.body.zip = 123;
    req.body.sizeRange = 'terrible';
    req.body.donorPrivacy = 23;
    req.body.scopeOfWork = 'menial';
    req.body.noGovSupport = 'blue';
    buildQuery(req, res, next);
    expect('query' in res.locals).toBe(true);
    expect(res.locals.query.includes('Size=20')).toBe(true);
  });

  it('buidQuery should accept valid inputs', () => {
    req.body.state = 'tx';
    req.body.fundraisingOrgs = true;
    req.body.city = 'LA';
    req.body.zip = '12345';
    req.body.sizeRange = 'small';
    req.body.donorPrivacy = true;
    req.body.scopeOfWork = 'international';
    req.body.noGovSupport = true;
    buildQuery(req, res, next);
    const { query } = res.locals;
    expect(query.includes('state')).toBe(true);
    expect(query.includes('fundraisingOrgs')).toBe(true);
    expect(query.includes('city')).toBe(true);
    expect(query.includes('zip')).toBe(true);
    expect(query.includes('sizeRange')).toBe(true);
    expect(query.includes('donorPrivacy')).toBe(true);
    expect(query.includes('scopeOfWork')).toBe(true);
    expect(query.includes('noGovSupport')).toBe(true);
  });

  it('Should have a getCharities method', () => {
    expect(typeof getCharities).toBe('function');
  });

  it('Should have a processCharities method', () => {
    expect(typeof processCharities).toBe('function');
  });

  it('Should process charities data', () => {
    res.locals.raw = [
      {
        charityNavigatorURL:
          'https://www.charitynavigator.org/?bay=search.summary&orgid=7516&utm_source=DataAPI&utm_content=9989397e',
        mission:
          "Celebrating Maine's role in American art, the Farnsworth Art Museum offers a nationally recognized collection of works from many of America's greatest artists. With 20,000 square feet of gallery space and over 10,000 works in the collection, there is always something new on view at the Farnsworth. The museum houses the nation's second-largest collection of works by premier 20th-century sculptor Louise Nevelson. Its Wyeth Center exclusively features works of Andrew, N.C. and Jamie Wyeth. The Farnsworth's library is also housed in its Rockland, ME, campus. Two historic buildings, the Farnsworth Homestead and the Olson House, complete the museum complex.",
        websiteURL: 'http://www.farnsworthmuseum.org/',
        tagLine: "Celebrating Maine's role in  American art",
        charityName: 'Farnsworth Art Museum',
        ein: '010368070',
        currentRating: {
          score: 86.04,
          ratingImage: [Object],
          rating: 3,
          _rapid_links: [Object],
          financialRating: [Object],
          accountabilityRating: [Object],
        },
        category: {
          categoryName: 'Arts, Culture, Humanities',
          categoryID: 2,
          charityNavigatorURL:
            'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=2&utm_source=DataAPI&utm_content=9989397e',
          image:
            'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=9989397e',
        },
        cause: {
          causeID: 3,
          causeName: 'Museums',
          charityNavigatorURL:
            'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=2&cuid=3&utm_source=DataAPI&utm_content=9989397e',
          image:
            'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/museums.gif?utm_source=DataAPI&utm_content=9989397e',
        },
        irsClassification: {
          deductibility: 'Contributions are deductible',
          subsection: '501(c)(3)',
          assetAmount: 32899602,
          nteeType: 'Arts, Culture and Humanities',
          incomeAmount: 6770476,
          nteeSuffix: '0',
          filingRequirement: '990 (all other) or 990EZ return',
          classification: 'Educational Organization',
          latest990: 'September, 2020',
          rulingDate: 'April, 1987',
          nteeCode: 'A51',
          groupName: null,
          deductibilityCode: '1',
          affiliation:
            'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
          foundationStatus:
            'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
          nteeClassification: 'Art Museums',
          accountingPeriod: 'September',
          deductibilityDetail: null,
          exemptOrgStatus: 'Unconditional Exemption',
          exemptOrgStatusCode: '01',
          nteeLetter: 'A',
        },
        mailingAddress: {
          country: null,
          stateOrProvince: 'ME',
          city: 'Rockland',
          postalCode: '04841',
          streetAddress1: '16 Museum Street',
          streetAddress2: null,
        },
        advisories: { severity: null, active: [Object] },
        organization: {
          charityName: 'Farnsworth Art Museum',
          ein: '010368070',
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=7516&utm_source=DataAPI&utm_content=9989397e',
          _rapid_links: [Object],
        },
      },
      {
        charityNavigatorURL:
          'https://www.charitynavigator.org/?bay=search.summary&orgid=4856&utm_source=DataAPI&utm_content=9989397e',
        mission:
          'The Portland Museum of Art strives to engage audiences in a dialogue about the relevance of art and culture to our everyday lives and it committed to the stewardship and growth of the collection.',
        websiteURL: 'http://www.portlandmuseum.org',
        tagLine: ' ',
        charityName: 'Portland Museum of Art',
        ein: '010378420',
        currentRating: {
          score: 90.67,
          ratingImage: [Object],
          rating: 4,
          _rapid_links: [Object],
          financialRating: [Object],
          accountabilityRating: [Object],
        },
        category: {
          categoryName: 'Arts, Culture, Humanities',
          categoryID: 2,
          charityNavigatorURL:
            'https://www.charitynavigator.org/index.cfm?bay=search.categories&categoryid=2&utm_source=DataAPI&utm_content=9989397e',
          image:
            'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=9989397e',
        },
        cause: {
          causeID: 3,
          causeName: 'Museums',
          charityNavigatorURL:
            'https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=2&cuid=3&utm_source=DataAPI&utm_content=9989397e',
          image:
            'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/museums.gif?utm_source=DataAPI&utm_content=9989397e',
        },
        irsClassification: {
          deductibility: 'Contributions are deductible',
          subsection: '501(c)(3)',
          assetAmount: 75826769,
          nteeType: 'Arts, Culture and Humanities',
          incomeAmount: 22627203,
          nteeSuffix: '0',
          filingRequirement: '990 (all other) or 990EZ return',
          classification: 'Educational Organization',
          latest990: 'January, 2021',
          rulingDate: 'June, 1983',
          nteeCode: 'A51',
          groupName: null,
          deductibilityCode: '1',
          affiliation:
            'Independent - the organization is an independent organization or an independent auxiliary (i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).',
          foundationStatus:
            'Organization which receives a substantial part of its support from a governmental unit or the general public   170(b)(1)(A)(vi)',
          nteeClassification: 'Art Museums',
          accountingPeriod: 'January',
          deductibilityDetail: null,
          exemptOrgStatus: 'Unconditional Exemption',
          exemptOrgStatusCode: '01',
          nteeLetter: 'A',
        },
        mailingAddress: {
          country: null,
          stateOrProvince: 'ME',
          city: 'Portland',
          postalCode: '04101',
          streetAddress1: 'Seven Congress Square',
          streetAddress2: null,
        },
        advisories: { severity: null, active: [Object] },
        organization: {
          charityName: 'Portland Museum of Art',
          ein: '010378420',
          charityNavigatorURL:
            'https://www.charitynavigator.org/?bay=search.summary&orgid=4856&utm_source=DataAPI&utm_content=9989397e',
          _rapid_links: [Object],
        },
      },
    ];
    const processedData = [
      {
        name: 'Farnsworth Art Museum',
        mission:
          "Celebrating Maine's role in American art, the Farnsworth Art Museum offers a nationally recognized collection of works from many of America's greatest artists. With 20,000 square feet of gallery space and over 10,000 works in the collection, there is always something new on view at the Farnsworth. The museum houses the nation's second-largest collection of works by premier 20th-century sculptor Louise Nevelson. Its Wyeth Center exclusively features works of Andrew, N.C. and Jamie Wyeth. The Farnsworth's library is also housed in its Rockland, ME, campus. Two historic buildings, the Farnsworth Homestead and the Olson House, complete the museum complex.",
        link: 'https://www.charitynavigator.org/?bay=search.summary&orgid=7516&utm_source=DataAPI&utm_content=9989397e',
        catImage:
          'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=9989397e',
        causeImage:
          'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/museums.gif?utm_source=DataAPI&utm_content=9989397e',
        overAllScore: 86.04,
        financialRating: undefined,
        accountabilityRating: undefined,
        deductibility: 'Contributions are deductible',
        ein: '010368070',
      },
      {
        name: 'Portland Museum of Art',
        mission:
          'The Portland Museum of Art strives to engage audiences in a dialogue about the relevance of art and culture to our everyday lives and it committed to the stewardship and growth of the collection.',
        link: 'https://www.charitynavigator.org/?bay=search.summary&orgid=4856&utm_source=DataAPI&utm_content=9989397e',
        catImage:
          'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/categories/arts.png?utm_source=DataAPI&utm_content=9989397e',
        causeImage:
          'https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/museums.gif?utm_source=DataAPI&utm_content=9989397e',
        overAllScore: 90.67,
        financialRating: undefined,
        accountabilityRating: undefined,
        deductibility: 'Contributions are deductible',
        ein: '010378420',
      },
    ];
    processCharities(req, res, next);
    // console.log(res.locals.parsed);
    expect(res.locals.parsed).toEqual(processedData);
  });
});
