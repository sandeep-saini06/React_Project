import {
    Box, Button, Grid, Layout, TitleBar, Icon, Divider,
    Select, Table, Text, TextInput, Toggle, GridItem, Card, Breadcrumb
} from '@repay/saguaro-web'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import SidebarRouting from './SidebarRouting';
import FooterLayout from './FooterLayout';

const PaymentExtension = () => {
    const navigate = useNavigate();
    return (
        <div className='footer-direction'>
            <HeaderBar />
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
                maxHeight="50%"
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
                    onClick={() => { navigate("/makearequest") }}
                >
                    Back
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
                        Make a Request
                    </Text>
                </div>
                <Select
                    options={[
                        '2018 Toyota Carry- AC...5985(Active-Retail)',
                        '2017 Nissan Altima- AC...8016(Active-Retail)',
                    ]}
                    placeholder="2018 Toyota Carry- AC...5985(Active-Retail)"
                    marginLeft="2%"
                >
                </Select>
            </Box>
            <div style={{ marginLeft: "1%", marginTop: "1%" }}>
                <Breadcrumb>
                    <Breadcrumb.Item as={Link} children="Make A Request" to="/makearequest" />
                    <Breadcrumb.Item as={Link} children="Payment Extension" to="/paymentextension" />
                </Breadcrumb>
            </div>
            <Card>
                <Grid
                    cols={2}  >
                        <GridItem>
                    <Box
                        borderColor="white"
                        borderRadius="none"
                        borderStyle="solid"
                        borderWidth="2px"
                        fontSize="subtitle"
                        height=""
                        maxHeight=""
                        maxWidth="100%"
                        minHeight="10px"
                        padding="10px"
                        position="relative"
                        width="100%"
                        marginLeft="10%"
                    >
                        <h6 style={{ marginBottom: '5%' }}><Text>Payment Extension</Text></h6>
                        <Grid cols={2}>
                            <Select
                                width="100%"
                                placeholder='How Many future payment would you like to extend?'
                                options={[
                                    'Savings',
                                    'Current',
                                    'Debit'
                                ]}
                            >
                                How Many future payment would you like to extend?
                            </Select>
                            <Select
                                width="100%"
                                placeholder='Provide Extension Reason'
                                options={[
                                    'Savings',
                                    'Current',
                                    'Debit'
                                ]}
                            >
                                Provide Extension Reason
                            </Select>
                        </Grid> <br />
                        <Grid
                            cols={2}>
                            <div>
                                <TextInput
                                    placeholder="Fee"
                                    width="100%"
                                />
                            </div>
                            <div>
                                <TextInput
                                    placeholder="Previously Extended Payments"
                                    width="100%"
                                />
                            </div>
                        </Grid>
                        <Table sticky="none" style={{ width: "100%", padding: "20px" }} >
                            <tbody>
                                <tr><td><b>Payment Due</b></td><td></td></tr>
                                <tr><td>Invoice Date</td><td>Invoice Amount</td></tr>
                                <tr><td>05/24/2023</td><td>$1400.14</td></tr>
                                <tr><td>06/08/2023</td><td>$950.11</td></tr>
                            </tbody>
                        </Table>
                    </Box>
               
                <Box
                    backgroundColor="#fcf2d7"
                    borderColor="white"
                    borderRadius="5px"
                    borderStyle="solid"
                    borderWidth="2px"
                    display="inline-flex"
                    fontSize="h5"
                    height=""
                    maxHeight=""
                    maxWidth="100%"
                    minHeight="10px"
                    padding="20px"
                    width="100%"
                    marginLeft='5%'
                    marginBottom='2%'
                    marginTop='2%'
                >
                    <Icon
                        color="#bf9217"
                        fill
                        fontSize="h6"
                        icon="Warning
                        "
                    />
                    <div style={{
                        fontSize: "70%",
                    }}>
                        <Text
                            color="black"
                            paddingLeft="5px"
                        >
                            You <b>must cancel</b> your existing Auto Pay Enrollment in order to extend your payment.
                            Please provide on submit of this Payment Extension Request
                        </Text><br /><br />
                        <div style={{ paddingLeft: "5px" }}>
                            <Toggle
                                label="Cancel Auto Pay Enrollment"
                                labelPosition="right"
                            />
                        </div>
                    </div>
                </Box>
                <Box
                    backgroundColor="#a3ccd9"
                    borderColor="white"
                    borderRadius="5px"
                    borderStyle="solid"
                    borderWidth="2px"
                    display="inline-flex"
                    fontSize="h5"
                    height=""
                    maxHeight=""
                    maxWidth="100%"
                    minHeight="10px"
                    padding="20px"
                    width="100%"
                    marginLeft='5%'
                >
                    <Icon
                        color="#036f8a"
                        fill
                        fontSize="h6"
                        icon="error"
                    />
                    <div style={{
                        fontSize: "70%",
                    }}>
                        <Text
                            color="black"
                            paddingLeft="5px"
                        >
                            Please Note that Payment Extension process will take around 2 to 4 business days.
                            We'll communicate the update of your request on your registered email and mobile number by
                            sending you a text message.
                        </Text><br /><br />
                        <div style={{ paddingLeft: "5px" }}>
                            <Text
                                color="black"
                            >
                                During the review process if necessary defi Bank will send you the document to ink-sign in your
                                secure "Message". Please send the signed copy to complete the request
                            </Text>
                        </div>
                    </div>
                </Box>
                </GridItem>
                <GridItem>
                    <SidebarRouting id="MR"/>
                </GridItem>
                </Grid>
            </Card>
            <FooterLayout />
        </div>
    )
}

export default PaymentExtension