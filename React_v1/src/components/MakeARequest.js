import { Box, Breadcrumb, Button, Card, Divider, Grid, GridItem, Icon, Layout, Link, Select, StyleProvider, Text } from '@repay/saguaro-web'
import React from 'react'
import { useNavigate } from 'react-router-dom/dist';
import HeaderBar from './HeaderBar';
import SidebarRouting from './SidebarRouting';
import FooterLayout from './FooterLayout';

const MakeARequest = () => {
    const navigate = useNavigate();
    return (
        <div className='footer-direction'>
        <StyleProvider>
            <HeaderBar />
            <Layout>
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
            </Layout>
            <div style={{ marginLeft: "1%", marginTop: "1%" }}>
                <Breadcrumb>
                    <Breadcrumb.Item as={Link} children="Accounts" to="/" />
                    <Breadcrumb.Item as={Link} children="Make A Request" to="/makearequest" />
                </Breadcrumb>
            </div>
            <Card>
                <Grid cols={2}>
                    <GridItem  >

                        <Grid
                            cols={3}
                        >
                            <GridItem>
                                <Card onClick={() => { navigate("/") }} size="xs" style={{ backgroundColor: "#aaaa" }}>
                                    <Icon style={{ fontSize: "32px", display: "inline-flex", justifyContent: "center", width: "100%" }} icon="live_help"></Icon>
                                    <Text style={{ fontSize: "16px", display: "inline-flex", justifyContent: "center", width: "100%" }}>GENERIC REQUEST</Text>
                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card onClick={() => { navigate("/paymentextension") }} size="xs" style={{ backgroundColor: "#aaaa" }}>
                                    <Icon style={{ fontSize: "32px", display: "inline-flex", justifyContent: "center", width: "100%" }} icon="credit_card"></Icon>
                                    <Text style={{ fontSize: "16px", display: "inline-flex", justifyContent: "center", width: "100%" }}>PAYMENT EXTENSION</Text>
                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card onClick={() => { navigate("/duedate") }} size="xs" style={{ backgroundColor: "#aaaa" }}>
                                    <Icon style={{ fontSize: "32px", display: "inline-flex", justifyContent: "center", width: "100%" }} icon="date_range"></Icon>
                                    <Text style={{ fontSize: "16px", display: "inline-flex", justifyContent: "center", width: "100%" }}>DUE DATE CHANGE</Text>
                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card onClick={() => { navigate("/amortization") }} size="xs" style={{ backgroundColor: "#aaaa" }}>
                                    <Icon style={{ fontSize: "32px", display: "inline-flex", justifyContent: "center", width: "100%" }} icon="format_list_bulleted"></Icon>
                                    <Text style={{ fontSize: "16px", display: "inline-flex", justifyContent: "center", width: "100%" }}>AMORTIZATION SCHEDULE</Text>
                                </Card>
                            </GridItem>
                            <GridItem>
                                <Card onClick={() => { navigate("/checklist") }} size="xs" style={{ backgroundColor: "#aaaa" }}>
                                    <Icon style={{ fontSize: "32px", display: "inline-flex", justifyContent: "center", width: "100%" }} icon="playlist_add"></Icon>
                                    <Text style={{ fontSize: "16px", display: "inline-flex", justifyContent: "center", width: "100%" }}>CHECKLIST REQUEST</Text>
                                </Card>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <SidebarRouting id="MR" />
                    </GridItem>
                </Grid>
            </Card>
            <FooterLayout />
        </StyleProvider>
        </div>
    )
}

export default MakeARequest