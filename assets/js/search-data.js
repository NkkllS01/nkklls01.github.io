// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "An overview of my research interests and directions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications, manuscripts, and research in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, experience, research interests, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-started-the-master-of-technology-in-artificial-intelligence-systems-program-at-nus-aug-2024-sep-2026",
          title: 'Started the Master of Technology in Artificial Intelligence Systems program at NUS (Aug...',
          description: "",
          section: "News",},{id: "news-joined-smart-singapore-mit-alliance-for-research-and-technology-as-a-research-intern-working-on-multimodal-generative-ai-world-models-and-diffusion-based-remote-sensing-research",
          title: 'Joined SMART (Singapore-MIT Alliance for Research and Technology) as a research intern, working...',
          description: "",
          section: "News",},{id: "news-personal-academic-website-is-now-live-this-site-will-be-updated-with-research-progress-projects-and-notes",
          title: 'Personal academic website is now live! This site will be updated with research...',
          description: "",
          section: "News",},{id: "projects-muse2-multimodal-generative-modeling-and-segmentation-evaluation",
          title: 'MUSE2 Multimodal Generative Modeling and Segmentation Evaluation',
          description: "Multimodal generative framework integrating satellite imagery and urban energy data using diffusion models and ControlNet, with downstream segmentation evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_jodiffusion/";
            },},{id: "projects-remote-sensing-generative-modeling",
          title: 'Remote Sensing Generative Modeling',
          description: "Explored research ideas connecting satellite imagery, climate variables, geospatial coordinates, and generative modeling for city-scale analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_remote_sensing/";
            },},{id: "projects-sustainability-platform-life-cycle-assessment-system",
          title: 'Sustainability Platform / Life Cycle Assessment System',
          description: "Backend and full-stack development for a data-intensive Life Cycle Assessment platform at A*STAR SIMTech.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_lca_platform/";
            },},{id: "projects-multimodal-emotion-recognition-system",
          title: 'Multimodal Emotion Recognition System',
          description: "Audio-visual emotion recognition with ResNet18, WavLM, and cross-attention fusion for joint multimodal representation learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_emotion_recognition/";
            },},{id: "projects-llm-based-repository-understanding-and-documentation-workflow",
          title: 'LLM-Based Repository Understanding and Documentation Workflow',
          description: "Explored an LLM-powered workflow for understanding, indexing, and documenting code repositories.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_llm_repo_understanding/";
            },},{id: "projects-object-detection-and-multi-object-tracking-experiments",
          title: 'Object Detection and Multi-Object Tracking Experiments',
          description: "Worked on computer vision detection and tracking pipelines using RT-DETR, BoxMOT, and HybridSORT.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_object_detection/";
            },},{id: "projects-smart-replenishment-for-store-managers",
          title: 'Smart Replenishment for Store Managers',
          description: "Explainable AI workflow combining demand forecasting and Chain-of-Thought reasoning for inventory decision support.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_smart_replenishment/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6B%6B%6C%6C%73%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/NkkllS01", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zijie-gao-162284358", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/GaoZijie_CV.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
