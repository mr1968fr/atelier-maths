# L’Atelier des Maths — Première

Refonte du site sous la forme d’un manuel scolaire numérique, responsive et interactif.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Structure

- `app/page.tsx` : accueil et sommaire du manuel
- `app/[slug]/page.tsx` : route commune aux six chapitres
- `lib/chapters.ts` : contenu pédagogique centralisé
- `components/ChapterView.tsx` : cours, exercices et progression
- `components/CourseGrid.tsx` : progression sur la page d’accueil
- `app/globals.css` : identité visuelle et responsive

## Progression

La progression est enregistrée localement dans le navigateur (`localStorage`). Aucun compte n’est nécessaire et aucune donnée n’est envoyée à un serveur.

## Déploiement Render

Commande de construction : `npm run build`  
Commande de démarrage : `npm run start`
