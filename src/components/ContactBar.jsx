import { contact } from '../data/media'

export default function ContactBar() {
  return (
    <footer id="contact" className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-xl tracking-widest">APROVA</span>
        <a href={`mailto:${contact.email}`} className="break-all underline decoration-cyan decoration-2 underline-offset-4">{contact.email}</a>
        <a href={contact.socialUrl} target="_blank" rel="noreferrer" className="underline decoration-mint decoration-2 underline-offset-4">{contact.social}</a>
      </div>
    </footer>
  )
}
