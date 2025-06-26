import SectionStory from "@/components/section/section-story"

export default function AboutUs() {
  return (
    <section className="flex flex-col mt-10 gap-20">
      <SectionStory 
        title="Nuestra Historia"
        image="/images/about-2.jpg"
        paragraphs={[
          "Fundado con pasión por la estética y la narrativa visual, nuestro estudio busca trascender lo comercial para crear lo significativo.",
          "Con años de experiencia en branding, dirección de arte y diseño editorial, nos enfocamos en el detalle y el propósito.",
        ]}
      />
    </section>
  )
}
