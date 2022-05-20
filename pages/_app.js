import '../styles/globals.css'
import 'styles/vi-net/_utils.scss';
import 'styles/vi-net/_responsive.scss'
import 'styles/vi-net/dialog.scss';
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);
