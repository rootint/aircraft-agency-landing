// src/stores.js
import { writable } from 'svelte/store';

export const animationComplete = writable(false);

export const currentVisible = writable('hero');
