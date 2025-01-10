// Define available topics/categories
const topics = [
  'Web Development',
  'Artificial Intelligence',
  'Programming',
  'Forex',
  'Digital Marketing',
  'Technology Innovation'
];

export const blogPosts = [
  {
    id: 1,
    title: "OpenAI's Sora: Revolutionary Text-to-Video AI Model",
    category: "Artificial Intelligence",
    preview: "OpenAI unveils Sora, a groundbreaking AI model capable of creating photorealistic videos from text descriptions...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    author: "Elisha Ejimofor",
    date: "March 15, 2024",
    content: "Full article content here...",
    likes: Math.floor(Math.random() * 1500) + 500,
    comments: [],
    bookmarks: Math.floor(Math.random() * 200) + 100
  },
  // ... rest of the blog posts remain the same ...
];

// Add 20 more technology-focused posts
const techImages = [
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
];

const techTitles = [
  "Rust Programming Language Gains Traction in Enterprise",
  "Machine Learning Transforms Healthcare Diagnostics",
  "Quantum Computing Breakthrough: New Qubit Record",
  "Web3 and the Future of Decentralized Apps",
  "5G Networks Enable New IoT Applications",
  "Cybersecurity Trends for 2024",
  "The Rise of Low-Code Development Platforms",
  "Edge Computing Revolutionizes Data Processing",
  "Blockchain Beyond Cryptocurrency",
  "AR/VR Advances in Enterprise Applications",
  "Green Tech: Sustainable Computing Solutions",
  "DevOps Evolution: GitOps and Platform Engineering",
  "The Impact of AI on Software Testing",
  "Cloud Native Development Trends",
  "Progressive Web Apps in 2024",
  "Microservices Architecture Best Practices",
  "Real-time Analytics with Stream Processing",
  "Container Security Innovations",
  "API-First Development Strategies",
  "Machine Learning Operations (MLOps) Trends"
];

for (let i = 6; i <= 25; i++) {
  blogPosts.push({
    id: i,
    title: techTitles[i - 6],
    category: topics[Math.floor(Math.random() * topics.length)],
    preview: "Exploring the latest developments and innovations in technology...",
    image: techImages[i % techImages.length],
    author: "Elisha Ejimofor",
    date: new Date(2024, 2, 15 - i).toLocaleDateString(),
    content: "Full article content here...",
    likes: Math.floor(Math.random() * 1500) + 500,
    comments: [],
    bookmarks: Math.floor(Math.random() * 200) + 100
  });
}

export default blogPosts;