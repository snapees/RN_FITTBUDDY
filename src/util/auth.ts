/* eslint-disable @typescript-eslint/no-unused-vars */
async function authenticate(mode: string, email: string, password: string) {
  const token = 'Asdfgtgwe23465ß';

  return token;
}

export function createUser(email: string, password: string) {
  return authenticate('signUp', email, password);
}

export function login(email: string, password: string) {
  return authenticate('signInWithPassword', email, password);
}
