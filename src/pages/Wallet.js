import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import '../style/wallet.css';
import {
  UilGithub,
  UilLinkedin,
  UilWallet,
} from '@iconscout/react-unicons';


class Wallet extends React.Component {
  render() {
    return (
      <div className="all-info">
        <section className="logo-clientInfo">
          <div className="p">
          <p className="logo">MyWallet</p>
          <p className="walletIcon"> <UilWallet size={50}/> </p> 
          </div>
          <div className="walletHeader">
            <Header />
          </div>
        </section>
        <section className="option-table">
          <div className='div-form'>
            <WalletForm />
          </div>
          <div className='div-table'>
            <Table />
          </div>
        </section>
        <footer>
        <p> - Desenvolvido por: Laura Lana </p> 
          <a href="https://github.com/lauralana" target="blanck" name="gitm" id="gitm" className="flex"> 
             <UilGithub size={18} /> 
          </a> 
          <a href="https://www.linkedin.com/in/laura-lana/" target="blanck" name="gitm" id="gitm" className="flex"> 
             <UilLinkedin size={18} /> 
          </a>
        </footer>
      </div>
    );
  }
}

export default Wallet;
