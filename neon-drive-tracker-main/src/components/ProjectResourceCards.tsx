import { motion } from 'framer-motion';
import { ExternalLink, Rocket } from 'lucide-react';
import { Project, Resource } from '@/data/roadmapData';

interface ProjectCardProps {
  project: Project;
  status: 'not-started' | 'in-progress' | 'completed';
  onStatusChange: (status: 'not-started' | 'in-progress' | 'completed') => void;
  index: number;
}

export function ProjectCard({ project, status, onStatusChange, index }: ProjectCardProps) {
  const nextStatus = status === 'not-started' ? 'in-progress' : status === 'in-progress' ? 'completed' : 'not-started';
  const statusColors = {
    'not-started': 'bg-secondary text-muted-foreground',
    'in-progress': 'bg-neon-red/20 text-neon-red',
    'completed': 'bg-neon-green/20 text-neon-green',
  };
  const statusLabels = { 'not-started': 'Not Started', 'in-progress': 'In Progress', 'completed': 'Completed' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-lg border p-5 transition-all ${
        status === 'completed' ? 'border-neon-green/40 box-glow-green' : 'border-border bg-card hover:border-neon-red/30'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-mono text-[10px] text-muted-foreground mb-1">MONTH {project.month}</p>
          <h3 className="font-orbitron text-sm font-bold text-foreground">{project.name}</h3>
        </div>
        <button
          onClick={() => onStatusChange(nextStatus)}
          className={`text-[10px] px-2 py-1 rounded font-mono ${statusColors[status]}`}
        >
          {statusLabels[status]}
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1 mb-2">
        {project.techStack.map(t => (
          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan font-mono">{t}</span>
        ))}
      </div>
      {project.salaryImpact && (
        <p className="text-[10px] font-mono text-neon-green flex items-center gap-1">
          <Rocket className="w-3 h-3" />{project.salaryImpact}
        </p>
      )}
    </motion.div>
  );
}

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export function ResourceCard({ resource, index }: ResourceCardProps) {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-lg border border-border bg-card p-4 hover:border-neon-green/40 transition-all group block"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-neon-purple/10 text-neon-purple font-mono">{resource.type}</span>
          <h3 className="font-orbitron text-sm font-bold text-foreground mt-2">{resource.name}</h3>
          <p className="text-[10px] font-mono text-muted-foreground mt-1">{resource.category}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-green transition-colors" />
      </div>
    </motion.a>
  );
}
