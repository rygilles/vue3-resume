<script setup lang="ts">
import JobItem from "./JobItem.vue";

// @todo put this into a JSON file
const jobs = [
  {
    company: "E-monsite",
    jobTitle: "Développeur Web/Back-End/Ops<small>Amiens (80)</small>",
    imageUrl: "./images/e-monsite.jpg",
    when: "Depuis 2013",
    description:
      "Framework Symfony en PHP 8 sur le projet de CMS propriétaire.<br />" +
      "(MySql, Memcache, Node/WebPack pour le JS, HaProxy, Cloudflare, monitoring" +
      "Telegraf/InfluxDB/Grafana, etc.)",
    tags: [
      {
        title: "Symfony",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "API Platform",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "Stack LAMP",
        extraClasses: "hidden xl:inline-block",
      },
      {
        title: "Docker",
        extraClasses: "hidden xl:inline-block",
      },
      {
        title: "Ansible",
        extraClasses: "hidden xl:inline-block",
      },
      {
        title: "TDD",
        extraClasses: "hidden 2xl:inline-block",
      },
      {
        title: "Monitoring",
        extraClasses: "hidden 2xl:inline-block",
      },
      {
        title: "CI/CD",
        extraClasses: "hidden 2xl:inline-block",
      },
    ],
  },
  {
    company: "Auto-Entrepreneur",
    jobTitle: "Développeur Full Stack<small>Amiens (80)</small>",
    imageUrl: "./images/rg.png",
    when: "2011 - 2013",
    description:
      "Divers missions dont un nombre important pour la société " +
      '<a class="hover:underline" href="https://enola-creation.fr/" target="_blank">Enola Création</a>.<br />' +
      "Maintien, amélioration et développement de sites web basés sur le CMS : CMS Made Simple principalement.<br />" +
      "Maintenance sur les serveurs et monitoring (Ops)",
    tags: [
      {
        title: "Stack LAMP",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "CMS Made Simple",
        extraClasses: "hidden xl:inline-block",
      },
      {
        title: "Bash",
        extraClasses: "hidden xl:inline-block",
      },
      {
        title: "Monitoring",
        extraClasses: "hidden 2xl:inline-block",
      },
    ],
  },
  {
    company: "Ligne Bleue Cyber",
    jobTitle: "Développeur Web<small>Montreuil (93)</small>",
    imageUrl: "./images/ligne-bleue-cyber.jpg",
    when: "2009 - 2010",
    description:
      "Développement / Intégration de contenu Web (Site sur mesure, CMS, Moteurs de recherche).",
    tags: [
      {
        title: "CMS Made Simple (PHP)",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "Stack LAMP",
        extraClasses: "hidden xl:inline-block",
      },
      {
        title: "Bootstrap",
        extraClasses: "hidden 2xl:inline-block",
      },
      {
        title: "jQuery",
        extraClasses: "hidden 2xl:inline-block",
      },
      {
        title: "Bash",
        extraClasses: "hidden 2xl:inline-block",
      },
    ],
  },
  {
    company: "4w.fr",
    jobTitle: "Développeur / Intégrateur Web<small>Montataire (60)</small>",
    imageUrl: "./images/4w.jpg",
    when: "2006 - 2009",
    description:
      "Développeur / Intégrateur Web dans la société 4w.fr basé à Montataire (60) à 50km au nord de Paris.<br />" +
      "Développement / Intégration de sites web (vitrine et e-commerce)<br />" +
      "à partir de propositions graphiques, analyse des projets avec les clients.",
    tags: [
      {
        title: "PHP 5 (CMS maison)",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "HTML",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "CSS",
        extraClasses: "hidden lg:inline-block",
      },
      {
        title: "jQuery",
        extraClasses: "hidden xl:inline-block",
      },
    ],
  },
];
</script>

<template>
  <section id="jobs">
    <!-- work experiences -->
    <h2 class="text-2xl mt-6 pb-1 border-b font-semibold">Expérience</h2>
    <ul class="mt-2">
      <JobItem
        v-for="(job, jobIndex) in jobs"
        :key="jobIndex"
        :company="job.company"
        :job-title="job.jobTitle"
        :image-url="job.imageUrl"
        :when="job.when"
        :description="job.description"
        :tags="job.tags"
      />
    </ul>
  </section>
</template>
