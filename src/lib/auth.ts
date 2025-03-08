// src/lib/auth.ts
import { writable } from 'svelte/store';


// Store for login status
export const loginStatus = writable(false);
// Store for username
export const username = writable('');

// Function to log in and set both status and username
export function login(user = '') {
  loginStatus.set(true);
  username.set(user); // Store the username
  if (typeof window !== 'undefined') {
    localStorage.setItem('loginStatus', 'true');
    localStorage.setItem('username', user); // Save username to localStorage
    console.log('Logged in with username:', user);
  }
}

// Function to log out
export function logout() {
  loginStatus.set(false);
  username.set(''); // Clear username
  if (typeof window !== 'undefined') {
    localStorage.setItem('loginStatus', 'false');
    localStorage.removeItem('username');
  }
}

// Sync with localStorage on initialization (browser only)
if (typeof window !== 'undefined') {
  const storedStatus = localStorage.getItem('loginStatus');
  const storedUsername = localStorage.getItem('username');
  if (storedStatus === 'true') {
    loginStatus.set(true);
    if (storedUsername) {
      username.set(storedUsername);
      console.log('Restored username from localStorage:', storedUsername);
    }
  } else {
    loginStatus.set(false);
  }
}