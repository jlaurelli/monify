"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./app");


var InvestmentListItem = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.investment.symbol}</td>
                <td>{this.props.investment.current_price}</td>
            </tr>
        );
    }
});

var InvestmentList = React.createClass({
    render: function() {
        var investmentEntries = this.props.investments.map(function(investment, index) {
            return <InvestmentListItem key={index + investment.symbol}
                                       investment={investment}
                    />;
        });
        return (
            <div className="col-lg-4">
                <h2>Your Investments:</h2>
                <table id="investments-list">
                    <thead>
                        <td>SYMBOL</td>
                        <td>CURRENT PRICE</td>
                    </thead>
                    <tbody>{investmentEntries}</tbody>
                </table>
            </div>
        );
    }
});

var PortfolioDetails = React.createClass({
    render: function() {
        return (
            <div className="col-lg-8">
                <h1>Your Porfolio Performance:</h1>
                <div></div>
            </div>
        );
    }
});

var Dashboard = React.createClass({
    render: function() {
        var mockData = {
            investments: [
                {
                    symbol: "GOOG",
                    name: "Google",
                    current_price: 123.45
                },
                {
                    symbol: "FAKE",
                    name: "FakePlace",
                    current_price: 678.90
                }
            ]
        };

        var investments = mockData.investments;
        return (
            <div>
                <InvestmentList investments={investments}
                />
                <PortfolioDetails />
            </div>
        );
    }
});

ReactDOM.render(<Dashboard />, document.getElementById("react-app"));
