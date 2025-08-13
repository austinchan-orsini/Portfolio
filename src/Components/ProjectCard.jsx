import { Globe, Github, Code2, Link as LinkIcon } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,          // URL or import; optional
  imageAlt = `${title} screenshot`,
  tags = [],      // ["Next.js","Tailwind","Postgres"]
  links = {},     // { website, source, sourceUI, extra: [{label,href}] }
  className = "",
}) {
  const actions = [
    links.website && { label: "Website", href: links.website, Icon: Globe },
    links.source && { label: "Source", href: links.source, Icon: Github },
    links.sourceUI && { label: "Source (UI)", href: links.sourceUI, Icon: Code2 },
    ...(links.extra || []).map(({ label, href }) => ({ label, href, Icon: LinkIcon })),
  ].filter(Boolean);

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6
                  hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]
                  transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-neutral-800 to-neutral-900">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold text-white tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-white/70 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {actions.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04]
                         px-3 py-1.5 text-sm text-white/90 hover:text-white hover:border-white/20
                         transition-colors"
            >
              <Icon className="h-[16px] w-[16px]" />
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
