import { useState, useEffect, useCallback } from 'react';
import { skills } from '@/data/roadmapData';

const STORAGE_KEY = 'cyber-roadmap-progress';

interface ProgressState {
  completedSkills: string[];
  projectStatuses: Record<string, 'not-started' | 'in-progress' | 'completed'>;
}

const getInitial = (): ProgressState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { completedSkills: [], projectStatuses: {} };
};

export function useProgress() {
  const [state, setState] = useState<ProgressState>(getInitial);
  const [achievement, setAchievement] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const toggleSkill = useCallback((skillId: string) => {
    setState(prev => {
      const isCompleting = !prev.completedSkills.includes(skillId);
      const completedSkills = isCompleting
        ? [...prev.completedSkills, skillId]
        : prev.completedSkills.filter(id => id !== skillId);
      
      if (isCompleting) {
        const skill = skills.find(s => s.id === skillId);
        if (skill) setAchievement(skill.name);
      }
      
      return { ...prev, completedSkills };
    });
  }, []);

  const setProjectStatus = useCallback((projectId: string, status: 'not-started' | 'in-progress' | 'completed') => {
    setState(prev => ({
      ...prev,
      projectStatuses: { ...prev.projectStatuses, [projectId]: status },
    }));
  }, []);

  const clearAchievement = useCallback(() => setAchievement(null), []);

  const completedCount = state.completedSkills.length;
  const totalSkills = skills.length;
  const progressPercent = Math.round((completedCount / totalSkills) * 100);
  const hoursCompleted = skills
    .filter(s => state.completedSkills.includes(s.id))
    .reduce((sum, s) => sum + s.hours, 0);

  const exportProgress = useCallback(() => {
    const data = {
      exportDate: new Date().toISOString(),
      progress: progressPercent + '%',
      completedSkills: state.completedSkills.map(id => skills.find(s => s.id === id)?.name),
      hoursCompleted,
      projectStatuses: state.projectStatuses,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-engineer-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [state, progressPercent, hoursCompleted]);

  return {
    completedSkills: state.completedSkills,
    projectStatuses: state.projectStatuses,
    achievement,
    toggleSkill,
    setProjectStatus,
    clearAchievement,
    completedCount,
    totalSkills,
    progressPercent,
    hoursCompleted,
    exportProgress,
  };
}
