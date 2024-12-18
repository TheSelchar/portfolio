import Image from 'next/image';
import Link from 'next/link';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-6">
    <div className="w-16 h-16 transform transition-all duration-300 hover:scale-110 hover:rotate-6">
      {children}
    </div>
  </div>
);

const SectionCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center group">
    <IconWrapper>
      {icon}
    </IconWrapper>
    <h3 className="text-xl font-bold text-primary mb-4 transition-colors group-hover:text-primary-focus">
      {title}
    </h3>
    <p className="text-neutral-600 transition-colors group-hover:text-neutral-700">
      {description}
    </p>
  </div>
);

const MoreInfoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[url('/images/school/campus.jpeg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">More Info</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              OBS Online offers a unique and highly engaging way to learn vital business concepts. 
              Wherever you are in your career—or the world—we provide educational experiences that 
              can help you achieve your personal and professional goals.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center text-neutral-800 mb-16 relative group">
          HOW IT WORKS
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-warning transition-all duration-300 group-hover:w-32"></div>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <SectionCard
            icon={
              <Image
                src="/images/school/learning-experience-icon.svg"
                alt="Learning Experience"
                width={64}
                height={64}
                className="transition-transform duration-500 group-hover:rotate-180"
              />
            }
            title="Learning Experience"
            description="Our programs are designed to bring the OBS classroom to you. Find out how."
          />

          <SectionCard
            icon={
              <Image
                src="/images/school/Certificate.svg"
                alt="Certificates"
                width={64}
                height={64}
                className="animate-float"
              />
            }
            title="Certificates, Credentials & Credits"
            description="We offer multiple ways to learn vital business concepts. Discover which option is best for you."
          />

          <SectionCard
            icon={
              <Image
                src="/images/school/learning-tracks-icon.svg"
                alt="Learning Tracks"
                width={64}
                height={64}
                className="transition-transform duration-500 group-hover:rotate-12"
              />
            }
            title="Learning Tracks"
            description="Gain deeper insights and expertise with this advanced certificate."
          />
        </div>
      </div>

      {/* Need Help Section */}
      <div className="bg-neutral-50 py-16 px-4">
        <h2 className="text-2xl font-bold text-center text-neutral-800 mb-16 relative group">
          NEED HELP?
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-warning transition-all duration-300 group-hover:w-32"></div>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionCard
            icon={
              <Image
                src="/images/school/faq-icon.svg"
                alt="FAQ"
                width={64}
                height={64}
                className="animate-pulse-slow"
              />
            }
            title="Frequently Asked Questions"
            description="Get answers to your questions about admissions, grading, and more."
          />

          <SectionCard
            icon={
              <Image
                src="/images/school/info-icon.svg"
                alt="Request Information"
                width={64}
                height={64}
                className="animate-float"
              />
            }
            title="Request More Information"
            description="Learn more about specific programs, or sign up for news and updates from OBS Online."
          />
        </div>
      </div>

      {/* Connect Section */}
      <div className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center text-neutral-800 mb-16 relative group">
          CONNECT
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-[2px] bg-warning transition-all duration-300 group-hover:w-32"></div>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionCard
            icon={
              <Image
                src="/images/school/stories-icon.svg"
                alt="Student Stories"
                width={64}
                height={64}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
            }
            title="Student Stories"
            description="Participants share their firsthand experiences with OBS Online."
          />

          <SectionCard
            icon={
              <Image
                src="/images/school/community-icon.svg"
                alt="Community"
                width={64}
                height={64}
                className="animate-float"
              />
            }
            title="Community"
            description="Network with OBS Online learners and other business-minded professionals worldwide."
          />
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage; 