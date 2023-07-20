import { Box, Breadcrumb, Button, Card, Divider, Flex, Grid, GridItem, Icon, Layout, Select, Table, TableRow, Text } from '@repay/saguaro-web'
import React from 'react'
import HeaderBar from './HeaderBar'
import { Link, useNavigate } from 'react-router-dom'
import SidebarRouting from './SidebarRouting'
import FooterLayout from './FooterLayout'

const Amortization = () => {
    const navigate = useNavigate()
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
                >            <Button
                    style={{
                        color: "white"
                    }}
                    data-state="active"
                    status="default"
                    fontSize="body"
                    variant="text"
                    onClick={() => { navigate("/makearequest") }}
                >Back
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
                    <Breadcrumb.Item as={Link} children="Amortization Schedule" to="/amortization" />
                </Breadcrumb>
            </div>
            <Card>
                <Grid cols={2}>
                    <GridItem >
                        <h6>Amortization Schedule Request</h6>
                        <Text>This is Amortization Schedule you requested which provides a schedule of amounts applied to interest and principal balance reduction for each payment received to date. For future months, the schedule assumes all payments are posted to your account on the due date for the exact amount due.</Text>
                        <Card>
                            <Text>This is based on your original contract information.</Text>
                            <Grid cols={4} padding="10px">
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Contract Date</label><Text>08/09/2022</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Term</label><Text>63</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>APR</label><Text>0.900000000%</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Payment Amount</label><Text>$483.84</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Amount Financed</label><Text>$29,726.46</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Original Finance Charge</label><Text>$730.26</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Note Amount</label><Text>$30,456.72</Text></Flex></GridItem>
                                <GridItem></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Year</label><Text>2020</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Make</label><Text>MAZDA</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>Model</label><Text>CX-5 AWD</Text></Flex></GridItem>
                                <GridItem><Flex flexDirection={"column"}><label style={{ fontSize: "12px" }}>VIN</label><Text>JM3KFBAY6L0754281</Text></Flex></GridItem>
                            </Grid>
                        </Card>
                        <Flex justifyContent={"space-between"}>
                            <Text style={{ fontWeight: "600" }}>Complete Amortization Schedule Details</Text>
                            <span>
                                <Icon style={{ fontSize: "20px", marginRight: "10px", display: "inline-flex", justifyContent: "center" }} icon="print"></Icon>
                                <Icon style={{ fontSize: "20px", display: "inline-flex", justifyContent: "flex-end" }} icon="cloud_download"></Icon>
                            </span>
                        </Flex>
                        <Table width="100%" sticky="none">
                            <thead>
                                <TableRow>
                                    <th>Effective Date</th>
                                    <th>End Date</th>
                                    <th>Principal Balance</th>
                                    <th>Interest Amount</th>
                                    <th>Interest Days</th>
                                    <th>Interest Rate</th>
                                    <th>Interest Year Days</th>
                                </TableRow>
                            </thead>
                            <tbody style={{ textAlign: "center" }}>
                                <TableRow>
                                    <td>08/11/2022</td>
                                    <td>08/25/2022</td>
                                    <td>$27,369.90</td>
                                    <td>$280.28</td>
                                    <td>44</td>
                                    <td>8,500</td>
                                    <td>365</td>
                                </TableRow>
                                <TableRow>
                                    <td>08/11/2022</td>
                                    <td>08/25/2022</td>
                                    <td>$27,369.90</td>
                                    <td>$280.28</td>
                                    <td>44</td>
                                    <td>8,500</td>
                                    <td>365</td>
                                </TableRow>
                                <TableRow>
                                    <td>08/11/2022</td>
                                    <td>08/25/2022</td>
                                    <td>$27,369.90</td>
                                    <td>$280.28</td>
                                    <td>44</td>
                                    <td>8,500</td>
                                    <td>365</td>
                                </TableRow>
                            </tbody>
                        </Table>
                        <Button variant="text" onClick={() => { navigate("/makearequest") }}>Back</Button>

                    </GridItem>
                    <GridItem>
                        <SidebarRouting id="MR" />
                    </GridItem>
                </Grid>
            </Card>
            <FooterLayout />
        </div>
    )
}

export default Amortization