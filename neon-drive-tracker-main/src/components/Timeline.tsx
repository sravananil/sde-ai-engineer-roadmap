import { motion } from 'framer-motion';
import { monthThemes, skills } from '@/data/roadmapData';

interface TimelineProps {
  completedSkills: string[];
}

export function Timeline({ completedSkills }: TimelineProps) {
  const months = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-orbitron font-bold mb-8 text-foreground">
          <span className="text-neon-green text-glow-green">&gt;</span> 9-Month Timeline
        </h2>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
          <div className="flex justify-between relative">
            {months.map((m) => {
              const theme = monthThemes[m];
              const monthSkills = skills.filter(s => s.month === m);
              const completed = monthSkills.filter(s => completedSkills.includes(s.id)).length;
              const total = monthSkills.length;
              const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
              const isAI = theme.track === 'AI';

              return (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: m * 0.05 }}
                  className="flex flex-col items-center w-[11%]"
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 z-10 ${
                      pct === 100
                        ? 'bg-neon-green border-neon-green box-glow-green'
                        : pct > 0
                        ? 'bg-neon-red/50 border-neon-red'
                        : 'bg-secondary border-border'
                    }`}
                  />
                  <div className="mt-3 text-center">
                    <p className="font-orbitron text-xs font-bold text-foreground">M{m}</p>
                    <p className={`text-[10px] font-mono mt-0.5 ${isAI ? 'text-neon-cyan' : 'text-neon-green'}`}>
                      {theme.name}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                      {completed}/{total}
                    </p>
                  </div>
                  {/* Skill tags */}
                  <div className="mt-2 flex flex-wrap gap-1 justify-center">
                    {monthSkills.slice(0, 2).map(s => (
                      <span
                        key={s.id}
                        className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                          completedSkills.includes(s.id)
                            ? 'bg-neon-green/20 text-neon-green'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        {s.name.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-4">
          {months.map((m) => {
            const theme = monthThemes[m];
            const monthSkills = skills.filter(s => s.month === m);
            const completed = monthSkills.filter(s => completedSkills.includes(s.id)).length;
            const total = monthSkills.length;
            const isAI = theme.track === 'AI';

            return (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 pl-4 border-l-2 border-border"
              >
                <div className="flex flex-col">
                  <span className="font-orbitron text-sm font-bold text-foreground">M{m}</span>
                  <span className={`text-xs font-mono ${isAI ? 'text-neon-cyan' : 'text-neon-green'}`}>{theme.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{completed}/{total} done</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
