import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const official = [["NCERT", "https://ncert.nic.in/textbook.php"], ["ePathshala", "https://epathshala.nic.in/"], ["DIKSHA", "https://diksha.gov.in/"], ["CBSE Academic", "https://cbseacademic.nic.in/"]];

export function Footer() {
  const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/dav-logo.png`;
  return <footer className="mt-16 bg-navy text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
      <div><Image src={logoSrc} alt="DAV College Managing Committee emblem" width={78} height={64} className="mb-3 h-16 w-auto rounded bg-white object-contain p-1" /><h2 className="font-bold">Dr. Dukhan Ram DAV Public School</h2><p className="mt-2 text-sm text-blue-100">CBSE Digital E-Library · Learn Anytime, Anywhere</p></div>
      <div><h2 className="font-semibold">Official resources</h2><ul className="mt-3 space-y-2 text-sm">{official.map(([name, url]) => <li key={name}><a className="inline-flex items-center gap-1 hover:underline" href={url} target="_blank" rel="noopener noreferrer">{name}<ExternalLink size={14} /></a></li>)}</ul></div>
      <div><h2 className="font-semibold">Information</h2><div className="mt-3 flex flex-col gap-2 text-sm"><Link href="/privacy">Privacy & disclaimer</Link><Link href="/management-guide">Library management guide</Link><Link href="/contact">Contact</Link></div></div>
    </div>
    <div className="border-t border-blue-800 px-4 py-4 text-center text-xs text-blue-100">© {new Date().getFullYear()} Dr. Dukhan Ram DAV Public School. Educational-use portal. School details and content require authorized verification.</div>
  </footer>;
}
