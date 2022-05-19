import { useRouter } from 'next/router'
import vi from '../public/locales/vi/index';
import en from '../public/locales/en/index';

export const useTranslation = () => {
    const { locale } = useRouter()
    const trans = locale === 'vi' ? vi : en

    return trans;
}
