import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import '../style/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="all-info">
        <div className="walletHeader">
          <Header />
        </div>
        <section className="option-table">
          <div>
            <WalletForm />
          </div>
          <div>
            <Table />
          </div>
        </section>
      </div>
    );
  }
}

export default Wallet;
