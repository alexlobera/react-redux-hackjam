#react-redux hackjam

## Install

```
npm install
npm start
open http://localhost:3000
```

## Exercise

1. Implement pagination in PhotoListContainer. There is a page param in /api/Photos.js. There is an example of a button in the component calling the container in /components/CommentList.js if you want to use it as example for the next and prev pagination buttons.
2. Implement CommentsContainer so it fetches comments from http://jsonplaceholder.typicode.com/comments/. No pagination is required.
3. Simplify the mapDispatchToProps by removing the dispatch argument from PhotoListContainer
4. Implement the button "Add comment" in CommentList container to add a new comment. Watch out with the state mutations of your reducer.
5. Move the api call from PhotoListContainer to the action creator in /actions/Photos.js. Hint use the redux-promise middleware
