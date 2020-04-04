
const loginKey = 'user_login';

export const persistUser = (user, isRemember) => {
    const localUser = JSON.parse(localStorage.getItem(loginKey));
    const sessionUser = JSON.parse(localStorage.getItem(loginKey));
    if (isRemember) {
        if (sessionUser && sessionUser.id && sessionUser.email) {
            sessionStorage.removeItem(loginKey);
        }
        localStorage.setItem(loginKey, JSON.stringify({ id: user.id, email: user.email }));
    } else {
        if (localUser && localUser.id && localUser.email) {
            localStorage.removeItem(loginKey);
        }
        sessionStorage.setItem(loginKey, JSON.stringify({ id: user.id, email: user.email }));
    }
}

export const getUserFromStorage = () => {
    const localUser = JSON.parse(localStorage.getItem(loginKey));
    const sessionUser = JSON.parse(localStorage.getItem(loginKey));
    if (sessionUser) {
        return sessionUser;
    }
    if (localUser) {
        return localUser;
    }
    return undefined;
}

/**
 * Removes user from storage 
 * @returns - boolean - is removed
 */
export const clearStorage = () => {
    const localUser = JSON.parse(localStorage.getItem(loginKey));
    const sessionUser = JSON.parse(sessionStorage.getItem(loginKey));
    
    if (sessionUser) {
        sessionStorage.removeItem(loginKey);
        return true;
    }
    if (localUser) {
        localStorage.removeItem(loginKey);
        return true;
    }
    return false;
}
