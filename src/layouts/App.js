import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { blogActions, userActions } from '../actions';
// eslint-disable-next-line
import styles from './App.scss';
// Pages
import { HomePage, BlogPage, BlogArticlePage, NoMatchPage } from '../pages';
// Components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

class App extends Component {
  // Lifecycle
  componentWillMount() {
    this._updatePosts();
    this._updatePages();
    this._updateUsers();
  }

  // Private methods
  _updatePosts() {
    this.props.blogActions.retrievePosts();
  }

  _updatePages() {
    this.props.blogActions.retrievePages();
  }

  _updateUsers() {
    this.props.userActions.retrieveUsers();
  }

  // Render methods
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles" component={BlogPage} />
            <Route exact path="/articles/:slug" component={BlogArticlePage} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    blogActions: bindActionCreators(blogActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
