"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import VideoBackground from "@/components/video-background"
import Navbar from "@/components/navbar"
import SlideContent from "@/components/slide-content"

// Content for each slide
const slides = [
  {
    id: 1,
    title: "Site Development Process",
    content: `For Part 1: 
I built my site by first copying a certain website and modifying it based on my preferences. I used GitHub and the terminal to adjust and make changes, ensuring that everything was structured the way I wanted. The site was developed using React, Vite, and TailwindCSS, and deployed on Netlify. GitHub served as my version control system, allowing me to track progress and make adjustments efficiently. Throughout the process, I leveraged AI tools to guide me through the setup and troubleshoot issues effectively.`,
  },
  {
    id: 2,
    title: "Netlify Experience",
    content: `For Part 2:
Based on my experience, I found out that Netlify platform is a great and user friendly for web app deployment. The integration with GitHub was smooth and seamless, it was easy to push changes and have them deploy automatically, which significantly accelerated my workflow. I also enjoyed the support for serverless functions, through which I could deploy backend logic without the necessity of hosting a dedicated server.
What also impressed me was the _redirects file for URL redirects and proxies. Working with it was a piece of cake, and after I moved it to its proper directory, it worked great. Having netlify dev able to run locally and test serverless functions before deployment was wonderful as well because it made it so much easier to debug.
I have some complaints, however. Error messages when functions aren't loading locally might be made more explicit—I didn't always know whether or not my function was failing due to a lost file, config issue, or port conflict. More informative logs or recommended action in the CLI would be preferable. Also, manually copying the _redirects file to the dist/ directory was a little awkward, and it would be nice if some automatic process did that as part of the build process.
Overall, I thought Netlify was a great tool for rapidly deploying and hosting web applications, and with some refinement on error handling and documentation, it could be even greater.`,
  },
  {
    id: 3,
    title: "Favorite Activities",
    content: `For Part 3:
Top 5 Favorite Activities:
Dig through server logs to troubleshoot a customer's website behavior
Help train and onboard new support teammates
Suggest and champion improvements to the Support team's workflow
Submit bug reports and potentially bug fixes
Help manage communications during a service outage

Top 5 Least Favorite Activities:
Create video tutorials to help teach users a specific feature or use case
Respond to Netlify customers on Twitter
Work with prospective customers to explain our service and the pricing model
Work with a customer to figure out if Netlify's service can solve a particular workflow or integration challenge they have
Develop a code example to share with a customer`,
  },
  {
    id: 4,
    title: "Well-Done Documentation",
    content: `For Part 4:
Why It's Well Done:
Clear and Logical Structure – The documentation is well-structured, easy for both new and experienced developers to access. There are quick start guides, full API references, and troubleshooting sections, so all of them are easily accessible.
Interactive Code Examples – Stripe features a live API request tester where developers can play with API calls right in the browser. Such an interactive treatment promotes understanding and accelerates debugging.
In-Depth Coverage – From authentication to error handling, everything is covered. The guide describes basic concepts and also refers to edge cases, which is important for successful troubleshooting.
Multi-Language Support – Code samples are given in different programming languages (JavaScript, Python, PHP, etc.), so developers can easily implement Stripe with their stack.
Well-written and Concise – The writing is clear, free of unnecessary technical jargon, yet comprehensive. This renders it readable to both technical and non-technical users.
Deployment and Debugging Focus – Given that the task involves debugging CI/CD pipelines and serverless functions, Stripe's documentation is an excellent example of how to provide users with debugging and deployment instructions.`,
  },
  {
    id: 5,
    title: "DNS Challenges",
    content: `For Part 5:
Understanding the various types of DNS records and their uses is one of the biggest challenges less-technical customers have with DNS setup. Most users are confused by A records, CNAMEs, MX records, and TXT records and do not know that each has a particular function. For example, they might incorrectly attempt to set up a CNAME record in place of an A record for their top-level domain, and their site will not resolve correctly. Additionally, setting up mail-related records such as SPF, DKIM, and DMARC can be confusing and result in deliverability problems with emails or security holes. Without direct knowledge of how these records interact, customers unknowingly set up their settings incorrectly and destroy essential site or email functionality.

The other typical issue is DNS propagation delay for changes. When clients update their DNS records, they expect to see the effect instantly without realizing that DNS updates will take between a few minutes and 48 hours to propagate globally. This delay can be frustrating and confusing, particularly when troubleshooting such things as website unavailability or email responsiveness. Customers will keep rebooting configurations, thinking their original setups didn't work, which can keep resolution time increasing and add unnecessary complexity. Without knowledge of caching and propagation, they won't be able to tell if a problem is caused by an actual misconfiguration or just the normal latency of DNS updates propagating.`,
  },
  {
    id: 6,
    title: "Support Response",
    content: `For Part 6:
Hello,

Thank you for reaching out. I see your build is breaking with the following message: "Build script returned non-zero exit code: 2." and I know that can be frustrating. This is generally a build process problem, but it's a vague error, so we'll need to do some digging here.
Following are a few things to investigate on your side:
Recent Changes – Did you recently change your code, dependencies, or config files prior to this breakage?
Build Command & Framework – What is your framework (e.g., Next.js, Gatsby, Hugo) and what build commands have been     set up in your project settings?
Local Build Test – Would you happen to be able to build locally with npm run build (or whatever it is in your environment) and check if the error happens there as well?
Dependencies & Node Version – You might have version conflicts if you've just updated packages. Are you using a package-lock.json or yarn.lock to lock down things?
Environment Variables – If your build is dependent on API keys or secrets, make sure that they are correctly set in your Netlify dashboard.
Additionally, if your project utilizes environment variables, just make sure they are properly configured. I would love to know what you will find out, and we can figure this out together!

Regards,
Tech Support`,
  },
  {
    id: 7,
    title: "Redirect Rules",
    content: `For Part 7: https://romeo-lagarto-assessment.netlify.app/netlify/anything
Redirect Rule Syntax:
/netlify/ :query https://www.google.com/search?q=:query 301!
:query is a wildcard that represents any value following /netlify/.
301! makes it permanent.
Proxy Redirect Setup
Proxy redirect forwards requests to an outside API or service without modifying the URL in the browser. To do this, we modified the _redirects file by the following rule:
/netlify/:query  https://www.google.com/search?q=:query  200
This redirects the request to Google but retains /netlify/anything in the browser.
The 200 status enables content retrieval from Google without any issue.
Deployment Process:
Wrote the _redirects file with:
echo /netlify/:query  https://www.google.com/search?q=:query  301! > _redirects
Placed the _redirects file in the dist/ directory:
move _redirects dist\\
Deployed the site on Netlify by:
netlify deploy --prod
Verified the redirection by visiting:
https://romeo-lagarto-assessment.netlify.app/netlify/anything`,
  },
  {
    id: 8,
    title: "Serverless Functions",
    content: `For Part 8: https://romeo-lagarto-assessment.netlify.app/.netlify/functions/hello
Verified the function at the provided Netlify URL (https://romeo-lagarto-assessment.netlify.app/.netlify/functions/hello)`,
  },
  {
    id: 9,
    title: "Security Process",
    content: `For Part 9:
Review and Investigate the Security Report
            *Identify the Report & Obtain Information
                       -Skim through the report to grasp the type of vulnerability (Example, XSS, SQL injection, authentication bypass).
                       -If required, request further information from the reporter(reproduction steps, impacted endpoints, or any proof of concept)
            *Try to Replicate the Problem
                       -Whenever possible, replicate the reported problem in a testing environment without impacting live systems.
                       -Verify and review internal logs and monitoring mechanisms for signs of exploitation.
                       -Verify and review if the issue affects all users or specific instances.
             *Evaluate Possible Impact
                       -Determine if customer information, credentials, or key platform functionality are at risk.
                       -Verify if recent deployments or changes might have been the cause of the vulnerability.

Response to the Reporter
"Thank you for bringing this to our attention. Security is extremely important to Netlify, and security is always a top priority. We're actively investigating the issue to determine its scope and its effect. If we have additional questions, we will contact you, and we will share with you what we find out. We appreciate your responsible disclosure and thank you for helping us keep our platform secure."
This reaction comforts the reporter that their complaint is taken into consideration seriously without preemptively acknowledging the problem.

Escalation Process
           *Immediate Internal Reporting
                         -Notify the relevant security and engineering groups, along with the report and initial findings.
                         -Proceed as per the company incident response process, flagging the problem as high priority in the case of extreme risk.
           *Coordinate Mitigation Efforts
                         -On validation, collaborate with the engineering groups to create and validate a patch.
                         -If needed, put in place temporary countermeasures (Example, turn off insecure functionality, raise access controls).
            *Talk to Leadership & Stakeholders
                         -If it is serious, alert top leadership and primary stakeholders.
                         -Decide whether customer notification is required (Example, status page update, advisories).
             *Monitor & Post Resolution Measures
                         -Monitor whether the issue has been exploited.
                         -Put in place extra security controls to avoid future occurrences of this kind.
                         -Revise`,
  },
  {
    id: 10,
    title: "Forum Contributions",
    content: `Part 10:
Post Answered in Forums:

https://answers.netlify.com/t/cannot-find-module-netlify-functions-error-in-on-demand-builder/37974
https://answers.netlify.com/t/redirect-proxy-set-custom-user-agent-for-the-request/143194`,
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const totalSlides = slides.length


  // Manual navigation
  const goToNextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const goToPrevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  }

  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            {/* Slide Counter */}
            <div className="text-center mb-6">
              <div className="inline-block bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
            </div>

            {/* Slides */}
            <div className="relative h-[70vh] md:h-[60vh] overflow-hidden bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 p-6 md:p-8"
                >
                  <SlideContent title={slides[currentSlide].title} content={slides[currentSlide].content} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between mt-6">
              <button
                onClick={goToPrevSlide}
                className="bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:bg-black/50 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={goToNextSlide}
                className="bg-black/30 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:bg-black/50 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-white/60 text-sm">
          <div className="container mx-auto">
            <p>
              <a
                href="https://romeo-lagarto-assessment.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                View Original Site
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

