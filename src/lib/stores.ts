// src/lib/stores.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment'; // Import browser check from SvelteKit

export interface Submission {
  username: string;
  formName: string;
  description: string;
  selectedOption: string;
}

// Initialize submissions from localStorage only if in browser
const initialSubmissions = browser ? JSON.parse(localStorage.getItem('submissions') || '[]') : [];
export const submissions = writable<Submission[]>(initialSubmissions);

// Update localStorage only if in browser
if (browser) {
  submissions.subscribe((value) => {
    localStorage.setItem('submissions', JSON.stringify(value));
  });
}