"use strict";

var React = require("react");


var InvestmentsListItem = React.createClass({
    deleteInvestment: function(evt) {
        evt.preventDefault();
        console.debug("Deleting investment");
    },
    render: function() {
        return (
            <tr>
                <td>{this.props.investment.symbol}</td>
                <td>{this.props.investment.current_price}</td>
                <td>{this.props.investment.change}</td>
                <td>
                    <button className="btn btn-danger btn-xs"
                            aria-label="Delete investment"
                            onClick={this.deleteInvestment}>
                        <span className="glyphicon glyphicon-trash"
                              aria-hidden="true"></span>
                    </button>
                </td>
            </tr>
        );
    }
});

var InvestmentsList = React.createClass({
    render: function() {
        var investmentsItems = this.props.investments.map(function(investment, index) {
            return <InvestmentsListItem key={index + investment.symbol}
                                        investment={investment}
                    />;
        });
        return (
            <table id="investments-list"
                   className="table table-hover"
            >
                <thead>
                    <tr>
                        <td>SYMBOL</td>
                        <td>CURRENT PRICE</td>
                        <td>CHANGE</td>
                    </tr>
                </thead>
                <tbody>{investmentsItems}</tbody>
            </table>
        );
    }
});

var InvestmentsDetails = React.createClass({
    addInvestment: function(evt) {
        evt.preventDefault();
        console.debug("Adding investment");
    },
    render: function() {
        return (
            <section className="col-lg-4">
                <h2>Your Investments:</h2>
                <button id="add-investment-btn"
                        className="btn btn-primary btn-sm btn-block"
                        onClick={this.addInvestment}>
                    <span className="glyphicon glyphicon-plus-sign"
                          aria-hidden="true"></span> Add Investment
                </button>
                <InvestmentsList investments={this.props.investments}
                />
            </section>
        );
    }
});

module.exports = InvestmentsDetails;
