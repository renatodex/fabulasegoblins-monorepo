import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultValue, expirationTime = 86400000) { // default 1 day in milliseconds
  const [state, setState] = useState(defaultValue);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      const { value, expiration } = JSON.parse(item);
      if (new Date().getTime() < expiration) {
        setState(value);
      } else {
        localStorage.removeItem(key);
      }
    }
    setIsHydrated(true);
  }, [key]);

  useEffect(() => {
    if (isHydrated) {
      const expiration = new Date().getTime() + expirationTime;
      const item = JSON.stringify({ value: state, expiration });
      localStorage.setItem(key, item);
    }
  }, [key, state, isHydrated, expirationTime]);

  return [state, setState];
}

export default useLocalStorageState;
