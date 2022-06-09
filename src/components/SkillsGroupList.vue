<script setup lang="ts">
import SkillsGroup from "./SkillsGroup.vue";

// @todo put this into a JSON file
const skillsGroups = [
  {
    title: "Compétences Dév. Serveur",
    skills: [
      {
        title: "Symfony 5.4",
        href: "https://symfony.com/",
      },
      {
        title: "API Platform",
        href: "https://api-platform.com//",
      },
      {
        title: "Laravel 5",
        href: "https://laravel.com/",
      },
      {
        title: "PHP 8",
        href: "https://www.php.net/",
      },
      {
        title: "Respect des PSR",
        href: "https://www.php-fig.org/psr/",
      },
    ],
  },
  {
    title: "Compétences OPS/Orchestration",
    skills: [
      {
        title: "Ansible",
        href: "https://www.ansible.com/",
      },
      {
        title: "Docker / Docker Compose",
        href: "https://www.docker.com/",
      },
      {
        title: "Bash",
        href: "https://fr.wikibooks.org/wiki/Programmation_Bash/Scripts",
      },
    ],
  },
  {
    title: "Compétences Dév. UI",
    skills: [
      {
        title: "Vue.js 2/3",
        href: "https://vuejs.org/",
      },
      {
        title: "Nuxt 3",
        href: "https://nuxtjs.org/",
      },
      {
        title: "Webpack",
        href: "https://webpack.js.org/",
      },
      {
        title: "Tailwind",
        href: "https://tailwindcss.com/",
      },
      {
        title: "Bootstrap",
        href: "https://getbootstrap.com/",
      },
      {
        title: "jQuery",
        href: "https://jquery.com/",
      },
      {
        title: "JavaScript",
        href: "#",
      },
      {
        title: "SCSS",
        href: "#",
      },
      {
        title: "HTML/CSS",
        href: "#",
      },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      {
        title: "MySQL",
        href: "https://www.mysql.com/fr/",
      },
      {
        title: "Elasticsearch",
        href: "https://www.elastic.co/fr/elasticsearch/",
      },
      {
        title: "InfluxDB",
        href: "https://www.influxdata.com/",
      },
      {
        title: "Redis",
        href: "https://redis.io/",
      },
      {
        title: "Memcached",
        href: "https://fr.wikipedia.org/wiki/Memcached",
      },
      {
        title: "Approche Merise & SGBDR",
        href: "https://fr.wikipedia.org/wiki/Merise_(informatique)",
      },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      {
        title: "Telegraf",
        href: "https://www.influxdata.com/time-series-platform/telegraf/",
      },
      {
        title: "Kibana",
        href: "https://www.elastic.co/fr/kibana/",
      },
      {
        title: "Grafana",
        href: "https://grafana.com/",
      },
      {
        title: "Prometheus",
        href: "https://prometheus.io/",
      },
    ],
  },
  {
    title: "Compétences Générales & Autres",
    skills: [
      {
        title: "Norme OpenAPI 3 / Swagger",
        href: "https://www.openapis.org/",
      },
      {
        title: "Approche Test Driven Development",
        href: "https://fr.wikipedia.org/wiki/Test_driven_development",
      },
      {
        title: "CI/CD GitHub Actions",
        href: "https://github.com/features/actions",
      },
      {
        title: "Tests E2E avec Panther / WebDriver",
        href: "https://github.com/symfony/panther",
      },
      {
        title: "WebSocket",
        href: "https://fr.wikipedia.org/wiki/WebSocket",
      },
      {
        title: "JSON Schema",
        href: "https://json-schema.org/",
      },
      {
        title: "Git / Versioning",
        href: "https://git-scm.com/",
      },
      {
        title: "SCRUM",
        href: "https://fr.wikipedia.org/wiki/Scrum_(d%C3%A9veloppement)",
      },
      {
        title: "AGILE",
        href: "https://fr.wikipedia.org/wiki/M%C3%A9thode_agile",
      },
      {
        title: "Adobe Photoshop",
        href: "https://www.adobe.com/fr/products/photoshop.html",
      },
    ],
  },
  {
    title: "Loisirs",
    skills: [
      {
        title:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block" viewBox="0 0 16 20">' +
          '<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />' +
          "</svg>&nbsp;Cyclotourisme en autonomie",
        href: "https://www.facebook.com/RyanOnBike",
      },
      {
        title: "Guitare / Basse (Rock/Metal) depuis plus de 15 ans",
        href: "#",
      },
      {
        title: "Mixage / Mastering en amateur",
        href: "#",
      },
    ],
  },
];
</script>

<template>
  <!-- skills -->
  <SkillsGroup
    v-for="(skillsGroup, skillsGroupIndex) in skillsGroups"
    :key="skillsGroupIndex"
    :title="skillsGroup.title"
    :skills="skillsGroup.skills"
  />
</template>
