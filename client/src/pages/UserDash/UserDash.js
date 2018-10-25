import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table, TableRow} from './dashComponents';
import JWT from '../../utils/Auth';
import './css/main.css';


export default class UserDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JWT.getJWT(),
            fakeData: [{
                scholId: 1,
                application: "testapp",
                scholarsip: "testScholarship",
                company: "testCompany"
            },
                {
                    scholId: 3,
                    application: "testapp",
                    scholarsip: "testScholarship",
                    company: "testCompany"
                },
                {
                    scholId: 4,
                    application: "testapp",
                    scholarsip: "testScholarship",
                    company: "testCompany"
                }]
        }

    }

    render() {
        return (
            <div>
                <section id="sideMenu">
                    <h1>Hello {this.state.user.name}</h1>
                </section>
                <section id="content-area">
                    <div className="heading">
                        <h1>Dashboard</h1>
                        <p>Welcome, {this.state.user.name}</p>
                    </div>
                    <hr />
                    <Table>
                        <TableRow>
                            {this.state.fakeData.map((r) =>  {
                                return (
                                    <tr key={r.scholId}>
                                        <th scope="row">{r.scholId}</th>
                                        <td >{r.application}</td>
                                        <td >{r.scholarsip}</td>
                                        <td >{r.company}</td>
                                    </tr>
                                )
                            })}
                        </TableRow>
                    </Table>

                </section>
            </div>
        )
    }
}