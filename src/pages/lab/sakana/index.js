import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import 'sakana-widget/lib/index.css';
import SakanaWidget from 'sakana-widget';
import styles from './styles.module.css';


export default function Home() {
  useEffect(()=>{
    console.log("Sa ka na");
    new SakanaWidget({ character: 'takina', controls: false }).mount('#sakana-widget-takina');
    new SakanaWidget({ character: 'chisato',controls: false }).mount('#sakana-widget-chisato');
  },[])
  
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Sa ka na ~~~" style={{}}>
      <div className={styles.sakanaContainer}>
        <div id="sakana-widget-takina"></div>
        <div id="sakana-widget-chisato"></div>
      </div>
      <p style={{textAlign: "center"}}>
        Image: <a href="https://twitter.com/blue00f4">大伏アオ</a>,
        Widget:<a href="https://github.com/dsrkafuu/sakana-widget">dsrkafuu</a>
      </p>
    </Layout>
  );
}
