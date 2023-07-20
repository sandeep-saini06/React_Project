import React from "react";
import {
    Layout, TitleBar, Icon, Text,
    TextInput, Box, Card, Button, Grid, Divider, Select, GridItem, Breadcrumb
} from '@repay/saguaro-web';
import { Link, useNavigate } from "react-router-dom";
import '../index.css'
import SidebarRouting from "./SidebarRouting";
import HeaderBar from "./HeaderBar";
import FooterLayout from "./FooterLayout";
const AutoPayEnrollment = () => {
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
                        Auto Pay Enrollment
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
                    <Breadcrumb.Item as={Link} children="Auto Pay Enrollment" to="/autopay" />
                </Breadcrumb>
            </div>
            <div>
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
                    <GridItem  >
                        <div>
                            <Box
                                backgroundColor="#a3ccd9"
                                borderColor="white"
                                borderRadius="5px"
                                borderStyle="solid"
                                borderWidth="2px"
                                display="inline-flex"
                                fontSize="subtitle"
                                height=""
                                maxHeight=""
                                maxWidth="100%"
                                minHeight="10px"
                                padding="20px"
                                width="100%"
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
                                        paddingLeft="10px"
                                    >
                                        Enrolling in Auto Pay will automatically pay only your invoice amount.
                                    </Text><br /><br />
                                    <div style={{ paddingLeft: "10px" }}>
                                        <Text
                                            color="black"
                                        >
                                            Your next invoice Date is 09/15/2020 and invoice Amount is $402.69. This Date and Amount
                                            may very based on payment activity.
                                        </Text>
                                    </div>
                                </div>
                            </Box>
                            <div style={{ marginTop: '5%' }}>
                                <Grid
                                    cols={2}
                                    rows={4}>
                                    <div>
                                        <Select
                                            options={[
                                                'ACH',
                                                'Credit',
                                                'Debit'
                                            ]}
                                            placeholder="Account Type"
                                            marginLeft="2%"
                                            width="100%"
                                        >
                                        </Select>
                                    </div>
                                    <div>
                                        <TextInput
                                            placeholder="Account Number"
                                            width="95%"
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            placeholder="Routing Number"
                                            width="100%"
                                        />
                                    </div>

                                    <Text
                                        color="rgb(122 122 143)"
                                        fontStyle="italic"
                                        marginTop="10px"
                                    >
                                        &lsaquo;	Bank Name from Rounting Number &rsaquo;
                                    </Text>

                                    <div>
                                        <TextInput
                                            placeholder="Name on Bank Account"
                                            width="100%"
                                        />
                                    </div>
                                    <div>
                                        <TextInput
                                            placeholder="City"
                                            width="95%"
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            options={[
                                                'Texas',
                                                'New York',
                                                'California'
                                            ]}
                                            placeholder="State"
                                            marginLeft="2%"
                                            width="100%"
                                        >
                                        </Select>
                                    </div>
                                </Grid>
                                <div style={{ marginTop: "10%" }}>
                                    <Button
                                        style={{ backgroundColor: "#1DA0F7" }}
                                        status="default"
                                        variant="standard"
                                    >
                                        Submit Enrollment
                                    </Button>
                                    <Button
                                        style={{ backgroundColor: "#9d9e9e" }}
                                        status="default"
                                        variant="standard"
                                        marginLeft="10%"
                                    >
                                        <p style={{ color: "black" }}>Cancel</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="verticalLine" style={{ marginLeft: "60%", height: "30%" }}></div>
                    </GridItem>
                    <div>
                        <GridItem>
                            <Grid
                                cols={1}
                                rows={1}>
                                <SidebarRouting id="AP" />
                            </Grid>
                        </GridItem>
                    </div>
                </Grid>
            </Card>
            <FooterLayout />
        </div>
    )
}

export default AutoPayEnrollment