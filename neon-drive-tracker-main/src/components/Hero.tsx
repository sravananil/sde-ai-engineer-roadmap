import { motion } from 'framer-motion';
import { Activity, Brain, Clock, TrendingUp } from 'lucide-react';

interface HeroProps {
  progressPercent: number;
  completedCount: number;
  totalSkills: number;
  hoursCompleted: number;
}

export function Hero({ progressPercent, completedCount, totalSkills, hoursCompleted }: HeroProps) {
  const stats = [
    { icon: Activity, label: 'Progress', value: `${progressPercent}%`, color: 'text-neon-green', glow: 'box-glow-green' },
    { icon: Brain, label: 'Skills', value: `${completedCount}/${totalSkills}`, color: 'text-neon-cyan', glow: '' },
    { icon: Clock, label: 'Hours', value: `${hoursCompleted}h`, color: 'text-neon-purple', glow: '' },
    { icon: TrendingUp, label: 'Target', value: '₹25L+', color: 'text-neon-red', glow: 'box-glow-red' },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm tracking-[0.3em] uppercase text-neon-red mb-4"
          >
            // 9-month transformation protocol
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black tracking-tight mb-4">
            <span className="text-foreground">SDE</span>
            <span className="text-neon-green text-glow-green mx-3">→</span>
            <span className="text-neon-green text-glow-green">AI Engineer</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-muted-foreground text-sm md:text-base max-w-xl mx-auto"
          >
            &gt; SYSTEM.INIT: Loading career_transformation.exe...
            <span className="animate-pulse-neon text-neon-green">█</span>
          </motion.p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`relative group rounded-lg border border-border bg-card/50 backdrop-blur-sm p-5 hover:border-neon-green/50 transition-all duration-300 ${stat.glow}`}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-green/50" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green/50" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green/50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-green/50" />
              
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              <p className={`text-2xl md:text-3xl font-orbitron font-bold ${stat.color} mt-1`}>{stat.value}</p>
              
              {stat.label === 'Progress' && (
                <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-full bg-neon-green rounded-full"
                    style={{ boxShadow: '0 0 10px hsl(153 100% 50% / 0.5)' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
