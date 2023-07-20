import { Button, Card, Field, Flex, Footer, Icon, StyleProvider, Text, Timeline, TitleBar } from '@repay/saguaro-web'
import React, { useState } from 'react'
import FormContainer from './FormContainer';
import VerticalTimeline from './VerticalTimeline';
import HeaderBar from './HeaderBar';
import FooterLayout from './FooterLayout';

const Onboarding = () => {
    const steps = [
        {
            icon: 'counter_1',
            label: 'Set up Login Information',
            steps: [{
                icon: 'circle',
                label: 'Username & Password'
            },
            {
                icon: 'square',
                label: 'Security Questions'
            }]
        },
        {
            icon: 'counter_2',
            label: 'Set up Recurring Payment'
        },
        {
            icon: 'counter_3',
            label: 'Set up contact information',
            steps: [{
                icon: 'circle',
                label: 'Primary Borrower'
            },
            {
                icon: 'square',
                label: 'Secondary Borrower'
            }]
        },
        {
            icon: 'counter_4',
            label: 'Set up communication preferences',
            steps: [{
                icon: 'circle',
                label: 'Primary Borrower'
            },
            {
                icon: 'square',
                label: 'Secondary Borrower'
            }]
        }
    ];
    const [activeSteps, setActiveSteps] = useState(1);
    const fields = [
        { name: 'Dream Job', label: 'What was your dream job as a child?', type: 'text' },
        { name: 'Childhood Hero', label: 'Who was your childhood hero?', type: 'text' },
        { name: 'Best Friend', label: 'What is the name of your best friend?', type: 'text' },
        { name: 'Child Street', label: 'What street did you live on as a child?', type: 'text' },
    ];

    const instructions = {
        label: 'Instructions:',
        details: 'Enter your answers to security questions in case you ever need to reset your password.'
    }

    const fieldsAccount = [
        { name: 'Account Type', label: 'Account Type', type: 'select' },
        { name: 'Account Number', label: 'Account Number', type: 'text' },
        { name: 'Routing Number', label: 'Routing Number', type: 'text' },
        { name: 'Name on Account', label: 'Name on Account', type: 'text' },
        { name: 'Payment Amount', label: 'Payment Amount', type: 'number' },
    ];

    const instructionsAccount = {
        label: 'Instructions:',
        details: 'Enter your bank account information.'
    }

    const fieldsDetails = [
        { name: 'Name', label: 'Name', type: 'text' },
        { name: 'Email', label: 'Email', type: 'email' },
        { name: 'Home Phone', label: 'Home Phone', type: 'contact' },
        { name: 'Mobile Phone', label: 'Mobile Phone', type: 'contact' },
        { name: 'Street Address', label: 'Street Address', type: 'text' },
        { name: 'Apt/Suite', label: 'Apt/Suite', type: 'text' },
        { name: 'Country', label: 'Country', type: 'select' },
        { name: 'City', label: 'City', type: 'text' },
        { name: 'State', label: 'State', type: 'select' },
        { name: 'Zip Code', label: 'Zip Code', type: 'number' },
    ];

    const instructionDetails = {
        label: 'Instructions:',
        details: 'Enter primary borrower information.'
    }

    const handleSubmit = (formData) => {
        // Do something with the form data
        console.log(formData);
        setActiveSteps(activeSteps + 1);
    };

    return (
        <div className='footer-direction'>
        <StyleProvider>
            <HeaderBar activeTab="Accounts" />
            <h2>Welcome Username, Let's Get Started!</h2>
            <Flex justifyContent={"space-evenly"}>
                <Flex>
                    <VerticalTimeline
                        activeSteps={activeSteps}
                        steps={steps}
                    />
                </Flex>
                <Flex>
                    {
                        activeSteps === 1 && <FormContainer fields={fields} instructions={instructions} onSubmit={handleSubmit} />
                    }
                    {
                        activeSteps === 2 && <FormContainer fields={fieldsAccount} instructions={instructionsAccount} onSubmit={handleSubmit} />
                    }
                    {
                        activeSteps === 3 && <FormContainer fields={fieldsDetails} instructions={instructionDetails} onSubmit={handleSubmit} />
                    }
                    {
                        activeSteps === 4 && <FormContainer fields={fieldsDetails} instructions={instructionDetails} onSubmit={handleSubmit} />
                    }
                </Flex>
                <Flex flexDirection={"column"} maxWidth={"300px"}>
                    <Text><b>Congratulations</b> on your recent purchase!</Text>
                    <img style={{ height: "100px", flexBasis: "fit-content", mixBlendMode: "darken" }} src="data:image/jpeg;base64,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" alt="a"></img>
                    <Text><b>2019 Toyota Camry</b></Text>
                    <Text>Ac...5895(Active Retail)</Text>
                    <Flex marginTop={"20px"} flexWrap={"unset"}>
                        <Icon fontSize="40px" icon="calendar_month"></Icon>
                        <Text>Your next payment of <b>$402.69</b> is due on <b>04/08/2023</b>.</Text>
                    </Flex>

                </Flex>

            </Flex>
            <FooterLayout />
        </StyleProvider>
        </div>
    )
}

export default Onboarding