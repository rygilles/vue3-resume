<template>
  <section id="introduction" class="text-justify">
    <!-- about me -->
    <h2 class="text-2xl pb-1 border-b font-semibold">Présentation</h2>
    <p class="mt-4 text-base">
      En vue d'un déménagement et changement de région avant la fin de l'année
      pour la <strong>Nouvelle Aquitaine</strong>, je suis en recherche active
      d'un emploi en full remote dans un premier temps, puis possiblement sur
      place autour de <strong>La Rochelle</strong>, <strong>Saintes</strong>,
      voir <strong>Bordeaux</strong>.
    </p>
    <p class="mt-4 text-base">
      Mes compétences sont principalement orientées autour du
      <strong>développement Web, full stack et Ops</strong>.
    </p>
    <p class="mt-4 text-base">
      Actuellement dans la société
      <a
        class="hover:underline font-bold"
        href="https://www.e-monsite.com/"
        target="_blank"
        >E-monsite</a
      >, je travaille principalement avec le framework
      <strong>Symfony</strong> en <strong>PHP 8</strong> sur un CMS propriétaire
      depuis près de 10 ans
      <em
        >(MySql, Memcache, Node/WebPack pour le JS, HaProxy, Cloudflare,
        monitoring Telegraf/InfluxDB/Grafana, etc.)</em
      >.
    </p>
    <p class="mt-4 text-base">
      Depuis plusieurs années maintenant, j’ai également apporté la partie Ops
      au sein de l’équipe de développeurs en prenant la main sur le
      <strong>CI/CD & tests</strong>
      <em>(GitHub Actions, Docker)</em>, la création d’environnements de
      développement de la plateforme pour l’équipe
      <em>(Ansible, Docker)</em> mais aussi de sandboxing pour permettre la
      validation de branche feature & des tests E2E
      <em>(sur une VM GCP avec Traefik)</em> notamment avec les services de
      paiement que nous proposons à nos clients <em>(Ngrok, Panther)</em>
      et pour ainsi pouvoir adopter une approche TDD sur les points les plus
      critiques de notre CMS propriétaire.
    </p>
    <p class="mt-4 text-base">
      J’ai également créé et je maintiens d’autres projets annexes/outils de
      notre plateforme en “<strong>full stack</strong>” <em>(Laravel, Vue)</em>
      comme notre outil de création automatique de certificats pour les noms de
      domaines de nos clients
      <em>(Let's Encrypt)</em>
      avec
      <a
        class="hover:underline"
        href="https://www.ems-encrypt.com/"
        target="_blank"
        >ems-encrypt.com</a
      >
      ou un autre outil permettant une indexation et la recherche avancée dans
      les contenus de nos sites clients
      <em>(stack ELK pour les tests & avec Algolia pour la prod)</em> avec
      <a
        class="hover:underline"
        href="https://www.ems-search.com/"
        target="_blank"
        >ems-search.com</a
      >.
    </p>
    <p class="mt-4 text-base">
      Le déploiement dans le Cloud, bien qu’étant un sujet qui m'intéresse
      beaucoup <em>(K8S notamment)</em>
      ne m’est pas encore très familier pour le moment étant donné que nous
      travaillons principalement avec des serveurs fronts “bare-metal”, le
      trafic sur notre plateforme étant bien trop important pour envisager une
      migration vers du cloud en termes de coûts et de maintenabilité
      <em
        >(mais également car nous avons un SysAdmin en astreinte qui est en
        charge de maintenir l’ensemble des services up et d’endiguer
        manuellement par moment les DDOS et autres problèmes techniques pouvant
        survenir les weekends & jours fériés)</em
      >.
    </p>
  </section>
</template>
