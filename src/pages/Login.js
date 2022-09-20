import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions';
import '../style/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
  }

  loginValidation = () => {
    const { email, password } = this.state;
    const num = 5;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
    // console.log(emailRegex.test(email));
    if (password.length > num && emailRegex.test(email)) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.loginValidation);
  }

  onHandleClick = () => {
    const { email } = this.state;
    const { propsUserLogin, history } = this.props;

    propsUserLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <div className="login">
        <h1>TrybeWallet</h1>
        <form className="form-login">
          {/* <label htmlFor="email">
            Email: */}
          <input
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={ email }
            onChange={ this.onHandleChange }
          />
          {/* </label> */}

          {/* <label htmlFor="pass">
            Senha: */}
          <input
            data-testid="password-input"
            type="password"
            id="pass"
            name="password"
            placeholder="password"
            value={ password }
            onChange={ this.onHandleChange }
          />
          {/* </label> */}

          <button
            type="button"
            disabled={ btnDisabled }
            onClick={ this.onHandleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  propsUserLogin: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  propsUserLogin: (login) => dispatch(userLogin(login)),
});

export default connect(null, mapDispatchToProps)(Login);
