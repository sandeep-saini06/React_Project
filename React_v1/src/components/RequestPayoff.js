import React from 'react'
import { Box, Breadcrumb, Button, Card, Flex, Grid, GridItem, Icon, Layout, Select, StyleProvider, Table, Text } from '@repay/saguaro-web'
import SidebarRouting from './SidebarRouting'
import { Link, useNavigate } from 'react-router-dom';
import FooterLayout from './FooterLayout';
import HeaderBar from './HeaderBar';

const RequestPayoff = () => {
    const navigate = useNavigate();
    return (
        <div className='footer-direction'>
        <StyleProvider>
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
                        Request Payoff
                    </Text>
                </div>

            </Box>
            <div style={{ marginLeft: "1%", marginTop: "1%" }}>
                <Breadcrumb>
                    <Breadcrumb.Item as={Link} children="Accounts" to="/" />
                    <Breadcrumb.Item as={Link} children="Request Payoff" to="/payoff" />
                </Breadcrumb>
            </div>
            <Card padding="10px">
                <Grid cols={2}>
                    <GridItem  >
                        <Layout style={{ padding: "20px" }}>
                            <Card
                                shadow="hoverfocus"
                                size="sm"
                            >
                                <Flex
                                    flexDirection={"row"}
                                    justifyContent={"space-between"}
                                >
                                    <Flex
                                        flexDirection={"column"}>
                                        <Text style={{ fontSize: "12px" }}>Own your vehicle by paying-off remaining</Text>
                                        <Text fontWeight={"700"}>$32,730.39</Text>
                                    </Flex>
                                    <Flex justifyContent={"center"} alignContent={"center"}>
                                        <Text style={{ fontSize: "12px", alignItems: "center", display: "inline-flex" }}>Click here to payoff your vehicle</Text>
                                        <Icon style={{ fontSize: "30px" }} icon="arrow_circle_right" onClick={() => { navigate("/payoffform") }}></Icon>
                                    </Flex>
                                </Flex>
                            </Card>
                            <Text><span style={{ color: 'red' }}>TO ENSURE PROPER HANDLING OF YOUR PAYOFF, PLEASE READ THIS LETTER IN ITS ENTIRETY.</span> Thank you for your payoff inquiry regarding the above account number. The payoff amount on this account is listed below and will remain the same until the Payoff Good To Date listed below.</Text>
                            <ul>
                                <li><Text>For customers with vehicles titled in the following states, AZ, CT, FL, HI, ID, ME, MI, MS, NV, NJ, NY, TN, WA-State, defi Financial Services is required to collect and remit sales tax, which is included in the payoff amount, to the state directly.                  </Text></li>
                                <li><Text>For customers with vehicles not titled in one of the states listed above, please contact your local taxing authority or DMV for instruction on sales tax remittance, amounts, and other sales tax related questions.</Text></li>
                                <li><Text>defi Financial Services is unable to provide tax advice regarding vehicle sales to a third party. Please contact your local taxing authority or tax advisor for advice regarding these types of transactions.</Text></li>
                            </ul>
                            <Table sticky="none">
                                <tbody>
                                    <tr>
                                        <td>
                                            Effective Date:
                                        </td>
                                        <td>
                                            05/09/2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Good To Date:
                                        </td>
                                        <td>
                                            06/09/2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Total Payoff Amount:
                                        </td>
                                        <td>
                                            $32,730.39
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Misc. Charges:
                                        </td>
                                        <td>
                                            $50.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Late Charges:
                                        </td>
                                        <td>
                                            $100.00
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Text>
                                In the event that your payoff is received after the Payoff Good To Date, defi Financial Services will advise you of the remaining balance due in order to pay off the account. Your final balance may be affected by other factors including any subsequent payments received by us and any adjustments or charges accrued after the date of this letter.
                            </Text>
                            <h6><Text>Steps to Pay off Your Account</Text></h6>
                            <Text>
                                Should you elect to pay off your account with defi Financial Services, please remit the payoff, referencing your account number, along with any instructions to:
                            </Text>
                            <Flex flexDirection={"column"} alignContent={"center"} justifyContent={"center"} width={"100%"}>
                                <Text style={{ fontWeight: "700" }}>defi Payment Center</Text>
                                <Text style={{ fontWeight: "700" }}>1000 Continental Drive</Text>
                                <Text style={{ fontWeight: "700" }}>King of Prussia, PA 19406</Text>
                            </Flex>
                            <Text>With your payoff, please include the following:</Text>
                            <ul>
                                <li><Text>Completed, signed and dated Odometer Statement.</Text></li>
                                <li><Text>Payoff instructions (if applicable).</Text></li>
                            </ul>
                            <Text>defi Financial Services will release and reassign the title to all parties present on the original Lease Agreement. Please review your Agreement for additional clarification.<b> Upon receipt of your title, please contact your local taxing authority or DMV to re-title/re-register your vehicle. PLEASE NOTE: for vehicles titled and/or registered in the states of Connecticut, Massachusetts, New Jersey or North Carolina.</b></Text><br />
                            <Text>Please note: if using certified funds to pay off your account, the title and/or lien will be released within three business days. If the funds are <b>not</b> certified, the title and/or lien will be held for <b>ten business days</b> prior to its release. All titles and/or liens are sent regular mail unless written instructions are received with the payoff and you provide an overnight carrier name and account number.</Text><br />
                            <Text>Thank you for partnering with defi Financial Services. We value your business and are committed to providing an exceptional level of service. If you have any questions or require further information, please contact the Customer Service Department via phone at 1-800-555-1212 or fax 1- 800-555-1213.</Text><br />
                            <Text>Sincerely,</Text><br />
                            <Text>defi Financial Services</Text><br />


                        </Layout>
                    </GridItem>
                    <GridItem>
                        <SidebarRouting id="RP" />
                    </GridItem>
                </Grid>
            </Card>
            <FooterLayout />
        </StyleProvider>
        </div>
    )
}

export default RequestPayoff