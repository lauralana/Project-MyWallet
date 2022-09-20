import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { mockCurrencies, mockExpenses } from './helpers/mockData';
import { renderWithRouterAndRedux } from './helpers/renderWith';
const initialState = {
  wallet: {
    currencies: mockCurrencies,
    expenses: mockExpenses,
    editor: false,
    idToEdit: 0,
  }
}

describe('Testa o componente Header e Wallet Form', () => {
    it('Verifica se a aplicação renderiza o e-mail informado', () => {
        renderWithRouterAndRedux(<Wallet />);
      const emailInfo = screen.getByTestId('email-field')
      expect(emailInfo).toBeInTheDocument();
    });
  
    it('Verifica se a aplicação renderiza o valor total das despesas', () => {
        renderWithRouterAndRedux(<Wallet />);
        const totalExpenses = screen.getByTestId('total-field')
        expect(totalExpenses).toBeInTheDocument();
    });
    it('Verifica se a aplicação renderiza o nome da moeda de conversão', () => {
        renderWithRouterAndRedux(<Wallet />);
        const currency = screen.getByTestId('header-currency-field')
        expect(currency).toBeInTheDocument();
    });

    it('Verifica se a aplicação renderiza os inputs de valor e descrição', () => {
      renderWithRouterAndRedux(<Wallet/>);
      const value = screen.getByTestId('value-input')
      expect(value).toBeInTheDocument();
      const description = screen.getByTestId('description-input')
      expect(description).toBeInTheDocument();
      });

    it('Verifica se a aplicação renderiza os selects moeda, forma de pagamento e tag', () => {
        renderWithRouterAndRedux(<Wallet/>);
        const selectCurrency = screen.getByTestId('currency-input')
        expect(selectCurrency).toBeInTheDocument();
        const selectMethod = screen.getByTestId('method-input')
        expect(selectMethod).toBeInTheDocument();
        const selectTag = screen.getByTestId('tag-input')
        expect(selectTag).toBeInTheDocument();
    });

    it('Verifica se a aplicação contém o botão Adicionar despesa e funcionalidade', () => {
      renderWithRouterAndRedux(<Wallet/>);
      const btnAddExpense = screen.getByRole('button',{ name: /adicionar despesa/i })

      const value = screen.getByTestId('value-input')
      const description = screen.getByTestId('description-input')
      const selectCurrency = screen.getByTestId('currency-input')
      const selectMethod = screen.getByTestId('method-input')
      const selectTag = screen.getByTestId('tag-input')

      userEvent.type(value, "100")
      userEvent.type(description, "remédio")
      userEvent.selectOptions(selectCurrency, "JPY")
      userEvent.selectOptions(selectMethod, "cartão de débito")
      userEvent.selectOptions(selectTag, "Saúde")
      userEvent.click(btnAddExpense)
    });
  });
  