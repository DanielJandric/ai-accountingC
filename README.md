# 🚀 Automatisation IA Comptable - Schéma Hybride

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 📋 Description

Webapp moderne et interactive expliquant le schéma hybride pour l'automatisation d'un agent IA comptable. Cette application présente une architecture modulaire combinant ERP traditionnel et IA de pointe avec une conformité Swiss GAAP FER.

## ✨ Fonctionnalités

- **Architecture Hybride** : Visualisation des 5 composants principaux (Abacus ERP, MCP, n8n, OpenAI, Webapp)
- **Workflows Automatisés** : 4 processus comptables avec animations interactives
- **Sécurité & Conformité** : Swiss GAAP FER, LPD/RGPD, OAuth 2.0
- **Métriques & ROI** : Dashboard avec indicateurs de performance et plan d'implémentation
- **Design Responsive** : Interface moderne avec Tailwind CSS

## 🛠️ Technologies

- **Next.js 14** - Framework React pour production
- **React 18** - Bibliothèque UI
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes et élégantes

## 📦 Installation Locale

```bash
# Cloner le repository
git clone https://github.com/[votre-username]/ai-accounting-automation.git

# Naviguer dans le dossier
cd ai-accounting-automation

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🚀 Déploiement sur GitHub

### Étape 1: Créer un nouveau repository GitHub

1. Allez sur [GitHub.com](https://github.com/new)
2. Nommez votre repository : `ai-accounting-automation`
3. Gardez-le public
4. **NE PAS** initialiser avec README (nous en avons déjà un)
5. Cliquez sur "Create repository"

### Étape 2: Pusher le code

```bash
# Initialiser git dans votre projet
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - AI Accounting Automation webapp"

# Ajouter l'origine GitHub (remplacez [votre-username])
git remote add origin https://github.com/[votre-username]/ai-accounting-automation.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

## 🌐 Déploiement sur Vercel

### Option 1: Via l'interface Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New Project"
4. Importez votre repository `ai-accounting-automation`
5. Vercel détectera automatiquement que c'est un projet Next.js
6. Cliquez sur "Deploy"
7. Attendez 2-3 minutes
8. Votre app sera live sur `https://[votre-projet].vercel.app`

### Option 2: Via Vercel CLI

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Suivez les instructions :
# - Set up and deploy? Y
# - Which scope? (choisir votre compte)
# - Link to existing project? N
# - What's your project name? ai-accounting-automation
# - In which directory is your code? ./
# - Want to override settings? N

# Votre app sera déployée !
```

## 🔧 Variables d'environnement (optionnel)

Si vous avez besoin d'ajouter des variables d'environnement :

1. Créez un fichier `.env.local` à la racine
2. Ajoutez vos variables :
```env
NEXT_PUBLIC_API_URL=https://your-api.com
```

3. Sur Vercel, allez dans Project Settings > Environment Variables

## 📱 Structure du Projet

```
ai-accounting-automation/
│
├── components/
│   └── AIAccountingAutomationApp.jsx   # Composant principal
│
├── pages/
│   ├── _app.js                         # Configuration Next.js App
│   ├── _document.js                    # Configuration HTML
│   └── index.js                        # Page d'accueil
│
├── public/
│   └── (fichiers statiques)
│
├── styles/
│   └── globals.css                     # Styles globaux avec Tailwind
│
├── .gitignore                          # Fichiers ignorés par Git
├── next.config.js                      # Configuration Next.js
├── package.json                        # Dépendances et scripts
├── postcss.config.js                   # Configuration PostCSS
├── README.md                           # Documentation
└── tailwind.config.js                  # Configuration Tailwind CSS
```

## 🎯 Scripts Disponibles

```bash
npm run dev      # Lancer en développement (http://localhost:3000)
npm run build    # Construire pour production
npm run start    # Lancer la version production
npm run lint     # Vérifier le code avec ESLint
```

## 📄 Licence

MIT License - Libre d'utilisation

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📧 Contact

Pour toute question ou suggestion, ouvrez une issue sur GitHub.

## 🌟 Remerciements

- Architecture conçue pour une conformité Swiss GAAP FER
- Intégration avec Abacus ERP via API AbaConnect
- Orchestration avec n8n
- Intelligence artificielle powered by OpenAI

---

**Développé avec ❤️ pour la transformation digitale de la comptabilité**
