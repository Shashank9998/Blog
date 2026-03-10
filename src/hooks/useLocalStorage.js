import { useState, useEffect } from "react";

/**
 * useLocalStorage Hook
 * @param {string} key - LocalStorage માં જે નામે ડેટા સેવ કરવો હોય તે (e.g. 'blogs')
 * @param {any} initialValue - જો ડેટા ન મળે તો ડિફોલ્ટ શું રાખવું (e.g. [])
 */
export const useLocalStorage = (key, initialValue) => {
  // 1. સ્ટેટ ઇનિશિયલાઇઝ કરો
  const [value, setValue] = useState(() => {
    try {
      const savedItem = localStorage.getItem(key);
      // જો localStorage માં ડેટા હોય તો તેને JSON માંથી Object માં ફેરવો
      return savedItem ? JSON.parse(savedItem) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // 2. જ્યારે પણ 'value' બદલાય ત્યારે તેને LocalStorage માં અપડેટ કરો
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
};