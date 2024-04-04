import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  type LoginResponseModel,
  loginRequestSchema,
  loginResponseSchema,
} from 'src/models/loginSchema';
import { BASE_URL } from 'src/utils/variables';
import postData from 'src/utils/requests/postData';

export const fetchToken = createAsyncThunk(
  'token/fetchToken',
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await postData(
        `${BASE_URL}login/get-token/`,
        loginResponseSchema,
        loginRequestSchema,
        { id },
        null,
        rejectWithValue
      );

      return data;
    } catch (error) {
      return rejectWithValue('Произошла ошибка при получении токена');
    }
  }
);

interface TokenProps extends LoginResponseModel {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: TokenProps = {
  access_token: '',
  refresh_token: '',
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const tokenSlice = createSlice({
  name: 'getToken',
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchToken.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;

        localStorage.setItem('access_token', action.payload.access_token);
        localStorage.setItem('refresh_token', action.payload.refresh_token);
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      });
  },
});

export const { setTokens } = tokenSlice.actions;

export default tokenSlice.reducer;