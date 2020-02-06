import * as React from "react";
import { connect } from "react-redux";
import * as SignInStore from '../../store/SignIn';

export type IAppProps = typeof SignInStore.ActionCreators;

class SignIn extends React.Component<IAppProps> {
  state = {
    email: "",
    password: "",
    role: ""
  };

  _submitHandler = async ( event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(this.state);
    this.props.signIn({
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
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
          <input className="form-control" type="email" id="email" name="email" onChange={this._handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form-control" id="password" name="password" onChange={this._handleChange}/>
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
        <button type="submit" className="form-group  btn btn-primary" onClick={this._submitHandler}>
            Войти
        </button>
      </form>
    );
  }
}

export default connect(
    null,
    SignInStore.ActionCreators
)(SignIn);
