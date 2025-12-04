# Test Frontend 2

Application de gestion d'outils internes avec analytics, construite avec TypeScript, TanStack Query, et Tailwind CSS v4.

## 1. 🚀 Quick Start

### Installation et lancement

```bash
npm install && npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Prérequis

- **Node.js** 18+ et npm
- **Backend JSON Server** (voir `docs/JSON_serve_backend.md` pour la configuration)

### Commandes disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build de production
npm run lint     # Vérifie le code avec ESLint
npm run preview  # Prévisualise le build de production
```

## 2.🏗️ Architecture

### Structure du projet

L'application suit une architecture en couches et modulaire :

```
src/
├── components/         # Composants React réutilisables
│   ├── analytics/      # Composants d'analytics (graphiques, KPIs)
│   ├── common/         # Composants communs (forms, layout)
│   └── tool/           # Composants spécifiques aux outils
├── config/             # Configuration (API, query client, settings)
├── context/            # Contextes React (Theme)
├── hooks/              # Hooks personnalisés
│   └── queries/        # Hooks TanStack Query par domaine
├── icons/              # Bibliothèque d'icônes SVG
├── layout/             # Composants de layout (Header, Footer, NavBar)
├── pages/              # Pages de l'application
│   ├── analytics/      # Page Analytics
│   └── tool/           # Pages Tools (Dashboard, List, Details, Create, Edit)
├── routes/             # Configuration des routes
├── services/           # Services API (logique métier)
├── types/              # Types TypeScript
│   ├── api/            # Types pour les réponses API
│   └── entities/       # Types pour les entités métier
├── utils/              # Utilitaires (api-client, formatters)
└── mock/               # Données mock pour le développement
```

### Architecture de données

**Flux de données :**

```
Composant → Hook (TanStack Query) → Service → Client HTTP → Backend JSON Server
```

**Technologies clés :**

- **TanStack Query** : Gestion du cache, synchronisation automatique, états de chargement
- **Axios** : Client HTTP avec intercepteurs (via `axios-instance.ts` et `api-client.ts`)
- **TypeScript** : Typage strict pour la sécurité de type
- **React Router v7** : Navigation et routing
