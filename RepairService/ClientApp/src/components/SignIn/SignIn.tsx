import * as React from "react";
import { connect } from "react-redux";
import axios from "axios";

export interface IAppProps {}

class SignIn extends React.Component<IAppProps> {
  state = {
    email: "",
    passw: "",
    role: ""
  };

  _submitHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      let response = axios.post("", {
        email: this.state.email,
        passw: this.state.passw,
        role: this.state.role
      });
    } catch (err) {
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
            type="password"
            id="email"
            name="email"
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
          Войти{" "}
        </button>
      </form>
    );
  }
}

export default connect()(SignIn);
