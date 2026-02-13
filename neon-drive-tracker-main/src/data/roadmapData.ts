export interface Skill {
  id: string;
  name: string;
  description: string;
  subtopics: string[];
  month: number;
  week: number;
  track: 'SDE' | 'AI';
  hours: number;
  phase: string;
  project?: string;
  interviewQ?: string;
  salaryImpact?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  month: number;
  salaryImpact?: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'Course' | 'Platform' | 'Docs' | 'Tool' | 'Book';
  url: string;
  category: string;
}

export const skills: Skill[] = [
  // Month 1 - Foundation (SDE)
  { id: 's1', name: 'Python Deep Dive', description: 'Master Python internals and advanced features', subtopics: ['Lists, Dicts, Tuples', 'Comprehensions', 'Decorators, Generators', 'Context Managers', 'Async/Await'], month: 1, week: 1, track: 'SDE', hours: 15, phase: 'FOUNDATION', project: '20 Python problems', salaryImpact: 'Base' },
  { id: 's2', name: 'OOP Mastery', description: 'Object-oriented design and SOLID principles', subtopics: ['Classes & Inheritance', 'Polymorphism', 'Abstract Classes', 'SOLID Principles', 'Design Patterns'], month: 1, week: 2, track: 'SDE', hours: 12, phase: 'FOUNDATION', project: 'Library Management System', salaryImpact: 'Base' },
  { id: 's3', name: 'Data Structures', description: 'Core data structures for technical interviews', subtopics: ['Arrays, Linked Lists', 'Stacks, Queues', 'Hash Tables', 'Trees (Binary, BST, AVL)', 'Graphs'], month: 1, week: 3, track: 'SDE', hours: 18, phase: 'FOUNDATION', project: '30 DSA problems', salaryImpact: '+₹3-5L' },
  { id: 's4', name: 'Algorithms', description: 'Essential algorithms and problem-solving', subtopics: ['Sorting (QuickSort, MergeSort)', 'Binary Search', 'DFS, BFS', 'Dynamic Programming', 'Greedy Algorithms'], month: 1, week: 4, track: 'SDE', hours: 15, phase: 'FOUNDATION', project: '30 more problems', salaryImpact: '+₹3-5L' },

  // Month 2 - Backend (SDE)
  { id: 's5', name: 'FastAPI Mastery', description: 'Build production-grade APIs', subtopics: ['Routing & Endpoints', 'Pydantic Validation', 'Dependency Injection', 'Middleware', 'Error Handling'], month: 2, week: 1, track: 'SDE', hours: 15, phase: 'BACKEND', project: 'Task Management API', salaryImpact: '+₹4-6L' },
  { id: 's6', name: 'Database Design', description: 'PostgreSQL and data modeling', subtopics: ['PostgreSQL', 'Indexing & Optimization', 'Transactions', 'ORMs', 'Migrations'], month: 2, week: 2, track: 'SDE', hours: 15, phase: 'BACKEND', project: 'Add PostgreSQL to API', salaryImpact: '+₹3-5L' },
  { id: 's7', name: 'Auth & Security', description: 'Secure your applications', subtopics: ['JWT Tokens', 'OAuth2', 'Password Hashing', 'CORS & CSRF', 'Rate Limiting'], month: 2, week: 3, track: 'SDE', hours: 12, phase: 'BACKEND', project: 'Add Authentication', salaryImpact: '+₹2-3L' },
  { id: 's8', name: 'Testing & Docs', description: 'Quality assurance and documentation', subtopics: ['Pytest', 'Unit & Integration Tests', 'Test Coverage 80%+', 'Swagger/OpenAPI', 'API Documentation'], month: 2, week: 4, track: 'SDE', hours: 18, phase: 'BACKEND', project: '80% test coverage', salaryImpact: '+₹2-3L' },

  // Month 3 - Distributed (SDE)
  { id: 's9', name: 'Message Queues', description: 'Async processing and event-driven architecture', subtopics: ['RabbitMQ', 'Kafka', 'Celery', 'Producer-Consumer', 'Async Tasks'], month: 3, week: 1, track: 'SDE', hours: 15, phase: 'DISTRIBUTED', project: 'Email queue system', salaryImpact: '+₹4-6L' },
  { id: 's10', name: 'Caching', description: 'Performance optimization with Redis', subtopics: ['Redis Pub/Sub', 'Streams', 'Cache Invalidation', 'CDN', 'Load Balancing'], month: 3, week: 2, track: 'SDE', hours: 12, phase: 'DISTRIBUTED', project: 'Add Redis caching', salaryImpact: '+₹3-4L' },
  { id: 's11', name: 'Microservices', description: 'Service-oriented architecture', subtopics: ['Service Communication', 'gRPC vs REST', 'API Gateway', 'Circuit Breakers', 'Service Discovery'], month: 3, week: 3, track: 'SDE', hours: 18, phase: 'DISTRIBUTED', project: 'Split into 2 services', salaryImpact: '+₹5-7L' },
  { id: 's12', name: 'System Design', description: 'Design large-scale systems', subtopics: ['URL Shortener', 'Chat System', 'Rate Limiter', 'Capacity Estimation', 'Trade-offs'], month: 3, week: 4, track: 'SDE', hours: 15, phase: 'DISTRIBUTED', project: 'Design 3 systems', salaryImpact: '+₹6-8L' },

  // Month 4 - Cloud (SDE)
  { id: 's13', name: 'AWS Fundamentals', description: 'Cloud infrastructure essentials', subtopics: ['EC2', 'S3', 'RDS', 'Lambda', 'IAM & CloudWatch'], month: 4, week: 1, track: 'SDE', hours: 15, phase: 'CLOUD', project: 'Deploy to AWS', salaryImpact: '+₹5-7L' },
  { id: 's14', name: 'Kubernetes', description: 'Container orchestration', subtopics: ['Pods & Services', 'Deployments', 'ConfigMaps & Secrets', 'Autoscaling', 'Helm Charts'], month: 4, week: 2, track: 'SDE', hours: 18, phase: 'CLOUD', project: 'K8s deployment', salaryImpact: '+₹6-9L' },
  { id: 's15', name: 'CI/CD', description: 'Automated deployment pipelines', subtopics: ['GitHub Actions', 'Docker Multi-stage', 'Environment Mgmt', 'Rollbacks', 'Blue-Green Deploy'], month: 4, week: 3, track: 'SDE', hours: 12, phase: 'CLOUD', project: 'Automated pipeline', salaryImpact: '+₹3-4L' },
  { id: 's16', name: 'Monitoring', description: 'Observability and alerting', subtopics: ['Prometheus', 'Grafana', 'ELK Stack', 'Alerting', 'Dashboards'], month: 4, week: 4, track: 'SDE', hours: 15, phase: 'CLOUD', project: 'Add monitoring', salaryImpact: '+₹3-5L' },

  // Month 5 - AI Foundation
  { id: 'a1', name: 'Data Science Python', description: 'NumPy, Pandas and data analysis', subtopics: ['NumPy Arrays & Broadcasting', 'Pandas DataFrames & GroupBy', 'Data Cleaning', 'Matplotlib & Seaborn', 'Statistical Analysis'], month: 5, week: 1, track: 'AI', hours: 18, phase: 'AI-FOUNDATION', project: 'Data Analysis Dashboard', salaryImpact: '+₹3-5L', interviewQ: '"Clean this messy CSV dataset"' },
  { id: 'a2', name: 'ML Basics', description: 'Machine learning fundamentals', subtopics: ['Supervised vs Unsupervised', 'Train/Test/Validation Split', 'Accuracy, Precision, Recall, F1', 'Overfitting & Underfitting', 'Cross-validation (K-fold)'], month: 5, week: 2, track: 'AI', hours: 15, phase: 'AI-FOUNDATION', project: 'House Price Predictor', salaryImpact: '+₹4-6L', interviewQ: '"Explain precision vs recall"' },
  { id: 'a3', name: 'Scikit-learn', description: 'Standard ML library mastery', subtopics: ['Linear/Logistic Regression', 'Decision Trees & Random Forest', 'Feature Engineering', 'Confusion Matrix', 'Hyperparameter Tuning'], month: 5, week: 3, track: 'AI', hours: 15, phase: 'AI-FOUNDATION', project: 'End-to-end ML Pipeline', salaryImpact: '+₹3-5L' },
  { id: 'a4', name: 'Deep Learning Intro', description: 'Neural networks foundation', subtopics: ['Neural Network Architecture', 'Activation Functions (ReLU, Sigmoid)', 'Backpropagation', 'TensorFlow/PyTorch Basics', 'Training Loops & Loss Functions'], month: 5, week: 4, track: 'AI', hours: 12, phase: 'AI-FOUNDATION', project: 'Image Classifier (MNIST)', salaryImpact: '+₹5-8L' },

  // Month 6 - LLM Basics
  { id: 'a5', name: 'LLM APIs', description: 'Work with large language models', subtopics: ['OpenAI GPT-4 API', 'Anthropic Claude', 'Google Gemini', 'Cost Comparison & Tokens', 'Error Handling & Retries'], month: 6, week: 1, track: 'AI', hours: 15, phase: 'LLM-BASICS', project: 'LLM Router (GPT-4 ↔ Claude)', salaryImpact: '+₹6-10L', interviewQ: '"How do you handle API failures?"' },
  { id: 'a6', name: 'Prompt Engineering', description: 'Master the art of prompting', subtopics: ['System & User Prompts', 'Few-shot Learning', 'Chain-of-thought', 'Prompt Templates & Versioning', 'A/B Testing Prompts'], month: 6, week: 2, track: 'AI', hours: 12, phase: 'LLM-BASICS', project: 'Smart FAQ Bot', salaryImpact: '+₹5-8L' },
  { id: 'a7', name: 'Function Calling', description: 'Tool use and structured outputs', subtopics: ['OpenAI Function Calling', 'Claude Tool Use', 'JSON Schema Outputs', 'Multi-step Workflows', 'Error Handling'], month: 6, week: 3, track: 'AI', hours: 15, phase: 'LLM-BASICS', project: 'AI Weather Assistant', salaryImpact: '+₹7-12L' },
  { id: 'a8', name: 'Embeddings & Similarity', description: 'Semantic understanding of text', subtopics: ['Text Embeddings', 'OpenAI ada-002', 'Cosine Similarity', 'Semantic Search', 'Text Clustering'], month: 6, week: 4, track: 'AI', hours: 18, phase: 'LLM-BASICS', project: 'Code Search Engine', salaryImpact: '+₹6-10L' },

  // Month 7 - RAG
  { id: 'a9', name: 'Vector Databases', description: 'Store and query embeddings at scale', subtopics: ['Pinecone', 'FAISS', 'Weaviate & Chroma', 'Index Management', 'Metadata Filtering'], month: 7, week: 1, track: 'AI', hours: 15, phase: 'RAG', project: 'Document Vector Store (10k docs)', salaryImpact: '+₹8-12L' },
  { id: 'a10', name: 'RAG Architecture', description: 'Retrieval-augmented generation systems', subtopics: ['Document Chunking (500 tokens)', 'Top-K & MMR Retrieval', 'Context Window Mgmt', 'Augmented Generation', 'Prompt Injection Prevention'], month: 7, week: 2, track: 'AI', hours: 18, phase: 'RAG', project: 'PDF Q&A System', salaryImpact: '+₹10-15L' },
  { id: 'a11', name: 'Advanced RAG', description: 'Production-grade retrieval', subtopics: ['Hybrid Search', 'Re-ranking (Cohere)', 'Query Expansion', 'Citations & Provenance', 'Evaluation (RAGAS)'], month: 7, week: 3, track: 'AI', hours: 15, phase: 'RAG', project: 'Add Citations + Re-ranking', salaryImpact: '+₹12-18L' },
  { id: 'a12', name: 'RAG at Scale', description: 'Enterprise-grade RAG systems', subtopics: ['Batch Processing', 'Incremental Updates', 'Cost Optimization', 'Latency Optimization', 'Pipeline Monitoring'], month: 7, week: 4, track: 'AI', hours: 12, phase: 'RAG', project: 'Scale to 100k Documents', salaryImpact: '+₹15-20L' },

  // Month 8 - Orchestration
  { id: 'a13', name: 'LangChain Basics', description: 'AI application framework', subtopics: ['Chains & Prompts', 'Output Parsers', 'Memory (ConversationBuffer)', 'Retrievers & Vector Stores', 'LangSmith Tracing'], month: 8, week: 1, track: 'AI', hours: 18, phase: 'ORCHESTRATION', project: 'Chatbot with Memory', salaryImpact: '+₹10-15L' },
  { id: 'a14', name: 'LangChain Agents', description: 'Autonomous AI agents', subtopics: ['ReAct & Function Agents', 'Custom Tool Creation', 'Agent Executors', 'Error Handling & Fallbacks', 'Observation Logging'], month: 8, week: 2, track: 'AI', hours: 15, phase: 'ORCHESTRATION', project: 'Multi-Tool Agent (5 tools)', salaryImpact: '+₹12-18L' },
  { id: 'a15', name: 'Multi-Agent Systems', description: 'Agent collaboration frameworks', subtopics: ['Agent Communication', 'Task Delegation', 'Supervisor Patterns', 'CrewAI Framework', 'AutoGen Patterns'], month: 8, week: 3, track: 'AI', hours: 15, phase: 'ORCHESTRATION', project: 'Research Team (3 Agents)', salaryImpact: '+₹15-22L' },
  { id: 'a16', name: 'Production LLM', description: 'Ship AI to production', subtopics: ['Logging & Tracing', 'Cost Tracking per Request', 'Latency Monitoring', 'Fallback Strategies', 'A/B Testing Prompts'], month: 8, week: 4, track: 'AI', hours: 12, phase: 'ORCHESTRATION', project: 'Production Agent w/ Monitoring', salaryImpact: '+₹18-26L' },

  // Month 9 - Voice AI
  { id: 'a17', name: 'Speech-to-Text', description: 'Audio transcription services', subtopics: ['OpenAI Whisper', 'Google STT', 'Real-time Transcription', 'Multi-language', 'Noise Handling'], month: 9, week: 1, track: 'AI', hours: 15, phase: 'VOICE-AI', project: 'Voice Transcription API', salaryImpact: '+₹8-12L' },
  { id: 'a18', name: 'Text-to-Speech', description: 'Natural voice synthesis', subtopics: ['ElevenLabs API', 'OpenAI TTS', 'Voice Cloning', 'Streaming Audio', 'Natural Voices'], month: 9, week: 2, track: 'AI', hours: 12, phase: 'VOICE-AI', project: 'TTS Service', salaryImpact: '+₹8-12L' },
  { id: 'a19', name: 'Real-time Comm', description: 'Live audio processing', subtopics: ['WebSockets', 'Twilio', 'WebRTC', 'Low-latency Audio', 'Audio Streaming'], month: 9, week: 3, track: 'AI', hours: 18, phase: 'VOICE-AI', project: 'Call-in AI Assistant', salaryImpact: '+₹12-18L' },
  { id: 'a20', name: 'E2E Voice Agent', description: 'Full voice AI pipeline', subtopics: ['STT → LLM → TTS Pipeline', 'Conversation State', 'Interruption Handling', 'Cost Optimization', 'Voice Activity Detection'], month: 9, week: 4, track: 'AI', hours: 15, phase: 'VOICE-AI', project: 'Complete Voice AI Agent', salaryImpact: '+₹18-26L' },
];

