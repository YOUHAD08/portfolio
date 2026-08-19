export type ProjectCategory =
  | 'Frontend'
  | 'Backend'
  | 'Mobile Dev'
  | 'DevOps'
  | 'AWS'
  | 'SecOps'
  | 'Big Data'
  | 'MLOps'
  | 'AI/GenAI';

export interface Project {
  title: string;
  description: string;
  descriptionFr: string;
  category: ProjectCategory;
  tags: string[];
  image?: string;
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  featured?: boolean;
  inProgress?: boolean;
}

export const PROJECTS: Project[] = [];

PROJECTS[0] = {
  title: 'Calculator',
  description: 'A vanilla JavaScript calculator app with chained calculations, number formatting, drag scrolling, and error handling. Built with HTML5 and CSS3 as part of The Odin Project Foundations curriculum.',
  descriptionFr: "Une application calculatrice en JavaScript pur avec calculs enchaînés, formatage des nombres, défilement par glisser et gestion des erreurs. Construite avec HTML5 et CSS3 dans le cadre du programme Foundations de The Odin Project.",
  tags: ['HTML', 'CSS3', 'JavaScript'],
  category: 'Frontend',
  image: 'images/projects/calculator.png',
  githubUrl: 'https://github.com/YOUHAD08/Calculator.git',
  liveUrl: 'https://youhad08.github.io/Calculator/',
  featured: false
};

PROJECTS[1] = {
  title: 'Clipboard Landing Page Master',
  description: 'A responsive landing page (Frontend Mentor challenge) built with HTML5 and CSS Grid & Flexbox, adapting seamlessly across mobile, tablet, and desktop.',
  descriptionFr: "Une landing page responsive (défi Frontend Mentor) construite avec HTML5 et CSS Grid & Flexbox, s'adaptant parfaitement au mobile, à la tablette et au bureau.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/clipboard-landing.png',
  githubUrl: 'https://github.com/YOUHAD08/Cipboard-Landing-Page-Master.git',
  liveUrl: 'https://youhad08.github.io/Cipboard-Landing-Page-Master/',
  featured: false
};

PROJECTS[2] = {
  title: 'Four Card Feature Section',
  description: 'A responsive card layout built with semantic HTML5, CSS Grid, and Flexbox — mobile-first and optimized for all devices.',
  descriptionFr: "Une mise en page de cartes responsive construite avec HTML5 sémantique, CSS Grid et Flexbox — mobile-first et optimisée pour tous les appareils.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/four-card-feature-section.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Four-Card-Feature-Section.git',
  liveUrl: 'https://youhad08.github.io/Four-Card-Feature-Section/',
  featured: false
};

PROJECTS[3] = {
  title: 'Intro Component With Sign Up Form',
  description: 'A responsive landing page with a sign-up form, built using HTML5, CSS3, and custom properties. Clean UI, mobile-first across mobile, tablet, and desktop.',
  descriptionFr: "Une landing page responsive avec un formulaire d'inscription, construite avec HTML5, CSS3 et les propriétés personnalisées. Interface épurée, mobile-first sur mobile, tablette et bureau.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/intro-signup-form.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Intro-component-with-sign-up-form.git',
  liveUrl: 'https://youhad08.github.io/Intro-component-with-sign-up-form/',
  featured: false
};

PROJECTS[4] = {
  title: 'Single Price Grid Component',
  description: 'A responsive pricing section built with HTML & CSS, demonstrating mobile-first design, CSS Grid, and hover interactions.',
  descriptionFr: "Une section de tarification responsive construite avec HTML & CSS, illustrant le design mobile-first, CSS Grid et les interactions au survol.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/single-price-grid.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Single-Price-Grid-Component.git',
  liveUrl: 'https://youhad08.github.io/Single-Price-Grid-Component/',
  featured: false
};

PROJECTS[5] = {
  title: '3 Column Preview Card Component',
  description: 'A responsive card layout built for the Frontend Mentor Challenge using HTML5, CSS Grid, and responsive design principles.',
  descriptionFr: "Une mise en page de cartes responsive construite pour le défi Frontend Mentor avec HTML5, CSS Grid et les principes de design responsive.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/3-column-preview-card.jpg',
  githubUrl: 'https://github.com/YOUHAD08/3-column-preview-card-component.git',
  liveUrl: 'https://youhad08.github.io/3-column-preview-card-component/',
  featured: false
};

PROJECTS[6] = {
  title: 'Order Summary Card Solution',
  description: 'A responsive card component built with HTML & CSS, using Flexbox and media queries. Includes mobile & desktop layouts.',
  descriptionFr: "Un composant de carte responsive construit avec HTML & CSS, utilisant Flexbox et les media queries. Inclut des mises en page mobile et bureau.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/order-summary-card.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Order-summary-card-solution.git',
  liveUrl: 'https://youhad08.github.io/Order-summary-card-solution/',
  featured: false
};

PROJECTS[7] = {
  title: 'Testimonials Grid Section',
  description: 'A responsive solution to the Frontend Mentor challenge, built with modern HTML and CSS for a clean, accessible design across screen sizes.',
  descriptionFr: "Une solution responsive au défi Frontend Mentor, construite avec du HTML et CSS modernes pour un design propre et accessible sur toutes les tailles d'écran.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/testimonials-grid.png',
  githubUrl: 'https://github.com/YOUHAD08/Frontend-Mentor---Testimonials-Grid-Section-.git',
  liveUrl: 'https://youhad08.github.io/Frontend-Mentor---Testimonials-Grid-Section-/',
  featured: false
};

PROJECTS[8] = {
  title: 'Marrakech Juice Landing Page',
  description: 'A vibrant, responsive landing page built with modern HTML and CSS, featuring smooth animations, sleek design, and social media integration.',
  descriptionFr: "Une landing page vibrante et responsive construite avec du HTML et CSS modernes, avec animations fluides, design élégant et intégration des réseaux sociaux.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/marrakech-juice.png',
  githubUrl: 'https://github.com/YOUHAD08/MARRAKECH-JUICE---Landing-Page.git',
  liveUrl: 'https://youhad08.github.io/MARRAKECH-JUICE---Landing-Page/',
  featured: false
};

PROJECTS[9] = {
  title: 'Rock Paper Scissors',
  description: 'An interactive browser game built with HTML5, CSS3, and vanilla JavaScript, featuring game logic, score tracking, and a responsive UI.',
  descriptionFr: "Un jeu de navigateur interactif construit avec HTML5, CSS3 et JavaScript pur, avec logique de jeu, suivi du score et une interface responsive.",
  tags: ['HTML', 'CSS3', 'JavaScript'],
  category: 'Frontend',
  image: 'images/projects/rock-paper-scissors.jpeg',
  githubUrl: 'https://github.com/YOUHAD08/Rock-Paper-Scissors.git',
  liveUrl: 'https://youhad08.github.io/Rock-Paper-Scissors/',
  featured: false
};

PROJECTS[10] = {
  title: 'Family Doctor Clinic Website',
  description: 'A clean, responsive website with header, hero, services, quote, and CTA sections, built for easy navigation and clear information delivery.',
  descriptionFr: "Un site web propre et responsive avec en-tête, hero, services, citation et sections CTA, conçu pour une navigation facile et une information claire.",
  tags: ['HTML', 'CSS3'],
  category: 'Frontend',
  image: 'images/projects/family-doctor-clinic.png',
  githubUrl: 'https://github.com/YOUHAD08/Landing-Page.git',
  liveUrl: 'https://youhad08.github.io/Landing-Page/',
  featured: false
};

PROJECTS[11] = {
  title: 'Distributed Microservices E Commerce Blueprint',
  description: 'A Spring Boot microservices reference project demonstrating service discovery, API gateway routing, centralized config management, Feign-based communication, and Resilience4j circuit breakers across six services, each backed by its own H2 database.',
  descriptionFr: "Un projet de référence en microservices Spring Boot illustrant la découverte de services, le routage via API gateway, la gestion centralisée de la configuration, la communication via Feign, et les circuit breakers Resilience4j sur six services, chacun avec sa propre base H2.",
  tags: ['Java', 'Git', 'GitHub', 'Spring Boot', 'Spring Cloud', 'Microservices Architecture', 'REST API'],
  category: 'Backend',
  image: 'images/projects/microservices-blueprint.png',
  githubUrl: 'https://github.com/YOUHAD08/Microservices-Architecture.git',
  featured: false
};

PROJECTS[12] = {
  title: 'Automated MLOps Pipeline with CML & GitHub Actions',
  description: 'An automated MLOps CI/CD pipeline using GitHub Actions and CML for automated model evaluation, testing, and PR report generation.',
  descriptionFr: "Un pipeline MLOps CI/CD automatisé utilisant GitHub Actions et CML pour l'évaluation automatique des modèles, les tests et la génération de rapports sur les PR.",
  tags: ['Python', 'Git', 'CML', 'GitHub Actions', 'scikit-learn'],
  category: 'MLOps',
  image: 'images/projects/mlops-cml-pipeline.png',
  githubUrl: 'https://github.com/YOUHAD08/mlops-cml-pipeline.git',
  featured: false
};

