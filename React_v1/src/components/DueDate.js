import { Box, Breadcrumb, Button, Card, Checkbox, Divider, Grid, GridItem, Icon, RadioButton, Range, Select, Text, TextInput } from '@repay/saguaro-web'
import React, { Fragment, useState } from 'react'
import HeaderBar from './HeaderBar'
import SidebarRouting from './SidebarRouting'
import { Link, useNavigate } from 'react-router-dom'
import { RadioButtonGroup } from '@repay/saguaro-web/dist/Components/RadioButton/Group'
import FooterLayout from './FooterLayout'

const DueDate = () => {
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
                maxHeight=""
                maxWidth="100%"
                minHeight="10px"
                padding="10px"
                position="relative"
                width="100%"
            >
                <div style={{ marginLeft: "5px" }}>
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

                </div>
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
                    <Breadcrumb.Item as={Link} children="Due Date" to="/duedate" />
                </Breadcrumb>
            </div>
            <Card padding="10px">

                <Grid
                    cols={2}
                    rows={1}
                >
                    <GridItem  >
                        <Grid cols={1}>

                            <Text
                                color="black"
                                fontSize="body"
                                fontStyle="plain"
                                margin="xs"
                            >
                                Due Date Change
                            </Text>
                            <Text
                                color="gray"
                                fontSize="small"
                                fontStyle="plain"
                                margin="xs"
                            >
                                New Desired Due Date*
                            </Text>
                            <input defaultValue='2023-08-05' type="date" id="payment" name="Payment date" />
                        </Grid>
                        <Grid cols={2} marginTop="10px">
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    Invoice print date
                                </Text>
                                <Divider />
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    05/04/2023
                                </Text>
                                <Divider />
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    Current invoice due date
                                </Text>
                                <Divider />
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    05/04/2023
                                </Text>
                                <Divider />
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    Paid to date
                                </Text>
                                <Divider />
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    05/04/2023
                                </Text>
                                <Divider />
                            </GridItem><GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    Total payment
                                </Text>
                                <Divider />
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    $ 300.32
                                </Text>
                                <Divider />
                            </GridItem>
                        </Grid>
                        <Grid cols={1}>
                            <GridItem>
                                <Checkbox
                                    label="I acknowledged that I have read, and do hereby accept all the terms and conditions of Due Date Change"
                                    margin="md"
                                />
                                <Button
                                    data-state="active"
                                    status="default"
                                    fontSize="small"
                                    variant="text"
                                >
                                    click here to read Due Date change terms and conditions
                                </Button>
                            </GridItem>
                            <GridItem>
                                <Button
                                    style={{ backgroundColor: 'blue' }}
                                    status="default"
                                    variant="standard"
                                >
                                    Submit
                                </Button>
                                &nbsp;
                                <Button
                                    style={{ backgroundColor: 'gray', color: "white" }}
                                    status="default"
                                    variant="standard"
                                    disabled={true}
                                >
                                    cancel
                                </Button>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <div >
                            <SidebarRouting id="MR" />
                        </div>
                    </GridItem>
                </Grid>

            </Card>
            <FooterLayout />
        </div>
    )
}

export default DueDate