import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTableHeader() {
        let header = Object.keys(this.props.data[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    }

    renderTableData() {
        return this.props.data.map((voter, index) => {
            const {id, candidate, date } = voter;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{candidate}</td>
                    <td>{date}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table id="voters">
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;