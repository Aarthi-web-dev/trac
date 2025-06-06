
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUsername = localStorage.getItem('currentUser');
    if (savedUsername) {
      // Fetch user data from API
      fetch(`http://localhost:1337/api/blogs?filters[username][$eq]=${savedUsername}`)
        .then(res => res.json())
        .then(data => {
          if (data?.data?.length > 0) {
            // Set user data from API response
            const userData = data.data[0];
            setUser({
              id: userData.id,
              username: userData.attributes?.username || userData.username
            });
          } else {
            // Clear localStorage if user not found in API
            localStorage.removeItem('currentUser');
            setUser(null);
          }
        })
        .catch(err => {
          console.error('Failed to load user', err);
          localStorage.removeItem('currentUser');
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  // Login with API
  const login = async (username, password) => {
    try {
      const res = await fetch(`http://localhost:1337/api/blogs?filters[username][$eq]=${username}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await res.json();
      
      if (data?.data?.length > 0) {
        const userData = data.data[0];
        const storedUsername = userData.attributes?.username || userData.username;
        const storedPassword = userData.attributes?.passwords || userData.passwords;
        
        if (storedPassword === password) {
          // Save username to localStorage
          localStorage.setItem('currentUser', storedUsername);
          // Save user data in state
          setUser({
            id: userData.id,
            username: storedUsername
          });
          return true;
        }
      }
      
      console.error("Invalid credentials or user not found");
      return false;
    } catch (err) {
      console.error('Login failed:', err);
      return false;
    }
  };

  const register = async (username, password) => {
    try {
      // First check if username already exists
      const checkRes = await fetch(`http://localhost:1337/api/blogs?filters[username][$eq]=${username}`);
      const checkData = await checkRes.json();
      
      if (checkData?.data?.length > 0) {
        console.error('Username already exists');
        return false;
      }
      
      // Create new user
      const res = await fetch('http://localhost:1337/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            username,
            passwords: password
          }
        })
      });

      const data = await res.json();
      if (res.ok) {
        console.log('Registration successful');
        return true;
      } else {
        console.error('Registration failed:', data);
        return false;
      }
    } catch (err) {
      console.error('Registration failed:', err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const value = { 
    user, 
    login, 
    register, 
    logout, 
    loading 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}