import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './styles.module.css';


export default function Home() {
  const navgations = {
    "ACG": {
      description: "ACGN",
      contents: [
        {
          name: "niconico",
          url: "https://www.nicovideo.jp/",
          excerpt: "ニコニコ動画"
        },
        {
          name: "萌百",
          url: "https://zh.moegirl.org.cn/",
          excerpt: "萌百",
          icon: "https://zh.moegirl.org.cn/favicon.ico"
        }
      ]
    },
    "IT": {
      description: "IT",
      contents : [
        {
          name: "萌百",
          url: "https://zh.moegirl.org.cn/",
          excerpt: "萌百"
        }
      ]
    }
  };
  
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={``} description="" style={{}}>
      {
        Object.entries(navgations).map(([k,{description,contents}]) =>
          <div>
            <h3>{k}</h3>
            <p>{description}</p>
            {
              contents.map( ({name,url,excerpt,...extras}) => {return <div>
                {extras.icon && <img src={extras.icon}></img>}
                <a href={url}>{name}</a>
                <p>{excerpt}</p>
              </div>})
            }
          </div>
        )
      }

    </Layout>
  );
}
