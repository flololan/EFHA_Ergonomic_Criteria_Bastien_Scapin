
## Fonctionnalités / Plan de la présentation

- Introduction / Contexte
  - présentation de critères ergonomiques de Bastien et Scapin
    - construire et évaluer l'ergonomie d'une interface
  - site construit comme un site visant a être utilisé en production, intérêt: intégrer ces connaissances en condition réelle de développement
- Architecture @Flo
  - Homepage
  - Multilangue (fr/en)
  - Footer
    - emoji dans le texte (couvert par un aria-label) --> recommandations: https://blog.hello-bokeh.fr/2020/07/23/des-emoji-accessibles/; TL;DR: https://shaarli.lyokolux.space/?mXhZWg
  
---

  - tableau (simple)
- settings
  - prefers-reduce-motion (binding to native OS)
  - dyslexia-friendly font --> normalement, laisser le choix à l'utilisateur de définir sa police favorite 
- contact-form
  - labels
  - errors
  - aria-live: polite for dynamic content
- Critères
  - Présentation des recherches
  - Sous-nav pour les différents critères
    - navigation entre les liens via une 
  - Visite d'un critère
  - vue mobile / zoom (200-300%)
- Cookie Banner
- Partie: Améliorations (accessibilité) & Discussion
- Conclusion ! 


- le [texte ne doit PAS être justifié](https://www.accede-web.com/notices/editoriale-modele/bonnes-pratiques/ne-pas-justifier-le-texte/), contrairement à ce que nous avons fait au départ

## Améliorations (accessibilité) & Discussion

- Évalué avec WAVE
  - 2 images avec des alt vides -> normal car les deux drapeaux n'ont pas d'alternatif puisqu'elles sont couvertes par les liens
  - 29 items, faible contraste -> lien dans les critères de navigation -> changé le thème de Bootstrap
  - 1 very low contrast -> bouton "Aller au contenu principal" text gris sur gris 
- Afficher où en est l'utilisateur dans la navigation des critères ou dans une page de contenu
  - Sommaire de navigation -> titres d'une page  de contenu, comme sur ameli.fr
- navigation uniquement par un menu -> ajouter une barre de recherche et/ou un sitemap (pas uniquement pour les robots)
- Petites remarques:
  - Décrire le logo du site dans l'attribut `alt`
  - Bouton pour revenir en haut de la page lorsqu'on navigue dans des pages de contenu
  - Les liens externes n'ont pas l'attribut hreflang (ex: [la page de présentation des critères](https://efha-ergonomic-criteria-bastien-scapin.vercel.app/fr/criteria))
  - présenter la conformité dans chaque page ou type de page, au lieu d'une conformité générale
  - le focus doit toujours être visible, nous ne le gérons pas encore
- Discussions
  - les SVGs sont couverts par un span avec un aria-label


