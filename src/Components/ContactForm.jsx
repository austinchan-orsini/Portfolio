import { useId } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();

  return (
    <form
      onSubmit={(e) => e.preventDefault()} // UI-only: do nothing
      className="w-full max-w-none space-y-4 text-[15px] sm:text-[16px]"
    >
      {/* Top row: name + email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={nameId} className="sr-only">Name</label>
          <input
            id={nameId}
            name="name"
            placeholder="Name"
            autoComplete="name"
            className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white
                       placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="sr-only">Email</label>
          <input
            id={emailId}
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2.5
                       text-[15px] sm:text-[16px] text-white placeholder:text-white/40
                       placeholder:text-[15px] sm:placeholder:text-[16px]
                       focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor={msgId} className="sr-only">Message</label>
        <textarea
          id={msgId}
          name="message"
          rows={5}
          placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
          className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-2.5
                     text-[15px] sm:text-[16px] text-white placeholder:text-white/40
                     placeholder:text-[15px] sm:placeholder:text-[16px]
                     focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
        />
      </div>

      {/* Submit (purely visual) */}
      <button
        type="submit"
        className="w-full rounded-lg bg-white text-black px-5 py-3 font-medium
                   hover:opacity-90 active:opacity-80 transition inline-flex items-center justify-center gap-2"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
