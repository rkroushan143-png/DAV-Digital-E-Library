import Link from "next/link";import {BookOpen,ChevronDown,FileQuestion,FileText,LibraryBig,NotebookTabs,PlaySquare,ScrollText} from "lucide-react";
const mainLinks=[
  {href:"/books",label:"Junior Library Books",icon:BookOpen},
  {href:"/books#animals-nature",label:"Animals & Nature",icon:LibraryBig},
  {href:"/books#early-learning",label:"Early Learning",icon:NotebookTabs},
  {href:"/books#science-knowledge",label:"Science & Knowledge",icon:FileText},
  {href:"/books#values-life-skills",label:"Values & Life Skills",icon:ScrollText},
  {href:"/books#stories-fiction",label:"Stories & Fiction",icon:BookOpen},
] as const;
const resourceLinks=[
  {href:"/resources",label:"All Digital Resources",icon:LibraryBig},
  {href:"/notes",label:"Notes",icon:NotebookTabs},
  {href:"/worksheets",label:"Worksheets",icon:FileText},
  {href:"/question-papers",label:"Question Papers",icon:FileQuestion},
  {href:"/videos",label:"Video Lessons",icon:PlaySquare},
] as const;
export function BrowseLibraryMenu(){return <details className="group relative z-30"><summary className="btn-primary cursor-pointer list-none bg-white text-navy hover:bg-blue-50"><LibraryBig size={19}/>Browse Library<ChevronDown className="transition group-open:rotate-180" size={17}/></summary><div className="absolute left-0 top-full mt-2 w-[min(92vw,620px)] rounded-2xl border bg-white p-4 text-slate-900 shadow-2xl"><div className="grid gap-4 sm:grid-cols-2"><div><p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-royal">Junior book categories</p>{mainLinks.map(({href,label,icon:Icon})=><Link className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium hover:bg-blue-50" href={href} key={href+label}><Icon size={17}/>{label}</Link>)}</div><div><p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-royal">Academic resources</p>{resourceLinks.map(({href,label,icon:Icon})=><Link className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium hover:bg-blue-50" href={href} key={href}><Icon size={17}/>{label}</Link>)}</div></div></div></details>}
