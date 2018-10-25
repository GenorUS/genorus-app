import React from 'react';

export const Table = (props) => (
    <table className="table">
        <thead className="table-dark">
            <tr>
                <th scopt="col">#</th>
                <th scopt="col">Application</th>
                <th scopt="col">Scholarship</th>
                <th scopt="col">Company</th>
            </tr>
        </thead>
            {props.children}
    </table>
);