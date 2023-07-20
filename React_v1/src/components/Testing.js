import { BaseI18nController, I18nProvider, I18nSection, I18nText } from '@repay/saguaro-i18n'
import { Avatar, Breadcrumb, Button, Calendar, DataGrid, Header, Icon, LanguageSelect, Layout, TabList, UserMenu } from '@repay/saguaro-web'
import React, { useState } from 'react'
import HeaderBar from './HeaderBar'
import FooterLayout from './FooterLayout'

const Testing = () => {
  const [active, setActive] = useState('uno')
  // const controller = new BaseI18nController({
  //   defaultLang: 'en-us',
  //   lang: 'en-us',
  // })

  return (
    <div>
      <HeaderBar activeTab="Helpcenter" />
      {/* </Layout> */}
      {/* <I18nProvider
        controller={controller}
        lang="en-us"
      >
        <div />
        <I18nText get="test-text" />
      </I18nProvider> */}
              {/* <I18nText get="hook-title" args={{ hook: 'useI18nSection' }} />
        <I18nSection section="ux">
          <I18nText get="useI18nSection-intro" />
        </I18nSection> */}
      <DataGrid
        data={[
          {
            charCode: 97,
            id: 1,
            letter: 'a',
            number: 1,
            repeatCharCode: 97
          },
          {
            charCode: 98,
            id: 2,
            letter: 'b',
            number: 2,
            repeatCharCode: 98
          },
          {
            charCode: 99,
            id: 3,
            letter: 'c',
            number: 3,
            repeatCharCode: 99
          },
          {
            charCode: 100,
            id: 4,
            letter: 'd',
            number: 4,
            repeatCharCode: 100
          },
          {
            charCode: 101,
            id: 5,
            letter: 'e',
            number: 5,
            repeatCharCode: 101
          },
          {
            charCode: 102,
            id: 6,
            letter: 'f',
            number: 6,
            repeatCharCode: 102
          },
          {
            charCode: 103,
            id: 7,
            letter: 'g',
            number: 7,
            repeatCharCode: 103
          },
          {
            charCode: 104,
            id: 8,
            letter: 'h',
            number: 8,
            repeatCharCode: 104
          },
          {
            charCode: 105,
            id: 9,
            letter: 'i',
            number: 9,
            repeatCharCode: 105
          },
          {
            charCode: 106,
            id: 10,
            letter: 'j',
            number: 10,
            repeatCharCode: 106
          },
          {
            charCode: 107,
            id: 11,
            letter: 'k',
            number: 11,
            repeatCharCode: 107
          },
          {
            charCode: 108,
            id: 12,
            letter: 'l',
            number: 12,
            repeatCharCode: 108
          },
          {
            charCode: 109,
            id: 13,
            letter: 'm',
            number: 13,
            repeatCharCode: 109
          },
          {
            charCode: 110,
            id: 14,
            letter: 'n',
            number: 14,
            repeatCharCode: 110
          },
          {
            charCode: 111,
            id: 15,
            letter: 'o',
            number: 15,
            repeatCharCode: 111
          },
          {
            charCode: 112,
            id: 16,
            letter: 'p',
            number: 16,
            repeatCharCode: 112
          },
          {
            charCode: 113,
            id: 17,
            letter: 'q',
            number: 17,
            repeatCharCode: 113
          },
          {
            charCode: 114,
            id: 18,
            letter: 'r',
            number: 18,
            repeatCharCode: 114
          },
          {
            charCode: 115,
            id: 19,
            letter: 's',
            number: 19,
            repeatCharCode: 115
          },
          {
            charCode: 116,
            id: 20,
            letter: 't',
            number: 20,
            repeatCharCode: 116
          },
          {
            charCode: 117,
            id: 21,
            letter: 'u',
            number: 21,
            repeatCharCode: 117
          },
          {
            charCode: 118,
            id: 22,
            letter: 'v',
            number: 22,
            repeatCharCode: 118
          },
          {
            charCode: 119,
            id: 23,
            letter: 'w',
            number: 23,
            repeatCharCode: 119
          },
          {
            charCode: 120,
            id: 24,
            letter: 'x',
            number: 24,
            repeatCharCode: 120
          },
          {
            charCode: 121,
            id: 25,
            letter: 'y',
            number: 25,
            repeatCharCode: 121
          },
          {
            charCode: 122,
            id: 26,
            letter: 'z',
            number: 26,
            repeatCharCode: 122
          }
        ]}
        sortFunction={() => { }}
      >
      </DataGrid>
      <FooterLayout />
    </div>
  )
}

export default Testing