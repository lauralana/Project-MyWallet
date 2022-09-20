import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa a página de Login', () => {
  it('Verifica se a aplicação contém um campo de input para e-mail', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input')
    expect(inputEmail).toBeInTheDocument();
  });

  it('Verifica se a aplicação contém um campo de input para senha', () => {
    renderWithRouterAndRedux(<App />);
    const inputPassword = screen.getByTestId('password-input')
    expect(inputPassword).toBeInTheDocument();
  });
  it('Verifica se a aplicação contém um botão com o texto Entrar', () => {
    renderWithRouterAndRedux(<App />);
    const btnSingIn = screen.getByRole('button', { name: /entrar/i })
    expect(btnSingIn).toBeInTheDocument();
  });

  it('Verifica se a aplicação é redirecionada para my wallet', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input')
    userEvent.type(inputEmail, 'tribywallet@trybe.com');
    const inputPassword = screen.getByTestId('password-input')
    userEvent.type(inputPassword, 'trybewallet');
    userEvent.click(screen.getByRole('button'))

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });

  it('Verifica se o botão é habilitado ao preencher os campos de input', () => {
    renderWithRouterAndRedux(<App />);
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
    const inputEmail = screen.getByTestId('email-input')
    userEvent.type(inputEmail, 'tribywallet@trybe.com');
    const verify1 = emailValidation.test(inputEmail.value);
    expect(verify1).toBeDisabled
    const inputPassword = screen.getByTestId('password-input')
    userEvent.type(inputPassword, 'trybewallet');
    const btnSingIn = screen.getByRole('button', { name: /entrar/i })
    expect(btnSingIn).not.toBeDisabled();
    userEvent.click(btnSingIn)
  });
});
