import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';

interface AchievementPopupProps {
  skillName: string | null;
  onClose: () => void;
}

export function AchievementPopup({ skillName, onClose }: AchievementPopupProps) {
  return (
    <AnimatePresence>
      {skillName && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm"
          onAnimationComplete={() => {
            setTimeout(onClose, 3000);
          }}
        >
          <div className="rounded-lg border border-neon-green/50 bg-card/95 backdrop-blur-xl p-4 box-glow-green">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-neon-green" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-orbitron text-xs font-bold text-neon-green text-glow-green">
                  SKILL UNLOCKED
                </p>
                <p className="text-sm font-mono text-foreground mt-0.5 truncate">{skillName}</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Achievement completed ✓</p>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
