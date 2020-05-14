import { writable } from 'svelte/store';

export const loggedIn = writable(true); // TODO: turn back to false

export const appBarTitle = writable('');