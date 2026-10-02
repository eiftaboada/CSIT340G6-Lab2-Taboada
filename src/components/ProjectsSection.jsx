import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/eiftaboada/CSIT340-Lab1-Taboada"
        />
        <ProjectCard
          year="2025"
          title="Java Text Game"
          description="A text-based game built in Java for our OOP class."
          tech="JAVA"
          link="https://github.com/seanrileydelacruz444/JAVA_TextGame"
        />
        <ProjectCard
          year="2025"
          title="Parking Management System"
          description="A web-based system for managing parking spaces, built as a group project for our IM class."
          tech="HTML, CSS · MySQL"
          link="https://github.com/eiftaboada/ParkingManaagementSystem"
        />
        <ProjectCard
          year="2024"
          title="Business Website"
          description="A web projects for a local business, built as a group project for our Web Development class."
          tech="HTML · Javascript · CSS"
          link="https://github.com/eiftaboada/minions"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
