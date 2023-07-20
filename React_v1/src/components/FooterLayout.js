import { Button, Footer, FooterLink, Text } from '@repay/saguaro-web'
import React from 'react'

const FooterLayout = () => {
  return (
  <div className='parent-container' style={{ marginTop: "auto" }}>
      <Footer action={<div style={{ alignItems: 'center', display: 'flex', flexGrow: 1 }}><Text flex={1} fontSize="14px" style={{ textAlign: 'start' }}><span style={{ color: 'white' }}>About us &nbsp;</span> &nbsp; <span style={{ color: 'white' }}> &nbsp;Contact us</span></Text></div>}>
        <Footer.Logo
          imageProps={{
            width: '163px'
          }}
          logo="https://repay-merchant-resources.s3.amazonaws.com/staging/24bd1970-a677-4ca7-a4d2-e328ddd4691b/repay_logo_new.jpg"
        />
        <Footer.Content>
          2023 defi-clone using saguaro componets.
        </Footer.Content>
      </Footer>
    </div>
  )
}

export default FooterLayout