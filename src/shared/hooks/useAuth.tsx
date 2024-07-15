import React, { useContext, createContext, ReactNode } from "react";
import { BehaviorSubject } from "rxjs";

class AuthService {
  private userSubject = new BehaviorSubject<string | null>(null);
  public user$ = this.userSubject.asObservable();

  login(username: string, password: string) {
    // Mock API service
    setTimeout(() => {
      if (username === "user" && password === "pass") {
        this.userSubject.next(username);
      }
    }, 1000);
  }

  logout() {
    this.userSubject.next(null);
  }
}

const authService = new AuthService();

const AuthContext = createContext<AuthService | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
