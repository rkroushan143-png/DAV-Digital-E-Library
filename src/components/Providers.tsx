"use client";
import { createContext,useContext,useEffect,useMemo,useState,type ReactNode } from "react";
import { safeGet,safeSet } from "@/lib/storage";
import type { Locale } from "@/lib/i18n";

type AppState={locale:Locale;setLocale:(l:Locale)=>void;theme:"light"|"dark";toggleTheme:()=>void};
const C=createContext<AppState|null>(null);
export function Providers({children}:{children:ReactNode}){
 const [locale,setLocaleState]=useState<Locale>("en"); const [theme,setTheme]=useState<"light"|"dark">("light");
 useEffect(()=>{setLocaleState(safeGet<Locale>("dav-lib-locale","en"));setTheme(safeGet("dav-lib-theme","light"));},[]);
 useEffect(()=>{document.documentElement.classList.toggle("dark",theme==="dark");safeSet("dav-lib-theme",theme)},[theme]);
 const value=useMemo(()=>({locale,setLocale:(l:Locale)=>{setLocaleState(l);safeSet("dav-lib-locale",l)},theme,toggleTheme:()=>setTheme(v=>v==="light"?"dark":"light")}),[locale,theme]);
 return <C.Provider value={value}>{children}</C.Provider>;
}
export const useApp=()=>{const v=useContext(C);if(!v)throw new Error("Providers missing");return v};
