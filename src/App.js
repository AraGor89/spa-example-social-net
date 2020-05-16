import React from "react";
import { Route, Switch } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspence";
import "./App.css";
import Menu from "./COMPONENTS/menu";
import NotesContainer from "./COMPONENTS/posts";
import Header from "./COMPONENTS/header";
import ToDoosContainer from "./COMPONENTS/toDoos";
import Blog from "./COMPONENTS/blog";
const withRouterUsersContainer = React.lazy(() => import("./COMPONENTS/users"));
const LoginContainer = React.lazy(() => import("./COMPONENTS/login"));

const App = () => {
  return (
    <div className="appWrapper">
      <Header className="header" />
      <Menu className="navbar" />
      <div className="content">
        <Switch>
          <Route path="/login" component={withSuspense(LoginContainer)} />
          <Route path="/notes" render={() => <NotesContainer />} />
          <Route
            path="/users"
            component={withSuspense(withRouterUsersContainer)}
          />
          <Route path="/todoos" component={() => <ToDoosContainer />} />
          <Route path="/hooksPosts" component={() => <Blog />} />
          <Route exact path="/" component={() => <NotesContainer />} />
          <Route
            path="*"
            render={() => <div className="notFound"> 404 not found </div>}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
