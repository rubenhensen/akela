import { writable } from 'svelte/store';

export const loggedIn = writable(true);

export const appBarTitle = writable('');
