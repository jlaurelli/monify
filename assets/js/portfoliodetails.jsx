"use strict";

var React = require("react");

var PortfolioChart = require("./portfoliochart");


var PortfolioDetails = React.createClass({
    render: function() {
        return (
            <section className="col-lg-8">
                <h2>Porfolio:</h2>
                <div className="panel panel-default">
                <div className="panel-heading">
                     <h3 className="panel-title">Recent Porfolio Performance</h3>
                </div>
                    <div className="panel-body">
                        <PortfolioChart />
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = PortfolioDetails;
