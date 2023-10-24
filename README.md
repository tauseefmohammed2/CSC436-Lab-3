# CSC 436 Web Applications - Lab 3

## User Management:
- Added `userReducer.js` for manageing user related actions such as LOGIN, REGISTER, and LOGOUT.
- Updated the login and register components to be controlled components using useState hook.
- The UserBar component now dynamically renders Login and Register or Logout based on the user state.

## Todo Management:

- Added `todoReducer.js` for managing todos and supporting actions like CREATE_TODO, TOGGLE_TODO, and DELETE_TODO.
- The CreateTodo component has been updated to be a controlled component which  enables instant feedback and resets the form when submitted.

## Reducers Used:
- `userReducer`: Manages the user state (whether a user is logged in or out).
- `todoReducer`: Manages the todo list including creating, toggling completion, and deleting todos from the list
