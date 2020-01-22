import * as React from "react";
import { connect } from "react-redux";
import axios from "axios";
import qs from 'qs';

export interface IAppProps {}

class SignUp extends React.Component<IAppProps> {

  state = {
    email: "",
    phone: "",
    passw: "",
    passw2: "",
    role: ""
  };

  _submitHandler =  (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
      try {
          console.log(this.state);
          let params = {
              Email: this.state.email,
              Password: this.state.passw,
          };
          let endpoint = this.state.role === 'employer' ? 'api/employer/signup' : 'api/builder/signup';
          let response = axios.post(endpoint, qs.stringify(params));
        console.log(response);
    }catch(err){
        console.log(err);
    }
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
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            onChange={this._handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            onChange={this._handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="passw"
            onChange={this._handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Повторите пароль</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="passw1"
            onChange={this._handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="radio"
            value="employer"
            name="role"
            className="form-check-input"
            id="employer"
            onChange={this._handleChange}
          />
          <label className="form-check-label" htmlFor="employer">
            {" "}
            В качестве работодателя
          </label>
        </div>
        <div className="form-group form-check">
          <input
            type="radio"
            value="builder"
            name="role"
            className="form-check-input"
            id="builder"
            onChange={this._handleChange}
          />
          <label className="form-check-label" htmlFor="builder">
            {" "}
            В качестве строителя
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this._submitHandler}
        >
          {" "}
          Зарегистрироваться{" "}
        </button>
      </form>
    );
  }
}

export default connect()(SignUp);