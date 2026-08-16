export interface Project {
  title: string;
  description: string;
  descriptionFr: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

function makeProjects(count: number, startIndex: number, tagPool: string[], startFeatured = 0): Project[] {
  return Array.from({ length: count }, (_, i) => ({
    title: `Project ${startIndex + i + 1}`,
    description: 'A short summary of what this project does and the problem it solves.',
    descriptionFr: 'Un court résumé de ce que fait ce projet et du problème qu\'il résout.',
    tags: [tagPool[i % tagPool.length], tagPool[(i + 1) % tagPool.length]],
    githubUrl: '#',
    liveUrl: i % 3 === 0 ? '#' : undefined,
    featured: i < startFeatured
  }));
}

export const PROJECTS: Project[] = [
  ...makeProjects(4, 0, ['Java', 'Spring Boot'], 1),
  ...makeProjects(4, 4, ['Angular', 'TypeScript'], 1),
  ...makeProjects(4, 8, ['AWS', 'Docker', 'Kubernetes'], 1),
  ...makeProjects(4, 12, ['Kafka', 'Spark'], 1),
  ...makeProjects(4, 16, ['MLflow', 'TensorFlow'], 1),
  ...makeProjects(4, 20, ['Flutter'], 0)
];

PROJECTS[0] = {
  title: 'Calculator',
  description: 'A vanilla JavaScript calculator app with chained calculations, number formatting, drag scrolling, and error handling. Built with HTML5 and CSS3 as part of The Odin Project Foundations curriculum.',
  descriptionFr: "Une application calculatrice en JavaScript pur avec calculs enchaînés, formatage des nombres, défilement par glisser et gestion des erreurs. Construite avec HTML5 et CSS3 dans le cadre du programme Foundations de The Odin Project.",
  tags: ['HTML', 'CSS3', 'JavaScript'],
  image: 'images/projects/calculator.png',
  githubUrl: 'https://github.com/YOUHAD08/Calculator.git',
  liveUrl: 'https://youhad08.github.io/Calculator/',
  featured: false
};

PROJECTS[1] = {
  title: 'Cipboard-Landing-Page-Master',
  description: 'A responsive landing page (Frontend Mentor challenge) built with HTML5 and CSS Grid & Flexbox, adapting seamlessly across mobile, tablet, and desktop.',
  descriptionFr: "Une landing page responsive (défi Frontend Mentor) construite avec HTML5 et CSS Grid & Flexbox, s'adaptant parfaitement au mobile, à la tablette et au bureau.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/clipboard-landing.png',
  githubUrl: 'https://github.com/YOUHAD08/Cipboard-Landing-Page-Master.git',
  liveUrl: 'https://youhad08.github.io/Cipboard-Landing-Page-Master/',
  featured: false
};

PROJECTS[2] = {
  title: 'Four-Card-Feature-Section',
  description: 'A responsive card layout built with semantic HTML5, CSS Grid, and Flexbox — mobile-first and optimized for all devices.',
  descriptionFr: "Une mise en page de cartes responsive construite avec HTML5 sémantique, CSS Grid et Flexbox — mobile-first et optimisée pour tous les appareils.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/four-card-feature-section.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Four-Card-Feature-Section.git',
  liveUrl: 'https://youhad08.github.io/Four-Card-Feature-Section/',
  featured: false
};

PROJECTS[3] = {
  title: 'Intro-component-with-sign-up-form',
  description: 'A responsive landing page with a sign-up form, built using HTML5, CSS3, and custom properties. Clean UI, mobile-first across 📱 mobile, 📟 tablet, and 💻 desktop.',
  descriptionFr: "Une landing page responsive avec un formulaire d'inscription, construite avec HTML5, CSS3 et les propriétés personnalisées. Interface épurée, mobile-first sur 📱 mobile, 📟 tablette et 💻 bureau.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/intro-signup-form.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Intro-component-with-sign-up-form.git',
  liveUrl: 'https://youhad08.github.io/Intro-component-with-sign-up-form/',
  featured: false
};

PROJECTS[4] = {
  title: 'Single-Price-Grid-Component',
  description: 'A responsive pricing section built with HTML & CSS, demonstrating mobile-first design, CSS Grid, and hover interactions.',
  descriptionFr: "Une section de tarification responsive construite avec HTML & CSS, illustrant le design mobile-first, CSS Grid et les interactions au survol.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/single-price-grid.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Single-Price-Grid-Component.git',
  liveUrl: 'https://youhad08.github.io/Single-Price-Grid-Component/',
  featured: false
};

PROJECTS[5] = {
  title: '3-column-preview-card-component',
  description: 'A responsive card layout built for the Frontend Mentor Challenge using HTML5, CSS Grid, and responsive design principles.',
  descriptionFr: "Une mise en page de cartes responsive construite pour le défi Frontend Mentor avec HTML5, CSS Grid et les principes de design responsive.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/3-column-preview-card.jpg',
  githubUrl: 'https://github.com/YOUHAD08/3-column-preview-card-component.git',
  liveUrl: 'https://youhad08.github.io/3-column-preview-card-component/',
  featured: false
};

PROJECTS[6] = {
  title: 'Order-summary-card-solution',
  description: 'A responsive card component built with HTML & CSS, using Flexbox and media queries. Includes mobile & desktop layouts.',
  descriptionFr: "Un composant de carte responsive construit avec HTML & CSS, utilisant Flexbox et les media queries. Inclut des mises en page mobile et bureau.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/order-summary-card.jpg',
  githubUrl: 'https://github.com/YOUHAD08/Order-summary-card-solution.git',
  liveUrl: 'https://youhad08.github.io/Order-summary-card-solution/',
  featured: false
};

PROJECTS[7] = {
  title: 'Testimonials-Grid-Section',
  description: 'A responsive solution to the Frontend Mentor challenge, built with modern HTML and CSS for a clean, accessible design across screen sizes.',
  descriptionFr: "Une solution responsive au défi Frontend Mentor, construite avec du HTML et CSS modernes pour un design propre et accessible sur toutes les tailles d'écran.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/testimonials-grid.png',
  githubUrl: 'https://github.com/YOUHAD08/Frontend-Mentor---Testimonials-Grid-Section-.git',
  liveUrl: 'https://youhad08.github.io/Frontend-Mentor---Testimonials-Grid-Section-/',
  featured: false
};

PROJECTS[8] = {
  title: 'MARRAKECH-JUICE---Landing-Page',
  description: 'A vibrant, responsive landing page built with modern HTML and CSS, featuring smooth animations, sleek design, and social media integration.',
  descriptionFr: "Une landing page vibrante et responsive construite avec du HTML et CSS modernes, avec animations fluides, design élégant et intégration des réseaux sociaux.",
  tags: ['HTML', 'CSS3'],
  image: 'images/projects/marrakech-juice.png',
  githubUrl: 'https://github.com/YOUHAD08/MARRAKECH-JUICE---Landing-Page.git',
  liveUrl: 'https://youhad08.github.io/MARRAKECH-JUICE---Landing-Page/',
  featured: false
};

PROJECTS[9] = {
  title: 'Rock-Paper-Scissors',
  description: 'An interactive browser game built with HTML5, CSS3, and vanilla JavaScript, featuring game logic, score tracking, and a responsive UI.',
  descriptionFr: "Un jeu de navigateur interactif construit avec HTML5, CSS3 et JavaScript pur, avec logique de jeu, suivi du score et une interface responsive.",
  tags: ['HTML', 'CSS3', 'JavaScript'],
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
  image: 'images/projects/family-doctor-clinic.png',
  githubUrl: 'https://github.com/YOUHAD08/Landing-Page.git',
  liveUrl: 'https://youhad08.github.io/Landing-Page/',
  featured: false
};

PROJECTS[11] = {
  title: 'Distributed Microservices E-Commerce Blueprint',
  description: 'A Spring Boot microservices reference project demonstrating service discovery, API gateway routing, centralized config management, Feign-based communication, and Resilience4j circuit breakers across six services, each backed by its own H2 database.',
  descriptionFr: "Un projet de référence en microservices Spring Boot illustrant la découverte de services, le routage via API gateway, la gestion centralisée de la configuration, la communication via Feign, et les circuit breakers Resilience4j sur six services, chacun avec sa propre base H2.",
  tags: ['Java', 'Git', 'GitHub', 'Spring Boot', 'Spring Cloud', 'Microservices Architecture', 'REST API'],
  image: 'images/projects/microservices-blueprint.png',
  githubUrl: 'https://github.com/YOUHAD08/Microservices-Architecture.git',
  featured: true
};

PROJECTS[12] = {
  title: 'Automated MLOps Pipeline with CML & GitHub Actions',
  description: 'An automated MLOps CI/CD pipeline using GitHub Actions and CML for automated model evaluation, testing, and PR report generation.',
  descriptionFr: "Un pipeline MLOps CI/CD automatisé utilisant GitHub Actions et CML pour l'évaluation automatique des modèles, les tests et la génération de rapports sur les PR.",
  tags: ['Python', 'Git', 'CML', 'GitHub Actions', 'scikit-learn'],
  image: 'images/projects/mlops-cml-pipeline.png',
  githubUrl: 'https://github.com/YOUHAD08/mlops-cml-pipeline.git',
  featured: true
};

PROJECTS[13] = {
  title: 'End-to-End Nginx CI/CD Pipeline (Jenkins + Docker Hub)',
  description: 'A fully automated CI/CD pipeline that builds, tests, publishes, and deploys a containerized nginx web application — triggered automatically on every GitHub push.',
  descriptionFr: "Un pipeline CI/CD entièrement automatisé qui construit, teste, publie et déploie une application web nginx conteneurisée — déclenché automatiquement à chaque push GitHub.",
  tags: ['Jenkins', 'Docker', 'CI-CD', 'Nginx', 'HTML'],
  image: 'images/projects/jenkins-docker-cicd.png',
  githubUrl: 'https://github.com/YOUHAD08/jenkins-docker-cicd.git',
  featured: true
};

PROJECTS[14] = {
  title: 'Full-Stack AI Agent with Vector Search & Custom Tools',
  description: 'Full-stack AI application using Spring Boot, Spring AI, and Angular. Features Retrieval-Augmented Generation (RAG) for querying uploaded PDFs and custom tools for fetching live system data.',
  descriptionFr: "Application IA full-stack utilisant Spring Boot, Spring AI et Angular. Intègre la génération augmentée par récupération (RAG) pour interroger des PDF téléversés et des outils personnalisés pour récupérer des données système en direct.",
  tags: ['Spring Boot', 'Spring AI', 'Angular', 'AI Agent', 'RAG', 'Semantic-Search', 'Vector Store', 'Java', 'TypeScript', 'LLM', 'HTML', 'CSS'],
  image: 'images/projects/ai-agent-spring-boot-angular.png',
  githubUrl: 'https://github.com/YOUHAD08/ai-agent-spring-boot-angular.git',
  featured: true
};

PROJECTS[15] = {
  title: 'AWS CI/CD Pipeline: CodeBuild & CodeArtifact',
  description: 'Automated AWS pipeline (CodePipeline, CodeBuild, CodeDeploy) connecting GitHub to a CloudFormation-backed web server via CodeArtifact and S3.',
  descriptionFr: "Pipeline AWS automatisé (CodePipeline, CodeBuild, CodeDeploy) connectant GitHub à un serveur web basé sur CloudFormation via CodeArtifact et S3.",
  tags: ['CI-CD', 'CodePipeline', 'CodeBuild', 'CodeDeploy', 'S3', 'CloudFormation', 'GitHub', 'VPC', 'CodeArtifact', 'EC2'],
  image: 'images/projects/aws-cicd-pipeline.png',
  githubUrl: 'https://github.com/YOUHAD08/aws-cicd-pipeline.git',
  featured: true
};

PROJECTS[16] = {
  title: 'Enterprise Bank Churn MLOps Pipeline',
  description: 'A production-ready MLOps pipeline for predicting bank customer churn (Exited = 0/1). Automates schema validation, imbalanced data training (SMOTE vs. class_weight), artifact versioning, Docker containerization, and real-time REST API serving via FastAPI.',
  descriptionFr: "Un pipeline MLOps prêt pour la production pour prédire le churn des clients bancaires (Exited = 0/1). Automatise la validation de schéma, l'entraînement sur données déséquilibrées (SMOTE vs class_weight), le versioning des artefacts, la conteneurisation Docker et le service d'API REST en temps réel via FastAPI.",
  tags: ['Machine Learning', 'FastAPI', 'Docker', 'Python', 'scikit-learn', 'SMOTE', 'Data Validation', 'REST API', 'CI-CD', 'pytest'],
  image: 'images/projects/bank-churn-mlops-pipeline.png',
  githubUrl: 'https://github.com/YOUHAD08/bank-churn-mlops-pipeline.git',
  featured: true
};

PROJECTS[17] = {
  title: 'Sales Data Warehouse EDA & Analytics',
  description: 'A SQL-based EDA project on a Medallion Sales Data Warehouse using T-SQL and BI views for customer RFM segmentation, product tracking, time-series analysis, and KPI reporting.',
  descriptionFr: "Un projet d'EDA basé sur SQL sur un entrepôt de données de ventes Medallion utilisant T-SQL et des vues BI pour la segmentation RFM des clients, le suivi des produits, l'analyse de séries temporelles et le reporting KPI.",
  tags: ['SQL', 'T-SQL', 'Data Warehouse', 'EDA', 'BI', 'Medallion Architecture', 'Time-Series Analysis', 'ETL'],
  image: 'images/projects/sql-sales-datawarehouse-analysis.png',
  githubUrl: 'https://github.com/YOUHAD08/sql-sales-datawarehouse-analysis.git',
  featured: false
};

PROJECTS[18] = {
  title: 'Surveillance Motion & Light Detection',
  description: 'An OpenCV and Python project for real-time surveillance analysis. Converts video feeds to grayscale, identifies light sources via pixel brightness, and tracks frame-by-frame motion.',
  descriptionFr: "Un projet OpenCV et Python pour l'analyse de surveillance en temps réel. Convertit les flux vidéo en niveaux de gris, identifie les sources lumineuses via la luminosité des pixels, et suit le mouvement image par image.",
  tags: ['OpenCV', 'Python', 'Image Processing', 'Matplotlib', 'Data Visualization'],
  image: 'images/projects/grayscale-motion-detection.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/01_grayscale_motion_detection.ipynb',
  featured: false
};

PROJECTS[19] = {
  title: 'Traffic Light Detection with OpenCV & HSV',
  description: 'Detect active traffic lights (red, orange, green) in Python using OpenCV HSV color thresholding and mask segmentation.',
  descriptionFr: "Détecte les feux de circulation actifs (rouge, orange, vert) en Python avec le seuillage de couleur HSV d'OpenCV et la segmentation par masque.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  image: 'images/projects/traffic-light-color-spaces.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/02_traffic_light_color_spaces.ipynb',
  featured: false
};

PROJECTS[20] = {
  title: 'Football Match Image Annotation in OpenCV',
  description: 'Annotate a football match image with bounding boxes, directional arrows, and text using OpenCV drawing functions to highlight ball location and shot speed.',
  descriptionFr: "Annote une image de match de football avec des boîtes englobantes, des flèches directionnelles et du texte via les fonctions de dessin d'OpenCV pour mettre en évidence la position du ballon et la vitesse du tir.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  image: 'images/projects/football-annotations.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/03_drawing_football_annotations.ipynb',
  featured: false
};

PROJECTS[21] = {
  title: 'Image Rotation & Straightening with OpenCV',
  description: 'Straighten tilted photos in Python using OpenCV affine transformations. Calculates rotation matrices to align and correct camera tilt angles.',
  descriptionFr: "Redresse des photos inclinées en Python avec les transformations affines d'OpenCV. Calcule les matrices de rotation pour aligner et corriger les angles d'inclinaison de la caméra.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  image: 'images/projects/image_transformations.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/04_image_transformations.ipynb',
  featured: false
};

PROJECTS[22] = {
  title: 'Satellite Image Segmentation & Contrast Enhancement',
  description: "Enhances low-contrast satellite images and segments clouds from water bodies using histogram equalization and Otsu's automatic thresholding.",
  descriptionFr: "Améliore les images satellite à faible contraste et segmente les nuages des étendues d'eau via l'égalisation d'histogramme et le seuillage automatique d'Otsu.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  image: 'images/projects/thresholding_histograms.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/06_thresholding_histograms.ipynb',
  featured: false
};

PROJECTS[23] = {
  title: 'Night Image Enhancement via Gamma Correction',
  description: 'Python script using OpenCV and Matplotlib to enhance low-light photos via gamma correction (γ = 1.6) and contrast adjustment. Includes histogram analysis comparing intensity distributions.',
  descriptionFr: "Script Python utilisant OpenCV et Matplotlib pour améliorer les photos en basse lumière via la correction gamma (γ = 1.6) et l'ajustement du contraste. Inclut une analyse d'histogramme comparant les distributions d'intensité.",
  tags: ['OpenCV', 'Python', 'Image Processing'],
  image: 'images/projects/gamma_correction_enhancement.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/07_gamma_correction_enhancement.ipynb',
  featured: false
};

PROJECTS[24] = {
  title: 'Image Denoising & Sharpening with OpenCV',
  description: 'Python implementation analyzing spatial filters (Gaussian, Median, Bilateral, NL-Means) and 2D convolution sharpening to remove artificial noise and restore image details.',
  descriptionFr: "Implémentation Python analysant les filtres spatiaux (Gaussien, Médian, Bilatéral, NL-Means) et la netteté par convolution 2D pour supprimer le bruit artificiel et restaurer les détails de l'image.",
  tags: ['OpenCV', 'Image Denoising', 'Convolution', 'Image Sharpening', 'Python'],
  image: 'images/projects/convolutions_blurring_sharpening.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/08_convolutions_blurring_sharpening.ipynb',
  featured: false
};

PROJECTS[25] = {
  title: 'Scikit-Image Histogram Specification in OpenCV',
  description: 'Implementation of image histogram matching using skimage.exposure.match_histograms and OpenCV.',
  descriptionFr: "Implémentation de la correspondance d'histogrammes d'images utilisant skimage.exposure.match_histograms et OpenCV.",
  tags: ['OpenCV', 'scikit-image', 'Histogram Specification', 'Image Processing', 'Python'],
  image: 'images/projects/histogram_specification.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-1/09_histogram_specification.ipynb',
  featured: false
};

PROJECTS[26] = {
  title: 'KNN Classification and Cross-Validation on CIFAR-10',
  description: 'Evaluating K-Nearest Neighbors image classification performance across multiple K values using cross-validation on CIFAR-10 image vectors.',
  descriptionFr: "Évaluation de la performance de classification d'images K-Nearest Neighbors sur plusieurs valeurs de K en utilisant la validation croisée sur les vecteurs d'images CIFAR-10.",
  tags: ['KNN', 'CIFAR-10', 'Cross-Validation', 'scikit-learn', 'Python', 'Image Classification'],
  image: 'images/projects/KNN_CIFAR10.png',
  githubUrl: 'https://github.com/YOUHAD08/computer-vision-labs/blob/main/lab-2/KNN_CIFAR10.ipynb',
  featured: false
};

PROJECTS[27] = {
  title: 'Sales Data Warehouse',
  description: 'A production-ready SQL Server data warehouse using the Medallion Architecture (Bronze, Silver, Gold) and a star schema to unify CRM and ERP data for sales, customer, and product analytics.',
  descriptionFr: "Un entrepôt de données SQL Server prêt pour la production utilisant l'architecture Medallion (Bronze, Silver, Gold) et un schéma en étoile pour unifier les données CRM et ERP pour l'analyse des ventes, des clients et des produits.",
  tags: ['SQL Server', 'Data Warehouse', 'Medallion Architecture', 'ETL', 'Star Schema', 'T-SQL', 'Data Engineering', 'BI', 'Data Modeling', 'Kimball Methodology'],
  image: 'images/projects/sql_data_warehouse.png',
  githubUrl: 'https://github.com/YOUHAD08/sql_data_warehouse',
  featured: true
};
