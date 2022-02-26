import React, { useEffect, useState } from 'react'
import { Table, Icon } from 'semantic-ui-react'
import axios from 'axios'

export default function Read() {

    const [apiData, setApiData] = useState([]);

    useEffect = () => {
        axios.get(`https://621379ddf43692c9c6062695.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }
    return (
        <div><Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {apiData.map((data) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell negative>None</Table.Cell>
                        </Table.Row>
                    )
                })}


            </Table.Body>
        </Table></div>
    )
}
