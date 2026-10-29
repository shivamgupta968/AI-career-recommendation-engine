import { apiClient } from './api';
import { authStorage } from './auth';

// Silently creates a guest account the first time someone opens the app.
// Users never see a register or login form.
export async function ensureGuestSession(): Promise<string> {
  const existing = authStorage.getToken();
  if (existing) return existing;

  const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const response = await apiClient.register({
    name: 'Guest User',
    email: `guest-${id}@guest.local`,
    password: `guest-${id}-pass`,
    skills: [],
    interests: [],
    experienceLevel: 'entry'
  });
  authStorage.setToken(response.token);
  authStorage.setUser(response.user);
  return response.token;
}
