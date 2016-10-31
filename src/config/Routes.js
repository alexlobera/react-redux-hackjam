import React from "react";
import PhotoListContainer from "../containers/PhotoListContainer";
import Photo from '../components/Photo'
import { Route, IndexRoute } from 'react-router';

const Routes = (
  <Route path="/" component={PhotoListContainer}>
    <Route path="photos" component={Photo}>
      <Route path=":id" component={Photo} />
    </Route>
    <IndexRoute component={PhotoListContainer} />
  </Route>
);

export default Routes;