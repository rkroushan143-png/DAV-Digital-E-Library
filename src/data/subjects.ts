import type { Subject } from "@/types/library";

const s = (slug: string, en: string, hi: string, proposed = false): Subject => ({ slug, en, hi, proposed });
export const subjectGroups: Record<string, Subject[]> = {
  primary12: [s("hindi","Hindi","हिंदी"),s("english","English","अंग्रेज़ी"),s("mathematics","Mathematics","गणित"),s("evs-awareness","EVS / General Awareness","पर्यावरण अध्ययन / सामान्य जागरूकता"),s("reading","Reading Activities","पठन गतिविधियाँ")],
  primary35: [s("hindi","Hindi","हिंदी"),s("english","English","अंग्रेज़ी"),s("mathematics","Mathematics","गणित"),s("evs","EVS / The World Around Us","पर्यावरण अध्ययन / हमारे आसपास की दुनिया"),s("computer-activities","Computer / Activities","कंप्यूटर / गतिविधियाँ",true)],
  middle: [s("hindi","Hindi","हिंदी"),s("english","English","अंग्रेज़ी"),s("mathematics","Mathematics","गणित"),s("science","Science","विज्ञान"),s("social-science","Social Science","सामाजिक विज्ञान"),s("sanskrit","Sanskrit","संस्कृत",true),s("computer","Computer","कंप्यूटर",true)],
  secondary: [s("hindi","Hindi","हिंदी"),s("english","English","अंग्रेज़ी"),s("mathematics","Mathematics","गणित"),s("science","Science","विज्ञान"),s("social-science","Social Science","सामाजिक विज्ञान"),s("it-ai","Information Technology / AI","सूचना प्रौद्योगिकी / एआई",true),s("additional-language","Additional Language","अतिरिक्त भाषा",true)],
  senior: [s("physics","Physics","भौतिक विज्ञान",true),s("chemistry","Chemistry","रसायन विज्ञान",true),s("mathematics","Mathematics","गणित",true),s("biology","Biology","जीव विज्ञान",true),s("computer-science","Computer Science","कंप्यूटर विज्ञान",true),s("accountancy","Accountancy","लेखाशास्त्र",true),s("business-studies","Business Studies","व्यवसाय अध्ययन",true),s("economics","Economics","अर्थशास्त्र",true),s("history","History","इतिहास",true),s("political-science","Political Science","राजनीति विज्ञान",true),s("geography","Geography","भूगोल",true),s("english","English","अंग्रेज़ी"),s("hindi","Hindi","हिंदी"),s("physical-education","Physical Education","शारीरिक शिक्षा",true)]
};

export const subjectsForClass = (level: number) => level <= 2 ? subjectGroups.primary12 : level <= 5 ? subjectGroups.primary35 : level <= 8 ? subjectGroups.middle : level <= 10 ? subjectGroups.secondary : subjectGroups.senior;
export const allSubjects = Array.from(new Map(Object.values(subjectGroups).flat().map(x => [x.slug,x])).values());
