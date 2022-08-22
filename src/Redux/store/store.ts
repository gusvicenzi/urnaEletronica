import { configureStore } from '@reduxjs/toolkit'
// import stageReducer from './Stage/Stage.reducer'
import stageReducer from './Stage.store'
import presidentNumberReducer from './PresidentNumber.store'

// const rootReducer = combineReducers({
//   stage: stageReducer
// })

// const store = configureStore(rootReducer)

export const store = configureStore({
  reducer: {
    stage: stageReducer,
    presidentNumber: presidentNumberReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
