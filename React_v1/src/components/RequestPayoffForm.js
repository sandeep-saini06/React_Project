import { Box, Button, Checkbox, Divider, Grid, Card,
    GridItem, Select, StyleProvider, Table, Text, TextInput } from '@repay/saguaro-web'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SidebarRouting from './SidebarRouting'

const RequestPayoffForm = () => {
    const navigate = useNavigate()
    return (
        <StyleProvider>
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
                    onClick={() => { navigate("/payoff") }}
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
                        Request Payoff
                    </Text>
                </div>

            </Box>
            <Card>
            <Grid cols={2}>
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
                    >
                        <h6><Text>Pay off following amounts</Text></h6>
                        <Table sticky="none" style={{ width: "400px", padding: "20px" }} >
                            <tbody>
                                <tr><td>Total Payoff</td><td>32,720.39</td></tr>
                                <tr><td>Misc. Charges</td><td>$100.00</td></tr>
                                <tr><td>Late Charges</td><td>$100.00</td></tr>
                                <tr><td><b>TOTAL</b></td><td><b>$32,880.39</b></td></tr>
                            </tbody>
                        </Table>
                        <h6><Text>Enter Payment Details (Only ACH Accepted)</Text></h6>
                        <Grid rows={4} cols={2}>
                            <GridItem>
                                <label>Account Type</label>
                                <Select
                                    width="100%"
                                    options={[
                                        'Savings',
                                        'Current',
                                        'Debit'
                                    ]}
                                >
                                </Select>
                            </GridItem>
                            <GridItem>
                                <label>Account Number</label>
                                <TextInput
                                    placeholder="Account Number"
                                    width="100%"
                                />
                            </GridItem>

                            <GridItem>
                                <label>Routing Number</label>
                                <TextInput
                                    placeholder="Routing Number"
                                    width="100%"
                                />
                            </GridItem>

                            <GridItem>
                                <label>Bank of America</label>
                            </GridItem>

                            <GridItem>
                                <label>City</label>
                                <TextInput
                                    placeholder="City"
                                    width="100%"
                                />
                            </GridItem>

                            <GridItem>
                                <label>Name on Bank Account</label>
                                <TextInput
                                    placeholder="Name on Bank Account"
                                    width="100%"
                                />
                            </GridItem>

                            {/* <GridItem>
                                <label>City</label>
                                <TextInput
                                    placeholder="City"
                                    width="100%"
                                />
                            </GridItem> */}

                            <GridItem>
                                <label>State</label>
                                <Select
                                    width={"100%"}
                                    options={[
                                        'Pennsylvenia',
                                        'Los Angeles',
                                        'Delhi'
                                    ]}
                                >
                                </Select>
                            </GridItem>
                            <GridItem>
                                <label>Current Odometer Reading</label>
                                <TextInput
                                    placeholder="Current Odometer Reading"
                                    width="100%"
                                />
                            </GridItem>

                        </Grid>
                        <br />
                        <Checkbox></Checkbox> I agree to the <Text style={{ color: "skyblue" }}>Terms and Conditions</Text><br />
                        <Text style={{ padding: "10px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur natus eos pariatur sequi illum aperiam, voluptatibus dolore possimus rerum molestiae itaque corporis obcaecati recusandae dicta sapiente tenetur voluptates assumenda!</Text><br />
                        <Button style={{ backgroundColor: "skyblue" }}>SUBMIT PAYOFF</Button>
                        <Button variant='outline' style={{ color: "#000c", marginLeft: "10px" }} onClick={() => (navigate("/payoff"))}>CANCEL</Button>
                    </Box>
                </GridItem>
                <GridItem>
                    <SidebarRouting id="RP" />
                </GridItem>
            </Grid>
        </Card>
        </StyleProvider>
    )
}

export default RequestPayoffForm