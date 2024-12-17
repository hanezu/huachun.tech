import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative w-full dark:bg-black px-6 border-t'>
      <div className='container mx-auto max-w-4xl py-6 flex justify-between items-center text-sm'>
        <DarkModeButton className='text-center' />

        <div className='dark:text-yellow-300 flex flex-wrap md:flex-no-wrap justify-between items-center w-full'>
          <div className='text-center'>
            &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights
            reserved.
          </div>
          <div className='md:p-0 text-center md:text-right text-xs'>
            {/* 右侧链接 */}
            {/* <a href="#" className="text-black no-underline hover:underline">Privacy Policy</a> */}
            {siteConfig('BEI_AN') && (
              <a
                href='https://beian.miit.gov.cn/'
                className='text-black dark:text-gray-200 no-underline hover:underline ml-4'>
                {siteConfig('BEI_AN')}
              </a>
            )}
            <BeiAnGongAn />
          </div>
        </div>
      </div>
    </footer>
  )
}
