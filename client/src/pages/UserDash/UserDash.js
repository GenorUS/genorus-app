import React, {Component} from 'react';
import Router from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Table, TableRow} from './dashComponents';
import JWT from '../../utils/Auth';
import DBAPI from '../../utils/DBAPI';
import './css/mainDash.css';
import Logout from "../../utils/logout";


export default class UserDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JWT.getJWT(),
            appData: []
        }

    }

    componentWillMount() {
        DBAPI.getUserApplications(this.state.user.id)
            .then(data => {
                this.setState({appData: data.data});
                console.log(this.state.appData);
            });
        // .catch(err => console.log(err));
    }

    deleteApplication(e) {
        e.preventDefault();
        console.log(e.currentTarget.value);
        DBAPI.deleteApplication(e.currentTarget.value)
            .then(data => {
                if(data){
                   window.location.reload();
                }

            })
            .catch(err => {
                console.log(err)
            })
    }

    logout() {
        Logout.logout();
    }

    render() {
        return (
            <div>
                <section id="sideMenu">
                    <h1>{this.state.user.username}</h1>
                    <nav>
                        <a href="/"><i className="fas fa-home"></i>About Us</a>
                        <a href="/scholarship"><i className="fas fa-cog"></i> Available Scholarships</a>
                        <a href="/" onClick={this.logout}><i className="far fa-sign-out"></i> Logout</a>
                    </nav>
                </section>
                <section id="content-area">
                    <div className="heading">
                        <h1>Dashboard</h1>
                        <p>Welcome, {this.state.user.firstname}</p>
                    </div>
                    <hr/>
                    <Table>
                        <TableRow>
                            {this.state.appData.length !== 0 ? this.state.appData.map((r, i) => {
                                    return (
                                        <tr id={r.ScholarshipId} key={r.ScholarshipId}>
                                            <th scope="row">{i}</th>
                                            <td>
                                                <Link style={{color: "white"}}
                                                      to={`/scholarship/${r.Scholarship.Company.company_name}/${r.Scholarship.name}/${r.ScholarshipId}/${r.id}/view`}>
                                                    View {r.Scholarship.name} Application
                                                </Link>
                                            </td>
                                            <td>{r.Scholarship.name}</td>
                                            <td>{r.Scholarship.Company.company_name}</td>
                                            <td>
                                                <Link className="btn btn-success"
                                                      to={`/scholarship/${r.Scholarship.Company.company_name}/${r.Scholarship.name}/${r.ScholarshipId}/${r.id}/edit`}>
                                                    Edit
                                                </Link>
                                            </td>
                                            <td>
                                                <button value={r.id} className={"btn btn-danger"}
                                                        onClick={this.deleteApplication}>Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }) :
                                <div className="alert alert-danger" style={{width: "100%", marginTop: "20px"}}>You do
                                    not currently have any saved applications</div>}
                        </TableRow>
                    </Table>

                </section>
            </div>
        )
    }
}