PROJECTS[13] = {
  title: 'End to End Nginx CI/CD Pipeline (Jenkins + Docker Hub)',
  description: 'A fully automated CI/CD pipeline that builds, tests, publishes, and deploys a containerized nginx web application — triggered automatically on every GitHub push.',
  descriptionFr: "Un pipeline CI/CD entièrement automatisé qui construit, teste, publie et déploie une application web nginx conteneurisée — déclenché automatiquement à chaque push GitHub.",
  tags: ['Jenkins', 'Docker', 'CI-CD', 'Nginx', 'HTML'],
  category: 'DevOps',
  image: 'images/projects/jenkins-docker-cicd.png',
  githubUrl: 'https://github.com/YOUHAD08/jenkins-docker-cicd.git',
  featured: false
};

PROJECTS[14] = {
  title: 'Full Stack AI Agent with Vector Search & Custom Tools',
  description: 'Full-stack AI application using Spring Boot, Spring AI, and Angular. Features Retrieval-Augmented Generation (RAG) for querying uploaded PDFs and custom tools for fetching live system data.',
  descriptionFr: "Application IA full-stack utilisant Spring Boot, Spring AI et Angular. Intègre la génération augmentée par récupération (RAG) pour interroger des PDF téléversés et des outils personnalisés pour récupérer des données système en direct.",
  tags: ['Spring Boot', 'Spring AI', 'Angular', 'AI Agent', 'RAG', 'Semantic-Search', 'Vector Store', 'Java', 'TypeScript', 'LLM', 'HTML', 'CSS'],
  category: 'AI/GenAI',
  image: 'images/projects/ai-agent-spring-boot-angular.png',
  githubUrl: 'https://github.com/YOUHAD08/ai-agent-spring-boot-angular.git',
  featured: true
};

PROJECTS[15] = {
  title: 'AWS CI/CD Pipeline: CodeBuild & CodeArtifact',
  description: 'Automated AWS pipeline (CodePipeline, CodeBuild, CodeDeploy) connecting GitHub to a CloudFormation-backed web server via CodeArtifact and S3.',
  descriptionFr: "Pipeline AWS automatisé (CodePipeline, CodeBuild, CodeDeploy) connectant GitHub à un serveur web basé sur CloudFormation via CodeArtifact et S3.",
  tags: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'Amazon S3', 'AWS CloudFormation', 'Amazon VPC', 'CodeArtifact', 'Amazon EC2'],
  category: 'AWS',
  image: 'images/projects/aws-cicd-pipeline.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cicd-pipeline.git',
  featured: true
};

PROJECTS[16] = {
  title: 'Enterprise Bank Churn MLOps Pipeline',
  description: 'A production-ready MLOps pipeline for predicting bank customer churn (Exited = 0/1). Automates schema validation, imbalanced data training (SMOTE vs. class_weight), artifact versioning, Docker containerization, and real-time REST API serving via FastAPI.',
  descriptionFr: "Un pipeline MLOps prêt pour la production pour prédire le churn des clients bancaires (Exited = 0/1). Automatise la validation de schéma, l'entraînement sur données déséquilibrées (SMOTE vs class_weight), le versioning des artefacts, la conteneurisation Docker et le service d'API REST en temps réel via FastAPI.",
  tags: ['FastAPI', 'Docker', 'Python', 'scikit-learn', 'SMOTE', 'Data Validation', 'REST API', 'CI-CD', 'pytest'],
  category: 'MLOps',
  image: 'images/projects/bank-churn-mlops-pipeline.png',
  githubUrl: 'https://github.com/YOUHAD08/bank-churn-mlops-pipeline.git',
  featured: false
};

PROJECTS[17] = {
  title: 'Sales Data Warehouse EDA & Analytics',
  description: 'A SQL-based EDA project on a Medallion Sales Data Warehouse using T-SQL and BI views for customer RFM segmentation, product tracking, time-series analysis, and KPI reporting.',
  descriptionFr: "Un projet d'EDA basé sur SQL sur un entrepôt de données de ventes Medallion utilisant T-SQL et des vues BI pour la segmentation RFM des clients, le suivi des produits, l'analyse de séries temporelles et le reporting KPI.",
  tags: ['SQL', 'T-SQL', 'Data Warehouse', 'EDA', 'BI', 'Medallion Architecture', 'Time-Series Analysis', 'ETL'],
  category: 'Big Data',
  image: 'images/projects/sql-sales-datawarehouse-analysis.png',
  githubUrl: 'https://github.com/YOUHAD08/sql-sales-datawarehouse-analysis.git',
  featured: true
};

PROJECTS[18] = {
  title: 'Surveillance Motion & Light Detection',
  description: 'An OpenCV and Python project for real-time surveillance analysis. Converts video feeds to grayscale, identifies light sources via pixel brightness, and tracks frame-by-frame motion.',
  descriptionFr: "Un projet OpenCV et Python pour l'analyse de surveillance en temps réel. Convertit les flux vidéo en niveaux de gris, identifie les sources lumineuses via la luminosité des pixels, et suit le mouvement image par image.",
  tags: ['OpenCV', 'Python', 'Image Processing', 'Matplotlib', 'Data Visualization'],
  category: 'AI/GenAI',
  image: 'images/projects/grayscale-motion-detection.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/01_grayscale_motion_detection.ipynb',
  featured: false
};

PROJECTS[19] = {
  title: 'Traffic Light Detection with OpenCV & HSV',
  description: 'Detect active traffic lights (red, orange, green) in Python using OpenCV HSV color thresholding and mask segmentation.',
  descriptionFr: "Détecte les feux de circulation actifs (rouge, orange, vert) en Python avec le seuillage de couleur HSV d'OpenCV et la segmentation par masque.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  category: 'AI/GenAI',
  image: 'images/projects/traffic-light-color-spaces.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/02_traffic_light_color_spaces.ipynb',
  featured: false
};

PROJECTS[20] = {
  title: 'Football Match Image Annotation in OpenCV',
  description: 'Annotate a football match image with bounding boxes, directional arrows, and text using OpenCV drawing functions to highlight ball location and shot speed.',
  descriptionFr: "Annote une image de match de football avec des boîtes englobantes, des flèches directionnelles et du texte via les fonctions de dessin d'OpenCV pour mettre en évidence la position du ballon et la vitesse du tir.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  category: 'AI/GenAI',
  image: 'images/projects/football-annotations.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/03_drawing_football_annotations.ipynb',
  featured: false
};

PROJECTS[21] = {
  title: 'Image Rotation & Straightening with OpenCV',
  description: 'Straighten tilted photos in Python using OpenCV affine transformations. Calculates rotation matrices to align and correct camera tilt angles.',
  descriptionFr: "Redresse des photos inclinées en Python avec les transformations affines d'OpenCV. Calcule les matrices de rotation pour aligner et corriger les angles d'inclinaison de la caméra.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  category: 'AI/GenAI',
  image: 'images/projects/image_transformations.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/04_image_transformations.ipynb',
  featured: false
};

PROJECTS[22] = {
  title: 'Satellite Image Segmentation & Contrast Enhancement',
  description: "Enhances low-contrast satellite images and segments clouds from water bodies using histogram equalization and Otsu's automatic thresholding.",
  descriptionFr: "Améliore les images satellite à faible contraste et segmente les nuages des étendues d'eau via l'égalisation d'histogramme et le seuillage automatique d'Otsu.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  category: 'AI/GenAI',
  image: 'images/projects/thresholding_histograms.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/06_thresholding_histograms.ipynb',
  featured: false
};

PROJECTS[23] = {
  title: 'Night Image Enhancement via Gamma Correction',
  description: 'Python script using OpenCV and Matplotlib to enhance low-light photos via gamma correction (γ = 1.6) and contrast adjustment. Includes histogram analysis comparing intensity distributions.',
  descriptionFr: "Script Python utilisant OpenCV et Matplotlib pour améliorer les photos en basse lumière via la correction gamma (γ = 1.6) et l'ajustement du contraste. Inclut une analyse d'histogramme comparant les distributions d'intensité.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  category: 'AI/GenAI',
  image: 'images/projects/gamma_correction_enhancement.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/07_gamma_correction_enhancement.ipynb',
  featured: false
};

PROJECTS[24] = {
  title: 'Image Denoising & Sharpening with OpenCV',
  description: 'Python implementation analyzing spatial filters (Gaussian, Median, Bilateral, NL-Means) and 2D convolution sharpening to remove artificial noise and restore image details.',
  descriptionFr: "Implémentation Python analysant les filtres spatiaux (Gaussien, Médian, Bilatéral, NL-Means) et la netteté par convolution 2D pour supprimer le bruit artificiel et restaurer les détails de l'image.",
  tags: ['OpenCV', 'Image Denoising', 'Convolution', 'Image Sharpening', 'Python'],
  category: 'AI/GenAI',
  image: 'images/projects/convolutions_blurring_sharpening.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/08_convolutions_blurring_sharpening.ipynb',
  featured: false
};

PROJECTS[25] = {
  title: 'Scikit Image Histogram Specification in OpenCV',
  description: 'Implementation of image histogram matching using skimage.exposure.match_histograms and OpenCV.',
  descriptionFr: "Implémentation de la correspondance d'histogrammes d'images utilisant skimage.exposure.match_histograms et OpenCV.",
  tags: ['OpenCV', 'scikit-image', 'Histogram Specification', 'Image Processing', 'Python'],
  category: 'AI/GenAI',
  image: 'images/projects/histogram_specification.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/09_histogram_specification.ipynb',
  featured: false
};

