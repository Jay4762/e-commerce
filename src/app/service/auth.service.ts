import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Check if the username and password are valid
    if (username === 'admin' && password === 'password') {
      // Set the authentication status to true
      this.isAuthenticated = true;

      const user = {
        username : username,
        password : password
      }
      // Store the username in local storage
      // localStorage.setItem('username', user.username);
      localStorage.setItem('user', JSON.stringify(user))
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Clear the authentication status and remove the username from local storage
    this.isAuthenticated = false;
    localStorage.removeItem('user');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
