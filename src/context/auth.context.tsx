
import type { IUser } from "../interface/auth.interface";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/auth.api";
import { createContext, useState } from "react";

interface IAuthContext {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  refetch: () => void;
}

const inital_value: IAuthContext = {
  user: null,
  isLoading: true,
  setUser: () => {},
  refetch: () => {},
};

// 1. context
// eslint-disable-next-line react-refresh/only-export-components
export const Auth_Context = createContext<IAuthContext>(inital_value);

// 2. provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const { data, isLoading, refetch } = useQuery({
    queryFn: getProfile,
    queryKey: ["get_profile"],
    retry: false,
  });

  return (
    <Auth_Context.Provider
      value={{ user: user || data?.data, setUser, isLoading, refetch }}
    >
      {children}
    </Auth_Context.Provider>
  );
};