PROJECTS[26] = {
  title: 'KNN Classification and Cross Validation on CIFAR 10',
  description: 'Evaluating K-Nearest Neighbors image classification performance across multiple K values using cross-validation on CIFAR-10 image vectors.',
  descriptionFr: "Évaluation de la performance de classification d'images K-Nearest Neighbors sur plusieurs valeurs de K en utilisant la validation croisée sur les vecteurs d'images CIFAR-10.",
  tags: ['KNN', 'CIFAR-10', 'Cross-Validation', 'scikit-learn', 'Python', 'Image Classification'],
  category: 'AI/GenAI',
  image: 'images/projects/KNN_CIFAR10.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-2/KNN_CIFAR10.ipynb',
  featured: false
};

PROJECTS[27] = {
  title: 'Sales Data Warehouse',
  description: 'A production-ready SQL Server data warehouse using the Medallion Architecture (Bronze, Silver, Gold) and a star schema to unify CRM and ERP data for sales, customer, and product analytics.',
  descriptionFr: "Un entrepôt de données SQL Server prêt pour la production utilisant l'architecture Medallion (Bronze, Silver, Gold) et un schéma en étoile pour unifier les données CRM et ERP pour l'analyse des ventes, des clients et des produits.",
  tags: ['SQL Server', 'Data Warehouse', 'Medallion Architecture', 'ETL', 'Star Schema', 'T-SQL', 'Data Engineering', 'BI', 'Data Modeling', 'Kimball Methodology'],
  category: 'Big Data',
  image: 'images/projects/sql_data_warehouse.png',
  githubUrl: 'https://github.com/YOUHAD08/sql_data_warehouse',
  featured: false
};

PROJECTS[28] = {
  title: 'Spring Cloud & Kafka Real-Time Event Pipeline',
  description: 'An event-driven pipeline built with Spring Boot, Spring Cloud Stream, and Apache Kafka. Features automated event ingestion, windowed Kafka Streams aggregations, state store queries, and a live WebFlux SSE dashboard.',
  descriptionFr: "Un pipeline événementiel construit avec Spring Boot, Spring Cloud Stream et Apache Kafka. Comprend l'ingestion automatisée d'événements, des agrégations Kafka Streams fenêtrées, des requêtes sur state store, et un tableau de bord SSE en direct via WebFlux.",
  tags: ['Spring Boot', 'Apache Kafka', 'Kafka Streams', 'Event-Driven Architecture', 'WebFlux', 'Docker'],
  category: 'Backend',
  image: 'images/projects/kafka-event-pipeline-poster.jpg',
  video: 'images/projects/kafka-event-pipeline.mp4',
  githubUrl: 'https://github.com/YOUHAD08/event-driven-analytics-kafka-spring.git',
  featured: true
};

PROJECTS[29] = {
  title: 'WhatsApp Agent',
  description: 'Multimodal AI assistant handling WhatsApp text/voice messages, managing Gmail and Google Calendar, and executing team operations via sub-workflows.',
  descriptionFr: "Assistant IA multimodal gérant les messages texte/vocaux WhatsApp, la gestion de Gmail et Google Calendar, et l'exécution d'opérations d'équipe via des sous-workflows.",
  tags: ['n8n', 'WhatsApp API', 'OpenAI Whisper', 'GPT-4', 'Google Workspace'],
  category: 'AI/GenAI',
  image: 'images/projects/whatsapp-agent.png',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/WhatsApp%20Agent',
  featured: true
};

PROJECTS[30] = {
  title: 'Vector Database Pipeline',
  description: 'Automated ingestion pipeline monitoring Google Drive to chunk documents, generate embeddings, and store them in Pinecone for semantic search.',
  descriptionFr: "Pipeline d'ingestion automatisé surveillant Google Drive pour découper les documents, générer des embeddings et les stocker dans Pinecone pour la recherche sémantique.",
  tags: ['n8n', 'Pinecone', 'OpenAI Embeddings', 'Google Drive', 'RAG'],
  category: 'AI/GenAI',
  image: 'images/projects/vector-database-pipeline.jpg',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/Vector%20Database',
  featured: false
};

PROJECTS[31] = {
  title: 'Sentiment Analysis Collector',
  description: 'Public web form system that collects user feedback, categorizes sentiment using GPT-4 mini, and logs responses directly into Google Sheets.',
  descriptionFr: "Système de formulaire web public qui collecte les retours utilisateurs, catégorise le sentiment via GPT-4 mini, et enregistre les réponses directement dans Google Sheets.",
  tags: ['n8n', 'OpenAI', 'Google Sheets', 'Sentiment Analysis'],
  category: 'AI/GenAI',
  image: 'images/projects/sentiment-analysis-collector.jpg',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/Sentiment%20Analysis',
  featured: false
};

PROJECTS[32] = {
  title: 'Sponsorship Response Automation',
  description: 'Email pipeline that identifies sponsorship inquiries via Gmail, checks criteria, and auto-generates custom rate responses using AI.',
  descriptionFr: "Pipeline d'emails qui identifie les demandes de sponsoring via Gmail, vérifie les critères, et génère automatiquement des réponses tarifaires personnalisées grâce à l'IA.",
  tags: ['n8n', 'Gmail API', 'OpenAI'],
  category: 'AI/GenAI',
  image: 'images/projects/sponsorship-response-automation.png',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/Respond%20to%20Sponsership',
  featured: false
};

PROJECTS[33] = {
  title: 'Financial RAG Chatbot',
  description: 'Conversational interface connected to a Pinecone vector store to deliver context-aware, source-attributed Q&A on corporate financial reports.',
  descriptionFr: "Interface conversationnelle connectée à une base vectorielle Pinecone pour fournir des réponses contextuelles et sourcées sur des rapports financiers d'entreprise.",
  tags: ['n8n', 'RAG', 'Pinecone', 'GPT-4'],
  category: 'AI/GenAI',
  image: 'images/projects/financial-rag-chatbot.png',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/RAG%20Chatbot',
  featured: false
};

PROJECTS[34] = {
  title: 'Sheet Generator Utility',
  description: 'Lightweight automation flow designed to programmatically initialize and configure new Google Sheets spreadsheets on demand.',
  descriptionFr: "Flux d'automatisation léger conçu pour initialiser et configurer de manière programmatique de nouvelles feuilles de calcul Google Sheets à la demande.",
  tags: ['n8n', 'Google Sheets'],
  category: 'AI/GenAI',
  image: 'images/projects/sheet-generator-utility.jpg',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/Google%20Sheets',
  featured: false
};

PROJECTS[35] = {
  title: 'Form Booking with Local Backup',
  description: 'Hotel reservation form processing workflow that logs submissions to Airtable while converting and backing up records locally.',
  descriptionFr: "Workflow de traitement de formulaire de réservation hôtelière qui enregistre les soumissions dans Airtable tout en convertissant et sauvegardant les enregistrements localement.",
  tags: ['n8n', 'Airtable'],
  category: 'AI/GenAI',
  image: 'images/projects/form-booking-local-backup.jpg',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/Form%20Submission%20to%20Airtable',
  featured: false
};

PROJECTS[36] = {
  title: 'Order Notification Assistant',
  description: 'E-commerce tracking workflow that monitors Airtable for new orders and triggers AI-formatted notification emails to management.',
  descriptionFr: "Workflow de suivi e-commerce qui surveille Airtable pour les nouvelles commandes et déclenche des emails de notification formatés par IA vers la direction.",
  tags: ['n8n', 'Airtable', 'Gmail API', 'OpenAI'],
  category: 'AI/GenAI',
  image: 'images/projects/order-notification-assistant.jpg',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/Customer%20Service%20Assitance',
  featured: false
};

PROJECTS[37] = {
  title: 'AI Email Automation System',
  description: 'Multi-agent pipeline integrating vector contact lookups, custom HTML templating, and AI composition to execute targeted email outreach.',
  descriptionFr: "Pipeline multi-agents intégrant la recherche de contacts vectorielle, un templating HTML personnalisé, et la composition par IA pour exécuter des campagnes d'emailing ciblées.",
  tags: ['n8n', 'Pinecone', 'Gmail API', 'GPT-4', 'Multi-Agent'],
  category: 'AI/GenAI',
  image: 'images/projects/ai-email-automation-system.png',
  githubUrl: 'https://github.com/YOUHAD08/N8N/tree/main/AI-powered%20email%20automation%20system',
  featured: false
};

PROJECTS[38] = {
  title: 'WhatsApp AI Bot',
  description: "An intelligent WhatsApp chatbot powered by Spring AI, OpenAI's GPT-4, and Model Context Protocol (MCP) for dynamic tool management and employee data queries.",
  descriptionFr: "Un chatbot WhatsApp intelligent propulsé par Spring AI, GPT-4 d'OpenAI, et le Model Context Protocol (MCP) pour la gestion dynamique d'outils et les requêtes de données employés.",
  tags: ['Spring AI', 'OpenAI GPT-4', 'Model Context Protocol', 'WhatsApp API', 'Java', 'Spring Boot'],
  category: 'AI/GenAI',
  image: 'images/projects/whatapp_bot-poster.jpg',
  video: 'images/projects/whatapp_bot.mp4',
  githubUrl: 'https://github.com/YOUHAD08/WhatsApp-AI-Bot.git',
  featured: false
};

