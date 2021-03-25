# Documentation

Voici la documentation pour modifier ou mettre en ligne ton site.

## Utilisation en local

### Installation des dépendances

Après avoir récupérer le projet sur GitHub, utilise cette commande à la racine du projet.

```bash
npm install
```

### Lancement du serveur

Pour lancer ton site en local, utilise cette commande à la racine du projet.

```bash
npm start
```

### Visualisation du site

Tu peux visualiser le site sur ton [localhost:3000](http://localhost:3000).

## Mise en ligne

Tu ne peux pas mettre ton site en ligne sur ton serveur comme ça. Tu dois faire **build** le site par React.

### Build le projet

Utilise cette commande à la racine du projet.

```bash
npm run build
```

### Mettre le site sur ton serveur

Tu peux maintenant prendre tout ce qu'il y a dans le dossier `build` et le déposer dans le dossier de ton hébergeur qui est sûrement `www`.

## L'infrastructure

Je te détail ici l'infrastructure du projet pour faciliter sa modification.

Tu as **6 dossiers** principaux :

* `public` qui contient tes images, pdf, etc.
* `App` qui contient ton application et le **routeur**
* `components` qui contient tout tes composants
* `icons` qui contient toutes tes icons en SVG
* `pages` qui contient toutes tes pages
* `styles` qui contient toutes tes variables de Sass

## Le routeur

Pour modifier l'URL de tes pages, tu vas devoir modifier le routeur qui se trouve dans le dossier `src/App/Router.js`.

## Les images

Pour changer ou ajouter des images, tu dois les mettre directement dans le dossier `public/images`.

Par la suite, tu vas pouvoir les appeler dans ton code avec l'URL suivant : `public/images/le-chemin-de-ton-image`.


## Les polices

Concernant les polices, je les import dans le **layout**, pour que chaque page les import. Si tu es amené à vouloir les changer, il faudra mettre les nouvelles polices dans ce dossier : `src/components/Layout/fonts` et les import dans ce fichier : `src/components/Layout/Layout.module.sass`.

## Les variables

Pour modifier les couleurs, les polices ou encore les animations de ton site, c'est très simple. Tu as juste à les modifier dans le dossier `src/styles`

## Les REM

Je ne vais pas entrer dans les détails, mais utiliser les **REM** et plus pratique qu'utiliser les **pixels**, notamment dans le responsive et pour l'accessibilité.

La calcul pour passser de l'un à l'autre est un peu barbare et du coup, pour te faciliter la chose j'ai mis en Sass au niveau du html de toutes les pages `font-size: 62.5%`.

Ce qui signifie que maintenant dans tout ton site `1rem` = `10px`.

Je t'écris quelques exemples pour que tu comprennes un peu mieux :

* `0.5rem` = `5px`
* `2.4rem` = `24px`
* `5rem` = `50px`
* `0rem` = `0px`
* `1.1rem` = `11px`

## Le système de classe avec les `$`

Pour utiliser plusieurs classe sur un élément, c'est un peu compliqué en React.

J'ai de mon côté utilisé le système de **gabarits**.

### Pour 1 seule classe

```jsx
className={styles.my__class}
```

### Pour 2 ou plusieurs classes

```jsx
className={`${styles.my__class} ${styles.my_second__class}`}
```

## Les animations

Toutes les animations sont présentes dans le fichier `src/styles/_animations.sass`.

Pour changer le délai d'animation d'un élément, il faut le faire directement au niveau du fichier Sass de cet élément.

Il faut que tu cherches sa propriété `animation-delay`.

## Le SEO

Concernant le SEO, je t'ai ajouté la dépendance `Helmet` qui te permet dans chacunes de tes pages, d'ajouter une description, un titre et tout autres éléments pouvant être présent dans le **<head\>** d'une page.

`Helmet` va donc te permettre d'avoir une description et un titre différent par page.

## Je suis disponible à tout moment

Si je n'ai pas été clair ou que tu ne comprends pas quelque chose, tu peux me poser une question à tout moment.

De plus, je peux évidemment effectuer des changements sur ton site s'ils sont trop difficile à faire pour toi !

---

[Sami Lafrance](https://www.samilafrance.com/)
