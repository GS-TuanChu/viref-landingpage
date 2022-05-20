import Head from 'next/head'
import Layout from 'components/layout';
import ContactUs from './contact-us';
import AboutUs from './about-us';

import Blogs from './blogs';
import HomePage from 'components/homepage'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'about-us', 'contact-us'])),
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>ViRef - One-Stop Affiliate Solution</title>s
        <meta name="description" content="Hệ thống bán hàng hiệu quả thông qua phương thức truyền miệng thời đại số" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&family=Quicksand:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <Layout mainComp={
        <HomePage />
      } />
      {/* <Blogs /> */}
    </>
  )
}
