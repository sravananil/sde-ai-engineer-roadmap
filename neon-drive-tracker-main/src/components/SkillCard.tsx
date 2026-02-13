import { motion } from 'framer-motion';
import { Check, Clock, Zap } from 'lucide-react';
import { Skill } from '@/data/roadmapData';

interface SkillCardProps {
  skill: Skill;
  isCompleted: boolean;
  onToggle: () => void;
  index: number;
}

export function SkillCard({ skill, isCompleted, onToggle, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-lg border p-5 transition-all duration-300 cursor-pointer group ${
        isCompleted
          ? 'border-neon-green/50 bg-neon-green/5 box-glow-green'
          : 'border-border bg-card hover:border-neon-red/30'
      }`}
      onClick={onToggle}
    >
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${isCompleted ? 'border-neon-green/60' : 'border-border'}`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${isCompleted ? 'border-neon-green/60' : 'border-border'}`} />

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              M{skill.month} W{skill.week}
            </span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
              skill.track === 'AI' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-green/10 text-neon-green'
            }`}>
              {skill.phase}
            </span>
          </div>
          <h3 className={`font-orbitron text-sm font-bold ${isCompleted ? 'text-neon-green' : 'text-foreground'}`}>
            {skill.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
        </div>
        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          isCompleted
            ? 'bg-neon-green border-neon-green'
            : 'border-muted-foreground/30 group-hover:border-neon-green/50'
        }`}>
          {isCompleted && <Check className="w-3.5 h-3.5 text-background" />}
        </div>
      </div>

      {/* Subtopics */}
      <div className="flex flex-wrap gap-1 mb-3">
        {skill.subtopics.map(st => (
          <span key={st} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground font-mono">
            {st}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{skill.hours}h</span>
        {skill.salaryImpact && (
          <span className="flex items-center gap-1 text-neon-green"><Zap className="w-3 h-3" />{skill.salaryImpact}</span>
        )}
        {skill.project && (
          <span className="truncate">🔨 {skill.project}</span>
        )}
      </div>
    </motion.div>
  );
}
