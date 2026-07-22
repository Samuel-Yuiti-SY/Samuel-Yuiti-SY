"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { en } from "@/messages/en";
import { pt } from "@/messages/pt";

export type Language = "pt" | "en";

const dictionaries = { pt, en };
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (typeof dictionaries)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "pt";

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "pt" || stored === "en" ? stored : "pt";
}

function subscribeToLanguageChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

function getServerLanguage(): Language {
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChanges,
    getStoredLanguage,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage(language === "pt" ? "en" : "pt"),
      t: dictionaries[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
