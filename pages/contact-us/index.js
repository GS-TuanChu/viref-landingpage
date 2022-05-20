import Layout from "components/layout";
import { moduleCss } from "helpers/functions";
import styleContactUs from "./contact-us.module.scss";
import JoinUs from "components/contact-us/join-us";
import FormContactUs from "components/contact-us/form-contact-us";
import ContactChannel from "components/contact-us/contact-channels";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage','contact-us'])),
    }
  }
}

const style = moduleCss(styleContactUs);
export default function ContactUs() {
  return (
    <Layout
      mainComp={
        <div className={"w-full flex justify-center" + style("bg contact-us")}>
          <div
            className={
              "lg:max-w-[1440px] lg:px-[100px] px-[20px] lg:pt-[200px] pt-[128px] w-full"
            }
          >
            <ContactChannel />
            <FormContactUs />
            <JoinUs />
          </div>
        </div>
      }
    />
  );
}
