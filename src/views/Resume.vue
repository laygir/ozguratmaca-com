<!-- eslint-disable max-len -->
<template>
  <div class="">
    <div class="mx-auto px-10 py-12 bg-white max-w-5xl flex flex-col gap-6">
      <img
        class="w-32 h-32 rounded-full"
        src="../assets/resume/ozgur-photo-small-round.png"
        >
      <div class="grid">
        <div
          id="header"
          class="grid gap-2"
          >
          <h1 class="font-jetbrains text-3xl font-extrabold">
            Özgür Atmaca
          </h1>
          <h2 class="font-jetbrains text-sm text-gray-600">
            Senior Software Engineer & Product Architect
          </h2>

          <hr class="my-8 border-t-1 border-gray-200">
        </div>

        <div
          id="contact"
          class="grid gap-2"
          >
          <div
            v-for="detail in contact"
            :key="detail.key"
            class="font-mono text-sm flex gap-2"
            >
            <p class="text-gray-500">
              {{ detail.key }}:
            </p>
            <p class="text-gray-500">
              {{ detail.value }}
            </p>
          </div>
          <hr class="my-8 border-t-1 border-gray-200">
        </div>

        <div
          id="profile"
          class="grid gap-8"
          >
          <h2 class="font-jetbrains text-xl font-extrabold">
            {{ profile.title }}
          </h2>

          <div class="flex flex-col justify-start gap-3">
            <p
              v-for="summary in profile.summary"
              :key="summary"
              class="font-jetbrains text-sm text-gray-800 leading-6"
              >
              {{ summary }}
            </p>

            <br>

            <p class="font-jetbrains text-xs text-gray-400 leading-6">
              {{ profile.caption }}
            </p>

            <br>

            <img
              class="w-full rounded-md"
              :src="getImagePath(profile.image)"
              >
          </div>

          <hr class="my-8 border-t border-gray-200">
        </div>

        <div
          id="work-experience"
          class="grid gap-8"
          >
          <h2 class="font-jetbrains text-xl font-extrabold">
            Work Experience
          </h2>

          <div>
            <div
              v-for="job in work"
              :key="job.company"
              class="grid gap-2 mt-3"
              >
              <img
                class="w-12 h-12 rounded-md"
                :src="getImagePath(job.logo)"
                >

              <div class="grid gap-1">
                <h2 class="font-jetbrains text-lg font-extrabold">
                  {{ job.company }}
                </h2>
                <p class="font-jetbrains text-sm text-gray-600">
                  {{ job.title }}
                </p>
                <p class="font-jetbrains text-sm text-gray-400">
                  {{ job.date }}
                </p>
              </div>

              <div class="grid gap-3 mt-4 font-jetbrains text-sm text-gray-800 leading-6">
                <p
                  v-for="description in job.description"
                  :key="description"
                  >
                  {{ description }}
                </p>
              </div>

              <div
                v-if="job.projects && job.projects.length"
                class="grid gap-3 mt-3 font-jetbrains text-sm leading-6"
                >
                <h2 class="font-jetbrains text-base text-gray-900 font-black">
                  Projects
                </h2>
                <p
                  v-for="(project, i) in job.projects"
                  :key="i"
                  class="text-gray-900"
                  >
                  →
                  <strong class="text-gray-900">{{ project.name }}</strong>
                  – {{ project.description }}
                </p>
              </div>

              <div
                v-if="job.awards && job.awards.length"
                class="grid gap-3 mt-3 font-jetbrains text-sm leading-6"
                >
                <h2 class="font-jetbrains text-base text-gray-900 font-black">
                  Awards
                </h2>

                <p
                  v-for="(award, i) in job.awards"
                  :key="i"
                  class="text-gray-900"
                  >
                  →
                  <strong class="text-gray-900">{{ award.name }}</strong>
                  – {{ award.description }}
                </p>
              </div>

              <div class="grid gap-3 mt-3 font-jetbrains text-sm leading-6">
                <h2 class="font-jetbrains text-base text-gray-900 font-black">
                  Technologies
                </h2>
                <p class="text-gray-900">
                  {{ job.tech }}
                </p>
              </div>

              <hr class="my-8 border-t-1 border-gray-200">
            </div>
          </div>
        </div>

        <div
          id="education"
          class="grid gap-2 mt-3"
          >
          <h2 class="font-jetbrains text-xl font-extrabold">
            Education
          </h2>

          <div
            v-for="edu in education"
            :key="edu.school"
            class="grid gap-2 mt-3"
            >
            <h2 class="font-jetbrains text-lg font-extrabold">
              {{ edu.school }}
            </h2>
            <p class="font-jetbrains text-sm text-gray-600">
              {{ edu.degree }}
            </p>
            <p class="font-jetbrains text-sm text-gray-400">
              {{ edu.date }}
            </p>
          </div>

          <hr class="my-8 border-t-1 border-gray-200">
        </div>

        <div
          id="certifications"
          class="grid gap-2 mt-3"
          >
          <h2 class="font-jetbrains text-xl font-extrabold">
            Certifications
          </h2>

          <div
            v-for="cert in certifications"
            :key="cert"
            class="grid gap-3 mt-3 font-jetbrains text-sm leading-6"
            >
            <p class="font-jetbrains text-sm text-gray-600">
              {{ cert }}
            </p>
          </div>

          <hr class="my-8 border-t-1 border-gray-200">
        </div>

        <div
          id="reflections"
          class="grid gap-8"
          >
          <h2 class="font-jetbrains text-xl font-extrabold">
            Team Reflections
          </h2>

          <div
            v-for="team in reflections.team"
            :key="team.title"
            class="grid gap-2 mt-3"
            >
            <p class="font-jetbrains text-sm">
              <strong v-if="team.name">{{ team.name }}</strong> {{ team.title }}
            </p>
            <p
              v-for="description in team.description"
              :key="description"
              class="font-jetbrains text-sm text-gray-800 leading-6"
              >
              {{ description }}
            </p>
          </div>

          <hr class="my-8 border-t-1 border-gray-200">
        </div>

        <div
          id="reflections"
          class="grid gap-8"
          >
          <h2 class="font-jetbrains text-xl font-extrabold">
            Peer Reflections
          </h2>

          <div
            v-for="peer in reflections.peer"
            :key="peer.title"
            class="grid gap-2 mt-3"
            >
            <p class="font-jetbrains text-sm">
              <strong v-if="peer.name">{{ peer.name }}</strong> {{ peer.title }}
            </p>
            <p
              v-for="description in peer.description"
              :key="description"
              class="font-jetbrains text-sm text-gray-800 leading-6"
              >
              {{ description }}
            </p>
          </div>

          <hr class="my-8 border-t-1 border-gray-200">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      return {
        title: 'Profile',
        summary: [
          'Seasoned software developer and product architect with over 15 years of experience across the entire software development lifecycle, including architecture, backend, frontend, mobile, and infrastructure. Proficient in tackling complex technical requirements to deliver high-quality, scalable, and performant products.',
          'Self-sufficient and driven in challenging environments, with a passion for collaborative problem-solving. Committed to identifying and resolving issues before they escalate, while aligning technical solutions with business objectives to drive value for customers and organizations.',
          'Skilled in navigating high-level architectural decisions and hands-on coding, with experience in product development, mentoring, hiring, and business strategy.',
        ],
        image: 'resume/brands-light.png',
        caption: 'Selection of brands I’ve worked with over the years',
      };
    },
    contact() {
      return [
        {
          type: 'text',
          key: 'Location',
          value: 'Amsterdam, NL',
        },
        {
          type: 'text',
          key: 'Nationality',
          value: 'Dutch',
        },
        {
          type: 'text',
          key: 'Email',
          value: 'ozguratmaca@gmail.com',
        },
        {
          type: 'url',
          key: 'Website',
          value: 'ozguratmaca.com',
        },
        {
          type: 'url',
          key: 'LinkedIn',
          value: 'linkedin.com/in/ozguratmaca',
        },
        {
          type: 'tel',
          key: 'Phone',
          value: '+31 6 2500 8933',
        },
        // {
        //   type: 'url',
        //   key: 'GitHub',
        //   value: 'github.com/ozguratmaca',
        // },
      ];
    },
    work() {
      return [
        {
          company: 'Swisscom',
          title: 'Technical Product Lead, DevOps Engineer L5',
          date: 'Jul 2021 - Present',
          logo: 'resume/swisscom.jpg',
          description: [
            'At Swisscom, I lead cross-functional teams to deliver cloud-native solutions, overseeing end-to-end project execution and aligning technical strategy with business goals and customer needs.',
            'As a technical lead and individual contributor, I manage the full software lifecycle—architecture, backend, frontend, mobile, infrastructure, and observability—handling complex, event-driven projects from concept to operation. I collaborate with business stakeholders, product owners, and solution architects to ensure technical execution aligns with strategic objectives and meaningful outcomes.',
'I address technical challenges through research, prototyping, and visualizations while contributing to product/UX architecture, code reviews, pair programming and API/service design. I promote reusability and iterative development to accelerate delivery and predictability.',
            'By implementing and responding to system alerts, triaging errors, and investigating potential issues across platforms and underlying services, I drive operational effectiveness and cultivate a culture of ownership. I also lead knowledge-sharing sessions, organize tech talks, mentor junior staff, and manage team onboarding.',
          ],
          projects: [
            {
              name: 'Swisscom GPT B2C',
              description: 'ChatGPT-like UI for Swisscom Residential Customers',
            },
            {
              name: 'Swisscom Sign',
              description: 'Signatories Service',
            },
            {
              name: 'Travel Mate',
              description: 'Employee Travel Management Platform',
            },
            {
              name: 'Swisscom Wallet',
              description: 'Verifiable Credentials & SSI Platform',
            },
            {
              name: 'Swisscom GPT',
              description: 'ChatGPT-like UI for Swisscom Employees',
            },
            {
              name: 'ETH Zürich',
              description: 'Research App for Mobility Insights',
            },
            {
              name: 'Swiss Climate Challenge',
              description: 'Mobility Insights Mobile App & Platform',
            },
            {
              name: 'Swisscom Shops',
              description: 'Due Diligence',
            },
          ],
          tech:
            'AWS, MariaDB, MongoDB, Postgres, Redis/Graph, Terraform, Kubernetes, Docker, Java 17, Spring Boot, Jenkins, GitLab CI/CD, JavaScript/TypeScript, VueJS, React, React Native, Angular, NodeJS, Jest, ElasticSearch, Sentry, New Relic, Prometheus, Grafana, Loki, OpsGenie, LLMs',
        },
        {
          company: 'Tiny Talk AI',
          title: 'Side Project → tinytalk.ai',
          date: 'Mar 2023 - Oct 2024',
          logo: 'resume/tinytalk.png',
          description: [
            'Created and launched Tiny Talk, an AI-powered chatbot platform designed to help businesses integrate GPT-based customer support and automation into their workflows. Managed the entire product lifecycle, from development and design to marketing, customer acquisition, and growth strategy.',
            'Platform offers knowledge base ingestion and management, RAG pipelines, web crawling & scraping, realtime conversations and help desk with human take-over/hand-off, conversation history, lead generation, WhatsApp, Zapier & Webhook integrations, analytics, API support and more.',
          ],
          tech:
            'AWS, MongoDB, Postgres, Redis, Terraform, Docker, JavaScript/TypeScript, VueJS, Nuxt, NodeJS, GitHub CI/CD, Strapi, ElasticSearch, Sentry, Jest, WebSockets, Server-Sent Events, LLMs',
        },
        {
          company: 'NGTI',
          title: 'Lead Front-end Engineer & Senior Product Designer',
          date: 'May 2017 - Jul 2021',
          logo: 'resume/ngti.jpg',
          description: [
            'At NGTI, I worked with cross-platform engineering and product teams spread across six countries, building proof of concepts, prototypes, and production applications for Swisscom’s businesses and services.',
            'I closely collaborated with internal and external stakeholders on R&D and new business development, contributing from the RFP stage through business analysis, due diligence, implementation, and operations.',
            'By bridging engineering, product, and business, I translated functional, non-functional, UX, and architectural requirements into actionable stories, helping my teams build mobile applications and platforms using web and native technologies.',
            'I also helped establish organization-wide standards, promoted reusability, participated in interviews and hiring to build self-sufficient teams from the ground up. I mentored interns through their graduation, supporting their transition into junior developers, and continued to mentor them after they joined the company.',
          ],
          projects: [
            {
              name: 'Swiss Climate Challenge',
              description: 'Mobility Insights Mobile App & Platform',
            },
            {
              name: 'Beem',
              description: 'Advertising over Audio Fingerprints',
            },
            {
              name: 'Raiffeisen, Fidor Bank',
              description: 'Conversational UI prototypes & pitch',
            },
            {
              name: 'My Swisscom, My Cloud',
              description: 'Conversational UI prototypes',
            },
            {
              name: 'Kickbox & Improve',
              description: 'Innovation Management',
            },
            {
              name: 'Internet-Box',
              description: 'Swisscom Router Web UI',
            },
            {
              name: 'AutoSense',
              description: 'Connected Fleet Management',
            },
          ],
          tech: 'AWS, MariaDB, MongoDB, Redis/Graph, Terraform, Docker, Java 11, Spring Boot, GitHub CI/CD, JavaScript/TypeScript, VueJS, React, NextJS, React Native, Angular, NodeJS, ElasticSearch, Jest, Sentry, New Relic.',
        },
        {
          company: 'Büyük Ayı',
          title: 'Co-Founder, Lead Product Designer & Software Engineer',
          date: 'Jul 2008 - May 2017',
          logo: 'resume/buyuk-ayi.png',
          description: [
            'Co-founded a design and creative production studio specializing in web-based experiences, IoT projects, multitouch applications and physical installations with a strong focus on interaction design.',
            'Collaborated with various brands and agencies on a project basis, earning multiple awards. Led a team of 10, including mechatronics engineers, software developers, industrial & production designers, and motion graphic artists.',
          ],
          projects: [
            {
              name: 'Akfel',
              description: 'World Gas Conference Paris, Multitouch Application',
            },
            {
              name: 'Türkiye İş Bankası',
              description: 'Physical Interaction Game Enabled by Xbox Kinect',
            },
            {
              name: 'Türkiye İş Bankası',
              description: 'Touch-ID Campaign using Real-time Heartbeat Sensors',
            },
            {
              name: 'Aygaz',
              description: 'Interactive Immersive Space Capsule Installation',
            },
            {
              name: 'Fiat',
              description: 'Annual Calendar Campaigns, Micro sites, Video Production',
            },
            {
              name: 'Euroleague',
              description: 'IoT-powered social media activations',
            },
            {
              name: 'Turkcell',
              description: 'Multitouch Product Portfolio for Experience Center',
            },
            {
              name: 'Fiat Showroom',
              description: 'Multitouch Real-time Car Configurator',
            },
            {
              name: 'TAV Holdings',
              description: '7 Airport Websites & Real-time Flight Information',
            },
          ],
          awards: [
            { name: 'Mixx Awards', description: '2010' },
            { name: 'Crystal Apple', description: 'Silver, 2010' },
            { name: 'Golden Spider Web Awards', description: '2011' },
            { name: 'Mixx Awards', description: '2011' },
            { name: 'Crystal Apple', description: 'Silver, 2011' },
            { name: 'Golden Spider Web Awards', description: '2012' },
            { name: 'Golden Spider Web Awards', description: '2013' },
            { name: 'A Awards', description: '2015' },
            { name: 'Crystal Apple', description: 'Silver, 2015' },
            { name: 'The Lovie Awards', description: 'Bronze, 2016' },
          ],
          tech: 'JavaScript, ActionScript, NodeJS, PHP, Java, C, C++, MT4J, OpenFrameworks, Processing, vvvv, GLSL, OpenCV, ccv, MySQL, MQTT, Arduino, NodeMCU, Atmega, ESP, RFID, Zigbee, BLE',
        },
      ];
    },
    education() {
      return [
        {
          school: 'İstanbul Bilgi University',
          degree: 'Bachelor of Photography & Video and Visual Communication Design',
          date: '2003 - 2010, Full Scholarship',
        },
      ];
    },
    certifications() {
      return [
        'AWS Certified Solutions Architect – WIP',
        'Angular – The Complete Guide',
        'React – The Complete Guide',
        'React Native – The Practical Guide',
        'NodeJS – The Complete Guide',
        'TypeScript',
        'Vue – The Complete Guide',
      ];
    },
    reflections() {
      return {
        team: [
          {
            name: 'Summary',
            title: '',
            description: [
              'Özgür is an invaluable team member, contributing to agile processes, technical leadership, and decision-making across a wide range of fields. His problem-solving, leadership, and communication skills drive project success. He ensures the team\'s well-being and considers the 360º impact of his work. Proactively taking responsibility for business, product, and technical choices, he consistently fights for quality and scalability.',
              'Recognized as an expert across teams, Özgür turns ideas into deliverable products, with hands-on experience in full-stack development, API design, and multiple tech stacks.',
            ],
          },
          {
            name: 'Arjen van Reeven,',
            title: 'DOS-OCD Innovation Bakery – PO/SM',
            description: [
              'Özgür positively shapes agile activities and decision-making in each project. He designs, implements, and improves technical processes, while coordinating development efforts as a technical lead and coaching team members. Leading the frontend CoP, he takes an active role in shaping processes and outputs.',
              'Özgür is respected for his insight into frontend, backend, API design, UX, and product, often kickstarting projects and advising engineers. His expertise spans technical, product, project, and business management, consistently applied across various projects.',
            ],
          },
          {
            name: 'Thiago Camargo,',
            title: 'DOS-OCD Innovation Bakery – Solutions Architect',
            description: [
              'Özgür excels in cross-company and cross-product collaboration, deeply influencing Product Owners and Stakeholders. He maintains high standards for delivery, process, and maintainability. As a mentor, he has developed team members in web, mobile, API design, and frontend skills.',
              'His focus on excellence spans UI/UX, software architecture, and quality assurance. A multi-language expert, he is proficient in various languages, frameworks, and platforms, and can develop full product stacks. Özgür has been essential in shaping the architecture and quality of multiple products in production.',
            ],
          },
          {
            name: 'Denilo Vieira,',
            title: 'DOS-OCD Innovation Bakery/My Swisscom Business – UX Engineer',
            description: [
              'Özgür is passionately involved in projects, aiming for the highest quality in product development. He engages product owners in discussions about strategy based on KPIs and performance while collaborating with backend and frontend developers to find efficient, scalable solutions.',
              'He also provides valuable feedback to designers, demonstrating deep design knowledge. Perceived as a crucial team member, Özgür sets high standards and participates in all agile rituals, from defining backlog items to coaching employees. He stays informed about products and performance, actively monitoring analytics and logs to drive improvements.',
            ],
          },
        ],
        peer: [
          {
            name: 'Peter Stähli,',
            title: 'GSD-FDT Swisscom Wallet – Product Manager',
            description: [
              'Özgür knows what he is talking about. His statements are well founded and comprehensible. Özgür takes care and the responsibility of the whole solution. His experience is very visible, and delivers high quality, stable and performant software.',
            ],
          },
          {
            name: 'Dominic Schlegel,',
            title: 'GSD-FDT Swisscom Wallet – Product Owner',
            description: [
              'Özgür’s contribution within the SSI Wallet project demonstrated his ability to very quickly becoming an expert in a new domain who can discuss with and consult experts (Peter). He plays an active role in the decision making process and is regarded as an important voice and influence within the team.',
            ],
          },
          {
            name: 'Luana Vasconcelos,',
            title: 'GSD-FDT Swisscom Wallet – Experience Manager',
            description: [
              'Özgür has a collaborative mindset and consistently demonstrates his technical abilities when it comes to analysing and solving issues. In our team Özgür is considered highly competent and compliant. There is no doubt of his abilities and his willingness to help others and help solve problems is quite appreciated. We definitely consider Özgür an expert. He has until now provided us with valuable inputs both technical and strategic.',
            ],
          },
          {
            name: 'Sara Duindam,',
            title: 'DOS-OCD Swiss Climate Challenge – Product Owner (2021 to 2023)',
            description: [
              'Özgür actively leads, provides structure, and shares his opinions while giving space, pushing, and supporting others. He brings creative ideas, tries new things, and is always helpful. He values testing, conceptualizes strategies, and connects the right stakeholders. Thinking cross-functionally, he supports Product Owners, prioritizes well, and is familiar with agile ceremonies. Always well-prepared, he knows his subject matter and stays informed about what\'s happening beyond his team.',
            ],
          },
          {
            name: 'Willem van der Pijl,',
            title: 'DOS-OCD Shop ART – UX Engineer',
            description: [
              'I think Özgür is the type of developer you don\'t see often. He has the knowledge and eye you expect from a designer, while also being an incredibly good developer. Özgür knew how to push me to be better, learn more and know more. I think back fondly of our time in a team together and I learned a lot from him.',
              'Working with Özgür has had a lasting impact on me that still helps me in my career to this day. He does not strive for something to be good, he wants his projects to be perfect. Özgür carried the team we were in. His technical know-how pushed the project forward.',
            ],
          },
        ],
      };
    },
  },

  methods: {
    getImagePath(path) {
      if (path) {
        const images = require.context('@/assets/', true, /\.png|.jpg$/);
        return images(`./${path}`);
      }

      return false;
    },
  },
};
</script>