export const projects: Project[] = [
  { id: 'p1', name: 'End-to-End ML Pipeline', description: 'Data ingestion → Training → Evaluation → Deployment with Scikit-learn', techStack: ['Python', 'Scikit-learn', 'Pandas', 'Docker'], month: 5, salaryImpact: '+₹3-5L' },
  { id: 'p2', name: 'LLM Router', description: 'Intelligent multi-LLM router that auto-switches between GPT-4 and Claude with fallbacks', techStack: ['OpenAI', 'Claude', 'FastAPI', 'Redis'], month: 6, salaryImpact: '+₹6-10L' },
  { id: 'p3', name: 'PDF Q&A RAG System', description: 'Upload PDFs, ask questions, get accurate answers with citations', techStack: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI'], month: 7, salaryImpact: '+₹10-15L' },
  { id: 'p4', name: 'Multi-Agent Research Team', description: '3-agent system: Researcher + Writer + Critic collaborate on tasks', techStack: ['LangChain', 'CrewAI', 'GPT-4', 'Python'], month: 8, salaryImpact: '+₹15-22L' },
  { id: 'p5', name: 'Complete Voice AI Agent', description: 'Full STT → LLM → TTS pipeline you can call on the phone', techStack: ['Whisper', 'ElevenLabs', 'Twilio', 'WebRTC'], month: 9, salaryImpact: '+₹18-26L' },
];

export const resources: Resource[] = [
  { id: 'r1', name: 'LeetCode / NeetCode', type: 'Platform', url: 'https://leetcode.com', category: 'DSA' },
  { id: 'r2', name: 'FastAPI Official Docs', type: 'Docs', url: 'https://fastapi.tiangolo.com', category: 'Backend' },
  { id: 'r3', name: 'Andrew Ng ML Course', type: 'Course', url: 'https://coursera.org/learn/machine-learning', category: 'ML' },
  { id: 'r4', name: 'OpenAI Cookbook', type: 'Docs', url: 'https://cookbook.openai.com', category: 'LLM' },
  { id: 'r5', name: 'LangChain Docs', type: 'Docs', url: 'https://docs.langchain.com', category: 'Agents' },
  { id: 'r6', name: 'Pinecone Learning', type: 'Platform', url: 'https://pinecone.io/learn', category: 'Vector DB' },
  { id: 'r7', name: 'Kaggle Competitions', type: 'Platform', url: 'https://kaggle.com', category: 'ML Practice' },
  { id: 'r8', name: 'AWS Training', type: 'Course', url: 'https://aws.amazon.com/training', category: 'Cloud' },
];

export const monthThemes: Record<number, { name: string; phase: string; track: 'SDE' | 'AI' }> = {
  1: { name: 'Python & DSA', phase: 'FOUNDATION', track: 'SDE' },
  2: { name: 'Backend APIs', phase: 'BACKEND', track: 'SDE' },
  3: { name: 'Distributed Systems', phase: 'DISTRIBUTED', track: 'SDE' },
  4: { name: 'Cloud & DevOps', phase: 'CLOUD', track: 'SDE' },
  5: { name: 'AI Foundations', phase: 'AI-FOUNDATION', track: 'AI' },
  6: { name: 'LLM Basics', phase: 'LLM-BASICS', track: 'AI' },
  7: { name: 'RAG Systems', phase: 'RAG', track: 'AI' },
  8: { name: 'Orchestration', phase: 'ORCHESTRATION', track: 'AI' },
  9: { name: 'Voice AI', phase: 'VOICE-AI', track: 'AI' },
};

export const totalHours = skills.reduce((sum, s) => sum + s.hours, 0);
