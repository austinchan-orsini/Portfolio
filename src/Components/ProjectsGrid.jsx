// ProjectsGrid.jsx
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
      {projects.map((p, i) => (
        <ProjectCard key={p.title ?? i} {...p} />
      ))}
    </div>
  );
}
