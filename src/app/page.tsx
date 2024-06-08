import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 w-full">
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-4xl mb-8">About Me</h1>
        <div className="flex items-center space-x-6">
          {/* <Image
            src="/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full"
          /> */}
          <div>
            <h2 className="text-2xl font-bold">王凯禹</h2>
            <p className="text-gray-600">全栈开发工程师 算法工程师</p>
          </div>
        </div>
        <Schoolar />
        <Experience />
        <Skills />
        <Awards />
        <Hobbies />
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

function Experience() {
  const data = [
    {
      title: "优小蜜智能客服全栈开发",
      description:
        "主导技术选型与全栈开发工作，负责优化安徽省优质采科技发展有限公司的智能客服系统。使用Vue3, Pinia, ExpressJS, Spring Boot等技术栈，结合腾讯云函数，AWS Lambda，Azure OpenAI进行优化，成功部署后客服电话量降低约13%。",
      link: "优小蜜智能客服",
    },
    {
      title: "优质采电子商城项目搜索功能",
      description:
        "担任Java后端开发，使用Spring Boot, JWT, Mybatis Plus, TiDB，Elatic search等技术优化搜索体验。物资查询与搜索速度分别提升37%与30%，搜索下单转化率11.2%，年订单量超亿元，项目获评年度优秀项目，为公司CMMI认证贡献范例项目。",
      link: "优质采电子商城",
    },
    {
      title: "工业品模型训练与架构开发",
      description:
        "负责项目的架构设计，数据清洗，语料处理，知识图谱构建，以及随机森林算法的调参与训练。采用K-Means算法进行数据行为分类，随机森林算法训练分类模型，结合NLP构建工业品知识图谱，提升问题解答精准度。日均处理问题量超2000条，人工抽检回答正确率提升至87%，RAG召回率提高13.1%。项目获安徽省经信厅支持，推动大模型算法研究。",
    },
    {
      title: "知了工品大模型",
      description:
        "通过建立词表，微调BERT、BiLSTM和CRF等算法，优化模型在工业品领域的命名实体识别（NER）性能。结合知识图谱等技术，实现了95%以上的物资信息识别与扩展正确率。该项目帮助中大企业进行数字化转型与物资梳理，提升了企业的信息化管理水平和运营效率。",
    },
    {
      title: "个人项目",
      description:
        "在开源项目ChatGPT-Web的基础上，独立开发了一个网页对话项目，同时负责用户管理后台系统的完整开发工作。使用了ExpressJs、TypeScript、Vue3、TailwindCSS、NaiveUI、Pinia以及vue-route等前沿技术构建项目。采用MongoDB开发了用户管理系统，通过Pinia进行状态管理优化。项目上线后日独立IP访问量8.3k，4月期间日间平均7.6 QPS，与知识星球星主合作用户数达1k+。",
      link: "原网址为 lanyun1103.top，现已下线",
    },
  ];
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xl font-bold font-mono">工作经历</div>
      <ol className="list-decimal pl-6 space-y-4">
        {data.map((item, index) => (
          <li key={index}>
            <div className="font-bold">{item.title}</div>
            <p className="text-gray-700">{item.description}</p>
            {item.link && (
              <a href={item.link} className="text-blue-500 hover:underline">
                项目链接
              </a>
            )}
          </li>
        ))}
      </ol>
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
      name: "机器学习",
      description:
        "熟练运用各种机器学习算法，如随机森林、支持向量机（SVM）、K-Means聚类等。能够进行特征工程、模型选择和调参优化，提高模型的性能和泛化能力。",
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
    "MongoDB",
    "ElasticSearch",
    "机器学习",
    "自然语言处理",
  ];
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-xl font-bold font-mono">技能</div>
      <div className="space-y-4">
        {highlightedSkills.map((skill, index) => (
          <div key={index}>
            <div className="font-bold">{skill.name}</div>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {otherSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm font-medium mr-2 mb-2"
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
  function Hobbies() {
    const hobbies = [
      {
        name: "吉他演奏",
        description: "热爱音乐，擅长吉他演奏，喜欢创作自己的音乐作品。",
      },
      {
        name: "阅读",
        description: "热爱阅读，涉猎广泛，从文学到科技，不断扩展自己的知识面。",
      },
      {
        name: "公路骑行",
        description:
          "喜欢骑行，享受在公路上自由驰骋的感觉，挑战自我，探索未知。",
      },
      {
        name: "音乐",
        description:
          "音乐爱好者，喜欢欣赏各种流派的音乐，从古典到流行，陶冶情操。",
      },
      {
        name: "数学",
        description:
          "对数学有浓厚的兴趣，喜欢探索数学领域的奥秘，挑战自己的逻辑思维。",
      },
    ];

    return (
      <div className="flex flex-col space-y-4">
        <div className="text-xl font-bold font-mono">爱好</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <div className="font-bold">{hobby.name}</div>
              <p className="text-gray-700">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
function Hobbies() {
  const hobbies = [
    {
      name: "吉他演奏",
      description: "热爱音乐，擅长吉他演奏，喜欢创作自己的音乐作品。",
    },
    {
      name: "阅读",
      description: "热爱阅读，涉猎广泛，从文学到科技，不断扩展自己的知识面。",
    },
    {
      name: "公路骑行",
      description: "喜欢骑行，享受在公路上自由驰骋的感觉，挑战自我，探索未知。",
    },
    {
      name: "音乐",
      description:
        "音乐爱好者，喜欢欣赏各种流派的音乐，从古典到流行，陶冶情操。",
    },
    {
      name: "数学",
      description:
        "对数学有浓厚的兴趣，喜欢探索数学领域的奥秘，挑战自己的逻辑思维。",
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-xl font-bold font-mono">爱好</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <div className="font-bold">{hobby.name}</div>
            <p className="text-gray-700">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
