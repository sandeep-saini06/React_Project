import { Button, Card, Divider, Grid, Icon, Table, Sidebar, Text, Box, Breadcrumb } from '@repay/saguaro-web'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Fotter from './FooterLayout';
import FooterLayout from './FooterLayout';
import HeaderBar from './HeaderBar';

const MessageBox = () => {
    const navigate = useNavigate()
    const links = [
        {
            label: 'Inbox',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: '/message',
            active: true
        },
        {
            label: 'Sent',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: '/message'
        }
    ]

    return (
        <div className='footer-direction'>
            <HeaderBar activeTab="Messages" />
            <Box
                backgroundColor="#1DA0F7"
                borderColor="white"
                borderRadius="none"
                borderStyle="solid"
                borderWidth="2px"
                color="white"
                display="inline-flex"
                fontSize="subtitle"
                height=""
                maxHeight=""
                maxWidth="100%"
                minHeight="10px"
                padding="10px"
                position="relative"
                width="100%"
            >
                <Button
                    style={{
                        color: "white"
                    }}
                    data-state="active"
                    status="default"
                    fontSize="body"
                    variant="text"
                    onClick={() => { navigate("/") }}
                >Back
                </Button>
                <div style={{
                    marginLeft: "10%",
                    alignSelf: "center"
                }}>
                    <Text
                        color="white"
                        fontSize="bold"
                        fontStyle="plain"
                        margin="xs"
                    >
                        Message - Inbox
                    </Text>
                </div>

            </Box>
            <div style={{ marginLeft: "1%", marginTop: "1%" }}>
                <Breadcrumb>
                    <Breadcrumb.Item as={Link} children="Accounts" to="/" />
                    <Breadcrumb.Item as={Link} children="Message-Inbox" to="/message" />
                </Breadcrumb>
            </div>
            <Grid
                cols={2}>
                <Card
                    width='130%'
                    marginLeft='10%'>
                    <Grid
                        cols={4}>
                        <Text
                            color='#949292'
                            fontSize='small'
                            fontWeight='700'
                            paddingLeft='15%'>
                            Inbox Date
                        </Text>
                        <Text
                            color='#949292'
                            fontSize='small'
                            fontWeight='700'>
                            Account
                        </Text>
                        <Text
                            color='#949292'
                            fontSize='small'
                            fontWeight='700'>
                            Subject
                        </Text>
                    </Grid>
                    <Divider marginTop='2%' />
                    <Grid
                        cols={4}>
                        <Text
                            color='#949292'
                            fontSize='small'>
                            <Icon
                                icon='drafts'
                                fontSize='subtitle'
                                fill
                                marginRight='5%'
                            />
                            04/19/2023
                        </Text>
                        <Text
                            color='#949292'
                            fontSize='small'>
                            AC...9117
                        </Text>
                        <Text
                            color='#949292'
                            fontSize='small'>
                            Your Amount statement is Ready
                        </Text>
                    </Grid>
                    <Divider
                        marginBottom='3%' />
                    <div>
                        <Text
                            fontSize='small'
                            fontWeight='bold'>
                            Dear Martha,
                        </Text>
                        <div style={{ marginTop: '2%' }}>
                            <Text
                                fontSize='small'>
                                As per out Standard process of generating statements, we would like to
                                inform you can donwload your statement from the link below for the period
                                of Q2 to Q3
                            </Text>
                        </div>
                        <div style={{ marginTop: '2%' }}>
                            <Text
                                fontSize='small'>
                                Please don't hestitate to contact our customer care at +1(800) 121 2211 or
                                write us at customercare@defisolutions.com
                            </Text>
                        </div>
                        <div style={{ marginTop: '1%' }}>
                            <Icon
                                icon='attach_file'
                                fontSize='h4' />
                            <Link style={{ color: '#1DA0F7' }}>Statement Q3 2017</Link>
                        </div>
                    </div>
                    <Grid
                        cols={5}
                        marginTop='2%'>
                        <Button
                            style={{ backgroundColor: '#1DA0F7' }}>
                            Reply
                        </Button>
                        <Button
                            style={{ backgroundColor: '#cccaca', color: 'black' }}>
                            Delete
                        </Button>
                    </Grid>
                    <Table sticky="none" style={{ width: "100%", padding: "20px" }} >
                        <tbody>
                            <tr>
                                <td>
                                    <Icon
                                        icon='mail'
                                        fontSize='subtitle'
                                        fill
                                        marginRight='10%'
                                        marginLeft='5%'
                                    />
                                    04/09/2023
                                </td>
                                <td>
                                    <p style={{ marginLeft: '10%' }}>AC...3117</p>
                                </td>
                                <td>
                                    <b style={{ marginLeft: '10%' }}>New Documment required based on new raguralar change</b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Icon
                                        icon='drafts'
                                        fontSize='subtitle'
                                        fill
                                        marginRight='10%'
                                        marginLeft='5%'
                                    />
                                    03/10/2023
                                </td>
                                <td>
                                    <p style={{ marginLeft: '10%' }}>AC...9118</p>
                                </td>
                                <td>
                                    <p style={{ marginLeft: '10%' }}>Your Account Statement is ready </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Icon
                                        icon='drafts'
                                        fontSize='subtitle'
                                        fill
                                        marginRight='10%'
                                        marginLeft='5%'
                                    />
                                    02/08/2023
                                </td>
                                <td>
                                    <p style={{ marginLeft: '10%' }} >AC...3118</p>
                                </td>
                                <td>
                                    <p style={{ marginLeft: '10%' }} >New Documment required based on new raguralar change</p>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                    <div style={{ marginLeft: '80%' }}>
                        <Button
                            style={{ backgroundColor: '#1DA0F7' }}>
                            Write us
                        </Button>
                    </div>
                </Card>

                <div style={{ marginLeft: '50%', marginTop: '4%' }}>
                    <Sidebar
                        style={{ overflow: "hidden", borderLeft: "groove" }}
                        links={links} />
                </div>
            </Grid>
            <FooterLayout />
        </div>
    )
}

export default MessageBox