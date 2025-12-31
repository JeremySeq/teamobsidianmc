"use client";

import { motion } from "framer-motion";
import "../globals.css";

const team = [
  {
    name: "Catalyst",
    role: "Artist & Designer",
    avatar: "https://media.forgecdn.net/avatars/1466/483/638951911511335151.png",
    description:
      "",
    links: [
      { label: "Twitter", href: "https://x.com/catalyst2000251" },
      { label: "CurseForge", href: "https://www.curseforge.com/members/catalystmods/projects" },
    ],
  },
  {
    name: "JeremySeq",
    role: "Lead Coder",
    avatar: "https://avatars.githubusercontent.com/u/67425766?v=4",
    description:
      "",
    links: [
      { label: "GitHub", href: "https://github.com/JeremySeq" },
      { label: "CurseForge", href: "https://www.curseforge.com/members/JeremySeq/projects" },
    ],
  },
  {
    name: "mattseq",
    role: "Coder",
    avatar: "https://media.forgecdn.net/avatars/1456/0/638945103184476192.png",
    description:
      "",
    links: [
      { label: "GitHub", href: "https://github.com/mattseq" },
      { label: "CurseForge", href: "https://www.curseforge.com/members/mattseq/projects" },
    ],
  },
];


export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-8 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-center text-4xl font-bold mb-16">
        Our Team
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
            className="
              group
              rounded-[32px]
              border-2 border-obsidian-purple-light
              bg-obsidian-deep
              backdrop-blur-md
              p-8
              transition-all
              duration-300
            "
          >
            {/* avatar */}
            <div className="mb-6 flex justify-center">
              <div className="p-1 rounded-full bg-obsidian-purple-light">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover bg-obsidian-deep"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-center mb-1">
                {member.name}
            </h3>

            <p className="text-center text-sm uppercase tracking-wider text-slate-300 mb-3">
                {member.role}
            </p>

            <p className="text-center text-sm text-slate-300 leading-relaxed mb-6">
                {member.description}
            </p>


            {/* links */}
            <div className="flex flex-wrap justify-center gap-3">
              {member.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-1.5
                    rounded-full
                    text-sm
                    border border-white
                    text-slate-200
                    transition-all
                    hover:border-obsidian-purple-glow
                    hover:text-obsidian-purple-glow
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


      {/* join us card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-20 flex justify-center"
      >
        <div
          className="
            group
            max-w-md
            w-full
            rounded-[36px]
            border-2 border-dashed border-obsidian-purple-light
            bg-obsidian-deep
            p-10
            text-center
            transition-all
            duration-300
            hover:border-obsidian-purple-glow
            hover:shadow-[0_0_40px_rgba(155,77,255,0.25)]
          "
        >
          {/* avatar placeholder */}
          <div className="mb-6 flex justify-center">
            <div className="
              w-20 h-20
              rounded-full
              flex items-center justify-center
              bg-obsidian-purple-light/20
              text-3xl
              font-bold
              text-obsidian-purple-glow
            ">
              ?
            </div>
          </div>

          <h3 className="text-3xl font-semibold mb-2">
            You
          </h3>

          <p className="text-sm uppercase tracking-wider text-slate-300 mb-4">
            Future Team Member
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            We’re always looking for passionate developers, artists, sound designers, and creators.
            If you love Minecraft modding and want to join the team, we'd love to hear from you!
          </p>

          <a
            href="https://discord.gg/EPUJCmYrcb"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-6 py-2.5
              rounded-full
              text-sm
              font-semibold
              border-2 border-obsidian-purple-light
              text-white
              transition-all
              hover:bg-obsidian-purple-light
              hover:text-black
              hover:shadow-[0_0_30px_rgba(155,77,255,0.35)]
            "
          >
            Join our Discord
          </a>
        </div>
      </motion.div>


    </motion.div>
  );
}
