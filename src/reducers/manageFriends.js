<<<<<<< HEAD
export function manageFriends(state = {
  friends: [],
}, action) {
  switch(action.type) {

    case "ADD_FRIEND":
      return (
        {...state,
            friends: [
              ...state.friends,
              action.friend
            ]
        }
    )

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )

    default:
      return state;

  }
};
=======
export function manageFriends(state = {friends: []}, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return ({...state, friends: [...state.friends, action.friend])
    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
      return ({...state, friends: [...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
      ]})
  }
}
>>>>>>> b62f71c8da633b29313668c41c8185cf9992f0d9
