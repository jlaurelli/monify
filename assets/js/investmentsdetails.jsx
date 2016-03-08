"use strict";

var React = require("react");


var AddInvestmentModal = React.createClass({
    addInvestment: function(evt) {
        evt.preventDefault();
        console.debug("Adding investment");
    },
    render: function() {
        return (
            <div id="add-investment-modal"
                 className="modal fade"
                 tabIndex="-1"
                 role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 id="add-investment-modal-title"
                                    className="modal-title">Add Investment</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Symbol</label>
                                    <input id="investment-symbol"
                                           className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal">Close</button>
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={this.addInvestment}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

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
    render: function() {
        return (
            <section className="col-lg-4">
                <h2>Investments:</h2>
                <button id="add-investment-btn"
                        className="btn btn-primary btn-sm btn-block"
                        data-toggle="modal"
                        data-target="#add-investment-modal">
                    <span className="glyphicon glyphicon-plus-sign"
                          aria-hidden="true"></span> Add Investment
                </button>
                <InvestmentsList investments={this.props.investments}
                />
                <AddInvestmentModal />
            </section>
        );
    }
});

module.exports = InvestmentsDetails;
