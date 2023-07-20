import React from "react";
import {
    Layout, TitleBar, Icon, Text,
    TextInput, Box, Select, Grid, Card, Divider, Button, GridItem
} from '@repay/saguaro-web';
import { useNavigate } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import SidebarRouting from "./SidebarRouting";
import FooterLayout from "./FooterLayout";

const MyInformation = () => {
    const navigate = useNavigate();

    const primaryInfo = {
        'Name': 'Martha Wilson', 'Email Address': 'martha.wilson@gmail.com',
        'Home Phone': '(215) 155-2236', 'Mobile Phone': '(000) 000-0000',
        'Work Phone': '(215) 155-8646', 'Preferred Language': 'English',
        'Country': 'United States', 'Address 1': '455 South Gulph Rd',
        'City': 'Philadelphia', 'State': 'PA', 'Zip Code': '19406'
    }

    const coBorrowerInfo = {
        'Name': 'john Smith', 'Email Address': 'John.smith@gmail.com',
        'Home Phone': '(215) 155-2236', 'Mobile Phone': '(000) 000-0000',
        'Work Phone': '(215) 155-8646', 'Preferred Language': 'English',
        'Country': 'United States', 'Address 1': '455 South Gulph Rd',
        'City': 'Philadelphia', 'State': 'PA', 'Zip Code': '19406'
    }

    const collateralInfo = { 'Vehicle': '2017 Nissan Altima', 'VIN': '1N4AL3AP9JC110883', 'Term': '60 Months', 'Orignal Car Condition': 'New', 'Residual Value': '', 'Final Miles Unit': '' }

    return (
        <div className='footer-direction'>
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
                            My Information
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
            <div>
                <Card>
                    <Grid cols={2}>
                        <GridItem>

                            <Grid
                                cols={2}
                                rows={2}
                            >
                                <Card
                                    maxWidth="100%"
                                    shadow="hover"
                                >
                                    <Box
                                        backgroundColor="#cfcfcc"
                                        color="BLACK"
                                        fontSize="subtitle"
                                        fontWeight="bold"
                                        padding="10px"
                                        width="100%"
                                    >
                                        Primary Borrower Info
                                        <Icon
                                            icon="Edit"
                                            marginLeft="66px"
                                            color="#1DA0F7"
                                            fontSize="h6"
                                        />
                                    </Box>
                                    <div style={{ marginLeft: "2%" }}>
                                        {Object.keys(primaryInfo).map((key, index) => {
                                            return (
                                                <Grid
                                                    cols={2}
                                                    rows={1}
                                                    key={index}>
                                                    <Text
                                                        fontSize="subtitle"
                                                        color="#969696"
                                                    >
                                                        {key}:
                                                    </Text>
                                                    <Text
                                                        fontSize="subtitle"
                                                    >
                                                        {primaryInfo[key]}
                                                    </Text>
                                                </Grid>
                                            );
                                        })}

                                    </div>

                                </Card>
                                <Card
                                    maxWidth="100%"
                                    shadow="hover"
                                >
                                    <Box
                                        backgroundColor="#cfcfcc"
                                        color="BLACK"
                                        fontSize="subtitle"
                                        fontWeight="bold"
                                        padding="10px"
                                        width="100%"
                                    >
                                        Co-Borrower Info
                                        <Icon
                                            icon="Edit"
                                            marginLeft="79px"
                                            color="#1DA0F7"
                                            fontSize="h6"
                                        />
                                    </Box>
                                    <div style={{ marginLeft: "2%" }}>
                                        {Object.keys(coBorrowerInfo).map((key, index) => {
                                            return (
                                                <Grid
                                                    cols={2}
                                                    rows={1}
                                                    key={index}>
                                                    <Text
                                                        fontSize="subtitle"
                                                        color="#969696"
                                                    >
                                                        {key}:
                                                    </Text>
                                                    <Text
                                                        fontSize="subtitle"
                                                    >
                                                        {coBorrowerInfo[key]}
                                                    </Text>
                                                </Grid>
                                            );
                                        })}

                                    </div>

                                </Card>

                                <Card
                                    maxWidth="100%"
                                    shadow="hover"
                                >
                                    <Box
                                        backgroundColor="#cfcfcc"
                                        color="BLACK"
                                        fontSize="subtitle"
                                        fontWeight="bold"
                                        padding="10px"
                                        width="100%"
                                    >
                                        Collateral Info
                                        <Icon
                                            icon="Edit"
                                            marginLeft="115px"
                                            color="#1DA0F7"
                                            fontSize="h6"
                                        />
                                    </Box>
                                    <div style={{ marginLeft: "2%" }}>
                                        {Object.keys(collateralInfo).map((key, index) => {
                                            return (
                                                <Grid
                                                    cols={2}
                                                    rows={1}
                                                    key={index}>
                                                    <Text
                                                        fontSize="subtitle"
                                                        color="#969696"
                                                    >
                                                        {key}:
                                                    </Text>
                                                    <Text
                                                        fontSize="subtitle"
                                                    >
                                                        {collateralInfo[key]}
                                                    </Text>
                                                </Grid>
                                            );
                                        })}

                                    </div>

                                </Card>
                            </Grid>
                        </GridItem>
                        <GridItem>
                            <SidebarRouting id="IN" />
                        </GridItem>
                    </Grid>

                </Card>
            </div>
            <FooterLayout />
        </div>
    )
}

export default MyInformation