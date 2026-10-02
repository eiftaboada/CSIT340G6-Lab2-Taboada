import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Currently pursuing my degree in Information Technology, focusing on software development and web technologies."
        />
        <TimelineItem
          period="2025"
          title="Web Designer Sideline"
          place="SideLine"
          description="Worked as a sideline web designer, creating responsive and user-friendly websites for small businesses and personal projects."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, STEM Strand"
          place="Cebu Institute of Technology – University"
          description="Learn Scratch and Simple Programming, and developed foundational skills in computer science and technology."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
