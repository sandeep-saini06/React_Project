import React from 'react'
import {
    Layout, TitleBar, Icon, Text,
    TextInput, Box, Card, Button, Grid, Divider, Select, Toggle, GridItem, Breadcrumb
} from '@repay/saguaro-web';
import { Link, useNavigate } from "react-router-dom";
import SidebarRouting from './SidebarRouting';
import HeaderBar from './HeaderBar';
import FooterLayout from './FooterLayout';

const Statement = () => {
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
                        Statements
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
                    <Breadcrumb.Item as={Link} children="Statements" to="/statement" />
                </Breadcrumb>
            </div>
            <Card
                maxWidth="100%"
                shadow="hover"
                size="lg"
            >
                <Grid
                    cols={3}
                    rows={1}
                >
                    <GridItem>
                        <div>
                            <Card
                                maxWidth="100%"
                                shadow="hover"
                                size="lg">
                                <Text
                                    fontSize="small"
                                >
                                    Billing Statement - Monthly Bill
                                    <Divider />
                                </Text>
                                <div>
                                    <Icon
                                        fontSize="h3"
                                        icon="picture_as_pdf"
                                    />

                                    <Link
                                        href="https://repay.com"
                                        tabIndex={0}
                                    >
                                        04/16/2023
                                    </Link>
                                    <Divider />
                                </div>
                                <div>
                                    <Icon
                                        fontSize="h3"
                                        icon="picture_as_pdf"
                                    />

                                    <Link
                                        href="https://repay.com"
                                        tabIndex={0}
                                    >
                                        09/26/2023
                                    </Link>
                                    <Divider />
                                </div>
                                <div>
                                    <Icon
                                        fontSize="h3"
                                        icon="picture_as_pdf"
                                    />

                                    <Link
                                        href="https://repay.com"
                                        tabIndex={0}
                                    >
                                        07/13/2023
                                    </Link>
                                    <Divider />
                                </div>

                            </Card>
                        </div>
                    </GridItem>
                    <GridItem  >

                        <div style={{ marginTop: "10%" }}>
                            <Toggle
                                label="You are enrolled for paperless statements"
                                labelPosition="right"
                            />
                            <div>
                                <Text
                                    fontSize="signature"
                                    fontStyle="italic"
                                    margin="lg"
                                >
                                    If you would prefer to receive your monthly billing statements via email Cancel Paperless Statements.
                                </Text>
                            </div>
                            <div style={{ marginTop: "5%", marginLeft: "10%" }}>
                                <Text
                                    fontSize="subtitle"
                                    fontStyle="italic"
                                    margin="sm"
                                    color='red'
                                >
                                    Are you sure you want to sign out ?
                                </Text>
                            </div>
                            <div style={{ marginLeft: "35%" }}>
                                <Link
                                    href="https://repay.com"
                                    tabIndex={0}
                                >
                                    Yes
                                </Link> |
                                <Link
                                    href="https://repay.com"
                                    tabIndex={0}
                                >
                                    No
                                </Link>
                            </div>
                        </div>

                        <div className="verticalLine" style={{ marginLeft: "60%", height: "30%" }}></div>
                    </GridItem>
                    <GridItem>
                        <SidebarRouting id="ST" />
                    </GridItem>

                </Grid>
            </Card>
            <FooterLayout />
        </div>
    )
}

export default Statement