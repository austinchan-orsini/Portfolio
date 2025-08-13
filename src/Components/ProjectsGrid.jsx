import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects = [] }) {
  return (
    <div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      style={{ alignItems: "start" }}
    >
      {projects.map((p, i) => (
        <ProjectCard key={p.title ?? i} {...p} />
      ))}
    </div>
  );
}
