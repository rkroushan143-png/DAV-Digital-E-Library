import type { LibraryResource } from "@/types/library";
export interface Filters { query:string; classLevel:string; subject:string; language:string; type:string; year:string; sort:string; }
export const defaultFilters: Filters = {query:"",classLevel:"",subject:"",language:"",type:"",year:"",sort:"date"};
export function filterResources(items: LibraryResource[], f: Filters) {
  const q=f.query.trim().toLowerCase();
  const out=items.filter(r => (!q || [r.titleEn,r.titleHi,r.descriptionEn,r.descriptionHi,r.subject,...r.tags].join(" ").toLowerCase().includes(q)) && (!f.classLevel || String(r.classLevel)===f.classLevel) && (!f.subject || r.subject===f.subject) && (!f.language || r.language===f.language) && (!f.type || r.resourceType===f.type) && (!f.year || r.academicYear===f.year));
  return [...out].sort((a,b)=> f.sort==="title"?a.titleEn.localeCompare(b.titleEn):f.sort==="class"?a.classLevel-b.classLevel:b.dateAdded.localeCompare(a.dateAdded));
}
