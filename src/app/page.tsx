"use server";
import { FaGithub, FaTwitter, FaWikipediaW } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="space-y-12 animate-fade-in">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
              王凯禹
            </h1>
            <p className="text-xl text-gray-500">算法工程师</p>
          </header>
          <Schoolar />
          <Summary />
          <Experience />
          <Skills />
          <Awards />
          <Hobbies />
          <SocialMedia />
        </div>
      </div>
    </main>
  );
}

function Schoolar() {
  const data = [
    {
      degree: "本科",
      major: "信息与计算科学",
      university: "安徽工业大学",
      duration: "2018.09 - 2022.06",
    },
  ];
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xl font-bold font-mono">教育经历</div>
      <ol className="list-disc pl-6">
        {data.map((item, index) => (
          <li key={index}>
            <span className="font-bold">{item.degree}</span> - {item.major},{" "}
            {item.university} ({item.duration})
          </li>
        ))}
      </ol>
    </div>
  );
}

function Summary() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xl font-bold font-mono">个人概述</div>
      <div className="text-gray-700 space-y-2">
        <p>
          资深算法工程师，专注于 AI
          应用开发和大规模系统优化。在自然语言处理、知识图谱构建和智能对话系统等领域拥有丰富经验。主导开发多个大型
          AI 项目，包括智能客服系统、招标文件分析系统和商品比价系统等。
        </p>
        <p>
          技术专长包括 LLM
          应用开发、系统设计和全栈开发。同时积极参与开源社区，维护多个开源项目。
        </p>
        <p>
          具备全面的技术栈，熟练使用前端（React、Vue、Next.js）和后端（Spring
          Boot、FastAPI）开发，能独立完成从架构设计到部署运维的完整开发流程。
        </p>
        <p>
          热衷于探索和学习新技术，对 AI
          领域的前沿发展保持高度关注。具有强烈的工程师思维和创新精神，善于在实际项目中应用新技术解决问题。乐于分享技术经验，在技术社区积极贡献，同时具备良好的团队协作能力和沟通技巧。
        </p>
      </div>
    </div>
  );
}

