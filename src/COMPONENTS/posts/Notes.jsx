import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from "../../utils/validations";
import { Textarea } from "../formsControl/FormsControl.jsx";
import style from "./notes.module.scss";

const maxLength10 = maxLengthCreator(100);

const Notes = (props) => {
  let postElements = props.posts.map((p) => {
    return (
      <p key={Math.random()} className={style.discribtionItems}>
        {p}
      </p>
    );
  });
  let addPost = (values) => {
    if (values.newPostText) {
      props.onAddPost(values.newPostText);
    }
  };
  return (
    <div className={style.postsContainer}>
      <h1 className={style.pageTitle}>Describe this picture please</h1>
      <div>
        <img
          alt="describePhoto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrxWCsNRVl6wIjuOiUIlXp4q89cYpN8pkVVODMYgnhz6LLqNSC"
          className={style.describPhoto}
          width="600"
          height="250"
        />
      </div>
      <NewPostTextReduxForm onSubmit={addPost} />
      <h3>All descriptions</h3>
      {postElements}
    </div>
  );
};

const NewPostTextForm = (props) => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit} className={style.myReduxForm}>
      <div>
        <Field
          component={Textarea}
          validate={[requiredField, maxLength10]}
          placeholder="describe here"
          name="newPostText"
        />
      </div>
      <div>
        <button className={style.addButton}>Add your description</button>
        <button type="button" onClick={reset} className={style.resetButton}>
          reset
        </button>
      </div>
    </form>
  );
};
const NewPostTextReduxForm = reduxForm({ form: "newPostTextReduxForm" })(
  NewPostTextForm
);
export default Notes;
