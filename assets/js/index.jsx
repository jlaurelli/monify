"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var InvestmentList = require("./investmentslist");
var PortfolioDetails = require("./portfoliodetails");


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
