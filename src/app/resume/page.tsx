import { FC } from 'react';
import Link from 'next/link';
import { AIChat } from '@/components/AIChat';

const ResumePage: FC = () => {
  return (
    <div className="min-h-screen bg-[url('/images/abstract-background.svg')] bg-cover bg-center bg-fixed">
    <div className="container mx-auto px-4 py-8">
      {/* Download Button */}
      <div className="flex justify-end mb-6">
        <Link 
          href="/docs/CharlesLGrahamResume_Full.pdf" 
          target="_blank"
          className="btn btn-primary"
        >
          Download PDF
        </Link>
      </div>

      <div className="bg-white95 shadow-lg rounded-lg p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">CHARLES L GRAHAM II</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
            <a href="tel:+19138276971" className="text-primary">913-827-6971</a>
            <a href="mailto:CharlesGrahamII@proton.me" className="text-primary">CharlesGrahamII@proton.me</a>
            <a href="https://www.linkedin.com/in/charles-graham-781b0214/" target="_blank" rel="noopener noreferrer" className="text-primary">LinkedIn</a>
          </div>
          <p className="text-neutral-600 mt-2">Los Angeles Metro, CA; Kansas City Metro, KS</p>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">SUMMARY</h2>
          <div className="text-neutral-700 space-y-2">
            <p>Results-driven IT leader with 18 years of experience in leading, mentoring and coaching high-performing software development teams, managing large-scale projects, driving product strategy, platform transformation, and enterprise modernization, while collaborating with C-level executives to drive strategic technology initiatives and achieve business objectives.</p>
            <p className="mt-2">A strategic thinker who champions Agile and SCRUM methodologies, fostering a culture of continuous improvement, inclusion, and psychological safety across teams.</p>
            <p className="mt-2">Architected digital, AI-driven data transformation initiatives, optimizing data ingestion, analysis, and automation processes to enhance financial consulting operations.</p>
            <p className="mt-2">Skilled in developing and implementing innovative solutions and business process automation that significantly enhance operational efficiency, data security, and productivity. Hands-on experience with IPaaS and low-code platforms. Familiar with Cloud Architecture concepts (AWS, GCP, Azure).</p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">EDUCATION</h2>
          <ul className="list-disc list-inside text-neutral-700 space-y-2">
            <li>Harvard University Business School Online: Credential of Leadership and Management in Business</li>
            <li>Harvard University Business School Online: Financial Accounting</li>
            <li>Harvard University Business School Online: AI Essentials for Business</li>
            <li>Wichita State University: Bachelor of Science in Computer Science and Minor in Mathematics</li>
            <li>Workato: Automation Pro I 111867583, II 111869041, III 111976992</li>
          </ul>
        </section>
        
        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">SKILLS & COMPETENCIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-neutral-900 mb-2">Strategy & Execution</h3>
              <p className="text-neutral-700">Strategy Implementation, Product Strategy, Product Design, Project Management, Technology Solution Design, Solutions Deployment, Architecture Governance, Data Governance, KPI/ROI Analysis, Project Requirement Evaluation</p>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-2">Leadership & Development</h3>
              <p className="text-neutral-700">Developing engineering talent, Cross-functional Team Leadership, Team Development, Agile Methodologies, SDLC, Technical Direction, Stakeholder Management, Resource Planning, Mentoring & Coaching, Performance Management</p>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-2">Technical Expertise</h3>
              <p className="text-neutral-700">Salesforce, Business Automation, IPaaS (Workato), Serverless Events, Data Systems (Relational & Document), DevOps (Azure, Azure DevOps, Jira), Microservices, Middleware, OAuth 2.0, CI/CD Pipelines, Cloud Architecture (AWS, GCP, Azure), MuleSoft, Boomi, IBM App Connect</p>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-2">Development & Architecture</h3>
              <p className="text-neutral-700">Experience with distributed multi-tier applications and reliability/scaling, API Design, Scalable Architecture, Code Quality & Standards, ASP.NET/Core Rest Web API, Blazor, JavaScript, Microsoft SQL Server, Swagger</p>
            </div>
          </div>
        </section>

        {/* Experience Section - Adding all roles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">EXPERIENCE</h2>
          
          {/* NCM & Associates - Current Role */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">Sr. Software Development Manager</h3>
              <p className="text-neutral-600">2019 – Present</p>
            </div>
            <h4 className="text-lg text-primary mb-2">NCM & Associates, Kansas City, MO</h4>
            <p className="text-neutral-700 mb-4">Led global teams in platform modernization, enhancing productivity through business automation, Salesforce, microservice, AI, and IPaaS solutions. Spearheaded digital, AI-driven data transformation initiatives to optimize data workflows, improving processing speed, reducing data breaches, and ensuring SLA uptime. Aligned projects with corporate goals, managing budgets up to $100,000. Pioneered Agile methodologies, mentored teams, and consistently delivered high-quality results.</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Directed the development and execution of AI-powered digital transformation strategies, enhancing data workflows through advanced automation, analysis, and streamlined ingestion.</li>
              <li>Collaborated with C-level executives to define and execute strategic technology initiatives, aligning projects with corporate objectives and driving organizational growth.</li>
              <li>Oversaw team performance and software health by tracking key operational metrics, implementing regular reviews, and providing targeted support to ensure delivery commitments and quality standards were consistently met.</li>
              <li>Collaborated with Senior leadership, product managers and project stakeholders to define requirements and successfully deliver projects that aligned with and often exceeded corporate objectives.</li>
              <li>Regularly communicated with senior leadership team (SLT) managers, delivering comprehensive project reports and milestone updates to ensure transparency and alignment with business objectives.</li>
              <li>Executed a technology strategy that significantly boosted overall productivity by implementing advanced automation techniques, streamlining business processes across the organization.</li>
              <li>Strategically developed and managed project budgets ranging from $10,000 to $100,000, leading the introduction of new processes and overseeing automation initiatives in collaboration with third-party vendors.</li>
              <li>Directed two cross-functional teams, comprising 30 developers, Team Managers, Solutions Architects, and Team Leads, in a comprehensive software rebuild of a financial intake application, significantly enhancing processing speed and reducing errors.</li>
              <li>Strategically hired, mentored, and set performance goals for direct reports, proficient with increasing productivity and fostering professional growth across teams.</li>
              <li>Provided expert technical leadership on software architecture and engineering practices, driving innovation and significantly enhancing overall system performance.</li>
              <li>Implemented Workato to streamline data integration and automate business processes, driving efficiency and optimizing team performance within software development projects.</li>
              <li>Led the engineering and deployment of an AI-driven HR automation project, generating substantial ROI and driving a significant enhancement in team productivity through effective project management and strategic oversight.</li>
              <li>Pioneered Agile and SCRUM methodologies, significantly accelerating project delivery times and markedly reducing development errors.</li>
            </ul>
          </div>

          {/* NCM & Associates - Previous Role */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">Software Development Manager & Enterprise Architect</h3>
              <p className="text-neutral-600">01/2017 – 01/2019</p>
            </div>
            <h4 className="text-lg text-primary mb-2">NCM & Associates, Kansas City, MO</h4>
            <p className="text-neutral-700 mb-4">Redefined enterprise solutions by implementing modern web architectures, scalable microservices, and real-time data visualizations, enhancing decision-making and reporting. Integrated platforms like Salesforce to streamline operations and reduce bottlenecks. Led and mentored teams in best practices, improving code quality and accelerating issue resolution. Innovated with the Financial Ontology Query Language (FOXDL) to enhance data precision and operational efficiency.</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Led the creation of scalable architectures and aligning solutions with product delivery goals.</li>
              <li>Leveraged Workato for seamless data integration and business process automation, enhancing enterprise architecture efficiency and aligning IT solutions with business objectives.</li>
              <li>Spearheaded the development of a custom Financial Ontology Query Language (FOXDL), enhancing reporting accuracy by 30% and reducing processing times by 50%.</li>
              <li>Collaborated closely with Product Owners and Project Managers to strategically define and achieve project milestones, ensuring on-time delivery and alignment with key business objectives using SMART goals.</li>
              <li>Engineered automated intake solutions for financial data categorization and customer data mining using Workato, resulting in a 30% improvement in data accuracy and a 25% reduction in processing time.</li>
              <li>Engineered dynamic real-time data visualizations using High Charts and SSRS, enhancing data-driven decision-making and improving reporting accuracy by 30%.</li>
              <li>Streamlined enterprise operations by seamlessly integrating Salesforce, internal systems and other 3rd party platforms, driving a 40% increase in operational efficiency and reducing process bottlenecks.</li>
              <li>Engineered scalable Solutions with .NET Web API, OData, and Entity Framework, driving a 35% improvement in application performance and data management efficiency.</li>
              <li>Led and mentored developer teams, driving the adoption of best practices and resolving complex issues, which resulted in a increase in code quality and a reduction in issue resolution time.</li>
            </ul>
          </div>

          {/* Grantham University */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">UI Architect</h3>
              <p className="text-neutral-600">09/2012 – 01/2017</p>
            </div>
            <h4 className="text-lg text-primary mb-2">Grantham University, Kansas City, MO</h4>
            <p className="text-neutral-700 mb-4">Directed new UX & UI and accessibility standards, and trained a team of .NET developers to resolve issues and apply best practices. Developed .NET applications, a Student Grade Portal, and custom web portals using MVC, Web API, and Bootstrap. Mentored developers and introduced agile methodologies to enhance product development.</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Leadership in driving user experience improvements and accessibility standards.</li>
              <li>Use Chart.JS and HighCharts to create data visualization for students' grades, progress and other metrics.</li>
              <li>Trained and managed a team of developers, discussing issues to provide resolutions and apply best practices.</li>
              <li>Pioneered new methods of code review to incorporate a wider range of voices, enhancing final products with otherwise overlooked ideas.</li>
              <li>Develop tables, views, and stored procs in SQL Server 2012 and Oracle</li>
              <li>Introduced Bootstrap, AutoMapper, and Autofac (IOC).</li>
              <li>Develop Custom CMS and Web portal for Ellucian Banner CMS</li>
              <li>Design custom middleware using .NET WCF</li>
              <li>Mentored younger developers and introduced enterprise concepts</li>
              <li>Provided Deliverables in an Agile Scrum development environment</li>
              <li>Gathered and defined customer requirements to develop clear specifications for project plans</li>
              <li>Introduced agile methodologies and development best practices to the division to enhance product development</li>
            </ul>
          </div>

          {/* Federal Reserve Bank */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">Sr. Program Analyst II</h3>
              <p className="text-neutral-600">09/2012 – 04/2012</p>
            </div>
            <h4 className="text-lg text-primary mb-2">Federal Reserve Bank, Kansas City, MO</h4>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Led team to migrate Enterprise banking application from ColdFusion9 to ASP.Net C#.NET MVC</li>
              <li>Created new and modified InfoPath Forms</li>
              <li>Created new and modified ColdFusion Web Services</li>
              <li>Created Dynamic reporting tools using Highcharts</li>
              <li>Layout and web design using bootstrap</li>
              <li>Designed Databases using Views, Stored Procedures and SQL Scripts</li>
              <li>Developed and enhanced web applications using ASP.Net 3.5, MVC.NET 3.5, ColdFusion 8/9, CSS2, JavaScript, jQuery</li>
              <li>Server-side development using ColdFusion</li>
              <li>Designed Custom Web report using ColdFusion, InfoPath Forms</li>
              <li>Updated National Banking Database, with new Views and Stored Procedures</li>
            </ul>
          </div>

          {/* Jack Henry and Associates */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">Sr. Software Developer</h3>
              <p className="text-neutral-600">03/2010 – 09/2012</p>
            </div>
            <h4 className="text-lg text-primary mb-2">Jack Henry and Associates, Remote</h4>
            <p className="text-neutral-700 mb-4">Co-architected a CMS application using ASP.Net and C#, designed static and dynamic websites with ColdFusion, JavaScript, and SQL Server, and developed custom web solutions for banking and credit union clients.</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Co-Architected new CMS application written in ASP.Net, C#.NET 3.5, and .Net Web Forms</li>
              <li>Designed Static Website using ColdFusion and JavaScript, HTML, jQuery, and other Web based languages</li>
              <li>Developed Custom Web solutions for Banking and Credit Union Clients</li>
              <li>Developed database driven websites using SQL Server 2010</li>
              <li>Developed Dynamic Website using SQL server 2010</li>
              <li>Use customer service skills to develop and solve website design issues</li>
              <li>Created Custom Web modules using Object Oriented ColdFusion 8, 9</li>
            </ul>
          </div>

          {/* FAA */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">Sr. Lead Confusion Developer</h3>
              <p className="text-neutral-600">04/2010 – 01/2012</p>
            </div>
            <h4 className="text-lg text-primary mb-2">FAA</h4>
            <p className="text-neutral-700 mb-4">Managed the WIT team for ongoing enhancements and maintenance, advancing the application from WIT 2.0 to architecting the new design for WIT 3.0.</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Redesigned and developed applications using ColdFusion 8, HTML, CSS, Microsoft SQL, and JavaScript</li>
              <li>Enhanced Database in Microsoft SQL Server 2005, rewrote stored procedures and queries</li>
              <li>Redesigned WIT design for usability and quality design</li>
              <li>Implemented requirements and designed documentation for Code management and scope</li>
            </ul>
          </div>

          {/* Cerner */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-medium text-neutral-900">Sr. Software Engineer</h3>
              <p className="text-neutral-600">08/2006 – 01/2009</p>
            </div>
            <h4 className="text-lg text-primary mb-2">Cerner (Oracle), Grandview, MO</h4>
            <p className="text-neutral-700 mb-4">Designed applications using an MVC Java framework and enhanced software with Java and Eclipse RCP. Developed web applications utilizing Java/J2EE, JSP, Struts, XML, and Servlets.</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2">
              <li>Designed web application using Java/J2EE, JSP, Struts, XML, and Servlets</li>
              <li>Enhanced "Light On" Network, which helps Cerner track critical database information for client-product efficiency</li>
              <li>Enhanced MTA (Millennium Trouble Shooting Agent) that allows clients to create a custom service request with screen shots, registry info, and custom crash log</li>
              <li>Evaluated, designed, and developed enhancements and bug corrections</li>
            </ul>
          </div>
        </section>
      </div>
      <AIChat />
    </div>
    </div>
  );
};

export default ResumePage;