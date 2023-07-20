import { Icon, Text, TextInput, TitleBar, Layout, TabList, Tooltip } from '@repay/saguaro-web'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HeaderBar = ({ activeTab }) => {
    const [active, setActive] = useState(activeTab)
    const navigate = useNavigate()

    return (

        <div className='headerbar-align'>
            <TitleBar
                logo="https://repay-merchant-resources.s3.amazonaws.com/staging/24bd1970-a677-4ca7-a4d2-e328ddd4691b/repay_logo_new.jpg"
                userMenuProps={{
                    email: 'test@test.com',
                    name: 'Hershell Jewess',
                    onLanguageChange: () => { },
                    onLogout: function noRefCheck() {navigate("/") },
                    onThemeChange: function noRefCheck() { },
                    supportedLangs: [
                        'english'
                    ]
                }}
            >
                <div style={{display:"contents"}}>
                <Text
                    fontSize="h3"
                    fontWeight="bold"
                    fontStyle="plain"
                    color="#1DA0F7"
                    style={{ position: "absolute"}}
                >
                    Defi clone
                </Text>
                <div style={{ marginLeft: "250px" }}>
                    <TabList id="controlled" fillGaps currentTabId={active} onTabChange={setActive}>
                        <TabList.Tab label="Accounts" id="Accounts" onClick={() => { navigate("/") }} >
                        </TabList.Tab>
                        <TabList.Tab label="Messages" id="Messages" onClick={() => { navigate("/message") }}>
                        </TabList.Tab>
                        <TabList.Tab label="Helpcenter" id="Helpcenter" onClick={() => { navigate("/test") }}>
                        </TabList.Tab>
                    </TabList>
                </div>
                </div>
                <Tooltip
                    label="Tooltip sample"
                />
            </TitleBar>
        </div>
    )
}

export default HeaderBar