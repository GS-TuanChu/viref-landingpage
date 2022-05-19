import Head from 'next/head'
import Layout from 'components/layout';
import ContactUs from './contact-us';
import AboutUs from './about-us';

import Blogs from './blogs';
import HomePage from 'components/homepage'
import {useTranslation} from 'hooks/useTranslation';
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
/*
 *import { useTranslation } from 'next-i18next'
 * export async function getStaticProps({ locale }) {
 *   return {
 *     props: {
 *     }
 *   }
 * }
 */

export default function Home() {

  const t = useTranslation();
  console.log(t.hello)
  return (
    <>
      <Head>
        <title>ViRef - One-Stop Affiliate Solution</title>
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
