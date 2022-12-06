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
  margin: 5px;
  background: rgba(39, 39, 39, 0.1);
  border-radius: 45px;
  margin-top: 3%;
`

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  padding: 2%;
`

const P = styled.p`
  font-style: italic;
`

const MyLink = styled(Link)`
  background: #B0F6FF;
`

function HomepageHeader() {
  return (
    <header>
    
      <div className="container">
      <StyledHead>
        <h1>Eyeseek.org - Documentation portal</h1>
        <P>Being kind could be fun too</P>
        </StyledHead>
        <ButtonRow>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/howTo">
              Eyeseek whitepaper
            </Link>
          </div>
          <div className={styles.buttons}>
            <MyLink
              className="button button--secondary button--lg"
              to="/docs/funding/intro">
              Eyeseek funding
            </MyLink>
          </div>
          <div className={styles.buttons}>
          </div>
        </ButtonRow>
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