PROJECTS[39] = {
  title: 'TubeNotes',
  description: 'An AI-powered mobile app that turns voice recordings of video ideas into complete YouTube content packages — including scripts, titles, and thumbnail concepts.',
  descriptionFr: "Une application mobile propulsée par l'IA qui transforme des enregistrements vocaux d'idées vidéo en packages de contenu YouTube complets — scripts, titres et concepts de miniatures inclus.",
  tags: ['Flutter', 'Voice-to-Text'],
  category: 'Mobile Dev',
  image: 'images/projects/TubeNotes.png',
  githubUrl: 'https://github.com/YOUHAD08/TubeNotes.git',
  featured: true,
  inProgress: true
};

PROJECTS[40] = {
  title: 'Flutter Riverpod Todo App',
  description: 'My first Flutter project – a simple and elegant Todo application built with Flutter, Riverpod (state management), and Slidable (for swipe actions).',
  descriptionFr: "Mon premier projet Flutter – une application Todo simple et élégante construite avec Flutter, Riverpod (gestion d'état) et Slidable (pour les actions de balayage).",
  tags: ['Flutter', 'Dart', 'Riverpod'],
  category: 'Mobile Dev',
  image: 'images/projects/TODO_App-poster.jpg',
  video: 'images/projects/TODO_App.mp4',
  githubUrl: 'https://github.com/YOUHAD08/Flutter-Todo-App.git',
  featured: false
};

PROJECTS[41] = {
  title: 'Portfolio',
  description: 'This portfolio itself — a fully responsive, bilingual (EN/FR) Angular site with dark/light theming, a Firebase-backed project like system, and an EmailJS-powered contact form.',
  descriptionFr: "Ce portfolio lui-même — un site Angular entièrement responsive et bilingue (EN/FR) avec thème clair/sombre, un système de likes propulsé par Firebase, et un formulaire de contact via EmailJS.",
  tags: ['Angular', 'TypeScript', 'SCSS', 'Firebase', 'EmailJS'],
  category: 'Frontend',
  image: 'images/projects/portfolio.png',
  githubUrl: 'https://github.com/YOUHAD08/portfolio.git',
  featured: true
};

PROJECTS[42] = {
  title: 'Swai3.com — Moroccan Bac Tutoring Platform',
  description: 'Microservices tutoring marketplace for Moroccan Bac students. Book tutors, pay securely, attend sessions via Google Meet, and access study materials — all in one platform.',
  descriptionFr: "Marketplace de tutorat en microservices pour les élèves marocains du Bac. Réservez des tuteurs, payez en toute sécurité, assistez aux séances via Google Meet, et accédez aux supports de cours — le tout sur une seule plateforme.",
  tags: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'Docker', 'Jenkins', 'MinIO', 'Spring Cloud', 'Eureka', 'Redis', 'Kubernetes', 'AWS'],
  category: 'Backend',
  image: 'images/projects/logo.jpeg',
  featured: true,
  inProgress: true
};

PROJECTS[43] = {
  title: 'Spring Boot Generative AI Demo',
  description: 'A Spring Boot application showcasing Spring AI capabilities, including contextual chat, structured JSON output mapping, DALL-E 3 image generation, multimodal image analysis, and real-time response streaming.',
  descriptionFr: "Une application Spring Boot présentant les capacités de Spring AI, incluant le chat contextuel, le mapping de sortie JSON structurée, la génération d'images DALL-E 3, l'analyse d'images multimodale, et le streaming de réponses en temps réel.",
  tags: ['Spring Boot', 'Spring AI', 'OpenAI', 'Multimodal AI', 'DALL-E 3'],
  category: 'AI/GenAI',
  image: 'images/projects/Gen-demo.png',
  githubUrl: 'https://github.com/YOUHAD08/Gen-AI-Spring-Boot.git',
  featured: false
};

PROJECTS[44] = {
  title: 'E-Bank Management System',
  description: 'A modern e-banking application built with Angular. It connects to a Spring Boot REST API backend to provide comprehensive customer and account management features.',
  descriptionFr: "Une application bancaire moderne construite avec Angular. Elle se connecte à un backend Spring Boot via REST API pour offrir des fonctionnalités complètes de gestion des clients et des comptes.",
  tags: ['Angular', 'TypeScript', 'Bootstrap', 'JWT Authentication', 'Spring Boot', 'Java', 'Spring Data JPA', 'MySQL', 'REST API'],
  category: 'Backend',
  image: 'images/projects/e-bank-demo-poster.jpg',
  video: 'images/projects/e-bank-demo.mp4',
  githubUrl: 'https://github.com/YOUHAD08/e-bank-frontend-angular.git',
  featured: true
};

PROJECTS[45] = {
  title: 'Product Management System',
  description: 'A full-stack product management web application featuring a Spring Boot REST API, an Angular 17 client UI, and an in-memory H2 database for real-time CRUD operations.',
  descriptionFr: "Une application web de gestion de produits full-stack avec une API REST Spring Boot, une interface client Angular 17, et une base de données H2 en mémoire pour des opérations CRUD en temps réel.",
  tags: ['Spring Boot', 'Angular', 'H2 Database', 'REST API', 'Java', 'TypeScript'],
  category: 'Backend',
  image: 'images/projects/home-page.png',
  githubUrl: 'https://github.com/YOUHAD08/product-management-system.git',
  featured: false
};

PROJECTS[46] = {
  title: 'Product Spring MVC Web App',
  description: 'A secure product management web application built with Spring Boot MVC, Spring Security, and Thymeleaf. It provides role-based access control, server-side rendering, and database persistence via Spring Data JPA.',
  descriptionFr: "Une application web de gestion de produits sécurisée construite avec Spring Boot MVC, Spring Security et Thymeleaf. Elle offre un contrôle d'accès basé sur les rôles, un rendu côté serveur, et la persistance des données via Spring Data JPA.",
  tags: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Thymeleaf', 'Spring Data JPA', 'Java', 'H2 Database'],
  category: 'Backend',
  image: 'images/projects/products.png',
  githubUrl: 'https://github.com/YOUHAD08/product-springboot-mvc-app.git',
  featured: false
};

PROJECTS[47] = {
  title: 'Number Guessing Android App',
  description: 'A localized Java Android app where users guess a secret number with real-time feedback, attempt counters, score tracking, and a dark-mode interface.',
  descriptionFr: "Une application Android Java localisée où les utilisateurs devinent un nombre secret avec des retours en temps réel, un compteur de tentatives, un suivi du score, et une interface en mode sombre.",
  tags: ['Android', 'Java', 'Android Studio'],
  category: 'Mobile Dev',
  image: 'images/projects/App.png',
  githubUrl: 'https://github.com/YOUHAD08/Number-Guessing-Game---Android-App.git',
  featured: false
};

PROJECTS[48] = {
  title: 'Kafka Streams Weather Data Processor',
  description: 'A real-time Kafka Streams application that filters, transforms, and computes station-wise average temperature and humidity metrics from weather streams deployed via Docker.',
  descriptionFr: "Une application Kafka Streams en temps réel qui filtre, transforme et calcule les métriques moyennes de température et d'humidité par station à partir de flux météo déployés via Docker.",
  tags: ['Apache Kafka', 'Kafka Streams', 'Java', 'Docker'],
  category: 'Big Data',
  image: 'images/projects/Weather%20Data%20Processor.png',
  githubUrl: 'https://github.com/YOUHAD08/Kafka-Streams-Weather-Data-Processor.git',
  featured: true
};

PROJECTS[49] = {
  title: 'Spark Incident Analyzer',
  description: 'An Apache Spark SQL application in Java that parses industrial service incident logs from CSV, aggregates incident counts by service, and extracts top incident-heavy years using Spark DataFrame transformations.',
  descriptionFr: "Une application Apache Spark SQL en Java qui analyse des journaux d'incidents de service industriel depuis un CSV, agrège le nombre d'incidents par service, et extrait les années les plus critiques via des transformations Spark DataFrame.",
  tags: ['Apache Spark', 'Spark SQL', 'Java', 'Maven'],
  category: 'Big Data',
  image: 'images/projects/Spark%20Incident%20Analyzer.png',
  githubUrl: 'https://github.com/YOUHAD08/spark-incident-analyzer.git',
  featured: false
};

PROJECTS[50] = {
  title: 'Apache Spark Sales Processor',
  description: 'Java-based Apache Spark data pipelines that aggregate enterprise sales metrics per city and per year in local and distributed cluster environments using Dockerized Hadoop HDFS.',
  descriptionFr: "Des pipelines de données Apache Spark en Java qui agrègent les métriques de ventes d'entreprise par ville et par année, en environnements locaux et clusters distribués via Hadoop HDFS conteneurisé.",
  tags: ['Apache Spark', 'Java', 'Hadoop HDFS', 'Docker', 'MapReduce'],
  category: 'Big Data',
  image: 'images/projects/Apache-Spark-Sales-Processor.png',
  githubUrl: 'https://github.com/YOUHAD08/Apache-Spark-Sales-Processor.git',
  featured: false
};

