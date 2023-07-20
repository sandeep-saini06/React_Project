import React, { useState } from 'react'
import { Avatar, Box, Breadcrumb, Button, Card, Divider, Field, Footer, Grid, GridItem, Icon, Layout, Modal, Notification, Sidebar, TabList, Text, TextInput, TitleBar, Tooltip } from '@repay/saguaro-web';
import Fotter from './FooterLayout';
import { useNavigate,Link } from 'react-router-dom';
import Onboarding from './Onboarding';
import HeaderBar from './HeaderBar';
import FooterLayout from './FooterLayout';
const DefiScreen = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/details');
    const [modalOpen, setModalOpen] = useState(false)
    const [onboardGuide, setOnboardGuide] = useState(false)
    const [closeNotification, setCloseNotification] = useState(true)
    const [active, setActive] = React.useState('uno')

    const loanAccounts = [
        {
            "vehicle": "2023 Toyota Camri",
            "status": "Acc..2324(Active Retail)",
            "next_due_payment": "4000",
            "next_due_date": "07/04/2023",
            "last_paid_amount": "2000",
            "last_paid_date": "04/06/2023",
        },
        {
            "vehicle": "2023 Nissan Altima",
            "status": "Acc..5342(Active Retail)",
            "next_due_payment": "7000",
            "next_due_date": "06/05/2023",
            "last_paid_amount": "3000",
            "last_paid_date": "03/07/2023",
        }
    ]
    const links = [
        {
          label: 'Payment history',
          icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
          as: Link,
          to: "/paymenthistory"
        },
        {
          label: 'Accounts',
          icon: <Icon icon="account_balance_wallet" fontSize="h6" type="outlined" />,
          active: true,
          as: Link,
          to:"/"
        },
        {
          label: 'Scheduled payments',
          icon: 'event_available',
          as: Link,
          to:"autopay"
        },
      ]
    console.log(loanAccounts)

    return (
        <div className='footer-direction'>
            <HeaderBar activeTab="Accounts"/>
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
                <div style={{
                    marginLeft: "20%",
                    alignSelf: "center"
                }}>
                    <Text
                        color="white"
                        fontSize="bold"
                        fontStyle="plain"
                        margin="xs"
                    >
                        Accounts
                    </Text>
                </div>
                <Avatar
                    marginLeft={'60%'}
                    icon={<Icon icon="person"/>}
                    label="Hershell Jewess"
                />

            </Box>
         { closeNotification && <Box
                backgroundColor="red"
                borderColor="white"
                borderRadius="none"
                borderStyle="solid"
                borderWidth="2px"
                color="white"
                display="inline-flex"
                fontSize="small"
                height=""
                maxHeight=""
                maxWidth="100%"
                minHeight="10px"
                padding="10px"
                position="relative"
                width="100%"
            >
                <div style={{
                    marginLeft: "20%",
                    alignSelf: "center"
                }}>
                    <Text
                        color="white"
                        fontSize="bold"
                        fontStyle="plain"
                        margin="xs"
                    >
                        You have a new notification.
                    </Text>
                    <Button
                        data-state="active"
                        status="default"
                        variant="text"
                        fontSize="small"
                        onClick={() => {navigate("/onboard") }}
                    >
                        Click here
                    </Button>
                   to see account information</div>
                <div style={{
                    position: "relative",
                    left: "3%",
                    top: "8px"
                }}> <Icon
                        as="button"
                        color="white"
                        data-state="default"
                        fill
                        fontSize="small"
                        icon="cancel"
                        lineHeight={1}
                        type="rounded"
                        onClick={()=>{setCloseNotification(false)}}
                    />
                  </div>

            </Box>}
            <div style={{marginLeft:"1%", marginTop:"1%"}}>   
                <Breadcrumb>
                    <Breadcrumb.Item
                        as={Link} 
                        children="Accounts" 
                        to="/" 
                        />
                </Breadcrumb>
            </div>
            <Grid
                cols={3}
            >
                {loanAccounts.map((items,key) => {
                    return (<Card
                        maxWidth="100%"
                        shadow="hoverfocus"
                        size="lg"
                        padding="10px"
                        key={key}
                    >
                        <Grid
                            cols={2}
                            rows={4}
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
                                <Link
                                    to={{
                                        pathname: "/details",
                                        state: {items}
                                    }}
                                >View details</Link>
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
                                style={{ backgroundColor: '#e0a116'}}
                                    status="default"
                                    variant="standard"
                                    color='yellow'
                                    marginTop='30px'
                                    onClick={()=>(navigate('/payment'))}
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
                        <Grid
                            cols={1}
                            rows={1}
                        >
                            <Text
                                color="grey"
                                fontSize="small"
                                fontStyle="italic"
                                margin="xs"
                            >
                                *The amount and date are subject to change
                            </Text>
                        </Grid>
                    </Card>
                    )
                })}
                <GridItem >   <Card
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
                </Card></GridItem>
            </Grid>
            <FooterLayout />
        </div>
    )
}

export default DefiScreen