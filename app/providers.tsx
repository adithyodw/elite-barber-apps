"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/i18n";
import { dictionaries, type Dictionary } from "@/lib/dictionary";
import { branches, type Branch } from "@/lib/branches";

interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: Dictionary;
  branch: Branch;
  branchId: Branch["id"];
  setBranchId: (id: Branch["id"]) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [branchId, setBranchId] = useState<Branch["id"]>("penuin");

  const handleSetBranch = useCallback((id: Branch["id"]) => setBranchId(id), []);

  const value = useMemo<AppState>(() => {
    const branch = branches.find((b) => b.id === branchId) ?? branches[0];
    return {
      lang,
      setLang,
      dict: dictionaries[lang],
      branch,
      branchId,
      setBranchId: handleSetBranch,
    };
  }, [lang, branchId, handleSetBranch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <AppProvider>");
  return ctx;
}
