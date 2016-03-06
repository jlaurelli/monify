"use strict";

var React = require("react");


var InvestmentsListItem = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.investment.symbol}</td>
                <td>{this.props.investment.current_price}</td>
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
            <div>
                <h2>Your Investments:</h2>
                <table id="investments-list">
                    <thead>
                        <tr>
                            <td>SYMBOL</td>
                            <td>CURRENT PRICE</td>
                        </tr>
                    </thead>
                    <tbody>{investmentsItems}</tbody>
                </table>
            </div>
        );
    }
});

var InvestmentsDetails = React.createClass({
    render: function() {
        return (
            <div className="col-lg-4">
                <InvestmentsList investments={this.props.investments}
                />
            </div>
        );
    }
});

module.exports = InvestmentsDetails;
