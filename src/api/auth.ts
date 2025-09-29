import { api } from './client';

export type RegisterDto = {
  email: string;
  displayName: string;
  password: string;
};
export type LoginDto = { email: string; password: string };

export async function register(dto: RegisterDto) {
  const { data } = await api.post<{ message: string }>(
    '/api/auth/register',
    dto
  );
  return data;
}

export async function login(dto: LoginDto) {
  const { data } = await api.post<{
    message: string;
    success: boolean;
    data: {
      token: string;
    };
  }>('/api/auth/login', dto);
  return data.data;
}

export async function forgotPassword(email: string) {
  const { data } = await api.post<{ message?: string }>(
    '/api/auth/forgot-password',
    { email }
  );
  return data;
}

export async function resetPassword(token: string, newPassword: string) {
  const { data } = await api.post<{ message?: string }>(
    '/api/auth/reset-password',
    { token, newPassword }
  );
  return data;
}
