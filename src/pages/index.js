import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import styled from 'styled-components'

const StyledHead = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const P = styled.p`
  font-style: italic;
`

function HomepageHeader() {
  return (
    <header>
    
      <div className="container">
      <StyledHead>
        <h1>Eyeseek.org - Documentation</h1>
        <P>Being kind could be fun too</P>
        </StyledHead>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/howTo">
            Start reading
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
