import { Box, Breadcrumb, Button, Card, Checkbox, Divider, Grid, GridItem, Layout, Select, StyleProvider, Text } from '@repay/saguaro-web'
import React, { useState } from 'react'
import HeaderBar from './HeaderBar'
import { Link, useNavigate } from 'react-router-dom'
import SidebarRouting from './SidebarRouting'
import FooterLayout from './FooterLayout'

const CheckListRequest = () => {
    const navigate = useNavigate()
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
            </Layout>
            <div style={{ marginLeft: "1%", marginTop: "1%" }}>
                <Breadcrumb>
                    <Breadcrumb.Item as={Link} children="Make A Request" to="/makearequest" />
                    <Breadcrumb.Item as={Link} children="Checklist Request" to="/checklist" />
                </Breadcrumb>
            </div>
            <Card>
                <Grid cols={2}>
                    <GridItem  >
                        <Box
                            padding="10px"
                        >
                            <h6>Checklist Request</h6>
                            <Box padding="20px 0 20px 0">
                                <Text>Please select the relevent options from checklist below that are true in your case for initiating Checklist Request.</Text><br />
                                <Checkbox></Checkbox><Text>Is this for a lease?</Text><br />
                                <Checkbox></Checkbox><Text>Is this Pre-Owned certified vehicle?</Text><br />
                                <Checkbox></Checkbox><Text>Is this under scheduled maintenance plan agreement?</Text><br />
                                <Checkbox></Checkbox><Text>Is this under approved extended warranty contract?</Text><br />
                            </Box>
                            <Button style={{ backgroundColor: "skyblue" }}>NEXT</Button>
                            <Button variant='outline' style={{ color: "#000c", marginLeft: "10px" }}>CANCEL</Button>

                        </Box>
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

export default CheckListRequest