import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Feature from '../components/Feature'
import features from '../data/features'
import Funding from '../components/Funding'
import fundings from '../data/fundings'
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--light button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc-introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {fundings && fundings.length && (
          <section className={styles.fundings}>
            <div className="container">
              <div className="row">
                <div className="col col--12">
                <h2 className="center">Sponsor {siteConfig.title} Development</h2>
                </div>
                <div className="col col--12">
                  <p className="center text-center">
                    {siteConfig.title} is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support {siteConfig.title} development via the following methods:
                  </p>
                </div>
              </div>
              <div className="row mt-2">
                {fundings.map((props, idx) => (
                  <Funding key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