function Experience() {
  const data = [
    {
      title: "优采商城比价系统",
      duration: "2024.01 - 2024.10",
      description: [
        "设计并实现新版同款物资识别算法，提升新旧商品覆盖率达到 85%（覆盖率提高 20%）",
        "基于 NER 技术，实现商品名称、型号自动识别，提升商品识别准确率 10%",
        "开发物资匹配算法，基于商品特征向量和类目属性实现跨品类比价",
        "设计并实现自动化比价分析系统，月均为企业节省采购成本超 100 万",
        "项目成果：月均比价下单量提升 43%，采购成本平均降低 15.3%",
      ],
      techStack: ["Python", "FastAPI", "NER", "MySQL", "scikit-learn"],
    },
    {
      title: "招标文件智能分析系统",
      duration: "2024.10 - 2024.12",
      description: [
        "设计并实现基于 LLM 的招标文件智能分析系统，支持多种格式文件解析",
        "开发招标要求自动提取模块，实现关键信息（资质要求、评分标准等）的精准识别",
        "构建招标合规性检查引擎，自动识别和标注潜在风险点",
        "项目成果：文件分析时间从人工 2 小时缩短至 3 分钟，准确率达 92%",
      ],
      techStack: ["Next.js", "LangGraph", "vLLM", "OCR"],
    },
    {
      title: "招标法律法规问答系统",
      duration: "2024.10 - 2024.12",
      description: [
        "基于 RAG 技术构建专业招标法律法规知识库，覆盖 1000+ 法规文件",
        "设计并实现多轮对话上下文管理，支持复杂法律场景推理",
        "开发法规变更追踪功能，自动更新知识库并提醒用户法规更新",
        "实现相关案例推荐功能，为用户提供类似法律问题的参考",
        "项目成果：问答准确率达 96%，日均服务 200+ 次法规咨询",
      ],
      techStack: ["Next.js", "LangGraph", "Milvus", "vLLM", "Redis", "FastAPI"],
    },
    {
      title: "AI 项目资源调度系统",
      duration: "2024.10 - 2024.12",
      description: [
        "优化 LLM 推理框架，将输出速度从 80 token/s 提升至 197 token/s（提升 147%）",
        "设计并实现 GPU 资源调度系统，支持单 GPU 8 人并发对话",
        "开发自动化 AI 资源分配与排队机制，优化用户等待体验",
        "实现动态负载均衡，根据 GPU 使用率自动扩缩容",
        "项目成果：系统运营成本降低 35%，用户平均响应时间减少 60%，并发处理能力提升 3 倍",
      ],
      techStack: ["Python", "PyTorch", "CUDA", "FastAPI", "Redis", "Docker"],
    },
    {
      title: "工业品智能问答系统",
      duration: "2023.11 - 2024.01",
      description: [
        "负责项目整体架构设计和核心算法开发",
        "设计并实现工业品领域知识图谱，包含超过 50 万实体和 100 万关系",
        "开发基于 BERT 和 BiLSTM-CRF 的实体识别模型，准确率达到 95%",
        "实现基于知识图谱的智能问答系统，支持复杂多轮对话",
        "项目成果：日均处理问题量超 2000 条，答案准确率 87%，RAG 召回率提升 13.1%",
        "项目获安徽省经信厅专项支持",
      ],
      techStack: ["Python", "PyTorch", "BERT", "Neo4j", "FastAPI", "Docker"],
    },
    {
      title: "优小蜜智能客服",
      duration: "2023.06 - 2023.10",
      description: [
        "主导大模型技术选型与架构设计，完成项目全栈开发",
        "处理历史客服语音文件，构建公司内部知识库，通过RAG技术实现智能问答",
        "设计并实现基于 ChatGPT 的多轮对话系统，支持上下文记忆和知识库检索",
        "开发智能路由分发系统，根据用户问题类型自动分配到不同的微调模型",
        "使用 Redis 实现会话管理和缓存，优化响应速度提升约 40%",
        "项目上线后客服电话量降低约 25%，电话接通率提升 15%",
        "对话日均处理量超 2000 条，平均响应时间 0.35 秒",
        "获评安徽省优质采创新项目二等奖",
      ],
      techStack: [
        "Milvus",
        "LangGraph",
        "vLLM",
        "Pytorch",
        "Vue3",
        "Spring Boot",
        "ChatGPT",
        "Redis",
        "Prompt Engineering",
      ],
      link: "https://www.youzhicai.com/yzcgpt/chat-entry",
    },
    {
      title: "优采商城搜索系统",
      duration: "2023.01 - 2023.05",
      description: [
        "负责搜索系统的架构设计和性能优化",
        "使用 Elastic Search 构建分布式搜索引擎，实现商品的全文检索和智能推荐",
        "基于BERT与LLM，冷启动类目预测模型，实现通过搜索关键词快速匹配到类目",
        "基于Neo4j，构建商品知识图谱，通过向量相似算法实现通过搜索词快速匹配到商品属性",
        "基于jieba分词与历史搜索记录，构建Trie树，实现搜索关键词的快速匹配",
        "项目成果：物资查询速度提升 37%，搜索准确率提升17%，搜索转化率提升 11.2%，年订单量超亿元",
        "获评安徽省优质采年度优秀项目，成为公司 CMMI 认证的标杆项目",
      ],
      techStack: ["Spring Boot", "Elastic Search", "TiDB", "Redis", "MySQL"],
      link: "https://www.youzhicai.com/xdmysc",
    },
    {
      title: "lanyun-chatgpt（个人项目）",
      duration: "2023.03 - 至今",
      description: [
        "基于 ChatGPT-Web 开源项目进行二次开发，实现完整的对话系统",
        "设计并实现用户管理后台，支持用户权限控制和对话记录管理",
        "使用 MongoDB 设计数据模型，实现高效的数据存储和查询",
        "通过 Pinia 实现前端状态管理，优化用户体验",
        "项目成果：日均 IP 访问量 8.3k，日间平均 7.6 QPS，付费用户超 1k+",
      ],
      techStack: [
        "Vue3",
        "TypeScript",
        "ExpressJS",
        "MongoDB",
        "TailwindCSS",
        "NaiveUI",
      ],
      link: "https://github.com/lanyun1103/lanyun-chatgpt",
    },
    {
      title: "MD（外包项目）",
      duration: "2023.01 - 2023.05",
      description: [
        "为高校提供仿微信聊天交互的病情记录软件",
        "基于 LLM 实现智能问答和病情分析功能",
        "使用 Next.js 开发响应式用户界面，提供流畅的聊天体验",
      ],
      techStack: ["Next.js", "TypeScript", "LLM", "TailwindCSS"],
    },
    {
      title: "SoraFlows（开源贡献）",
      duration: "2023.03 - 至今",
      description: [
        "基于 OpenAI Sora 接口开发的前端用户界面",
        "实现视频生成和管理功能",
        "参与项目架构设计和核心功能开发",
      ],
      techStack: ["React", "TypeScript", "OpenAI API"],
      link: "https://github.com/SoraFlows/SoraFlows",
    },
    {
      title: "AISourceHub（开源贡献）",
      duration: "2023.03 - 至今",
      description: [
        "参与 AI 资源汇总项目的维护和更新",
        "贡献优质 AI 相关资源和工具",
        "协助完善项目文档和分类体系",
      ],
      techStack: ["Markdown", "Git"],
      link: "https://github.com/AmbroseX/Awesome-AISourceHub",
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <div className="text-2xl font-bold font-mono mb-8 flex items-center">
        <span className="bg-blue-400 w-2 h-8 mr-3 rounded"></span>
        工作经历
      </div>
      <div className="space-y-12">
        {data.map((item, index) => (
          <div key={index} className="group">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="font-bold text-xl text-blue-500">
                  {item.title}
                </h3>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">
                  {item.duration}
                </span>
              </div>
              <ul className="list-none pl-0 mt-4 space-y-2">
                {item.description.map((desc, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-gray-700"
                  >
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50/50 text-blue-500 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {item.link && (
                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  查看项目
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const highlightedSkills = [
    {
      name: "自然语言处理（NLP）",
      description:
        "熟悉自然语言处理的各种技术和算法，包括词向量表示、命名实体识别（NER）、情感分析等。能够运用BERT、BiLSTM、CRF等模型进行文本分类、情感分析和实体识别等任务。",
    },
    {
      name: "知识图谱",
      description:
        "掌握知识图谱的构建、存储和查询技术，能够使用Neo4j、MongoDB等图数据库进行知识图谱的存储和查询优化。熟悉知识图谱的应用场景，如智能问答、推荐系统等。",
    },
    {
      name: "Next.js",
      description:
        "熟悉使用Next.js框架进行服务端渲染（SSR）和静态网站生成（SSG）的开发。能够利用Next.js的特性，如动态路由、API路由等，构建高性能、可扩展的Web应用。",
    },
    {
      name: "Spring Boot",
      description:
        "掌握Spring Boot框架的使用，能够快速搭建和开发Java后端应用。熟悉Spring Boot的各种特性，如自动配置、依赖注入、数据访问等，并能够进行性能优化和安全配置。",
    },
  ];
  const otherSkills = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "Vue",
    "React",
    "Node.js",
    "Express",
    "Spring Boot",
    "MySQL",
    "NLP",
  ];
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-2xl font-bold font-mono mb-8 flex items-center">
        <span className="bg-purple-400 w-2 h-8 mr-3 rounded"></span>
        技能专长
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlightedSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="font-bold text-lg text-purple-500 mb-2">
              {skill.name}
            </div>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {otherSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-purple-50/50 text-purple-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100/50 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Awards() {
  const data = [
    "CET-4",
    "数学建模能力高级认证",
    "数学建模国赛省三等奖",
    "MathorCup 国家二等奖",
    "数学中国数学建模竞赛国家一等奖",
    "安徽省大数据与人工智能竞赛省二等奖",
    "International Genetically Engineered Machine Competition(iGEM) Gold",
  ];
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xl font-bold font-mono">奖项</div>
      <ol className="list-disc pl-6">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
function Hobbies() {
  const hobbies = [
    {
      name: "阅读",
      description: "热爱阅读，涉猎广泛，从文学到科技。",
    },
    {
      name: "音乐",
      description:
        "音乐爱好者，喜欢欣赏各种流派的音乐，从古典到流行；热爱音乐，擅长吉他演奏。",
    },
    {
      name: "数学",
      description:
        "对数学有浓厚的兴趣，喜欢探索数学领域的奥秘，挑战自己的逻辑思维。",
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <div className="text-2xl font-bold font-mono mb-8 flex items-center">
        <span className="bg-orange-400 w-2 h-8 mr-3 rounded"></span>
        爱好
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50"
          >
            <div className="font-bold text-lg text-orange-500 mb-2">
              {hobby.name}
            </div>
            <p className="text-gray-600">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function SocialMedia() {
  const platforms = [
    {
      name: "Twitter",
      url: "https://x.com/Dosh52783629",
      icon: <FaTwitter />,
    },
    {
      name: "GitHub",
      url: "https://github.com/lanyun1103",
      icon: <FaGithub />,
    },
    {
      name: "GitHub",
      url: "https://leetcode.cn/u/li-wei-6/",
      icon: <SiLeetcode />,
    },
    {
      name: "GitHub",
      url: "https://zh.wikipedia.org/wiki/User:Lanyun1103",
      icon: <FaWikipediaW />,
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <div className="text-2xl font-bold font-mono mb-8 flex items-center">
        <span className="bg-green-400 w-2 h-8 mr-3 rounded"></span>
        社交媒体
      </div>
      <div className="flex gap-6">
        {platforms.map((platform, index) => (
          <a
            aria-label={platform.name}
            href={platform.url}
            key={index}
            className="text-2xl hover:scale-110 transition-transform duration-200 text-gray-500 hover:text-blue-500"
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
