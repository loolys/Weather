const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Main = require('../components/Main');
const Home = require("../components/Home");
const Result = require('../components/Result');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="/result" component={Result} />
    </Route>
  </Router>
);

module.exports = routes;
