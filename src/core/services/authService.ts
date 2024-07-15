// src/core/services/authService.ts
import { BehaviorSubject } from "rxjs";

export class AuthService {
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

export const authService = new AuthService();
