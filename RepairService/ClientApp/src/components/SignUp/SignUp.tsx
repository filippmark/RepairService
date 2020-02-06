import * as React from "react";
import { connect } from "react-redux";
import * as SignUpStore from '../../store/SignUp';

type IAppProps = typeof SignUpStore.ActionCreators;

class SignUp extends React.Component<IAppProps> {

  state = {
    email: "",
    phone: "",
    password: "",
    password2: "",
    role: ""
  };

  _submitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.props.signUp({
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        role: this.state.role,
    });
  };

  _handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  public render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="email"> Адрес электронной почты</label>
            <input className="form-control" type="email" id="email" name="email" onChange={this._handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон</label> 
          <input type="tel" className="form-control" name="phone" onChange={this._handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form-control" id="password" name="password" onChange={this._handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Повторите пароль</label>
          <input type="password" className="form-control" id="password2" name="password2" onChange={this._handleChange}/>
        </div>
            <div>
                <div className="form-check form-check-inline">
                    <input type="radio" value="employer" name="role" className="form-check-input" id="employer" onChange={this._handleChange} />
                    <label className="form-check-label" htmlFor="employer">
                        В качестве работодателя
            </label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" value="builder" name="role" className="form-check-input" id="builder" onChange={this._handleChange} />
                    <label className="form-check-label" htmlFor="builder">
                        В качестве строителя
            </label>
                </div>
            </div>
        <button type="submit" className="btn btn-primary" onClick={this._submitHandler}>
          Зарегистрироваться
        </button>
      </form>
    );
  }
}

export default connect(
    null,
    SignUpStore.ActionCreators
    )(SignUp);