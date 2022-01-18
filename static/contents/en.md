# Presentation of the Bastien and Scapin criteria in the context of accessibility

## The criteria of Bastien and Scapin

### Goals

Originally published in 1990, and subsequently updated, [Bastien and Scapin's criteria][bastien-scapin] of 1999 present ergonomic criteria for designing better interfaces. This publication made a lot of noise before the 200s, and was then taken up by successive ergonomic studies to conduct evaluations.

### Efficiency

Using [these ergonomic criteria][bastien-scapin], participants statistically discovered more barriers (63%) to accessibility than with the control group and the ISO- group (48%). This finding was found [in a 2004 study](bastien-scapin-2004) on the evaluation of the effectiveness of these ergonomic criteria with the ISO/DIS 9241-10 Dialogue Principles.

### Limitations

The criteria date from before the year 2000. A justified criticism is that these criteria are outdated and no longer relevant to modern web interfaces.
Nevertheless, they remain correct guidelines when designing web interfaces. One notable point is that these recommendations are applicable to all types of users, as discussed in [the links between these criteria and accessibility](#links-between-these-criteria-and-accessibility). They seem to be universal!

## Importance of accessibility in web development

### Limitations of the current web

According to [a 2012 Australian web accessibility study][2012-web-accessibility-australian-view], neither the 20 largest Australian sites nor the 20 government department sites surveyed were able to meet national accessibility standards. This example supports [a review of 23 accessibility studies from 2015][2015-accessibility-evaluation-methods-how-far-are-we], reminding us that many studies demonstrate the persistent inequality between disabled and non-disabled people in accessing and using the web, particularly with the significant growth in web development standards and usage. Indeed, accessibility guidelines are poorly adhered to in public and educational organisations according to [another 2012 study of the homepages of 100 web development companies][2012-guidelines-icons-and-marketable-skills-an-accessibility-evaluation-of-100-web-development-company-homepages].

From the very beginning of interface development, people with disabilities are not sufficiently taken into account. Delivering accessible content is perceived as a challenge by designers and developers, according to [2015 accessibility-evaluation-methods-how-far-are-we][2015-accessibility-evaluation-methods]. 85% of them want to train in this area [according to the 2012 homepage study][2012-guidelines-icons-and-marketable-skills-an-accessibility-evaluation-of-100-web-development-company-homepages]. Even when users are taken into account, [a 2016 expert accessibility evaluation study][2016-expert-accessibility-reviews] reports that websites still have "many" accessibility problems and that it has not improved over the years. We can also note that it is not only developers and designers who have to contribute to accessibility, but the whole production chain related to web content and interfaces has to engage in accessibility. This is not yet obvious.

### Why develop accessible websites?

#### Accessibility affects a large part of the population

[The Australian study [2012-web-accessibility-australian-view] highlights that 10% of Australians have a disability affecting their use of digital technologies according to the Royal National Institute of Blind People in 2011). As expressed by Huang in 2002, access to the internet determines to a large extent whether one can fully participate in the increasingly turbulent and interconnected world. Indeed, it is and is becoming imperative to develop accessible sites for several reasons.

#### A legal obligation

Basically, developing accessible sites is becoming a legal obligation in every country. For example in Australia, AHREOC has made it a requirement under penalty of fine. The example often cited is the fine attributed to the website of the Sydney Organizing Committee of the Olympic Games (noted in [the <span lang="en">World Wide Web Access: Disability Discrimination Act Advisory Notes</span>][www-access-disability-discrimination-act-advisory-notes]). In the so-called developed countries, including the United States, Canade, EU countries and Asia, accessibility standards are imposed. However, it is not only by legal constraints that sites must be accessible, since it is also a question of advantages.

### Economically viable

An accessible website is also economically beneficial. With 10% to 20% of the population with disabilities in Australia [according to the 2012 Website accessibility: an Australian view][2012-web-accessibility-australian-view], or 1.5% of the French population with severe visual impairment according to [2021 figures from aveuglesdefrance.org][aveuglesdefrance], a commercial website gets additional leads. In this competitive spirit, the accessibility of a website can make or break customers and have a significant impact on the profits of a company. Of course, this is economically beneficial, but it is not the only advantage.

### Increase your visibility

By being accessible, a website reduces disability discrimination, and thus increases its visibility. This can rightly be a selling point, quality or commitment, as expressed in [the 2012 Australian Web Accessibility Study][2012-web-accessibility-australian-view].
From these observations of websites with barriers to accessibility and these motivations previously mentioned, it seems essential to us to know how to build and evaluate a website.

## Links between these criteria and accessibility

### Universality of criteria

<dfn>Universal</dfn> means in our framework that the elementary criterion is applicable to all users, regardless of their potential impairment(s)! 

 <table>
  <caption>Sorting of elementary criteria according to their universality along with the associated rationale</caption>
  <tr>
    <th>Name of criterion</th>
    <th scope="col">Universal</th>
    <th scope="col">Non-universal</th>
    <th scope="col">Justification</th>
  </tr>
  <tr>
    <th scope="row">1.1. Incentive</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.2.1. Grouping/Distinguishing by location</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.2.2. Grouping/Distinguishing by format</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.3. Immediate feedback</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">1.4. Readability</th>
    <td></td>
    <td>✔️</td>
    <td>People who are blind are not affected by this criterion. In contrast, people with visual impairments are strongly impacted by this criterion.</td>
  </tr>
  <tr>
    <th scope="row">2.1.1. Conciseness</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">2.2.2. Minimum Actions</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">2.3. Information density</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">3.1. Explicit actions</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">3.2 User Control</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">4.1. Flexibility</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">4.2. Consideration of user experience</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">5.1. Error protection</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">5.2. Error message quality</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">5.3. Error correction</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">6. Homogeneity/Consistency</th>
    <td>✔️</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <th scope="row">7. Meaning of codes and denominations</th>
    <td>✔️</td>
    <td></td>
    <td>The meaning of codes and denominations is even enhanced when a screen reader is used.</td>
  </td>
</table> 

As a result, 24 of the 25 basic criteria are universal and can be applied to all users.
On the other hand, we can see that they are all the more important the more people have disabilities.

## References

[bastien-scapin]: https://www.researchgate.net/publication/263039319_Ergonomic_Criteria_for_Evaluating_the_Ergonomic_Quality_of_Interactive_Systems

* Scapin, D. L., & Bastien, J. M. C. (1997). Ergonomic criteria for evaluating the ergonomic quality of interactive systems. *Behaviour & Information Technology, 16*, 220-231.

[ bastien-scapin-2004]: https://academic.oup.com/iwc/article-abstract/11/3/299/794295

* J. M. C. Bastien, D. L. Scapin, et C. Leulier, « The ergonomic criteria and the ISO/DIS 9241-10 dialogue principles: a pilot comparison in an evaluation task », Interacting with Computers, vol. 11, no 3, p. 299‑322, janv. 1999, doi: 10.1016/S0953-5438(98)00038-1.

[2016-expert-accessibility-reviews]: https://www.semanticscholar.org/paper/Beyond-Web-Content-Accessibility-Guidelines%3A-Expert-Calvo-Seyedarabi/1b3fb5de886c5f28a6c37772a32180ed2462e96b/figure/11

* R. Calvo, F. Seyedarabi, et A. Savva, « Beyond Web Content Accessibility Guidelines: Expert Accessibility Reviews », in Proceedings of the 7th International Conference on Software Development and Technologies for Enhancing Accessibility and Fighting Info-exclusion</span>, New York, NY, USA, déc. 2016, p. 77-84. doi: 10.1145/3019943.3019955.

[2012-web-accessibility-australian-view]: https://www.researchgate.net/profile/David-Powers-4/publication/262323623_Website_accessibility_an_Australian_view/links/54ed43190cf27fbfd77247e3/Website-accessibility-an-Australian-view.pdf

* J. Grantham, E. Grantham, et D. Powers, « Website accessibility: an Australian view », in Proceedings of the Thirteenth Australasian User Interface Conference - Volume 126, AUS, janv. 2012

[2015-accessibility-evaluation-methods-how-far-are-we]: https://dlnext.acm.org/doi/abs/10.1145/2837185.2843850

* I. S. Baazeem et H. S. Al-Khalifa, « Advancements in web accessibility evaluation methods: how far are we? », in Proceedings of the 17th International Conference on Information Integration and Web-based Applications & Services, New York, NY, USA, déc. 2015, p. 1-5. doi: 10.1145/2837185.2843850

[2012-guidelines-icons-and-marketable-skills-an-accessibility-evaluation-of-100-web-development-company-homepages]: https://www.semanticscholar.org/paper/Guidelines%2C-icons-and-marketable-skills%3A-an-of-100-Gilbertson-Machin/5d60ab0f07c4aa38a130c4ee5fc6c52c63f571c3

* T. D. Gilbertson et C. H. C. Machin, « Guidelines, icons and marketable skills: an accessibility evaluation of 100 web development company homepages », in Proceedings of the International Cross-Disciplinary Conference on Web Accessibility, New York, NY, USA, avr. 2012, p. 1-4. doi: 10.1145/2207016.2207024.

[aveuglesdefrance]: https://aveuglesdefrance.org/quelques-chiffres-sur-la-deficience-visuelle/

* <span lang="fr">Fédération des aveugles de France, Quelques chiffres sur la déficience visuelle</span>, 2021, https://aveuglesdefrance.org/quelques-chiffres-sur-la-deficience-visuelle/ 

[www-access-disability-discrimination-act-advisory-notes]: https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver

* « World Wide Web Access: Disability Discrimination Act Advisory Notes version 4.1 (2014) | Australian Human Rights Commission».
    https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver