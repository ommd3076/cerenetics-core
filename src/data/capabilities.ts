import { CapabilityDomain } from '@/types/capabilities';

export const capabilityProgression = [
  {
    step: '01',
    title: 'Digital Surface',
    summary: 'High-craft interfaces, interactive design engineering, and client-facing platforms.',
  },
  {
    step: '02',
    title: 'Operational Logic',
    summary: 'Deterministic workflows, internal tooling, and resilient transaction pipelines.',
  },
  {
    step: '03',
    title: 'Core Infrastructure',
    summary: 'Distributed topology, high-throughput streaming, and low-latency microservices.',
  },
  {
    step: '04',
    title: 'Autonomous Systems',
    summary: 'Multi-agent orchestration, bounded reasoning, and formal state-machine execution.',
  },
];

export const capabilityDomains: CapabilityDomain[] = [
  {
    id: 'domain-01',
    number: '01',
    title: 'Digital Products',
    subtitle: 'High-craft digital interfaces and interactive software',
    summary: 'Precision-engineered web and mobile platforms built with strict attention to performance, negative space, responsive ergonomics, and brand identity.',
    items: [
      {
        id: 'web-platforms',
        title: 'High-Impact Web Applications',
        summary: 'Full-stack web applications with sub-100ms interaction latency, server-rendered App Router architecture, and accessible component hierarchies.',
        deliverables: [
          'Full-stack Next.js and React architecture',
          'Design token integration and component design systems',
          'Zero-layout-shift asset loading and fluid responsiveness',
          'Progressive enhancement with comprehensive keyboard support',
        ],
      },
      {
        id: 'interactive-launches',
        title: 'Editorial & Interactive Launches',
        summary: 'Narrative-driven release experiences featuring choreographed kinetic motion, WebGL/SVG shader fields, and editorial typography contrast.',
        deliverables: [
          'Custom SVG and GSAP timeline choreography',
          'Responsive fluid animation loops with hardware acceleration',
          'Graceful fallbacks for reduced-motion and non-JS clients',
        ],
      },
      {
        id: 'design-systems',
        title: 'Design Systems & Engineering Tokens',
        summary: 'Multi-platform token pipelines bridging design specifications directly to production code with strict WCAG contrast compliance.',
        deliverables: [
          'DTCG-compliant token architectures (JSON/CSS/Tailwind)',
          'Accessible primitives and headless component implementations',
          'Theme contracts, elevation layers, and typography scales',
        ],
      },
    ],
  },
  {
    id: 'domain-02',
    number: '02',
    title: 'Business Systems',
    subtitle: 'Operational software, automation, and back-office tooling',
    summary: 'Resilient internal platforms, automated operational workflows, and synchronization layers engineered to eliminate manual friction.',
    items: [
      {
        id: 'operational-workflows',
        title: 'Operational Workflow Automation',
        summary: 'Deterministic pipelines that orchestrate multi-step approval gates, data transformations, and asynchronous document processing.',
        deliverables: [
          'Event-driven worker queues and background job scheduling',
          'Audit-logged state machine transitions',
          'Fail-closed exception handling with idempotent replay',
        ],
      },
      {
        id: 'internal-tooling',
        title: 'Custom Internal Tooling & Dashboards',
        summary: 'Purpose-built operator consoles and administrative interfaces tailored to proprietary enterprise business logic.',
        deliverables: [
          'High-density data tables with sorting, filtering, and export',
          'Role-based access control (RBAC) and permission scoping',
          'Real-time status synchronization and websocket telemetry',
        ],
      },
      {
        id: 'data-sync-layers',
        title: 'Data Integration & Synchronization',
        summary: 'Bi-directional sync engines connecting fragmented ERP, CRM, and third-party APIs into coherent data models.',
        deliverables: [
          'Schema validation with runtime boundary checks',
          'Rate-limited webhooks and reliable retry backoffs',
          'Conflict resolution mechanisms and consistency checks',
        ],
      },
    ],
  },
  {
    id: 'domain-03',
    number: '03',
    title: 'Systems Engineering',
    subtitle: 'Distributed topology, microservices, and high-throughput infrastructure',
    summary: 'Architectural foundations engineered for high availability, predictability under load, and strict latency bounds.',
    items: [
      {
        id: 'distributed-microservices',
        title: 'Distributed Microservices & APIs',
        summary: 'Modular, decoupled service architectures utilizing gRPC, GraphQL, or REST with strict schema validation.',
        deliverables: [
          'High-throughput API gateway and routing configuration',
          'Distributed tracing and structured observability logs',
          'Circuit breaker patterns and graceful degradation paths',
        ],
      },
      {
        id: 'event-streaming',
        title: 'Event Streaming & Message Topologies',
        summary: 'Kafka, RabbitMQ, or NATS event fabrics designed for exactly-once or at-least-once message processing semantics.',
        deliverables: [
          'Partitioning strategies for parallelized consumption',
          'Dead-letter queue governance and recovery pipelines',
          'Schema registries with backward-compatible evolutions',
        ],
      },
      {
        id: 'cloud-iac',
        title: 'Infrastructure as Code & Cloud Topology',
        summary: 'Reproducible cloud environments provisioned via Terraform, OpenTofu, or Pulumi with automated CI/CD guardrails.',
        deliverables: [
          'Immutable containerized deployments (Docker / Kubernetes)',
          'Zero-trust network segmentation and secret management',
          'Automated health checks, autoscaling, and cold-start optimization',
        ],
      },
    ],
  },
  {
    id: 'domain-04',
    number: '04',
    title: 'Advanced Systems Engineering',
    subtitle: 'Formal state machines, deterministic coordination, and protocol design',
    summary: 'Hardened software architectures designed for rigorous operational environments requiring mathematically bounded state transitions.',
    items: [
      {
        id: 'state-machines',
        title: 'Deterministic State-Machine Modeling',
        summary: 'Formal state transitions validated prior to runtime execution, preventing illegal states and invalid operations.',
        deliverables: [
          'Hierarchical finite state machines with verifiable invariants',
          'Exhaustive test harness generation for state transitions',
          'Deterministic replay engines for post-incident analysis',
        ],
      },
      {
        id: 'multi-agent-coordination',
        title: 'Multi-Agent Coordination Protocols',
        summary: 'Consensus and handoff protocols enabling multiple specialized autonomous agents to collaborate safely without deadlocks.',
        deliverables: [
          'Role-bounded communication graphs and peer handoffs',
          'Task decomposition hierarchies with supervisory review gates',
          'Deadlock detection and automated conflict resolution',
        ],
      },
    ],
  },
  {
    id: 'domain-05',
    number: '05',
    title: 'AI & Agentic Systems',
    subtitle: 'Applied intelligence, bounded reasoning, and retrieval pipelines',
    summary: 'Production AI architectures engineered for deterministic outputs, strict schema conformance, and verifiable task execution.',
    items: [
      {
        id: 'rag-retrieval',
        title: 'Structured Retrieval & Knowledge Engines',
        summary: 'Hybrid vector/keyword retrieval pipelines with re-ranking, source citation, and hallucination containment.',
        deliverables: [
          'Chunking and embedding pipelines tailored to technical documents',
          'Cross-encoder re-ranking and contextual filtering',
          'Deterministic provenance tracking with verifiable citations',
        ],
      },
      {
        id: 'tool-runtimes',
        title: 'Sandboxed Tool-Calling & Agent Runtimes',
        summary: 'Secure execution environments allowing AI models to interact with real-world APIs, file systems, and databases within strict constraints.',
        deliverables: [
          'Schema-enforced JSON structured output validation',
          'Containerized isolated execution sandboxes',
          'Permission ladders and human-in-the-loop intervention triggers',
        ],
      },
      {
        id: 'eval-harnesses',
        title: 'Evaluation Frameworks & Benchmark Harnesses',
        summary: 'Automated regression test suites measuring model accuracy, latency, token efficiency, and prompt drift over time.',
        deliverables: [
          'Dataset curation and synthetic test-case generation',
          'Automated rubric-based scoring against ground truth',
          'Cost and latency profiling across foundation model providers',
        ],
      },
    ],
  },
  {
    id: 'domain-06',
    number: '06',
    title: 'Specialized & Custom Engineering',
    subtitle: 'Domain-specific compilers, custom protocols, and forward R&D',
    summary: 'Deep technical engagements solving non-standard computational challenges where off-the-shelf software is insufficient.',
    items: [
      {
        id: 'compilers-toolchains',
        title: 'Domain-Specific Compilers & Toolchains',
        summary: 'Custom parsers, code generators, and abstract syntax tree (AST) transformers designed for proprietary domain languages.',
        deliverables: [
          'Lexer/parser pipelines with typed AST generation',
          'Static analysis checkers and security policy linters',
          'Cross-compilation targets and optimized bytecode generation',
        ],
      },
      {
        id: 'custom-protocols',
        title: 'Custom Protocols & Binary Serializers',
        summary: 'Low-overhead binary serialization and custom network transport protocols engineered for resource-constrained environments.',
        deliverables: [
          'Compact binary framing specifications and parsers',
          'Lossless compression algorithms for specialized telemetry',
          'Formal fuzz testing and boundary vulnerability audits',
        ],
      },
      {
        id: 'hardware-edge-rd',
        title: 'Physical / Hardware / Edge R&D',
        summary: 'Forward-looking exploratory research into local embedded inference, edge sensor telemetry, and constrained hardware runtimes.',
        deliverables: [
          'Embedded Linux and microcontroller prototyping',
          'Quantized model profiling on edge accelerators',
          'Hardware-in-the-loop telemetry bridges',
        ],
      },
    ],
    isForwardLooking: true,
    forwardLookingNote: 'Physical / Hardware / Edge is an active forward-looking R&D exploration area; not currently offered as a turnkey commercial engagement.',
  },
];
