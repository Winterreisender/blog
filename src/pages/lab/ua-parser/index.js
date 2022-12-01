import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {UAParser} from 'ua-parser-js'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="UA Parser" description="UA Parser" style={{}}>
        {Object.entries(new UAParser().getResult()).map(([k,v])=> <div>
          <h1>{k}</h1>
          <table>
              {v instanceof Object || v}
              {v instanceof Object && Object.entries(v).map(([k,v])=> <tr>
                <td>{k}</td>
                <td>{v}</td>
              </tr>)}
          </table>
        </div>)}
    </Layout>
  );
}
