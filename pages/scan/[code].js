import { useRouter } from 'next/router'
import Script from 'next/script'

const Scan = () => {
  const router = useRouter()
  const { code } = router.query

  return <>
    <Script
        id="will-fail"
        src="/helper.js"
        onLoad={(e) => {
          redirectToDownload()
        }}
    />
    <p>Vui lòng tải app ViRef từ App Store và quét lại mã</p>
  </>
}

export default Scan