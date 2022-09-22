import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  UilUser
} from '@iconscout/react-unicons';

class Header extends Component {
  funcSumValue = () => {
    const { wallet } = this.props;
    const sumValue = wallet.expenses.reduce((acc, cur) => Number(acc)
    + (Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask)), 0);
    return sumValue.toFixed(2);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="header">
        <div class="p">
        <UilUser />
        <h4 data-testid="email-field">{ user.email }</h4>
        </div>
        <div className="headerValue">
          <span data-testid="total-field">{ this.funcSumValue() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    sumValue: PropTypes.number,
    expenses: PropTypes.arrayOf(),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Header);
