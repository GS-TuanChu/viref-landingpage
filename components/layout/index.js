import { moduleCss } from 'helpers/functions';
import Head from 'next/head';
import Footer from '../footer';
import Header from '../header';
import styleCss from './layout.module.scss';

const style = moduleCss(styleCss);
export default function Layout ({ mainComp }) {
    return (
        <div className={style('body-container')}>
            <Header />
            <div className={style('main')}>
                { mainComp }
            </div>
            <Footer />
        </div>
    );
}