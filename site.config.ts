export interface CollectionConfig {
  id: string;
  title: string;
  description: string;
  order: number;
  sectionMode?: 'flat' | 'collapsible';
  notice?: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export const site = {
  title: 'AI Knowledge Site',
  description: 'AI 应用开发、核心原理与工程实战全景知识库。',
  author: 'ljxpython',
  url: 'https://ljxpython.github.io',
  base: '/ai-knowledge-site',
  repositoryUrl: 'https://github.com/ljxpython/ai-knowledge-site',
  accent: {
    primary: '#0284c7',
    soft: '#e0f2fe',
  },
  navigation: {
    label: 'AI 知识库',
    sourceLabel: '查看源码',
  },
  links: {
    github: 'https://github.com/ljxpython/ai-knowledge-site',
  },
  collections: [
    {
      id: 'foundations',
      title: '核心认知',
      description: '从思维模型与最小可用实践开始，理清脉络。',
      order: 1,
      sectionMode: 'collapsible' as const,
      sourceLabel: '查看源码',
      sourceUrl: 'https://github.com/ljxpython/ai-knowledge-site',
      notice: '示例代码仅供学习参考。若要在本地测试，请手动执行相应命令。',
    },
    {
      id: 'practice',
      title: '工程实践',
      description: '将实践经验转化为可复现的高质量工作流。',
      order: 2,
      sectionMode: 'flat' as const,
      sourceLabel: '查看源码',
      sourceUrl: 'https://github.com/ljxpython/ai-knowledge-site',
    },
  ],
} as const;

export default site;
