import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log('allPostsData', allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Nam Phạm Đình Porfolio</p>
        <p>
          (This is a website Intro my Project - ALL GREAT OF A TIME{' '}
          <a href="https://nextjs.org/learn">My CV</a>.)
        </p>
        <h2><Alert type='success'><Link href='/first-post' /> </Alert></h2>
      </section>
      {/* Fetching Data */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Porfolio</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}