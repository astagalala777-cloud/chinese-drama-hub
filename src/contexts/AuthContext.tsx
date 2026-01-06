import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  isVip: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy users for demo
const DUMMY_USERS: User[] = [
  {
    id: "1",
    email: "admin@dramachina.com",
    name: "Admin",
    isVip: true,
  },
  {
    id: "2",
    email: "user@dramachina.com",
    name: "User Demo",
    isVip: false,
  },
];

const DUMMY_PASSWORD = "password123";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved session
    const savedUser = localStorage.getItem("drama_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = DUMMY_USERS.find((u) => u.email === email);
    
    if (!foundUser) {
      return { success: false, error: "Email tidak ditemukan" };
    }
    
    if (password !== DUMMY_PASSWORD) {
      return { success: false, error: "Password salah" };
    }

    setUser(foundUser);
    localStorage.setItem("drama_user", JSON.stringify(foundUser));
    return { success: true };
  };

  const register = async (email: string, password: string, name: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const existingUser = DUMMY_USERS.find((u) => u.email === email);
    if (existingUser) {
      return { success: false, error: "Email sudah terdaftar" };
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      isVip: false,
    };

    DUMMY_USERS.push(newUser);
    setUser(newUser);
    localStorage.setItem("drama_user", JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("drama_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
