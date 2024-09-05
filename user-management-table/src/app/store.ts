import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Додаємо порожній експорт, щоб зробити цей файл модулем
export {};