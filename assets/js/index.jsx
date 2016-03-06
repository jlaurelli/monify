"use strict";

require("bootstrap-loader");
var React = require("react");
var ReactDOM = require("react-dom");

var InvestmentsDetails = require("./investmentsdetails");
var PortfolioDetails = require("./portfoliodetails");


var Dashboard = React.createClass({
    getInitialState: function() {
        return {
            investments: [
                {
                    symbol: "GOOG",
                    name: "Google",
                    current_price: 123.45,
                    change: "+0.02%"
                },
                {
                    symbol: "FAKE",
                    name: "FakePlace",
                    current_price: 678.90,
                    change: "-0.04%"
                }
            ]
        };
    },
    logout: function(evt) {
        evt.preventDefault();
        console.debug("logging out");
    },
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="user-controls"
                         className="pull-right">
                         <button id="logout-btn"
                                 className="btn btn-warning"
                                 onClick={this.logout}>Logout
                         </button>
                    </div>
                </div>
                <div className="row">
                    <InvestmentsDetails investments={this.state.investments}
                    />
                    <PortfolioDetails />
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Dashboard />, document.getElementById("react-app"));
