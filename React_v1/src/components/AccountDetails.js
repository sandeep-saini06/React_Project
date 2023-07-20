
import { Box, Breadcrumb, Button, Card, Divider, Field, Grid, GridItem, Icon, Layout, Modal, Range, Select, Sidebar, Text } from '@repay/saguaro-web';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SidebarRouting from './SidebarRouting';
import HeaderBar from './HeaderBar';
import FooterLayout from './FooterLayout';

const AccountDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false)
    const loanAccounts = [
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
                <Button
                    style={{
                        color: "white"
                    }}
                    data-state="active"
                    status="default"
                    fontSize="body"
                    variant="text"
                    onClick={() => { navigate("/") }}
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
                        Account details
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
                    <Breadcrumb.Item as={Link} children="Account Detail" to="/" />
                </Breadcrumb>
            </div>
            <Card padding="10px">

                <Grid
                    cols={3}
                    rows={1}
                >
                    <GridItem style={{ borderRight: "groove" }}>
                        {loanAccounts.map((items, key) => {

                            return (
                                <Grid
                                    cols={2}
                                    rows={4}
                                    key={key}
                                >
                                    <GridItem>
                                        {items.vehicle}
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
                                                {items.status}
                                            </Text>
                                        </Grid>

                                    </GridItem>
                                    <GridItem >
                                    </GridItem>
                                    <GridItem >
                                        <Text
                                            color="grey"
                                            fontSize="small"
                                            fontStyle="plain"
                                            margin="xs"
                                        >
                                            Next Due Payment Amount Date
                                        </Text>
                                        <Divider />
                                        <Text
                                            color="black"
                                            fontSize="small"
                                            fontStyle="bold"
                                            margin="md"
                                        >
                                            ${items.next_due_payment}
                                        </Text>

                                        <Divider />
                                        <Text
                                            color="grey"
                                            fontSize="small"
                                            fontStyle="plain"
                                            margin="xs"
                                        >
                                            {items.next_due_date}
                                        </Text>

                                    </GridItem>
                                    <GridItem>
                                        <Button
                                            style={{ backgroundColor: '#e0a116' }}
                                            status="default"
                                            variant="standard"
                                            color='black'
                                            marginTop='35px'
                                            onClick={() => (navigate("/payment"))}
                                        >
                                            Pay now
                                        </Button>
                                    </GridItem>
                                    <GridItem>
                                        <Text
                                            color="grey"
                                            fontSize="small"
                                            fontStyle="plain"
                                            margin="xs"
                                        >
                                            Last paid Amount and date
                                        </Text>
                                        <Divider />
                                        <Text
                                            color="black"
                                            fontSize="body"
                                            fontStyle="plain"
                                            margin="md"
                                        >
                                            ${items.last_paid_amount}
                                        </Text>
                                        <Divider />
                                        <Text
                                            color="grey"
                                            fontSize="small"
                                            fontStyle="plain"
                                            margin="xs"
                                        >
                                            {items.last_paid_date}
                                        </Text>
                                    </GridItem>
                                </Grid>
                            )
                        })}
                        <Grid
                            cols={1}>
                            <Text
                                color="grey"
                                fontSize="small"
                                fontStyle="italic"
                                margin="xs"
                            >
                                *The amount and date are subject to change
                            </Text>
                            <Button
                                data-state="active"
                                status="default"
                                fontSize="small"
                                variant="text"
                                onClick={() => { navigate("/") }}
                            >
                                Remove account from login
                            </Button>
                        </Grid>

                    </GridItem>
                    <GridItem  >
                        <Grid
                            cols={2}
                            rows={2}>
                            <GridItem>
                                <Text
                                    color="black"
                                    fontSize="body"
                                    fontStyle="plain"
                                    margin="md"
                                    fontWeight="bold"
                                >
                                    Started:
                                </Text>
                                03/05/2023
                            </GridItem>
                            <GridItem>
                                <Text
                                    color="black"
                                    fontSize="body"
                                    fontStyle="plain"
                                    fontWeight="bold"
                                    margin="md"
                                >
                                    Maturing:
                                </Text>
                                03/03/2027
                            </GridItem>

                        </Grid>
                        <Divider />
                        <div style={{ marginTop: "50px" }}>
                            <Box>
                                <Text
                                    color="black"
                                    fontSize="small"
                                    fontStyle="plain"
                                    margin="sm"
                                >
                                    Paid $4323.10 in 5 Months
                                </Text>
                                <form>
                                    <label htmlFor="range-component">
                                        <Range
                                            defaultValue="4323.10"
                                            max="10800.25"
                                            min="0"
                                            width="100%"
                                            disabled
                                        />
                                    </label>
                                </form>
                                <Text
                                    color="black"
                                    fontSize="small"
                                    fontStyle="plain"
                                    margin="sm"
                                >
                                    Remaining $10800.25 in 30 Months
                                </Text>
                            </Box>
                        </div>

                    </GridItem>
                    <GridItem>
                        <div>
                            <SidebarRouting id="AD" />
                        </div>
                    </GridItem>
                </Grid>

            </Card>
            <Card
                maxWidth="400px"
                shadow="hoverfocus"
                size="lg"
            >
                <Grid
                    cols={1}
                    rows={1}
                >
                    <Text
                        color="black"
                        fontSize="h6"
                        fontStyle="plain"
                        margin="md"
                    >
                        Add New Account
                    </Text>
                    <Icon
                        as="button"
                        color="blue"
                        data-state="focus"
                        fontSize="h1"
                        icon="add"
                        lineHeight={1}
                        type="rounded"
                        onClick={() => { setModalOpen(true) }}
                    />
                    <Modal
                        isOpen={modalOpen}
                        onClose={() => { setModalOpen(false) }}
                        title={<h6>Fill information</h6>}
                        variant="success"
                    >
                        <Box
                            colors="inverse"
                            minHeight="200px"
                            minWidth="200px"
                            backgroundColor="white"
                            color="black"
                        >
                            <Card
                                maxWidth="500px"
                                shadow="hoverfocus"
                                size="lg"
                                padding={"30px"}
                            >
                                <Field
                                    label="Enter your loan number."
                                    width="100%"
                                >
                                    <input placeholder='Answer' />
                                </Field>
                                <Field
                                    label="Enter dealer name."
                                    width="100%"
                                >
                                    <input placeholder='Answer' />
                                </Field>
                                <Field
                                    label="Type of loan."
                                    width="100%"
                                >
                                    <input placeholder='Answer' />
                                </Field>
                                <Field
                                    label="Enter loan date"
                                    width="100%"
                                >
                                    <input placeholder='Answer' />
                                </Field>
                                <Button >Submit</Button>
                            </Card>
                        </Box>
                    </Modal>

                </Grid>
            </Card>
            <FooterLayout />
        </div>
    )

}

export default AccountDetails