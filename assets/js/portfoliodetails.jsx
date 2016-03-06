"use strict";

var React = require("react");


var PortfolioChart = React.createClass({
    render: function() {
        return (
            <img height="500px"
                 width="500px"
                 style={{border: "black solid 1px"}}
                 alt="PLACEHOLDER CHART">
            </img>
        );
    }
});


var PortfolioDetails = React.createClass({
    render: function() {
        return (
            <section className="col-lg-8">
                <h1>Your Porfolio Performance:</h1>
                <div>
                    <PortfolioChart />
                </div>
            </section>
        );
    }
});

module.exports = PortfolioDetails;
