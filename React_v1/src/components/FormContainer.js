import { Button, Card, Field, Flex, Grid, GridItem } from '@repay/saguaro-web';
import React, { useState } from 'react';

const FormContainer = ({ fields, onSubmit, instructions }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (event, fieldName) => {
        setFormData({ ...formData, [fieldName]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <Card
            width="400px"
            shadow="hoverfocus"
            size="lg"
            padding={"30px"}
        >
            <h4>{instructions.label}</h4>
            <p>{instructions.details}</p>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <Field
                        key={field.name}
                        label={field.label}
                    >
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={(event) => handleChange(event, field.name)}
                        />
                    </Field>
                ))}
                <Grid
                    rows={2}
                    cols={1}
                    margin={"10px 0 10px 0"}
                >
                    <GridItem row={1} col={1}>
                        <Button style={{ width: "-webkit-fill-available" }} type="submit">Submit</Button>
                    </GridItem>
                    <Flex justifyContent="space-between">
                        <Flex row={1} col={1}><Button variant='outline'>Back</Button></Flex>
                        <Flex row={1} col={2}><Button variant='outline'>Cancel</Button></Flex>
                        <Flex row={1} col={3}><Button variant='outline'>Finish Later</Button></Flex>
                    </Flex>
                </Grid>
            </form>
        </Card>
    );
};

export default FormContainer;
