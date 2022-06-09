<script setup lang="ts">
import EducationItem from "./EducationItem.vue";

// @todo put this into a JSON file
const educations = [
  {
    title: "Développeur Informatique - Titre professionnel de niveau III",
    where: "A.F.P.A.",
    when: "2004 - 2005",
    description:
      "Formation de Développeur Informatique au Centre A.F.P.A. d’Angers (49).<br />" +
      "Stage d'application en entreprise de 3 mois dans la société Altanet.<br />" +
      "Titre professionnel de niveau III obtenu.",
  },
  {
    title: "Baccalauréat scientifique",
    where: "Lycée Edouard Branly",
    when: "2003",
    description: "Obtention du diplôme avec spécialité : Mathématiques",
  },
];
</script>

<template>
  <section id="education">
    <!-- education -->
    <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Formation</h2>
    <ul class="mt-2">
      <EducationItem
        v-for="(education, educationIndex) in educations"
        :key="educationIndex"
        :title="education.title"
        :where="education.where"
        :when="education.when"
        :description="education.description"
      />
    </ul>
  </section>
</template>
