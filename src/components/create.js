import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(firstName);
    console.log(lastName);

    const sendData = () => {
        axios.post(`https://621379ddf43692c9c6062695.mockapi.io/crud`, {
            firstName, lastName
        })
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name="lname" onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
                </Form.Field>
                {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field> */}
                <Button onClick={sendData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}


