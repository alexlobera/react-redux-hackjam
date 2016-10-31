#react-redux hackjam

## Install

```
npm install
npm start
open http://localhost:3000
```

## Exercise

1. Implement pagination in PhotoListContainer
2. Implement CommentsContainer so it fetches comments from http://jsonplaceholder.typicode.com/comments/
3. Add an input text in the Comments container to add a new comment
4. Simplify the mapDispatchToProps by removing the dispatch argument from PhotoListContainer
5. Move the api call from PhotoListContainer to the action creator in /actions/Photos.js. Hint use the redux-promise middleware