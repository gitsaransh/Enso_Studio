
export const NAVIGATION_ITEMS = [
    { label: 'Philosophy', href: '/#philosophy', icon: 'SparklesIcon' },
    { label: 'Services', href: '/#services', icon: 'CubeIcon' },
    { label: 'Work', href: '/#work', icon: 'BriefcaseIcon' },
    { label: 'Products', href: '/#products', icon: 'ShoppingBagIcon' },
    { label: 'Credit', href: '/#credit', icon: 'TagIcon' },
];

export const CONTACT_ITEM = {
    label: 'Contact',
    href: 'mailto:biswalsaransh@gmail.com',
    icon: 'ChatBubbleLeftRightIcon'
};

export const SERVICES = [
    {
        title: 'Mobile Apps',
        description: 'Practical, focused digital utilities designed for everyday use.',
        icon: 'DevicePhoneMobileIcon'
    },
    {
        title: 'Games',
        description: 'Hyper-casual and puzzle experiences that challenge the mind.',
        icon: 'PuzzlePieceIcon'
    },
    {
        title: 'AI Tools',
        description: 'Intelligent, lightweight systems for enhanced productivity.',
        icon: 'CpuChipIcon'
    },
    {
        title: 'Automation',
        description: 'Streamlined internal and external workflows.',
        icon: 'ArrowPathIcon'
    },
    {
        title: 'Experiments',
        description: 'Controlled product explorations and R&D.',
        icon: 'BeakerIcon'
    },
    {
        title: 'Web Platforms',
        description: 'High-performance, responsive web applications tailored for speed and visual impact.',
        icon: 'GlobeAltIcon'
    }
];

export const TESTIMONIALS = [
    {
        quote: "ENSO Studio delivered a polished, engaging puzzle game that exceeded our expectations. Their focus on user experience and clean design is exceptional.",
        author: "Sarah Chen",
        role: "Product Manager, TechVentures"
    },
    {
        quote: "Working with ENSO Studio was seamless. Their team understands the balance between aesthetics and functionality, creating products that users love.",
        author: "Marcus Rodriguez",
        role: "Founder, CreativeFlow"
    },
    {
        quote: "Their systematic approach to development and commitment to quality made our collaboration productive and stress-free. Highly recommended.",
        author: "Priya Sharma",
        role: "CEO, InnovateLabs"
    }
];

export const PROJECTS = [
    {
        id: 'zeno-sudoku',
        title: 'Zeno Sudoku',
        category: 'Game',
        description: 'A minimal, elegant Sudoku experience built on Jetpack Compose. Focused on deep concentration and visual harmony.',
        status: 'Ready for Release',
        statusColor: 'text-success border-success/30 bg-success/10',
        longDescription: 'Zeno Sudoku is a dedicated puzzle experience that prioritizes clarity and flow. It features five difficulty levels, a deterministic daily challenge, and a refined aesthetic inspired by parchment and ink.',
        technologies: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room'],
        role: 'Android Engineering, UI/UX Design',
        features: [
            'Five difficulty levels',
            'Daily global challenges',
            'Offline progression sync',
            'Zeno Pro premium experience'
        ]
    },
    {
        id: 'mindspark',
        title: 'MindSpark',
        category: 'Game',
        description: 'Daily brain training through lateral thinking puzzles. A minimalist design approach to cognitive enhancement.',
        status: 'In Development',
        statusColor: 'text-success border-success/30 bg-success/10',
        longDescription: 'MindSpark reimagines daily brain training with a focus on lateral thinking and pattern recognition. Designed with a calming, minimalist interface, it strips away gamification clutter to let the puzzles shine. The app adapts to the user\'s skill level, offering a personalized daily workout for the mind.',
        technologies: ['React Native', 'TypeScript', 'Node.js', 'Firebase'],
        role: 'Full Stack Development, UI/UX Design',
        features: [
            'Daily generated puzzles',
            'Adaptive difficulty algorithm',
            'Offline mode support',
            'Performance analytics dashboard'
        ]
    },
    {
        id: 'daily-aesthetic',
        title: 'Daily Aesthetic',
        category: 'App',
        description: 'Visual purity for the chaotic mind. A curated daily aesthetic feed.',
        status: 'In Development',
        statusColor: 'text-warning border-warning/30 bg-warning/10',
        longDescription: 'In an era of infinite scroll and algorithmic noise, Daily Aesthetic offers a sanctuary. A single, perfectly curated mood board delivered each morning. No distractions, no endless feeds—just pure, intentional visual harmony designed to reset your creative baseline before the work begins.',
        technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
        role: 'Frontend Engineering, concept',
        features: [
            'No-scroll interface',
            'Daily curated mood board',
            'Color palette extraction',
            'Zen mode'
        ]
    },
    {
        id: 'flow-automation',
        title: 'Flow Automation',
        category: 'Automation',
        description: 'Silence the repetitive. Amplify the creative. Intelligent workflow automation.',
        status: 'In Development',
        statusColor: 'text-accent border-accent/30 bg-accent/10',
        longDescription: 'Human potential is wasted on the mundane. Flow Automation is an invisible infrastructure that weaves together disconnected digital tools. It operates in the background, handling complex, multi-step workflows with biological precision, liberating teams from administrative friction.',
        technologies: ['Python', 'FastAPI', 'Docker', 'AWS Lambda'],
        role: 'Backend Architecture',
        features: [
            'Visual workflow builder',
            'Webhook integration',
            'Real-time error logging',
            'Custom script execution'
        ]
    },
    {
        id: 'insight-ai',
        title: 'Insight AI',
        category: 'AI Tool',
        description: 'AI-powered analytics and insight generation tool. Data to wisdom in seconds.',
        status: 'In Development',
        statusColor: 'text-accent border-accent/30 bg-accent/10',
        longDescription: 'Insight AI leverages large language models to process unstructured customer feedback and turn it into actionable product insights. It identifies trends, sentiment, and feature requests automatically.',
        technologies: ['OpenAI API', 'React', 'Python', 'PostgreSQL'],
        role: 'AI Integration, Full Stack',
        features: [
            'Sentiment analysis',
            'Topic clustering',
            'Automated reporting',
            'Natural language query interface'
        ]
    }
];

export const PRODUCTS = [
    {
        id: 'efficiency-tracker',
        title: 'System Efficiency Tracker',
        category: 'Excel Template',
        description: 'A high-performance Excel dashboard designed for tracking team productivity and bottleneck identification.',
        price: '29',
        status: 'Available',
        statusColor: 'text-success border-success/30 bg-success/10',
        longDescription: 'The System Efficiency Tracker is built for managers who value clarity over complexity. It transforms raw project data into actionable insights through localized automation within Excel.',
        features: [
            'Automated KPI calculation',
            'Dynamic chart engine',
            'No VBA required',
            'Easy data import'
        ],
        link: '#'
    },
    {
        id: 'workflow-blueprint',
        title: 'Studio Workflow Kit',
        category: 'Digital Asset',
        description: 'A collection of standard operating procedures and Notion templates for creative studios and solo devs.',
        price: '49',
        status: 'Available',
        statusColor: 'text-success border-success/30 bg-success/10',
        longDescription: 'The same internal systems we use at Enso Studio. Includes project onboarding, feedback loops, and automated invoicing templates.',
        features: [
            'Notion templates',
            'Protocol documentation',
            'Automation scripts',
            'Communication guides'
        ],
        link: '#'
    }
];
