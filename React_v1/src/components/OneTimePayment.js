import { Box, Breadcrumb, Button, Card, Divider, Grid, GridItem, Icon, RadioButton, Range, Select, Text, TextInput } from '@repay/saguaro-web'
import React, { Fragment, useState } from 'react'
import HeaderBar from './HeaderBar'
import SidebarRouting from './SidebarRouting'
import { Link, useNavigate } from 'react-router-dom'
import { RadioButtonGroup } from '@repay/saguaro-web/dist/Components/RadioButton/Group'
import FooterLayout from './FooterLayout'

const OneTimePayment = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState(true);

    const loanaccountdetails = [
        {
            "vehicle": "2023 Hyundai Creta",
            "status": "Acc..2324(Active Retail)",
            "next_due_payment": "4000",
            "next_due_date": "07/04/2023",
            "last_paid_amount": "2000",
            "last_paid_date": "04/06/2023",
        }
    ]
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
                        onClick={() => { navigate("/") }}
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
                        One Time Payment
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
                    <Breadcrumb.Item as={Link} children="One Time Payment" to="/payment" />
                </Breadcrumb>
            </div>
            <Card padding="10px">
                <Grid
                    cols={2}
                    rows={1}
                >
                    <GridItem  >
                        <Select
                            defaultValue="Pending payment"
                            options={["Pending payment", "others"]}>
                        </Select>
                        <Grid
                            cols={2}
                        >
                            <GridItem >
                                <input defaultValue='2023-08-05' type="date" id="payment" name="Payment date" style={{ marginTop: "20px" }} />
                                <Grid
                                    cols={1}
                                    rows={1}
                                >
                                    <Text
                                        color="grey"
                                        fontSize="small"
                                        fontStyle="plain"
                                        margin="xs"
                                    >
                                        Date must be between 04/08/2023 to
                                        05/08/2023
                                    </Text>
                                </Grid>
                            </GridItem>
                            <GridItem>
                            </GridItem>
                            <GridItem >
                                <Text
                                    color="grey"
                                    fontSize="small"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    Amount
                                </Text>
                                <Divider />
                                <RadioButtonGroup name="radio">
                                    <RadioButton
                                        label="$523.33 (Current Due)"
                                        value="$523.33"
                                    />
                                    <RadioButton
                                        label="$other amount (Recurring pay)"
                                        value="$other amount Recurring pay"
                                    />
                                </RadioButtonGroup>

                                <Card
                                    padding="10px"
                                    width="400px"
                                    display="grid">
                                    <div style={{
                                        alignSelf: "center",
                                        display: "flex"
                                    }}>
                                        <Box
                                            backgroundColor={paymentMethod ? "gray" : "silver"}
                                            borderColor="white"
                                            borderRadius="none"
                                            borderStyle="solid"
                                            borderWidth="2px"
                                            color={paymentMethod ? "white" : "gray"}
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
                                                    backgroundColor: paymentMethod ? "gray" : "silver",
                                                    color: paymentMethod ? "white" : "gray"
                                                }}
                                                status="default"
                                                variant="text"
                                                onClick={() => (setPaymentMethod(true))}
                                            > Pay by Bank
                                            </Button>
                                        </Box>
                                        <Box
                                            backgroundColor={!paymentMethod ? "gray" : "silver"}
                                            borderColor="white"
                                            borderRadius="none"
                                            borderStyle="solid"
                                            borderWidth="2px"
                                            color={!paymentMethod ? "white" : "gray"}
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
                                                    backgroundColor: !paymentMethod ? "gray" : "silver",
                                                    color: !paymentMethod ? "white" : "gray"
                                                }}
                                                status="default"
                                                variant="text"
                                                onClick={() => (setPaymentMethod(false))}
                                            > Pay by Debit card
                                            </Button>
                                        </Box>
                                    </div>
                                    {paymentMethod ? <RadioButtonGroup margin="20px" label="Select wallet item for payment" name="radio">
                                        <RadioButton
                                            label="Bank Account 2131897123"
                                            value="Bank Account 2131897123"
                                            id='bank1'
                                        />
                                        <Divider />
                                        <RadioButton
                                            label="Bank Account 2131234123"
                                            value="Bank Account 2131234123"
                                            id='bank2'
                                        />
                                        <Divider />

                                        <RadioButton
                                            label="Bank Account 2131123123"
                                            value="Bank Account 2131123123"
                                            id='bank3'
                                        />
                                        <Divider />

                                        <RadioButton
                                            label="Bank Account 213112343"
                                            value="Bank Account 213112343"
                                            id='bank4'
                                        />
                                    </RadioButtonGroup> :
                                        <RadioButtonGroup label="Select wallet item for payment" name="radio" margin="20px">
                                            <RadioButton
                                                label="Debit card  2131897123"
                                                value="Debit card  2131897123"
                                            />
                                            <Divider />
                                            <RadioButton
                                                label="Debit card 2131234123"
                                                value="Debit card 2131234123"
                                            />
                                            <Divider />

                                            <RadioButton
                                                label="Debit card 2131123123"
                                                value="Debit card 2131234123"
                                            />
                                            <Divider />

                                            <RadioButton
                                                label="Debit card 213112343"
                                                value="Debit card 213112343"
                                            />
                                        </RadioButtonGroup>}
                                </Card>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem>
                        <div >
                            <SidebarRouting id="OT" />
                        </div>
                    </GridItem>
                    <GridItem>
                        <Grid
                            cols={1}>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="small"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    By clicking a "Submit a Payment" button you confirmed that you have reviewed and
                                    agree to the Terms and Conditions
                                </Text>
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="gray"
                                    fontSize="small"
                                    fontStyle="plain"
                                    margin="xs"
                                >
                                    Payment made after 3:00pm  Eastern standard time or outside of our normal operating hours
                                    will be applied on the following bussiness days
                                </Text>
                            </GridItem>
                            <GridItem>
                                <Button
                                    style={{ backgroundColor: 'blue' }}
                                    status="default"
                                    variant="standard"
                                >
                                    Submit a Payment
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
                </Grid>
            </Card>
            <FooterLayout />
        </div>
    )
}

export default OneTimePayment