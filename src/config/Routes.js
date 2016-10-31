import React from "react";
import PhotoListContainer from "../containers/PhotoListContainer";
import CommentListContainer from "../containers/CommentListContainer";
//import Photo from '../components/Photo'
import { Route, IndexRoute } from 'react-router';

const Routes = (
  <Route path="/">
    <Route path="/comments" component={CommentListContainer} />
    <IndexRoute component={PhotoListContainer} />
  </Route>
);

export default Routes;
