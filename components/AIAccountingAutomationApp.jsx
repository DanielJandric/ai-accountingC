import React, { useState, useEffect } from 'react';
import { 
  Server, Database, Cpu, Globe, Shield, ArrowRight, 
  FileText, Calculator, Calendar, CheckCircle, AlertTriangle,
  TrendingUp, Clock, Users, Settings, Workflow, Brain,
  Mail, DollarSign, BarChart3, Activity, Package, Cloud
} from 'lucide-react';

const AIAccountingAutomationApp = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const architectureComponents = [
    {
      id: 'abacus',
      name: 'Abacus ERP',
      icon: Database,
      color: 'bg-blue-500',
      description: 'Source centrale de données via API AbaConnect',
      features: ['REST/OData', 'OAuth', 'Schémas natifs', 'Transactions bidirectionnelles']
    },
    {
      id: 'mcp',
      name: 'Serveur MCP',
      icon: Server,
      color: 'bg-purple-500',
      description: 'Couche d\'intermédiation et contextualisation',
      features: ['Standardisation', 'Traçabilité', 'Réduction d\'erreurs', 'Contextualisation IA']
    },
    {
      id: 'n8n',
      name: 'n8n Orchestrator',
      icon: Workflow,
      color: 'bg-green-500',
      description: 'Orchestration des workflows automatisés',
      features: ['Déclencheurs', 'Auto-hébergement', 'Gestion exceptions', 'Open-source']
    },
    {
      id: 'openai',
      name: 'OpenAI API',
      icon: Brain,
      color: 'bg-orange-500',
      description: 'Moteur d\'intelligence artificielle',
      features: ['Analyse sémantique', 'OCR', 'Prédictions', 'Fine-tuning comptable']
    },
    {
      id: 'webapp',
      name: 'Webapp Cursor',
      icon: Globe,
      color: 'bg-indigo-500',
      description: 'Interface utilisateur personnalisée',
      features: ['Visualisation', 'Validation manuelle', 'Rapports', 'Dashboard interactif']
    }
  ];

  const workflows = [
    {
      id: 'entries',
      title: 'Enregistrement des Écritures Comptables',
      icon: FileText,
      steps: [
        { name: 'Déclenchement', tool: 'n8n', description: 'Événement ou planification cron active le workflow' },
        { name: 'Contextualisation', tool: 'MCP', description: 'Requête API AbaConnect pour structurer les données' },
        { name: 'Analyse IA', tool: 'OpenAI', description: 'Génération conforme Swiss GAAP avec score >0.95' },
        { name: 'Enregistrement', tool: 'n8n/Abacus', description: 'POST vers JournalEntries avec retry automatique' },
        { name: 'Validation', tool: 'Webapp', description: 'Dashboard React pour revue et traçabilité LPD' }
      ]
    },
    {
      id: 'provisions',
      title: 'Calcul et Comptabilisation des Provisions',
      icon: Calculator,
      steps: [
        { name: 'Planification', tool: 'n8n', description: 'Workflow hebdomadaire ou trimestriel' },
        { name: 'Collecte', tool: 'MCP', description: 'Récupération historiques via ODBC/OData optimisé' },
        { name: 'Calcul Prédictif', tool: 'OpenAI', description: 'Modèles ML avec précision 99% et scénarios multiples' },
        { name: 'Comptabilisation', tool: 'n8n/Abacus', description: 'POST automatisé avec seuils d\'alerte >10k CHF' },
        { name: 'Rapports', tool: 'Webapp', description: 'Visualisations Chart.js et export PDF/Excel' }
      ]
    },
    {
      id: 'closing',
      title: 'Exécution de la Clôture Mensuelle',
      icon: Calendar,
      steps: [
        { name: 'Déclenchement', tool: 'n8n', description: 'Fin de mois avec vérification prérequis' },
        { name: 'Réconciliation', tool: 'MCP', description: 'Agrégation des variances via OData' },
        { name: 'Détection Anomalies', tool: 'OpenAI', description: 'Analyse multi-modèles pour variances >5%' },
        { name: 'Clôture Auto', tool: 'n8n/Abacus', description: 'Séquence POST pour bilans finaux' },
        { name: 'Dashboard Global', tool: 'Webapp', description: 'Revue interactive avec alertes push' }
      ]
    },
    {
      id: 'invoices',
      title: 'Traitement des Factures Fournisseurs',
      icon: Mail,
      steps: [
        { name: 'Réception', tool: 'n8n', description: 'Détection IMAP ou intégration DeepBox' },
        { name: 'OCR & Mapping', tool: 'MCP', description: 'Extraction et mapping fournisseurs existants' },
        { name: 'Validation IA', tool: 'OpenAI', description: 'Extraction montant/TVA et vérification cohérence' },
        { name: 'Comptabilisation', tool: 'n8n/Abacus', description: 'Génération écriture débit/crédit' },
        { name: 'Supervision', tool: 'Webapp', description: 'Approbation manuelle si seuil dépassé' }
      ]
    }
  ];

  const metrics = [
    { label: 'Coût Initial', value: '2-5k CHF', icon: DollarSign, color: 'text-green-600' },
    { label: 'Maintenance', value: '1k CHF/an', icon: Settings, color: 'text-blue-600' },
    { label: 'Précision IA', value: '>98%', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'ROI', value: '4-6 semaines', icon: Clock, color: 'text-orange-600' }
  ];

  const FlowDiagram = ({ workflow }) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center mb-6">
          <workflow.icon className="w-8 h-8 text-indigo-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-800">{workflow.title}</h3>
        </div>
        <div className="space-y-4">
          {workflow.steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  animationStep === index ? 'bg-indigo-600 text-white animate-pulse' : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center mb-1">
                  <span className="font-semibold text-gray-800">{step.name}</span>
                  <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    {step.tool}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < workflow.steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-400 mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ArchitectureView = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Architecture Hybride Modulaire</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Une architecture open-source et interopérable optimisée pour l&apos;automatisation comptable intelligente, 
          combinant ERP traditionnel et IA de pointe avec une conformité Swiss GAAP FER.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {architectureComponents.map((component) => {
          const Icon = component.icon;
          return (
            <div key={component.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className={`${component.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{component.name}</h3>
              <p className="text-gray-600 mb-4">{component.description}</p>
              <div className="space-y-2">
                {component.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Flux de Données Global</h3>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-gray-600" />
            <span className="ml-2 font-medium">Sources</span>
          </div>
          <ArrowRight className="w-6 h-6 text-indigo-500" />
          <div className="flex items-center">
            <Workflow className="w-8 h-8 text-green-600" />
            <span className="ml-2 font-medium">n8n</span>
          </div>
          <ArrowRight className="w-6 h-6 text-indigo-500" />
          <div className="flex items-center">
            <Server className="w-8 h-8 text-purple-600" />
            <span className="ml-2 font-medium">MCP</span>
          </div>
          <ArrowRight className="w-6 h-6 text-indigo-500" />
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-orange-600" />
            <span className="ml-2 font-medium">OpenAI</span>
          </div>
          <ArrowRight className="w-6 h-6 text-indigo-500" />
          <div className="flex items-center">
            <Database className="w-8 h-8 text-blue-600" />
            <span className="ml-2 font-medium">Abacus</span>
          </div>
          <ArrowRight className="w-6 h-6 text-indigo-500" />
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 font-medium">Webapp</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white/50 rounded-lg">
          <div className="flex items-center text-sm text-gray-600">
            <Activity className="w-4 h-4 mr-2 text-red-500" />
            Boucle de feedback continue pour gestion des erreurs et réexécution automatique
          </div>
        </div>
      </div>
    </div>
  );

  const WorkflowsView = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Workflows Automatisés Détaillés</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Quatre processus comptables critiques entièrement automatisés avec supervision humaine intelligente
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workflows.map((workflow) => (
          <FlowDiagram key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </div>
  );

  const SecurityComplianceView = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sécurité & Conformité</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Architecture conçue pour respecter les normes suisses et européennes les plus strictes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-xl font-semibold">Conformité Réglementaire</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Swiss GAAP FER</strong>
                <p className="text-sm text-gray-600">Alignement complet avec les normes comptables suisses</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>LPD / RGPD</strong>
                <p className="text-sm text-gray-600">Protection des données personnelles et traçabilité</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Audit Trail</strong>
                <p className="text-sm text-gray-600">Logs complets et immutables pour tous les processus</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Mesures de Sécurité</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Chiffrement AES-256</strong>
                <p className="text-sm text-gray-600">Protection des données sensibles au repos et en transit</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>OAuth 2.0</strong>
                <p className="text-sm text-gray-600">Authentification sécurisée pour toutes les API</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Validation Multi-niveaux</strong>
                <p className="text-sm text-gray-600">Seuils de confiance IA et validation humaine</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-xl font-semibold">Gestion des Risques</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Activity className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <strong>Mitigation Latence API</strong>
                <p className="text-sm text-gray-600">Retry automatique et queues de traitement</p>
              </div>
            </li>
            <li className="flex items-start">
              <Activity className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <strong>Prévention Biais IA</strong>
                <p className="text-sm text-gray-600">Fine-tuning sur données anonymisées et validation croisée</p>
              </div>
            </li>
            <li className="flex items-start">
              <Activity className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <strong>Continuité Opérationnelle</strong>
                <p className="text-sm text-gray-600">Backups automatisés et plan de reprise d&apos;activité</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold">Supervision Humaine</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Points de Contrôle</strong>
                <p className="text-sm text-gray-600">Validation manuelle pour transactions critiques</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Seuils Configurables</strong>
                <p className="text-sm text-gray-600">Escalade automatique selon montants et risques</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <strong>Dashboard de Supervision</strong>
                <p className="text-sm text-gray-600">Vue temps réel avec alertes et notifications</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const MetricsROIView = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Métriques & Retour sur Investissement</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Une solution économique avec un ROI rapide et des gains d&apos;efficacité mesurables
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Icon className={`w-10 h-10 ${metric.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
              <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Analyse Détaillée du ROI</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Gains d&apos;Efficacité</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">Réduction temps de saisie</span>
                <span className="font-bold text-green-600">-85%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">Erreurs de comptabilisation</span>
                <span className="font-bold text-green-600">-95%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">Temps de clôture mensuelle</span>
                <span className="font-bold text-green-600">-70%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">Productivité équipe comptable</span>
                <span className="font-bold text-green-600">+200%</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Économies Financières</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Économie mensuelle estimée</span>
                <span className="font-bold text-blue-600">8-15k CHF</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Réduction coûts d&apos;audit</span>
                <span className="font-bold text-blue-600">-40%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Optimisation trésorerie</span>
                <span className="font-bold text-blue-600">+25%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">ROI première année</span>
                <span className="font-bold text-blue-600">450%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Scalabilité & Performance</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Package className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <div className="font-bold text-2xl text-gray-800">10k+</div>
              <div className="text-sm text-gray-600">Transactions/mois</div>
            </div>
            <div className="text-center">
              <Cloud className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-bold text-2xl text-gray-800">99.9%</div>
              <div className="text-sm text-gray-600">Disponibilité</div>
            </div>
            <div className="text-center">
              <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-2xl text-gray-800">&lt;2s</div>
              <div className="text-sm text-gray-600">Temps de traitement</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">Plan d&apos;Implémentation</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-4 mb-3">
              <span className="text-3xl font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Semaine 1-2</h4>
            <p className="text-sm opacity-90">Configuration initiale & intégration API</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-4 mb-3">
              <span className="text-3xl font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Semaine 3-4</h4>
            <p className="text-sm opacity-90">Développement workflows & fine-tuning IA</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-4 mb-3">
              <span className="text-3xl font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Semaine 5</h4>
            <p className="text-sm opacity-90">Tests exhaustifs & validation</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-lg p-4 mb-3">
              <span className="text-3xl font-bold">4</span>
            </div>
            <h4 className="font-semibold mb-2">Semaine 6</h4>
            <p className="text-sm opacity-90">Déploiement & formation</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Brain className="w-12 h-12 text-indigo-600 mr-4" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Automatisation IA Comptable - Schéma Hybride
                </h1>
                <p className="text-gray-600 mt-1">
                  Architecture modulaire pour transformation digitale de la comptabilité
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="text-sm font-semibold text-green-600">Swiss GAAP FER Compliant</span>
            </div>
          </div>

          <div className="flex space-x-1 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'architecture'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => setActiveTab('workflows')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'workflows'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Workflows
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'security'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sécurité & Conformité
            </button>
            <button
              onClick={() => setActiveTab('roi')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'roi'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Métriques & ROI
            </button>
          </div>
        </div>

        <div className="transition-all duration-300">
          {activeTab === 'architecture' && <ArchitectureView />}
          {activeTab === 'workflows' && <WorkflowsView />}
          {activeTab === 'security' && <SecurityComplianceView />}
          {activeTab === 'roi' && <MetricsROIView />}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Cpu className="w-5 h-5 mr-2" />
              <span className="text-sm">
                Powered by OpenAI GPT-4 • n8n Workflows • Abacus ERP • React & Tailwind CSS
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 - Solution CFO/IT/IA Hybride
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAccountingAutomationApp;