"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/i18n";
import { dictionaries, type Dictionary } from "@/lib/dictionary";
import { branches, waUrl, type Branch } from "@/lib/branches";
import { formatPrice } from "@/lib/format";

interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: Dictionary;
  branchIndex: number;
  setBranchIndex: (i: number) => void;
  activeBranch: Branch;
  activeWa: string;
  fmt: (amount: number, from?: boolean) => string;
  wa: (num: string) => string;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [branchIndex, setBranchIndex] = useState(0);

  const value = useMemo<AppState>(() => {
    const activeBranch = branches[branchIndex] ?? branches[0];
    return {
      lang,
      setLang,
      dict: dictionaries[lang],
      branchIndex,
      setBranchIndex,
      activeBranch,
      activeWa: waUrl(activeBranch.wa, lang),
      fmt: (amount: number, from = false) => formatPrice(amount, from, lang),
      wa: (num: string) => waUrl(num, lang),
    };
  }, [lang, branchIndex]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <AppProvider>");
  return ctx;
}
