import { motion } from 'framer-motion';
import { Sun, Moon, Download } from 'lucide-react';

const tabs = ['Overview', 'SDE', 'AI', 'Projects', 'Resources'] as const;
export type TabValue = typeof tabs[number];

interface StickyNavProps {
  activeTab: TabValue;
  onTabChange: (tab: TabValue) => void;
  isDark: boolean;
  onThemeToggle: () => void;
  onExport: () => void;
}

export function StickyNav({ activeTab, onTabChange, isDark, onThemeToggle, onExport }: StickyNavProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded text-sm font-mono transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-neon-green/10 text-neon-green border border-neon-green/30 box-glow-green'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={onExport}
            className="p-2 rounded text-muted-foreground hover:text-neon-green hover:bg-secondary transition-colors"
            title="Export Progress"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={onThemeToggle}
            className="p-2 rounded text-muted-foreground hover:text-neon-green hover:bg-secondary transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
