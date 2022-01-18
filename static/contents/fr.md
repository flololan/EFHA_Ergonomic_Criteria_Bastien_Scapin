# Présentation des critères de Bastien et Scapin dans le cadre de l'accessibilité

## Les critères de Bastien et Scapin

### Objectifs

Originellement publié en 1990, puis mis à jours, [les critères de Bastien et Scapin][bastien-scapin] de 1999 présentent des critères ergonomiques afin de concevoir de meilleures interfaces. Cette publication a fait de grand bruits avant les années 200, et a été ensuite reprise par les études ergonomiques successives afin de conduire des évaluations. 

### Efficacité

En utilisant [ces critères ergonomiques][bastien-scapin], les participants ont statistiquement découvert plus d'obstacles (63%) à l'accessibilité qu'avec le groupe témoin et le groupe ayant la méthode ISO- (48%). Ce constat a été retrouvé [dans une étude de 2004](bastien-scapin-2004) sur l'évaluation de l'efficacité de ces critères ergonomiques avec <span lang="en">l'ISO/DIS 9241-10 Dialogue Principles</span>.

### Limitations

Les critères datent d'avant les années 2000. Une critique justifiée concerne l'obsolescence de ces critères, qui ne sont plus actuels avec les interfaces web modernes.

Néanmoins, ils restent des lignes directrices correctes lors de la conception d'interfaces web. Un point notoire est que ces recommandations sont applicables pour tous type d'utilisateurs, évoqué dans [les liens entre ces critères et l'accessibilité](#liens-entre-ces-critères-et-laccessibilité). Ils semblent être universels !

## Importance de l'accessibilité dans le développement web

### Limitations du web actuel

D’après [une étude australienne de 2012 sur l'accessibilité web][2012-web-accessibility-australian-view], ni les 20 plus grands sites australiens, ni les 20 sites ministériels étudiés n’ont été capable de respecter les standards d’accessibilité nationaux. Cet exemple appui le propos d'[une revue de 23 études d'accessibilité de 2015][2015-accessibility-evaluation-methods-how-far-are-we], rappelant que de nombreuses études démontrent l’inégalité persitente entre les personnes handicapées et non handicapées en ce qui concerne l’accès et l’utilisation du web, en particulier avec la croissance significative des normes de développement web et de son utilisation. En effet, les directives en matière d'accessibilité sont peu respectées dans les organisations publiques et éducatives d’après [une autre étude de 2012 portant sur les pages d'accueil de 100 entreprises de développement web][2012-guidelines-icons-and-marketable-skills-an-accessibility-evaluation-of-100-web-development-company-homepages].

Dès le début du développement des interfaces, les personnes atteintes de déficiences ne sont pas suffisamment prises en considération. Livrer du contenu accessible est percu comme un challenge par les designers et développeurs, selon [la revue des études d'accessibilité de 2015][2015-accessibility-evaluation-methods-how-far-are-we] Ils sont en revanche 85% à vouloir se former dans ce domaine [d'après l'études de 2012 sur les pages d'accueil][2012-guidelines-icons-and-marketable-skills-an-accessibility-evaluation-of-100-web-development-company-homepages]. Même lorsque les utilisateurs sont pris en compte, [une étude de 2016 portant sur l'évaluation experte de l'accessibilité][2016-expert-accessibility-reviews] rapporte que les sites web présentent toujours de « nombreux » problèmes d'accessibilité et qu’elle ne s'est pas améliorée au fil des ans. Nous pouvons aussi remarquer que ce n’est pas qu’au développeurs et designers de contribuer à l’accessibilité, mais bien à toute la chaîne de production liée au contenu et interfaces web de s’engager dans l’accessibilité. Ce qui n’est pas encore évident.

### Pourquoi développer des sites webs accessibles ?

#### L'accessibilité impacte une grande partie de la population

[L'étude australienne][2012-web-accessibility-australian-view] souligne que 10% des australiens ont une déficience affectant leur usage des technologies numériques d’après le Royal National Institute of Blind People en 2011). Comme l’exprime Huang en 2002, l'accès à l'internet détermine dans une large mesure si l'on peut ou non participer pleinement au monde de plus en plus turbulent et interconnecté. En effet, il est et devient impératif de développer des sites accessibles, ce pour plusieurs raisons.

#### Une obligation légale

Fondamentalement, développer des sites accessibles devient une obligation légale dans chaque pays. Par exemple en Australie, l’Australian Human Rights and Equal Opportunities Commission (AHREOC) en a fait une obligation sous peine d’amende. L’exemple souvent cité est l’amende attribuée au site web du Sydney Organizing Committee of the Olympic Games (noté dans [le <span lang="en">World Wide Web Access: Disability Discrimination Act Advisory Notes</span>][www-access-disability-discrimination-act-advisory-notes]). Dans les pays dit développés, notamment les États-Unis, Canade, pays de l’UE et asiatiques, des normes d’accessibilité sont imposées. Cela n’est cependant pas uniquement par les contraintes légales que les sites se doivent d’être accessible, puisqu’il s’agit aussi d’avantages.

### Économiquement viable

Un site web accessible est aussi bénéfique économiquement. Avec 10% à 20% de la population atteinte de déficience en Australie [selon l'étude <span lang="en">Website accessibility: an Australian view</span> de 2012][2012-web-accessibility-australian-view], ou bien 1,5% de français atteint de déficience visuelle sévère d'après [les chiffres de 2021 avancés par aveuglesdefrance.org][aveuglesdefrance], un site web marchand obtient des prospects supplémentaires. Dans cet  esprit concurrentiel, l'accessibilité d'un site web peut faire gagner ou perdre des clients et avoir un impact significatif sur les bénéfices d'une entreprise. Certes cela est bénéfique économiquement, mais ce n’est pas le seul avantage.

### Augmenter sa visibilité

De part son accessibilité, un site web réduit la discrimination liées aux déficiences, et augmente ainsi sa visibilité. Cela peut, à juste titre, être un argument de vente, de qualité ou d’engagement, comme exprimée dans [l'étude de 2012 sur l'accessibilité web en Australie][2012-web-accessibility-australian-view].

De ces constats de sites web possédant des obstacles à l’accessibilité et de ces motivations précédemment évoquées, il nous semble primordial de savoir construire et évaluer un site web.

## Liens entre ces critères et l'accessibilité

### Universalité des critères

<dfn>Universel</dfn> signifie dans notre cadre que le critère élémentaire est applicable à tous les utilisateurs, indépendamment de leur(s) potentielle(s)  déficience(s) ! 

 <table>
  <caption>Tri des critères élémentaires selon leur universalité ainsi que la justification associée</caption>
  <tr>
    <th>Nom du critère</th>
    <th scope="col">Universel</th>
    <th scope="col">Non-universel</th>
    <th scope="col">Justification</th>
  </tr>
  <tr>
    <th scope="row">1.1. Incitation</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.2.1. Groupement / Distinction par la localisation</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.2.2. Groupement / Distinction par le format</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.3. Feedback immédiat</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.4. Lisibilité</th>
    <td></td>
    <td>✔️</td>
    <td>Les personnes aveugles ne sont pas affectées par ce critère. En revanche, les personnes ayant des déficiences visuelles sont fortement impactées par ce critère.</td>
  </tr>
  <tr>
    <th scope="row">2.1.1. Concision</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">2.2.2. Actions minimales</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">2.3. Densité informationnelle</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">3.1. Actions explicites</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">3.2. Contrôle Utilisateur</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">4.1. Flexbilité</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">4.2. Prise en compte de l'expérience utilisateur</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">5.1. Protection contre les erreurs</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">5.2. Qualité des messages d'erreurs</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">5.3. Correction des erreurs</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">6. Homogénéité / Cohérence</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">7. Signifiance des codes et dénominations</th>
    <td>✔️</td>
    <td></td>
    <td>La signifiance des codes et dénominations est même renforcée lorsque un lecteur d'écran est utilisé.</td>
  </tr>
</table> 

Il en résulte que 24 des 25 critères élémentaires sont universels et peuvent s'appliquer à tous les utilisateurs.
En revanche, nous pouvons constater qu'ils sont d'autant plus important que les personnes possèdent des déficiences.

## Références

[bastien-scapin]: https://www.researchgate.net/publication/263039319_Ergonomic_Criteria_for_Evaluating_the_Ergonomic_Quality_of_Interactive_Systems

* Scapin, D. L., & Bastien, J. M. C. (1997). <span lang="en">Ergonomic criteria for evaluating the ergonomic quality of interactive systems. *Behaviour & Information Technology</span>, 16*, 220-231.

[ bastien-scapin-2004]: https://academic.oup.com/iwc/article-abstract/11/3/299/794295

* J. M. C. Bastien, D. L. Scapin, et C. Leulier, <span lang="en">« The ergonomic criteria and the ISO/DIS 9241-10 dialogue principles: a pilot comparison in an evaluation task », Interacting with Computers </span></span>, vol. 11, no 3, p. 299‑322, janv. 1999, doi: 10.1016/S0953-5438(98)00038-1.

[2016-expert-accessibility-reviews]: https://www.semanticscholar.org/paper/Beyond-Web-Content-Accessibility-Guidelines%3A-Expert-Calvo-Seyedarabi/1b3fb5de886c5f28a6c37772a32180ed2462e96b/figure/11

* R. Calvo, F. Seyedarabi, et A. Savva, « <span lang="en">Beyond Web Content Accessibility Guidelines: Expert Accessibility Reviews », in Proceedings of the 7th International Conference on Software Development and Technologies for Enhancing Accessibility and Fighting Info-exclusion</span>, New York, NY, USA, déc. 2016, p. 77-84. doi: 10.1145/3019943.3019955.

[2012-web-accessibility-australian-view]: https://www.researchgate.net/profile/David-Powers-4/publication/262323623_Website_accessibility_an_Australian_view/links/54ed43190cf27fbfd77247e3/Website-accessibility-an-Australian-view.pdf

* J. Grantham, E. Grantham, et D. Powers, « <span lang="en">Website accessibility: an Australian view », in Proceedings of the Thirteenth Australasian User Interface Conference</span> - Volume 126, AUS, janv. 2012

[2015-accessibility-evaluation-methods-how-far-are-we]: https://dlnext.acm.org/doi/abs/10.1145/2837185.2843850

* I. S. Baazeem et H. S. Al-Khalifa, « <span lang="en">Advancements in web accessibility evaluation methods: how far are we? », in Proceedings of the 17th International Conference on Information Integration and Web-based Applications & Services</span>, New York, NY, USA, déc. 2015, p. 1-5. doi: 10.1145/2837185.2843850

[2012-guidelines-icons-and-marketable-skills-an-accessibility-evaluation-of-100-web-development-company-homepages]: https://www.semanticscholar.org/paper/Guidelines%2C-icons-and-marketable-skills%3A-an-of-100-Gilbertson-Machin/5d60ab0f07c4aa38a130c4ee5fc6c52c63f571c3

* T. D. Gilbertson et C. H. C. Machin, « <span lang="en">Guidelines, icons and marketable skills: an accessibility evaluation of 100 web development company homepages », in Proceedings of the International Cross-Disciplinary Conference on Web Accessibility</span>, New York, NY, USA, avr. 2012, p. 1-4. doi: 10.1145/2207016.2207024.

[aveuglesdefrance]: https://aveuglesdefrance.org/quelques-chiffres-sur-la-deficience-visuelle/

* Fédération des aveugles de France, Quelques chiffres sur la déficience visuelle, 2021, https://aveuglesdefrance.org/quelques-chiffres-sur-la-deficience-visuelle/ 

[www-access-disability-discrimination-act-advisory-notes]: https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver

* « <span lang="en">World Wide Web Access: Disability Discrimination Act Advisory Notes version 4.1 (2014) | Australian Human Rights Commission </span>».
    https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver