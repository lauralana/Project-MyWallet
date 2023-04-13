import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteInfo, editInfo } from '../redux/actions';
import { UilEditAlt, UilTrashAlt } from '@iconscout/react-unicons'

class Table extends Component {
  render() {
    const { wallet, propsDeleteInfo, propsEditInfo } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Editar/Excluir</th>
            {/* <th style={ { width: '150px' } }>Descrição</th>
            <th style={ { width: '150px' } }>Categoria</th>
            <th style={ { width: '100px' } }>Método de pagamento</th>
            <th style={ { width: '100px' } }>Valor</th>
            <th style={ { width: '50px' } }>Moeda</th>
            <th style={ { width: '80px' } }>Câmbio utilizado</th>
            <th style={ { width: '100px' } }>Valor convertido</th>
            <th style={ { width: '100px' } }>Editar/Excluir </th> */}
          </tr>
        </thead>
        <tbody className="table-body">
          {wallet.expenses.map((expense) => (
            <tr key={ expense.id }>
              <td style={ { maxWidth: '150px' } }>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td style={ { maxWidth: '100px' } }>{ Number(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].code}</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td style={ { maxWidth: '100px' } }>
                { (Number(expense.value)
              * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}

              </td>
              {/* os elementos abaixo funcionam como btn */}
              <td className='btn-icons'>
                  <UilEditAlt 
                  onClick={ () => propsEditInfo(expense.id) }
                  />

                  <UilTrashAlt 
                   onClick={ () => propsDeleteInfo(expense.id) }
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  propsDeleteInfo: PropTypes.func.isRequired,
  propsEditInfo: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  propsDeleteInfo: (value) => dispatch(deleteInfo(value)),
  propsEditInfo: (value) => dispatch(editInfo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
