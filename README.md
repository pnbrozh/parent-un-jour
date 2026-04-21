# Parent un jour

Site web d'accompagnement périnatal de Pascaline. Construit avec [Astro](https://astro.build), déployé sur GitHub Pages, domaine : [parentunjour.ca](https://parentunjour.ca).

## Développement local

```sh
npm install
npm run dev
```

Le site est servi sur [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Déploiement

Chaque push sur `main` déclenche un déploiement automatique via GitHub Actions (voir `.github/workflows/deploy.yml`).

## Structure

```
src/
├── layouts/     # Layouts partagés (shell HTML, head, meta)
├── components/  # Composants réutilisables (Nav, Footer)
├── pages/       # Une page = un fichier .astro
└── styles/      # CSS global

public/
├── assets/      # Logo, images statiques
└── CNAME        # Domaine custom pour GitHub Pages
```
