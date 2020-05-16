import React from "react";
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLengthCreator } from "./../../utils/validations";
import { Input } from "./../formsControl/FormsControl";
import style from "./login.module.css";

const passWordmaxLength10 = maxLengthCreator(10);
const loginMaxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="password"
          component={Input}
          placeholder="password"
          type="password"
          validate={[requiredField, passWordmaxLength10]}
          className={style.auth}
        />
        <br />
      </div>
      <div>
        <Field
          name="login"
          component={Input}
          placeholder="login"
          type="text"
          validate={[requiredField, loginMaxLength30]}
          className={style.auth}
        />
        <br />
      </div>
      <div>
        <Field name="checkbox" component="input" type="checkbox" />
        <br />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onFormSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={style.loginContainer}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onFormSubmit} />
    </div>
  );
};
export default Login;
