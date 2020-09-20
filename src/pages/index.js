import React from 'react';
// import { Link } from 'gatsby';

import { UISetup, App, Layout } from 'components';

const IndexPage = () => (
  <UISetup>
    <Layout>
      <App />
    </Layout>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </UISetup>
);

export default IndexPage;
