import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  userRole: 'user' | 'admin' | 'third-party' | null;
  farcasterUser: any | null;
  setAuth: (isAuthenticated: boolean) => void;
  setUserRole: (role: 'user' | 'admin' | 'third-party' | null) => void;
  setFarcasterUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userRole: null,
      farcasterUser: null,
      setAuth: (isAuthenticated) => set({ isAuthenticated }),
      setUserRole: (role) => set({ userRole: role }),
      setFarcasterUser: (user) => set({ farcasterUser: user }),
      logout: () => set({ isAuthenticated: false, userRole: null, farcasterUser: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);