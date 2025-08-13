import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlareHover from "./GlareHover";
import "./ExperienceCard.css";

export default function ExperienceCard({
  company,
  companyUrl,          // ← add this in your data to make the company clickable
  role,
  location,
  dates,
  bullets = [],
  direction = "right",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  const hidden =
    direction === "left" ? { opacity: 0, x: -80 } : { opacity: 0, x: 80 };
  const visible = { opacity: 1, x: 0 };

  return (
    <div ref={ref} className="w-full my-10">
      <motion.div
        initial={hidden}
        animate={inView ? visible : hidden}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full"
        style={{ willChange: "transform,opacity" }}
      >
        {/* Card: auto height, single thin border + hover wrapper */}
        <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-blue-700/30 bg-black/20 glare-wrap neon-border group">
          {/* Glare overlay that covers full card height; parent controls hover */}
          <GlareHover
            className="glare-overlay"
            width="100%"
            height="100%"
            background="transparent"
            borderColor="transparent"
            borderRadius="1rem"     // match rounded-2xl
            glareColor="#ffffff"
            glareOpacity={0.28}
            glareAngle={-30}
            glareSize={240}
            transitionDuration={650}
          />

          {/* Content */}
          <div
            className="py-3 px-5 md:px-6 lg:px-7 text-left"
            style={{ "--title-size": "clamp(1.1rem, 1.2vw, 2.75rem)" }} // base for 100%
          >
            {/* Date — 70% size, 80% white */}
            <p
              className="text-white/80"
              style={{ fontSize: "calc(var(--title-size) * 0.70)" }}
            >
              {dates}
              {location ? ` • ${location}` : ""}
            </p>

            {/* Title (role) — 100% size, 100% white */}
            {role && (
              <h3
                className="mt-0.5 font-extrabold text-white leading-tight"
                style={{ fontSize: "var(--title-size)" }}
              >
                {role}
              </h3>
            )}

            {/* Company — 80% size, 80% white, thin blue underline on card hover */}
            {company && (
              companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${company} on LinkedIn`}
                  className="relative inline-block mt-0.5"
                  style={{ fontSize: "calc(var(--title-size) * 0.80)" }}
                >
                  <span className="font-semibold text-white/80">{company}</span>
                  <span
                    className="absolute left-0 -bottom-[2px] h-[1.5px] w-full bg-blue-400/90
                               origin-left scale-x-0 transition-transform duration-300 ease-out
                               group-hover:scale-x-100"
                  />
                </a>
              ) : (
                <span
                  className="relative inline-block mt-0.5 font-semibold text-white/80"
                  style={{ fontSize: "calc(var(--title-size) * 0.80)" }}
                >
                  {company}
                  <span
                    className="absolute left-0 -bottom-[2px] h-[1.5px] w-full bg-blue-400/90
                               origin-left scale-x-0 transition-transform duration-300 ease-out
                               group-hover:scale-x-100"
                  />
                </span>
              )
            )}

            {/* Bullets — 80% size, 90% white */}
            {bullets.length > 0 && (
              <ul
                className="mt-0 space-y-0 text-white/90 leading-relaxed list-disc list-inside"
                style={{ fontSize: "calc(var(--title-size) * 0.80)" }}
              >
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