PROJECTS[51] = {
  title: 'Sales Analysis Dashboard',
  description: 'A Python data analysis project utilizing Pandas, NumPy, and Seaborn to analyze multi-sheet sales data (2018–2019), generating YoY growth metrics, customer rankings, channel profitability analyses, and integrated dashboard visualizations.',
  descriptionFr: "Un projet d'analyse de données Python utilisant Pandas, NumPy et Seaborn pour analyser des données de ventes multi-feuilles (2018-2019), générant des métriques de croissance annuelle, des classements clients, des analyses de rentabilité par canal, et des visualisations de tableau de bord intégrées.",
  tags: ['Python', 'Pandas', 'Data Analysis', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Data Visualization'],
  category: 'Big Data',
  image: 'images/projects/Sales%20Analysis%20Project.png',
  githubUrl: 'https://github.com/YOUHAD08/Sales-Analysis-Project.git',
  featured: false
};

PROJECTS[52] = {
  title: 'HDFS Operations Practicum',
  description: 'A hands-on guide and practical demonstration covering fundamental Hadoop Distributed File System (HDFS) CLI operations, including directory creation, file I/O, local-to-HDFS data transfers, and recursive system maintenance.',
  descriptionFr: "Un guide pratique et une démonstration couvrant les opérations CLI fondamentales du système de fichiers distribué Hadoop (HDFS), incluant la création de répertoires, les I/O de fichiers, les transferts de données locales vers HDFS, et la maintenance système récursive.",
  tags: ['HDFS', 'Hadoop', 'CLI', 'Data Engineering'],
  category: 'Big Data',
  image: 'images/projects/HDFS%20File%20System%20Manipulation.png',
  githubUrl: 'https://github.com/YOUHAD08/HDFS-File-System-Manipulation.git',
  featured: false
};

PROJECTS[53] = {
  title: 'AWS S3 Static Website Hosting',
  description: 'A hands-on cloud storage project configuring an Amazon S3 bucket for public static website hosting, implementing Access Control Lists (ACLs), and enforcing explicit JSON bucket policies for write/delete protection.',
  descriptionFr: "Un projet pratique de stockage cloud configurant un bucket Amazon S3 pour l'hébergement de site web statique public, mettant en œuvre des listes de contrôle d'accès (ACL), et appliquant des politiques de bucket JSON explicites pour la protection en écriture/suppression.",
  tags: ['Amazon S3', 'AWS IAM'],
  category: 'AWS',
  image: 'images/projects/s3-architecture.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/tree/main/01-aws-basics/02-aws-static-website-s3',
  featured: false
};

PROJECTS[54] = {
  title: 'AWS IAM Tag-Based Access Control',
  description: 'An AWS security implementation utilizing Identity and Access Management (IAM) to enforce tag-based conditional access controls, least-privilege user groups, custom JSON policies, and account aliases across dev and prod EC2 environments.',
  descriptionFr: "Une implémentation de sécurité AWS utilisant Identity and Access Management (IAM) pour appliquer des contrôles d'accès conditionnels basés sur les tags, des groupes d'utilisateurs à moindre privilège, des politiques JSON personnalisées, et des alias de compte entre les environnements EC2 dev et prod.",
  tags: ['AWS IAM', 'Amazon EC2'],
  category: 'SecOps',
  image: 'images/projects/Cloud%20Security%20with%20AWS%20IAM.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/tree/main/01-aws-basics/03-aws-iam-security',
  featured: false
};

PROJECTS[55] = {
  title: 'AWS VPC Monitoring with Flow Logs',
  description: 'A networking and monitoring project establishing cross-VPC peering, configuring IAM service roles, capturing traffic with Amazon VPC Flow Logs, and running analytical queries on network data using CloudWatch Logs Insights.',
  descriptionFr: "Un projet de réseau et de surveillance établissant un peering inter-VPC, configurant des rôles de service IAM, capturant le trafic avec Amazon VPC Flow Logs, et exécutant des requêtes analytiques sur les données réseau via CloudWatch Logs Insights.",
  tags: ['Amazon VPC', 'Subnets', 'Internet Gateway', 'Route Tables', 'Amazon EC2', 'VPC Flow Log', 'Security Groups', 'NACLs', 'AWS CLI'],
  category: 'AWS',
  image: 'images/projects/AWS%20VPC%20Monitoring%20with%20Flow%20Logs.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/02-networking/10-vpc-monitoring-with-flow-logs/VPC-Monitoring-with-Flow-Logs.md',
  featured: false
};

PROJECTS[56] = {
  title: 'Access S3 from a VPC',
  description: 'An AWS networking and storage integration setting up an isolated Amazon VPC with an Amazon EC2 instance. Configures credential-based AWS CLI authentication to manage secure Amazon S3 data transfers directly from the instance environment.',
  descriptionFr: "Une intégration réseau et stockage AWS mettant en place un Amazon VPC isolé avec une instance Amazon EC2. Configure une authentification AWS CLI basée sur des identifiants pour gérer des transferts de données Amazon S3 sécurisés directement depuis l'environnement de l'instance.",
  tags: ['Amazon VPC', 'Amazon EC2', 'Amazon S3', 'AWS IAM', 'AWS CLI', 'IAM Access Keys'],
  category: 'AWS',
  image: 'images/projects/Access%20S3%20from%20a%20VPC.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/02-networking/11-access-s3-from-a-vpc/access-s3-from-a-vpc.md',
  featured: false
};

PROJECTS[57] = {
  title: 'VPC Endpoints',
  description: 'An AWS networking project establishing private S3 connectivity using a VPC Gateway Endpoint with custom route tables, CLI management, and explicit bucket and endpoint policies to block public access.',
  descriptionFr: "Un projet de réseau AWS établissant une connectivité S3 privée via un VPC Gateway Endpoint avec des tables de routage personnalisées, une gestion CLI, et des politiques explicites de bucket et d'endpoint pour bloquer l'accès public.",
  tags: ['Amazon VPC', 'Amazon S3', 'Amazon EC2', 'AWS IAM', 'VPC Gateway Endpoints', 'Route Tables', 'S3 Bucket Policies', 'AWS CLI'],
  category: 'AWS',
  image: 'images/projects/VPC%20Endpoints.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/tree/main/02-networking/12-vpc-endpoints',
  featured: false
};

PROJECTS[58] = {
  title: 'Connect a Web App with Aurora',
  description: 'An AWS database and web hosting implementation configuring an Apache/PHP web application on Amazon EC2, connecting securely to an Amazon Aurora MySQL database cluster, and validating real-time record manipulation via the MySQL CLI.',
  descriptionFr: "Une implémentation de base de données et d'hébergement web AWS configurant une application web Apache/PHP sur Amazon EC2, se connectant en toute sécurité à un cluster de base de données Amazon Aurora MySQL, et validant la manipulation d'enregistrements en temps réel via le CLI MySQL.",
  tags: ['Amazon Aurora', 'Amazon EC2', 'Amazon VPC', 'AWS IAM'],
  category: 'AWS',
  image: 'images/projects/Connect%20a%20Web%20App%20with%20Aurora.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/tree/main/03-databases/15-connect-web-app-with-aurora',
  featured: false
};

PROJECTS[59] = {
  title: 'Query Data with DynamoDB',
  description: 'An AWS database implementation demonstrating NoSQL data management in Amazon DynamoDB, including table creation, partition and sort key utilization, strongly consistent CLI-based queries, and multi-table ACID transactions executed via AWS CloudShell.',
  descriptionFr: "Une implémentation de base de données AWS démontrant la gestion de données NoSQL dans Amazon DynamoDB, incluant la création de tables, l'utilisation de clés de partition et de tri, des requêtes CLI fortement cohérentes, et des transactions ACID multi-tables exécutées via AWS CloudShell.",
  tags: ['Amazon DynamoDB', 'AWS CloudShell', 'AWS Management Console'],
  category: 'AWS',
  image: 'images/projects/Query%20Data%20with%20DynamoDB.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/tree/main/03-databases/17-query-data-with-dynamodb',
  featured: false
};

PROJECTS[60] = {
  title: 'Encrypt Data with AWS KMS',
  description: 'An AWS cloud security project demonstrating server-side encryption at rest using AWS KMS Customer Managed Keys (CMKs) to secure an Amazon DynamoDB table, testing layered defense through fine-grained IAM policy restrictions and key usage permissions.',
  descriptionFr: "Un projet de sécurité cloud AWS démontrant le chiffrement côté serveur au repos avec des clés gérées par le client (CMK) AWS KMS pour sécuriser une table Amazon DynamoDB, testant une défense en profondeur via des restrictions de politique IAM granulaires et des permissions d'utilisation de clés.",
  tags: ['AWS KMS', 'Amazon DynamoDB', 'AWS IAM', 'Encryption at Rest', 'Customer Managed Keys (CMK)', 'Symmetric Encryption', 'Key Policies'],
  category: 'SecOps',
  image: 'images/projects/Encrypt%20Data%20with%20AWS%20KMS.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/04-security/18-encrypt-data-with-kms/aws-security-kms.md',
  featured: false
};

PROJECTS[61] = {
  title: 'Threat Detection with GuardDuty',
  description: 'An AWS cloud security project simulating SQL injection, command injection, and EC2 instance metadata credential exfiltration on an OWASP Juice Shop web app, while using Amazon GuardDuty to detect unauthorized cross-account S3 access and identify malicious uploads via S3 Malware Protection.',
  descriptionFr: "Un projet de sécurité cloud AWS simulant une injection SQL, une injection de commandes, et l'exfiltration d'identifiants de métadonnées d'instance EC2 sur une application web OWASP Juice Shop, tout en utilisant Amazon GuardDuty pour détecter les accès S3 inter-comptes non autorisés et identifier les téléversements malveillants via S3 Malware Protection.",
  tags: ['Amazon GuardDuty', 'Amazon EC2', 'Amazon S3', 'AWS CloudFormation', 'AWS CloudShell', 'Amazon VPC', 'AWS IAM'],
  category: 'AWS',
  image: 'images/projects/Threat%20Detection%20with%20GuardDuty.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/04-security/19-threat-detection/aws-security-guard-duty.md',
  featured: false
};

PROJECTS[62] = {
  title: 'Secure Secrets with Secrets Manager',
  description: 'An AWS cloud security project demonstrating the remediation of hardcoded credentials in a FastAPI Python web application by integrating AWS Secrets Manager via Boto3, triggering GitHub Secret Scanning protections, and performing Git rebasing to purge sensitive history from the commit log.',
  descriptionFr: "Un projet de sécurité cloud AWS démontrant la remédiation d'identifiants codés en dur dans une application web Python FastAPI en intégrant AWS Secrets Manager via Boto3, déclenchant les protections GitHub Secret Scanning, et effectuant un rebase Git pour purger l'historique sensible du journal des commits.",
  tags: ['AWS Secrets Manager', 'AWS IAM', 'Amazon S3', 'AWS Management Console'],
  category: 'SecOps',
  image: 'images/projects/Secure%20Secrets%20with%20Secrets%20Manager.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/04-security/20-secrets-manager/aws-security-secrets-manager.md',
  featured: false
};

PROJECTS[63] = {
  title: 'Build a Security Monitoring System',
  description: 'An AWS cloud security project establishing an end-to-end incident detection and alerting pipeline using AWS CloudTrail, Amazon CloudWatch Logs, and Amazon SNS to monitor GetSecretValue operations on AWS Secrets Manager, comparing metric filter alarms against raw CloudTrail SNS notifications for signal-to-noise optimization.',
  descriptionFr: "Un projet de sécurité cloud AWS établissant un pipeline de détection d'incidents et d'alerte de bout en bout utilisant AWS CloudTrail, Amazon CloudWatch Logs, et Amazon SNS pour surveiller les opérations GetSecretValue sur AWS Secrets Manager, comparant les alarmes de filtres de métriques aux notifications SNS CloudTrail brutes pour optimiser le rapport signal/bruit.",
  tags: ['AWS Secrets Manager', 'AWS CloudTrail', 'Amazon CloudWatch', 'Amazon CloudWatch Logs', 'Amazon SNS', 'Amazon S3', 'AWS CLI', 'AWS Management Console'],
  category: 'AWS',
  image: 'images/projects/Build%20a%20Security%20Monitoring%20System.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/04-security/21-security-monitoring/aws-security-monitoring.md',
  featured: true
};

PROJECTS[64] = {
  title: 'AWS Serverless Three-Tier Web Application',
  description: 'An AWS cloud architecture project demonstrating a serverless three-tier web application using S3, CloudFront, Lambda, API Gateway, and DynamoDB, with CORS configuration and dynamic API integration.',
  descriptionFr: "Un projet d'architecture cloud AWS démontrant une application web serverless à trois niveaux utilisant S3, CloudFront, Lambda, API Gateway et DynamoDB, avec configuration CORS et intégration d'API dynamique.",
  tags: ['Amazon S3', 'Amazon CloudFront', 'AWS Lambda', 'Amazon API Gateway', 'Amazon DynamoDB', 'AWS Management Console'],
  category: 'AWS',
  image: 'images/projects/Three-Tier%20Web%20App.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/05-containers-compute/25-three-tier-app/aws-compute-three-tier.md',
  featured: true
};

PROJECTS[65] = {
  title: 'Amazon EKS Backend Deployment & Cluster Observability',
  description: 'An end-to-end container orchestration project deploying a Python Flask application on Amazon EKS using Kubernetes, with Amazon ECR for container image delivery, NodePort services, and IAM-to-RBAC configuration for secure cluster access and real-time workload observability.',
  descriptionFr: "Un projet d'orchestration de conteneurs de bout en bout déployant une application Python Flask sur Amazon EKS avec Kubernetes, utilisant Amazon ECR pour la livraison d'images de conteneurs, des services NodePort, et une configuration IAM-vers-RBAC pour un accès sécurisé au cluster et une observabilité en temps réel des charges de travail.",
  tags: ['Amazon EKS', 'Amazon ECR', 'AWS IAM', 'Amazon EC2', 'AWS CloudFormation'],
  category: 'AWS',
  image: 'images/projects/Deploy%20Backend%20with%20Kubernetes.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/05-containers-compute/29-k8s-backend/aws-compute-eks4.md',
  featured: true
};

PROJECTS[66] = {
  title: 'Create S3 Buckets with Terraform',
  description: 'A Terraform-based Infrastructure as Code (IaC) project automating AWS S3 storage provisioning, covering provider configuration, AWS credentials, resource definitions, tagging, and the terraform init → plan → apply workflow for creating buckets and uploading objects.',
  descriptionFr: "Un projet d'Infrastructure as Code (IaC) basé sur Terraform automatisant le provisionnement de stockage AWS S3, couvrant la configuration du provider, les identifiants AWS, les définitions de ressources, le tagging, et le workflow terraform init → plan → apply pour créer des buckets et téléverser des objets.",
  tags: ['Amazon S3', 'AWS CLI', 'AWS IAM', 'Terraform'],
  category: 'DevOps',
  image: 'images/projects/Create%20S3%20Buckets%20with%20Terraform.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cloud-projects/blob/main/06-devops/40-terraform-s3/aws-devops-terraform.md',
  featured: false
};

PROJECTS[67] = {
  title: 'AWS EC2 Web Server Deployment & Custom AMI',
  description: 'Hands-on AWS project deploying and configuring an EC2 web server with automated Apache installation using User Data, Elastic IP, IMDSv2, CloudWatch monitoring, and a custom AMI for reusable multi-AZ deployments.',
  descriptionFr: "Projet AWS pratique consistant à déployer et configurer un serveur web EC2 avec installation automatisée d'Apache via User Data, une Elastic IP, IMDSv2, une surveillance CloudWatch, et une AMI personnalisée pour des déploiements multi-AZ réutilisables.",
  tags: ['Amazon EC2', 'Elastic IP', 'AMI', 'Amazon CloudWatch', 'Amazon EBS', 'Security Groups'],
  category: 'AWS',
  image: 'images/projects/Launch%20and%20Configure%20an%20EC2%20Instance.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/8caf04e1-4b52-408f-8b41-e08ba2f7798e',
  featured: false
};

PROJECTS[68] = {
  title: 'Mastering EC2 Storage with Amazon EBS',
  description: 'Hands-on AWS project exploring Amazon EBS storage by creating, attaching, modifying, snapshotting, restoring, and encrypting volumes, while implementing cross-region disaster recovery and practicing SAA-C03 storage architecture decisions.',
  descriptionFr: "Projet AWS pratique explorant le stockage Amazon EBS : création, attachement, modification, snapshots, restauration et chiffrement de volumes, avec mise en place d'une reprise après sinistre inter-régions et mise en pratique des décisions d'architecture de stockage SAA-C03.",
  tags: ['Amazon EBS', 'Amazon EC2', 'EBS Volumes', 'EBS Snapshots', 'AWS KMS', 'Instance Store'],
  category: 'AWS',
  image: 'images/projects/Mastering%20EC2%20Storage%20with%20Amazon%20EBS.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/6a35994f-d548-4a08-985f-f14649e3d31d',
  featured: false
};

PROJECTS[69] = {
  title: 'Build a Secure Multi-Tier VPC',
  description: 'Hands-on AWS project building a secure multi-tier VPC with public/private subnets, layered security using Security Groups and NACLs, a bastion host for private access, IAM roles for S3 access, and ENI-based failover.',
  descriptionFr: "Projet AWS pratique consistant à construire un VPC multi-niveaux sécurisé avec sous-réseaux publics/privés, une sécurité en couches via Security Groups et NACLs, un bastion host pour l'accès privé, des rôles IAM pour l'accès à S3, et un failover basé sur ENI.",
  tags: ['Amazon VPC', 'Subnets', 'Security Groups', 'NACLs', 'NAT Gateway', 'Internet Gateway', 'IAM Roles', 'Amazon EC2', 'ENI', 'Placement Groups'],
  category: 'AWS',
  image: 'images/projects/Build%20a%20Secure%20Multi-Tier%20VPC.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/16158760-9a18-44cb-bd18-c10fc54ca5c0',
  featured: false
};

PROJECTS[70] = {
  title: 'AWS Auto Scaling & Load Balancing Architecture',
  description: 'Built a highly available AWS web application using an Application Load Balancer and EC2 Auto Scaling Group across multiple Availability Zones, with automatic scaling based on CPU utilization.',
  descriptionFr: "Application web AWS hautement disponible construite avec un Application Load Balancer et un Auto Scaling Group EC2 répartis sur plusieurs zones de disponibilité, avec mise à l'échelle automatique basée sur l'utilisation du CPU.",
  tags: ['Amazon EC2', 'ALB', 'Auto Scaling Group', 'Launch Template', 'Target Groups', 'Amazon CloudWatch'],
  category: 'AWS',
  image: 'images/projects/AWS%20Auto%20Scaling%20%26%20Load%20Balancing%20Architecture.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/3fa3ed0d-b57d-408e-aaa1-10a201b4f5ef',
  featured: false
};

PROJECTS[71] = {
  title: 'Advanced AWS Scaling & Load Balancing',
  description: 'Built an advanced AWS scaling architecture using ALB, NLB, EC2 Auto Scaling, CloudWatch, step and scheduled scaling, sticky sessions, warm pools, lifecycle hooks, and Elastic IPs.',
  descriptionFr: "Architecture de mise à l'échelle AWS avancée construite avec ALB, NLB, Auto Scaling EC2, CloudWatch, mise à l'échelle par paliers et programmée, sessions persistantes, warm pools, lifecycle hooks et Elastic IPs.",
  tags: ['ALB', 'NLB', 'GWLB', 'Launch Template', 'Target Groups', 'CloudWatch Alarms', 'Elastic IP'],
  category: 'AWS',
  image: 'images/projects/Advanced%20AWS%20Scaling%20%26%20Load%20Balancing.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/384a7893-9533-447f-bc23-8bbc358d7c9c',
  featured: true
};

PROJECTS[72] = {
  title: 'AWS EC2 Placement Groups & Network Performance',
  description: 'Built an advanced EC2 networking and storage lab using Cluster, Spread, and Partition Placement Groups, verified ENA enhanced networking, explored NVMe Instance Store vs. EBS, and benchmarked inter-instance throughput with iperf3 and CloudWatch.',
  descriptionFr: "Un laboratoire avancé de réseau et de stockage EC2 utilisant les Placement Groups Cluster, Spread et Partition, avec vérification du réseau amélioré ENA, exploration du NVMe Instance Store face à l'EBS, et benchmark du débit inter-instances avec iperf3 et CloudWatch.",
  tags: ['Amazon EC2', 'Instance Store', 'Amazon EBS', 'Amazon CloudWatch', 'Placement Groups'],
  category: 'AWS',
  image: 'images/projects/AWS%20EC2%20Placement%20Groups%20%26%20Network%20Performance..png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/563ed47b-c06a-461a-9e8a-34378fdbc8a1',
  featured: false
};

PROJECTS[73] = {
  title: 'Benchmarking AWS EBS Volume Performance',
  description: 'Benchmarked gp2, gp3, and io2 EBS volumes using fio, monitored performance with CloudWatch, and built a RAID 0 array to test increased IOPS and throughput.',
  descriptionFr: "Benchmark des volumes EBS gp2, gp3 et io2 avec fio, suivi des performances via CloudWatch, et création d'un array RAID 0 pour tester l'augmentation des IOPS et du débit.",
  tags: ['Amazon EBS', 'Amazon EC2', 'Amazon CloudWatch'],
  category: 'AWS',
  image: 'images/projects/Benchmarking%20AWS%20EBS%20Volume%20Performance.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/79a3f721-9eb8-4783-8e1d-1edb73902013',
  featured: false
};

PROJECTS[74] = {
  title: 'EC2 Cost Optimization with Spot Instances & Auto Scaling',
  description: 'Built a cost-optimized EC2 architecture combining On-Demand and Spot Instances with Auto Scaling, Compute Optimizer, and Capacity Reservations.',
  descriptionFr: "Architecture EC2 optimisée en coûts combinant instances On-Demand et Spot avec Auto Scaling, Compute Optimizer et Capacity Reservations.",
  tags: ['Amazon EC2', 'Spot Instances', 'Launch Template', 'AWS Compute Optimizer'],
  category: 'AWS',
  image: 'images/projects/EC2%20Cost%20Optimization%20with%20Spot%20and%20ASGs.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/635fa2a8-c2d1-4f77-ae01-81202402f569',
  featured: false
};

PROJECTS[75] = {
  title: 'NAT, VPC Endpoints & EC2 Hibernate',
  description: 'Build a private VPC, configure NAT and VPC Endpoints, and test EC2 Hibernate and NAT Gateway vs. NAT Instance concepts.',
  descriptionFr: "Construction d'un VPC privé, configuration de NAT et VPC Endpoints, et test des concepts EC2 Hibernate et NAT Gateway face à NAT Instance.",
  tags: ['Amazon VPC', 'NAT Gateway', 'NAT Instance', 'VPC Endpoints', 'AWS PrivateLink'],
  category: 'AWS',
  image: 'images/projects/NAT%2C%20VPC%20Endpoints%20%26%20EC2%20Hibernate.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/e1245560-5b63-4536-81c6-071a9eb376c0',
  featured: false
};

PROJECTS[76] = {
  title: 'RDS Multi-AZ, Read Replicas & Recovery',
  description: 'Build a resilient Amazon RDS MySQL environment with Multi-AZ failover, read replicas, encryption, automated backups, PITR, and cross-Region backup replication.',
  descriptionFr: "Environnement Amazon RDS MySQL résilient avec failover Multi-AZ, réplicas de lecture, chiffrement, sauvegardes automatisées, PITR, et réplication des sauvegardes inter-régions.",
  tags: ['Amazon RDS', 'Read Replica', 'AWS KMS', 'AWS Backup'],
  category: 'AWS',
  image: 'images/projects/RDS%20Multi-AZ%2C%20Read%20Replicas%20%26%20Recovery.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/5dbe80df-cdaf-4d78-9369-75f4ee366402',
  featured: true
};

PROJECTS[77] = {
  title: 'Aurora Global Database and RDS Proxy',
  description: 'Migrated RDS MySQL to Aurora Serverless v2, implemented RDS Proxy for connection pooling, and built a multi-region Aurora Global Database with write forwarding and zero-data-loss managed switchover.',
  descriptionFr: "Migration de RDS MySQL vers Aurora Serverless v2, mise en place de RDS Proxy pour le pooling de connexions, et construction d'une Aurora Global Database multi-régions avec write forwarding et managed switchover sans perte de données.",
  tags: ['Amazon Aurora', 'Amazon RDS', 'RDS Proxy', 'Aurora Global Database', 'AWS Secrets Manager', 'Amazon CloudWatch'],
  category: 'AWS',
  image: 'images/projects/Aurora%20Global%20Database%20and%20RDS%20Proxy.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/9db50aed-82b8-4329-8618-6fddc9a69f38',
  featured: false
};

PROJECTS[78] = {
  title: 'ElastiCache Caching Patterns with RDS',
  description: 'Build an AWS caching layer with ElastiCache Valkey in front of RDS MySQL to improve application performance and reduce database load.',
  descriptionFr: "Mise en place d'une couche de cache AWS avec ElastiCache Valkey devant RDS MySQL pour améliorer les performances applicatives et réduire la charge sur la base de données.",
  tags: ['Amazon ElastiCache', 'Amazon RDS', 'Amazon EC2', 'AWS IAM'],
  category: 'AWS',
  image: 'images/projects/ElastiCache%20Caching%20Patterns%20with%20RDS.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/834fa4ae-1c8d-4e30-9ac8-7448174bf491',
  featured: false
};

PROJECTS[79] = {
  title: 'Route 53 DNS Foundations',
  description: 'Create a Route 53 hosted zone, configure DNS records, and learn the difference between Alias and CNAME records.',
  descriptionFr: "Création d'une hosted zone Route 53, configuration des enregistrements DNS, et apprentissage de la différence entre les enregistrements Alias et CNAME.",
  tags: ['Amazon Route 53', 'Amazon S3', 'Route 53 Alias record'],
  category: 'AWS',
  image: 'images/projects/Route%2053%20DNS%20Foundations.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/f67cee94-0e0f-4f0c-83de-b69be788d4cd',
  featured: false
};

PROJECTS[80] = {
  title: 'Route 53 Health Checks and DNS Failover',
  description: 'AWS multi-region active-passive failover using Route 53, EC2, CloudWatch, and SNS, with automated DNS failover to a secondary Apache server and monitoring alerts.',
  descriptionFr: "Failover actif-passif multi-régions AWS utilisant Route 53, EC2, CloudWatch et SNS, avec failover DNS automatisé vers un serveur Apache secondaire et des alertes de surveillance.",
  tags: ['Amazon Route 53', 'Amazon EC2', 'Amazon CloudWatch', 'Amazon SNS'],
  category: 'AWS',
  image: 'images/projects/Route%2053%20Health%20Checks%20and%20DNS%20Failover.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/81316cb8-780f-4e99-a437-8012aadc5182',
  featured: false
};

PROJECTS[81] = {
  title: 'AWS Route 53 Traffic Routing Policies',
  description: 'Hands-on AWS project exploring Route 53 weighted, latency-based, multivalue, geolocation, and geoproximity routing across multi-region EC2 web servers, with health checks and DNS-based failover.',
  descriptionFr: "Projet AWS pratique explorant le routage Route 53 pondéré, basé sur la latence, multivalue, géolocalisation et géoproximité à travers des serveurs web EC2 multi-régions, avec health checks et failover basé sur le DNS.",
  tags: ['Amazon Route 53', 'Amazon EC2'],
  category: 'AWS',
  image: 'images/projects/AWS%20Route%2053%20Traffic%20Routing%20Policies.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/8cd7d32e-6462-4ab5-87b4-950ab1373404',
  featured: false
};

PROJECTS[82] = {
  title: 'Route 53 Private DNS and Resolver',
  description: 'Built a private DNS environment using Route 53, VPC, EC2, Resolver, and DNS Firewall, enabling internal DNS, split-view resolution, hybrid DNS forwarding, and domain-level filtering.',
  descriptionFr: "Environnement DNS privé construit avec Route 53, VPC, EC2, Resolver et DNS Firewall, permettant le DNS interne, la résolution split-view, le forwarding DNS hybride, et le filtrage au niveau des domaines.",
  tags: ['Amazon Route 53', 'Amazon VPC', 'Amazon EC2', 'Amazon Route 53 Resolver'],
  category: 'AWS',
  image: 'images/projects/Route%2053%20Private%20DNS%20and%20Resolver.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/13f9b02b-58c7-451e-8318-43dd4a621245',
  featured: false
};

PROJECTS[83] = {
  title: 'Deliver a Static Website with CloudFront',
  description: 'Built a secure, globally distributed static website using Amazon S3 and CloudFront, with Origin Access Control, edge caching, cache invalidation, and custom cache behaviors.',
  descriptionFr: "Site web statique sécurisé et distribué mondialement construit avec Amazon S3 et CloudFront, avec Origin Access Control, mise en cache en périphérie, invalidation de cache, et comportements de cache personnalisés.",
  tags: ['Amazon CloudFront', 'Amazon S3', 'OAC'],
  category: 'AWS',
  image: 'images/projects/Deliver%20a%20Static%20Website%20with%20CloudFront.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/f526eacd-032c-461d-9a89-2ce509f7deb3',
  featured: true
};

PROJECTS[84] = {
  title: 'Multi-Region Failover with Global Accelerator',
  description: 'Built a multi-region AWS architecture using Global Accelerator to route traffic across EC2 instances in two regions with health-based failover, traffic controls, and client affinity.',
  descriptionFr: "Architecture AWS multi-régions construite avec Global Accelerator pour router le trafic entre des instances EC2 dans deux régions avec failover basé sur la santé, contrôles de trafic, et affinité client.",
  tags: ['AWS Global Accelerator', 'Amazon EC2'],
  category: 'AWS',
  image: 'images/projects/Multi-Region%20Failover%20with%20Global%20Accelerator.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/596362ad-0e33-40be-95a1-8f2b201dd44e',
  featured: false
};

PROJECTS[85] = {
  title: 'Data Migration with Snow Family and DataSync',
  description: 'AWS data migration project using DataSync and Snow Family for online and offline data transfers.',
  descriptionFr: "Projet de migration de données AWS utilisant DataSync et Snow Family pour les transferts de données en ligne et hors ligne.",
  tags: ['AWS DataSync', 'AWS Snow Family', 'Amazon S3'],
  category: 'AWS',
  image: 'images/projects/Data%20Migration%20with%20Snow%20Family%20and%20DataSync.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/54a26cc1-6040-4792-b604-153daaa25717',
  featured: false
};

PROJECTS[86] = {
  title: 'Master Amazon FSx for SAA-C03',
  description: 'Build an FSx decision framework by exploring all four FSx types and solving SAA-C03 scenario-based questions.',
  descriptionFr: "Construction d'un cadre de décision FSx en explorant les quatre types de FSx et en résolvant des questions de scénarios SAA-C03.",
  tags: ['Amazon FSx', 'AWS Management Console'],
  category: 'AWS',
  image: 'images/projects/Master%20Amazon%20FSx%20for%20SAA-C03.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/a173f7a1-4312-4b5d-87a6-692923fd9538',
  featured: false
};

PROJECTS[87] = {
  title: 'Storage Gateway and Transfer Family',
  description: 'A hands-on AWS hybrid storage project focused on deploying AWS Transfer Family, integrating SFTP with Amazon S3, and mastering Storage Gateway, Transfer Family, and DataSync selection for SAA-C03 scenarios.',
  descriptionFr: "Un projet AWS pratique de stockage hybride axé sur le déploiement d'AWS Transfer Family, l'intégration de SFTP avec Amazon S3, et la maîtrise du choix entre Storage Gateway, Transfer Family et DataSync pour les scénarios SAA-C03.",
  tags: ['AWS Transfer Family', 'Amazon S3', 'AWS Storage Gateway', 'AWS DataSync', 'AWS IAM'],
  category: 'AWS',
  image: 'images/projects/Storage%20Gateway%20and%20Transfer%20Family.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/d56f26c4-3b04-4dbd-b435-8ffe03febcef',
  featured: false
};

PROJECTS[88] = {
  title: 'Decouple an Order Processing System',
  description: 'Built a decoupled order-processing system using Amazon SNS and SQS, implementing fan-out messaging, FIFO ordering, Dead Letter Queues, and SNS filtering for reliable distributed processing.',
  descriptionFr: "Système de traitement de commandes découplé construit avec Amazon SNS et SQS, mettant en œuvre la messagerie fan-out, l'ordonnancement FIFO, les Dead Letter Queues, et le filtrage SNS pour un traitement distribué fiable.",
  tags: ['Amazon SQS', 'Amazon SNS', 'Dead Letter Queue'],
  category: 'AWS',
  image: 'images/projects/Decouple%20an%20Order%20Processing%20System.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/1f5bc572-b329-4396-a5fb-11ff73178620',
  featured: true
};

PROJECTS[89] = {
  title: 'Build a Real-Time Clickstream Pipeline',
  description: 'A real-time clickstream pipeline using Kinesis Data Streams, Lambda, Firehose, and S3 to ingest, process, replay, and store streaming events.',
  descriptionFr: "Un pipeline de clickstream en temps réel utilisant Kinesis Data Streams, Lambda, Firehose et S3 pour ingérer, traiter, rejouer et stocker des événements en streaming.",
  tags: ['Amazon Kinesis Data Streams', 'AWS Lambda', 'Amazon Kinesis Firehose', 'Amazon S3', 'Amazon CloudWatch', 'Kinesis Shards'],
  category: 'AWS',
  image: 'images/projects/Build%20a%20Real-Time%20Clickstream%20Pipeline.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/6b7db65a-b547-4322-a071-212e620d0f5c',
  featured: false
};

PROJECTS[90] = {
  title: 'Amazon MQ + EventBridge Routing',
  description: 'A hands-on AWS application integration project using Amazon MQ and EventBridge to route messages based on content, demonstrate queue/topic patterns, and replay archived events.',
  descriptionFr: "Un projet pratique d'intégration d'applications AWS utilisant Amazon MQ et EventBridge pour router les messages selon leur contenu, démontrer les patterns queue/topic, et rejouer des événements archivés.",
  tags: ['Amazon MQ', 'Amazon EventBridge', 'Amazon SNS', 'Amazon CloudWatch'],
  category: 'AWS',
  image: 'images/projects/Amazon%20MQ%20%2B%20EventBridge%20Routing.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/af2a9fc8-b43f-4fd6-b3af-af32a61d6927',
  featured: false
};

PROJECTS[91] = {
  title: 'Deploy a Containerized App to ECS',
  description: 'A hands-on AWS project deploying a Dockerized web app to Amazon ECS with Fargate, using ECR for image storage and demonstrating self-healing and zero-downtime rolling updates.',
  descriptionFr: "Un projet AWS pratique déployant une application web Dockerisée sur Amazon ECS avec Fargate, utilisant ECR pour le stockage d'images, et démontrant l'auto-réparation et les rolling updates sans interruption.",
  tags: ['Amazon ECS', 'Amazon ECR'],
  category: 'AWS',
  image: 'images/projects/Deploy%20a%20Containerized%20App%20to%20ECS.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/b4de2a41-dc8a-415e-9df5-1c65f67dd85d',
  featured: false
};

PROJECTS[92] = {
  title: 'Secure and Scale ECS on AWS',
  description: 'A production-grade ECS Fargate deployment using private subnets, an Application Load Balancer, IAM least privilege, CloudWatch, and auto scaling.',
  descriptionFr: "Un déploiement ECS Fargate de qualité production utilisant des sous-réseaux privés, un Application Load Balancer, le principe du moindre privilège IAM, CloudWatch, et l'auto scaling.",
  tags: ['Amazon ECS', 'ALB', 'Amazon VPC', 'AWS IAM', 'Amazon CloudWatch', 'Subnets', 'NAT Gateway'],
  category: 'AWS',
  image: 'images/projects/Secure%20and%20Scale%20ECS%20on%20AWS.png',
  docUrl: 'https://nextwork.ai/radiant_cyan_daring_clementine/docs/83973c76-dddc-402b-9b87-754ba7bd286b',
  featured: true
};
