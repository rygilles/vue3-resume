<script setup lang="ts">
import HeaderSection from "./components/HeaderSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SkillsGroupList from "./components/SkillsGroupList.vue";
import AboutMe from "./components/AboutMe.vue";
import JobList from "./components/JobList.vue";
import EducationList from "./components/EducationList.vue";

const photoUrl = "./images/photo-ryan-gilles.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ryan-gilles-293680174/",
    linkExtraClasses: "bg-blue-600 text-white",
    svg:
      '<svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">' +
      '<g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>' +
      "</svg>",
  },
  {
    href: "https://github.com/rygilles/vue3-resume",
    linkExtraClasses: "bg-gray-700 text-white",
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"' +
      'role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">' +
      '<g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>' +
      "</svg>",
  },
  {
    href: "javascript: void(0);",
    linkExtraClasses: "bg-green-700 text-white",
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">' +
      '<path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" /><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />' +
      "</svg>",
    extraClasses: "hidden lg:inline-block",
    onClick: "window.print();",
    target: null,
  },
];
</script>

<template>
  <!-- outer container -->
  <div class="dark:bg-black lg:border lg:border-gray-300 lg:shadow-lg px-2 py-2 lg:py-10 lg:px-10 mx-1 lg:my-0 w-auto lg:w-4/5 mt-0 lg:mt-10 lg:mb-10 lg:rounded-lg">
    <HeaderSection
      :name="$t('name')"
      :job-title="$t('job_title')"
      :image-url="photoUrl"
      :social-links="socialLinks"
    />
    <main
      id="left-col"
      class="gap-x-10 mt-10 flex-col-reverse flex gap-y-10 lg:flex-row"
    >
      <!-- left col -->
      <div class="w-full lg:w-2/6">
        <ContactSection />
        <SkillsGroupList />
      </div>
      <!-- right col -->
      <div class="w-full lg:w-4/6">
        <AboutMe />
        <JobList />
        <EducationList />
      </div>
    </main>
  </div>
</template>
