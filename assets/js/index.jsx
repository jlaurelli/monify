"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./app");


var InvestmentList = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Your Investments:</h2>
                <ul id="investments-list"></ul>
            </div>
        );
    }
});

var PortfolioDetails = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Your Porfolio Performance:</h1>
                <div></div>
            </div>
        );
    }
});

var Dashboard = React.createClass({
    render: function() {
        return (
            <div>
                <InvestmentList />
                <PortfolioDetails />
            </div>
        );
    }
});

ReactDOM.render(<Dashboard />, document.getElementById("react-app"));
