import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import produce from 'immer'
import { RootState } from '../../app/store'
import { findUser } from './loginAPI'

// TODO: move to global
// export enum Statuses {
//   Initial = 'Not Fetched',
//   Loading = 'Loading...',
//   UpToDate = 'Up To Date',
//   Deleted = 'Deleted',
//   Error = 'Error',
// }

export interface LoginData {
  username?: string
  password?: string
}

export interface LoginState {
  token?: string
  user_id?: string
}

const initialState: LoginState = {
  token: '',
  user_id: '',
}

export const findUserAsync = createAsyncThunk(
  'login/findUser',
  async (payload: LoginData) => {
    const response = await findUser(payload)

    // TODO: this is not the best way to store token, just uding it alternatively.
    // TODO: add refresh token to local storage, also logout feature to clear the local storage
    if (response.token) {
      localStorage.setItem('accessToken', response.token)
    }
    return response
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // Synchronous Actions
  reducers: {},
  //   TODO: fix DRY code
  extraReducers: (builder) => {
    builder
      // TODO: fix the status code
      .addCase(findUserAsync.pending, (state) => {
        return produce(state, (draftState) => {
          //   draftState.status = Statuses.Loading
        })
      })
      .addCase(findUserAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          //   draftState = action.payload
          draftState.token = action.payload.token
          draftState.user_id = action.payload.user_id
        })
      })
      .addCase(findUserAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          //   draftState.status = Statuses.Error
        })
      })
  },
})

export const {} = loginSlice.actions

export const selectUser = (state: RootState) => state.login

export default loginSlice.reducer
