"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SplashContextType {
  showSplash: boolean;
  setShowSplash: Dispatch<SetStateAction<boolean>>;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export function SplashProvider({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <SplashContext.Provider value={{ showSplash, setShowSplash }}>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  const ctx = useContext(SplashContext);
  if (!ctx) {
    throw new Error("useSplash must be used inside SplashProvider");
  }
  return ctx;
}
