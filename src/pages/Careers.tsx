
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, MapPin, Star, Users, Award, Heart } from 'lucide-react';

const jobOpenings = [
  {
    id: 'job-1',
    title: 'Jewelry Designer',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Design',
    description: 'Create stunning moissanite jewelry designs that balance innovation with commercial viability. Collaborate with our production team to bring concepts to life.',
    requirements: [
      'Degree in Jewelry Design or related field',
      'Minimum 3 years experience in fine jewelry design',
      'Proficiency in CAD software (Matrix, Rhino)',
      'Strong portfolio demonstrating range and creativity',
      'Knowledge of jewelry manufacturing processes'
    ]
  },
  {
    id: 'job-2',
    title: 'Master Jeweler',
    location: 'Beverly Hills, CA',
    type: 'Full-time',
    department: 'Production',
    description: 'Craft high-quality moissanite jewelry pieces using traditional and modern techniques. Set stones, assemble components, and ensure exceptional quality in all pieces.',
    requirements: [
      'Minimum 5 years experience as a bench jeweler',
      'Expert stone setting skills',
      'Experience working with precious metals',
      'Attention to detail and commitment to quality',
      'Ability to work on custom and production pieces'
    ]
  },
  {
    id: 'job-3',
    title: 'E-Commerce Manager',
    location: 'Remote',
    type: 'Full-time',
    department: 'Marketing',
    description: 'Lead our online sales strategy, overseeing website optimization, customer journey enhancement, and conversion rate improvement for our luxury moissanite jewelry brand.',
    requirements: [
      'Bachelor\'s degree in Marketing, E-commerce, or related field',
      'Minimum 4 years experience in e-commerce management',
      'Experience with luxury or jewelry brands preferred',
      'Proficiency in analytics tools and CRM systems',
      'Understanding of SEO, PPC, and email marketing'
    ]
  },
  {
    id: 'job-4',
    title: 'Sales Associate',
    location: 'Chicago, IL',
    type: 'Full-time',
    department: 'Sales',
    description: 'Provide exceptional customer service in our Chicago showroom. Guide clients through our collections, educate them about moissanite, and help them find their perfect piece.',
    requirements: [
      'Previous retail sales experience, preferably in jewelry or luxury goods',
      'Excellent communication and interpersonal skills',
      'Ability to build rapport with clients',
      'Knowledge of gemstones and jewelry (training provided)',
      'Weekend availability required'
    ]
  },
  {
    id: 'job-5',
    title: 'Social Media Coordinator',
    location: 'Remote',
    type: 'Part-time',
    department: 'Marketing',
    description: 'Create engaging content for our social media channels. Showcase our moissanite collections, share educational content, and interact with our online community.',
    requirements: [
      'Experience managing social media for brands',
      'Strong photography and visual skills',
      'Understanding of social media analytics',
      'Excellent writing and communication skills',
      'Knowledge of jewelry or luxury market a plus'
    ]
  },
];

const Careers = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="fancy-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 shimmer-text">Join Our Team</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Build your career with a company that's transforming the fine jewelry industry with sustainable, ethical moissanite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="futuristic-panel p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Be part of a team pushing the boundaries of sustainable luxury jewelry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Collaborative Culture</h3>
                  <p className="text-sm text-muted-foreground">
                    Work alongside passionate professionals in a supportive environment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Growth Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop your skills through mentorship and continuous learning.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Employee Benefits</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy competitive compensation, health benefits, and jewelry discounts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gold-accent mt-auto">
              <p className="text-sm italic">
                "Working at Fancy Moissanite has allowed me to combine my passion for design with my commitment to sustainability. Every day brings new creative challenges and opportunities to innovate." - Sarah J., Lead Designer
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" 
              alt="Team working together" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                    <span>Ethical Sourcing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                    <span>Sustainability</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                    <span>Innovation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                    <span>Craftsmanship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="production">Production</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="animate-fade-in">
              <div className="space-y-6">
                {jobOpenings.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="animate-fade-in">
              <div className="space-y-6">
                {jobOpenings.filter(job => job.department === 'Design').map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="production" className="animate-fade-in">
              <div className="space-y-6">
                {jobOpenings.filter(job => job.department === 'Production').map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sales" className="animate-fade-in">
              <div className="space-y-6">
                {jobOpenings.filter(job => job.department === 'Sales').map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="marketing" className="animate-fade-in">
              <div className="space-y-6">
                {jobOpenings.filter(job => job.department === 'Marketing').map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="futuristic-panel p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Competitive Compensation</h3>
                <p className="text-sm text-muted-foreground">
                  Salary packages that recognize your skills and experience, with performance bonuses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Health & Wellness</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive medical, dental, and vision coverage, plus wellness program.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Professional Development</h3>
                <p className="text-sm text-muted-foreground">
                  Continued education, industry certifications, and learning stipends.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible scheduling, generous PTO, and family leave policies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Employee Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Substantial discounts on our moissanite jewelry collections.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Retirement Planning</h3>
                <p className="text-sm text-muted-foreground">
                  401(k) matching program to help secure your financial future.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Remote Work Options</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible remote work arrangements for eligible positions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gold-glass-panel">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Team Building</h3>
                <p className="text-sm text-muted-foreground">
                  Regular team events, celebrations, and community service opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Application Process</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our hiring process is designed to find the right fit for both you and our team. Here's what to expect:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold mb-2">Application Review</h3>
              <p className="text-sm text-muted-foreground">
                Submit your resume and cover letter. We'll review your qualifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold mb-2">Initial Interview</h3>
              <p className="text-sm text-muted-foreground">
                Phone or video interview with our HR team to discuss your experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold mb-2">Skills Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Role-specific assessment to evaluate your technical skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-bold mb-2">Final Interview</h3>
              <p className="text-sm text-muted-foreground">
                Meet with the team you'll be working with and tour our facilities.
              </p>
            </div>
          </div>
          
          <Button size="lg">Browse All Openings</Button>
        </div>
        
        <div className="gold-glass-panel p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See the Right Position?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. Submit your resume for future opportunities.
          </p>
          <Button variant="outline">Submit General Application</Button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  return (
    <Card className="gold-glass-panel">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">{job.title}</h3>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" /> 
                {job.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="font-medium">{job.type}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="font-medium">{job.department}</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              {job.description}
            </p>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Requirements:</h4>
              <ul className="text-sm space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button className="w-full sm:w-auto">Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

const CheckCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default Careers;
