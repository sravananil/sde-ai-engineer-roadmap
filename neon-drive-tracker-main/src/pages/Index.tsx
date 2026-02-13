import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { StickyNav, TabValue } from '@/components/StickyNav';
import { Timeline } from '@/components/Timeline';
import { SkillCard } from '@/components/SkillCard';
import { ProjectCard, ResourceCard } from '@/components/ProjectResourceCards';
import { AchievementPopup } from '@/components/AchievementPopup';
import { useProgress } from '@/hooks/useProgress';
import { skills, projects, resources } from '@/data/roadmapData';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabValue>('Overview');
  const [isDark, setIsDark] = useState(true);
  const progress = useProgress();

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  const sdeSkills = skills.filter(s => s.track === 'SDE');
  const aiSkills = skills.filter(s => s.track === 'AI');

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <Hero
        progressPercent={progress.progressPercent}
        completedCount={progress.completedCount}
        totalSkills={progress.totalSkills}
        hoursCompleted={progress.hoursCompleted}
      />

      <StickyNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
        onExport={progress.exportProgress}
      />

      <main className="container py-10 relative z-10">
        {/* OVERVIEW */}
        {activeTab === 'Overview' && (
          <Timeline completedSkills={progress.completedSkills} />
        )}

        {/* SDE */}
        {activeTab === 'SDE' && (
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-2 text-foreground">
              <span className="text-neon-green text-glow-green">&gt;</span> SDE Track
            </h2>
            <p className="text-sm font-mono text-muted-foreground mb-8">Months 1-4 • Foundation → Cloud</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sdeSkills.map((skill, i) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  isCompleted={progress.completedSkills.includes(skill.id)}
                  onToggle={() => progress.toggleSkill(skill.id)}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}

        {/* AI */}
        {activeTab === 'AI' && (
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-2 text-foreground">
              <span className="text-neon-red text-glow-red">&gt;</span> AI Track
            </h2>
            <p className="text-sm font-mono text-muted-foreground mb-8">Months 5-9 • AI Foundations → Voice AI</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {aiSkills.map((skill, i) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  isCompleted={progress.completedSkills.includes(skill.id)}
                  onToggle={() => progress.toggleSkill(skill.id)}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {activeTab === 'Projects' && (
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-2 text-foreground">
              <span className="text-neon-cyan">&gt;</span> Projects
            </h2>
            <p className="text-sm font-mono text-muted-foreground mb-8">Build these to prove your skills</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  status={progress.projectStatuses[project.id] || 'not-started'}
                  onStatusChange={(status) => progress.setProjectStatus(project.id, status)}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}

        {/* RESOURCES */}
        {activeTab === 'Resources' && (
          <section>
            <h2 className="text-2xl font-orbitron font-bold mb-2 text-foreground">
              <span className="text-neon-purple">&gt;</span> Resources
            </h2>
            <p className="text-sm font-mono text-muted-foreground mb-8">Your learning arsenal</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {resources.map((resource, i) => (
                <ResourceCard key={resource.id} resource={resource} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>

      <AchievementPopup
        skillName={progress.achievement}
        onClose={progress.clearAchievement}
      />

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container text-center">
          <p className="font-mono text-xs text-muted-foreground">
            {'>'} SDE → AI ENGINEER ROADMAP 2026 • <span className="text-neon-green">SYSTEM.ACTIVE</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
