import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PictureBox from '../../components/PictureBox';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout style={{}}>
      <PictureBox path="/img/bocchi-watching-screen"
        title="bocchi-watching-screen"
      />
    </Layout>
  );
}
