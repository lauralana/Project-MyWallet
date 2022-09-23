import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApi, getApiExpense, changedInfo } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      coin: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount = () => {
    const { currencies } = this.props;
    currencies();
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onHandleClick = () => {
    const { id, value, description, coin, payment, tag } = this.state;
    const { addExpenses } = this.props;
    this.setState((prev) => ({ id: prev.id + 1 }), () => {
      addExpenses({ id, value, description, currency: coin, method: payment, tag });
    });
    this.setState({ value: '', description: '' });
  }

  onClickChange = () => {
    const { value, description, coin, payment, tag } = this.state;
    const { updateInfo } = this.props;
    updateInfo({ value, description, currency: coin, method: payment, tag });
    this.setState({ value: '', description: '' });
  }

  render() {
    const { wallet } = this.props;
    const { currencies, editor } = wallet;
    const { value, description } = this.state;
    return (
        <form className="options">
          <p>Nova despesa</p>
          <label htmlFor="tag">
            Categoria:
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              onChange={ this.onHandleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              id="description"
              value={ description }
              name="description"
              type="text"
              onChange={ this.onHandleChange }
            />
          </label>

          <section className="value-coin">
            <label htmlFor="value">
              Valor:
              <input
                data-testid="value-input"
                id="value"
                value={ value }
                name="value"
                type="number"
                onChange={ this.onHandleChange }
              />
            </label>

            <label htmlFor="coin">
              Moeda:
              <select
                data-testid="currency-input"
                id="coin"
                name="coin"
                onChange={ this.onHandleChange }
              >
                {currencies.map((curr) => (
                  <option
                    key={ curr }
                  >
                    {curr}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <label htmlFor="payment">
            Forma de Pagamento:
            <select
              data-testid="method-input"
              id="payment"
              name="payment"
              onChange={ this.onHandleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          { editor ? (
            <button
              type="button"
              onClick={ this.onClickChange }
            >
              Editar despesa
            </button>
          ) : (
            <button
              type="button"
              onClick={ this.onHandleClick }
            >
              Adicionar despesa
            </button>
          ) }
        </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  updateInfo: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    editor: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(getApi()),
  addExpenses: (value) => dispatch(getApiExpense(value)),
  updateInfo: (value) => dispatch(changedInfo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

// feito com auxilio da Raynara Santiago 22/TA e Marcos Souza - 22/TB;
