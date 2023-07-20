import React from 'react'
import {
    Layout, TitleBar, Icon, Text,
    TextInput, Box, Card, Button, Grid, Divider, Select, Table, TableRow, GridItem, Breadcrumb, Calendar
} from '@repay/saguaro-web';
import { Link, useNavigate } from "react-router-dom";
import SidebarRouting from './SidebarRouting';
import HeaderBar from './HeaderBar';
import FooterLayout from './FooterLayout';

const PaymentHistory = () => {
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
                    onClick={() => { navigate("/details") }}
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
                        Payment History
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
                    <Breadcrumb.Item as={Link} children="Accounts" to="/" />
                    <Breadcrumb.Item as={Link} children="Payment hisorty" to="/paymenthistory" />
                </Breadcrumb>
            </div>
            <Card
                maxWidth="100%"
                shadow="hover"
                size="lg"
            >
                <Grid
                    cols={2}
                    rows={1}
                >
                    <GridItem >
                        <div>
                            <div>
                                <b>From:</b>
                                {/* <TextInput type='date' style={{ marginRight: '5%', marginLeft: '1%' }} onChange={(e)=>{console.log(e.target.value)}}></TextInput> */}
                                <input type="date" style={{ marginRight: '8%', marginLeft: '1%' }}></input>
                                <b>To:</b>
                                {/* <TextInput type='date' style={{ marginRight: '5%', marginLeft: '1%' }}></TextInput> */}
                                <input type="date" style={{ marginRight: '5%', marginLeft: '1%' }}></input>
                                <Button
                                    status="default"
                                    variant="standard"
                                    style={{ backgroundColor: "#d9dadb" }}
                                >
                                    <p style={{ color: "black" }}>View</p></Button>
                            </div>
                            <div>
                                <Text
                                    fontSize="signature"
                                    fontStyle="italic"
                                    margin="lg"
                                >
                                    Payment Made: 9 | Payment Remaining: 39
                                </Text>
                            </div>

                            <div style={{ marginTop: '5%' }}>
                                <Table
                                    sticky="none"
                                    style={{ width: "100%" }}
                                >
                                    <thead>
                                        <TableRow>
                                            <th>
                                                Date
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                            <th>
                                                Description
                                            </th>
                                        </TableRow>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        <TableRow>
                                            <td>
                                                04/16/2023
                                            </td>
                                            <td>
                                                $402.69
                                            </td>
                                            <td>
                                                Total Payment
                                            </td>
                                        </TableRow>
                                        <TableRow>
                                            <td>
                                                03/16/2023
                                            </td>
                                            <td>
                                                $104.23
                                            </td>
                                            <td>
                                                Total Payment
                                            </td>
                                        </TableRow>
                                        <TableRow>
                                            <td>
                                                07/23/2023
                                            </td>
                                            <td>
                                                $252.69
                                            </td>
                                            <td>
                                                Total Payment
                                            </td>
                                        </TableRow>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="verticalLine" style={{ marginLeft: "60%", height: "30%" }}></div>
                    </GridItem>
                    <GridItem>
                        <div>
                            <Grid
                                cols={1}
                                rows={1}>
                                <SidebarRouting id="PH" />
                            </Grid>
                        </div>
                    </GridItem>


                </Grid>
            </Card>
            <FooterLayout />
            </div>
    )
}

export default PaymentHistory