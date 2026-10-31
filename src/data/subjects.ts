import type {Subject} from "@/types/library";
const s=(slug:string,en:string,proposed=false):Subject=>({slug,en,proposed});
export const subjectGroups:Record<string,Subject[]>={
 primary12:[s("hindi","Hindi"),s("english","English"),s("mathematics","Mathematics"),s("evs-awareness","EVS / General Awareness"),s("reading","Reading Activities")],
 primary35:[s("hindi","Hindi"),s("english","English"),s("mathematics","Mathematics"),s("evs","EVS / The World Around Us"),s("computer-activities","Computer / Activities",true)],
 middle:[s("hindi","Hindi"),s("english","English"),s("mathematics","Mathematics"),s("science","Science"),s("social-science","Social Science"),s("sanskrit","Sanskrit",true),s("computer","Computer",true)],
 secondary:[s("hindi","Hindi"),s("english","English"),s("mathematics","Mathematics"),s("science","Science"),s("social-science","Social Science"),s("it-ai","Information Technology / AI",true),s("additional-language","Additional Language",true)],
 senior:[s("physics","Physics",true),s("chemistry","Chemistry",true),s("mathematics","Mathematics",true),s("biology","Biology",true),s("computer-science","Computer Science",true),s("accountancy","Accountancy",true),s("business-studies","Business Studies",true),s("economics","Economics",true),s("history","History",true),s("political-science","Political Science",true),s("geography","Geography",true),s("english","English"),s("hindi","Hindi"),s("physical-education","Physical Education",true)]
};
export const subjectsForClass=(level:number)=>level<=2?subjectGroups.primary12:level<=5?subjectGroups.primary35:level<=8?subjectGroups.middle:level<=10?subjectGroups.secondary:subjectGroups.senior;
export const allSubjects=Array.from(new Map(Object.values(subjectGroups).flat().map(item=>[item.slug,item])).values());
