// another exemple
/* export const validateUser = new RegExp("/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i"); */

export function checkUsername(username: string) {
    const GITHUB_USERNAME_REGEX = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  
    return GITHUB_USERNAME_REGEX.test(username);
}