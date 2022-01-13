# Actions explicites

## Définition

Le critère *Actions Explicites* concerne la relation pouvant exister entre le fonctionnement de l’application et les actions des utilisateurs. Cette relation doit être explicite, c’est-à-dire que le système doit exécuter seulement les opérations demandées par l’utilisateur et pas d’autres et ce, au moment où il les demande.

## Justification(s)

Quand les opérations du système résultent des actions des utilisateurs, on observe moins d’erreurs et la compréhension du fonctionnement de l’application est facilitée.

## Exemples de recommandations

* Le système doit requérir une action explicite de validation par l’utilisateur (ex.: Entrée, Validation, OK) suite à une entrée de données; aucun traitement (ex.:sauvegarde d’un fichier) ne devrait être la conséquence d’une autre action (ex.: une demande d’impression).
* Lors d’une sélection d’options de menu par pointage, prévoir une action explicite de validation.
* L’entrée de commandes doit se terminer par une indication de fin (ex.: ENTER, OK) à laquelle des possibilités d’édition doivent être préalables.
