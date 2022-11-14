import React from 'react';
import Layout from '@theme/Layout';
import CenteredContent from '../components/CenteredContent';

export default function NotFoundWrapper(props) {
  return (
        <Layout>
          <CenteredContent>
            <h1>404 - Not Found</h1>
          </CenteredContent>
        </Layout>
  );
}
