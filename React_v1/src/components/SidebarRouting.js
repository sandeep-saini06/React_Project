import { Card, Icon, Sidebar } from '@repay/saguaro-web'
import React from 'react'
import { Link } from 'react-router-dom'

const SidebarRouting = ({ id }) => {
    const links = [
        {
            label: 'Account Details',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/details",
            active: id === 'AD' ? true : false,
        },
        {
            label: 'Payment history',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/paymenthistory",
            active: id === 'PH' ? true : false,

        },
        {
            label: 'Statements',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/statement",
            active: id === 'ST' ? true : false,

        }, {
            label: 'Request Payoff',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/payoff",
            active: id === 'RP' ? true : false,

        }, {
            label: 'One Time Payment',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/payment",
            active: id === 'OT' ? true : false,

        }, {
            label: 'Auto Pay Enrollment',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/autopay",
            active: id === 'AP' ? true : false,

        }, {
            label: 'Make a Request',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/makearequest",
            active: id === 'MR' ? true : false,

        }, {
            label: 'My Information',
            icon: <Icon icon="request_quote" fontSize="h6" type="outlined" />,
            as: Link,
            to: "/information",
            active: id === 'IN' ? true : false,
        }
    ]
    return (
        <div style={{ marginLeft: '40%' }}>
            <Sidebar
                style={{ overflow: "hidden", borderLeft: "groove" }}
                links={links} />
        </div>
    )
}

export default SidebarRouting