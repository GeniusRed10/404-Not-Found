"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Facebook } from "lucide-react"

// Carousel slides data
const slides = [
  {
    id: 1,
    title: "Site Development Process",
    description:
      "For Part 1: \nI built my site by first copying a certain website and modifying it based on my preferences. I used GitHub and the terminal to adjust and make changes, ensuring that everything was structured the way I wanted. The site was developed using React, Vite, and TailwindCSS, and deployed on Netlify. GitHub served as my version control system, allowing me to track progress and make adjustments efficiently. Throughout the process, I leveraged AI tools to guide me through the setup and troubleshoot issues effectively.",
    cta: { primary: "VIEW SITE", secondary: "LEARN MORE" },
    tag: "Part 1",
  },
  {
    id: 2,
    title: "Netlify Experience",
    description:
      "For Part 2:\nBased on my experience, I found out that Netlify platform is a great and user friendly for web app deployment. The integration with GitHub was smooth and seamless, it was easy to push changes and have them deploy automatically, which significantly accelerated my workflow. I also enjoyed the support for serverless functions, through which I could deploy backend logic without the necessity of hosting a dedicated server.\nWhat also impressed me was the _redirects file for URL redirects and proxies. Working with it was a piece of cake, and after I moved it to its proper directory, it worked great. Having netlify dev able to run locally and test serverless functions before deployment was wonderful as well because it made it so much easier to debug.\nI have some complaints, however. Error messages when functions aren't loading locally might be made more explicit—I didn't always know whether or not my function was failing due to a lost file, config issue, or port conflict. More informative logs or recommended action in the CLI would be preferable. Also, manually copying the _redirects file to the dist/ directory was a little awkward, and it would be nice if some automatic process did that as part of the build process.\nOverall, I thought Netlify was a great tool for rapidly deploying and hosting web applications, and with some refinement on error handling and documentation, it could be even greater.",
    cta: { primary: "EXPLORE NETLIFY", secondary: "LEARN MORE" },
    tag: "Part 2",
  },
  {
    id: 3,
    title: "Favorite Activities",
    description:
      "For Part 3:\nTop 5 Favorite Activities:\nDig through server logs to troubleshoot a customer's website behavior\nHelp train and onboard new support teammates\nSuggest and champion improvements to the Support team's workflow\nSubmit bug reports and potentially bug fixes\nHelp manage communications during a service outage\n\nTop 5 Least Favorite Activities:\nCreate video tutorials to help teach users a specific feature or use case\nRespond to Netlify customers on Twitter\nWork with prospective customers to explain our service and the pricing model\nWork with a customer to figure out if Netlify's service can solve a particular workflow or integration challenge they have\nDevelop a code example to share with a customer",
    cta: { primary: "VIEW DETAILS", secondary: "LEARN MORE" },
    tag: "Part 3",
  },
  {
    id: 4,
    title: "Well-Done Documentation",
    description:
      "For Part 4:\nWhy It's Well Done:\nClear and Logical Structure – The documentation is well-structured, easy for both new and experienced developers to access. There are quick start guides, full API references, and troubleshooting sections, so all of them are easily accessible.\nInteractive Code Examples – Stripe features a live API request tester where developers can play with API calls right in the browser. Such an interactive treatment promotes understanding and accelerates debugging.\nIn-Depth Coverage – From authentication to error handling, everything is covered. The guide describes basic concepts and also refers to edge cases, which is important for successful troubleshooting.\nMulti-Language Support – Code samples are given in different programming languages (JavaScript, Python, PHP, etc.), so developers can easily implement Stripe with their stack.\nWell-written and Concise – The writing is clear, free of unnecessary technical jargon, yet comprehensive. This renders it readable to both technical and non-technical users.\nDeployment and Debugging Focus – Given that the task involves debugging CI/CD pipelines and serverless functions, Stripe's documentation is an excellent example of how to provide users with debugging and deployment instructions.",
    cta: { primary: "VIEW DOCUMENTATION", secondary: "LEARN MORE" },
    tag: "Part 4",
  },
  {
    id: 5,
    title: "DNS Challenges",
    description:
      "For Part 5:\nUnderstanding the various types of DNS records and their uses is one of the biggest challenges less-technical customers have with DNS setup. Most users are confused by A records, CNAMEs, MX records, and TXT records and do not know that each has a particular function. For example, they might incorrectly attempt to set up a CNAME record in place of an A record for their top-level domain, and their site will not resolve correctly. Additionally, setting up mail-related records such as SPF, DKIM, and DMARC can be confusing and result in deliverability problems with emails or security holes. Without direct knowledge of how these records interact, customers unknowingly set up their settings incorrectly and destroy essential site or email functionality.\n\nThe other typical issue is DNS propagation delay for changes. When clients update their DNS records, they expect to see the effect instantly without realizing that DNS updates will take between a few minutes and 48 hours to propagate globally. This delay can be frustrating and confusing, particularly when troubleshooting such things as website unavailability or email responsiveness. Customers will keep rebooting configurations, thinking their original setups didn't work, which can keep resolution time increasing and add unnecessary complexity. Without knowledge of caching and propagation, they won't be able to tell if a problem is caused by an actual misconfiguration or just the normal latency of DNS updates propagating.",
    cta: { primary: "LEARN ABOUT DNS", secondary: "VIEW DETAILS" },
    tag: "Part 5",
  },
  {
    id: 6,
    title: "Support Response",
    description:
      "For Part 6:\nHello,\n\nThank you for reaching out. I see your build is breaking with the following message: \"Build script returned non-zero exit code: 2.\" and I know that can be frustrating. This is generally a build process problem, but it's a vague error, so we'll need to do some digging here.\nFollowing are a few things to investigate on your side:\nRecent Changes – Did you recently change your code, dependencies, or config files prior to this breakage?\nBuild Command & Framework – What is your framework (e.g., Next.js, Gatsby, Hugo) and what build commands have been     set up in your project settings?\nLocal Build Test – Would you happen to be able to build locally with npm run build (or whatever it is in your environment) and check if the error happens there as well?\nDependencies & Node Version – You might have version conflicts if you've just updated packages. Are you using a package-lock.json or yarn.lock to lock down things?\nEnvironment Variables – If your build is dependent on API keys or secrets, make sure that they are correctly set in your Netlify dashboard.\nAdditionally, if your project utilizes environment variables, just make sure they are properly configured. I would love to know what you will find out, and we can figure this out together!\n\nRegards,\nTech Support",
    cta: { primary: "CONTACT SUPPORT", secondary: "TROUBLESHOOT" },
    tag: "Part 6",
  },
  {
    id: 7,
    title: "Redirect Rules",
    description:
      "For Part 7: https://romeo-lagarto-assessment.netlify.app/netlify/anything\nRedirect Rule Syntax:\n/netlify/ :query https://www.google.com/search?q=:query 301!\n:query is a wildcard that represents any value following /netlify/.\n301! makes it permanent.\nProxy Redirect Setup\nProxy redirect forwards requests to an outside API or service without modifying the URL in the browser. To do this, we modified the _redirects file by the following rule:\n/netlify/:query  https://www.google.com/search?q=:query  200\nThis redirects the request to Google but retains /netlify/anything in the browser.\nThe 200 status enables content retrieval from Google without any issue.\nDeployment Process:\nWrote the _redirects file with:\necho /netlify/:query  https://www.google.com/search?q=:query  301! > _redirects\nPlaced the _redirects file in the dist/ directory:\nmove _redirects dist\\\nDeployed the site on Netlify by:\nnetlify deploy --prod\nVerified the redirection by visiting:\nhttps://romeo-lagarto-assessment.netlify.app/netlify/anything",
    cta: { primary: "TRY REDIRECT", secondary: "VIEW CODE" },
    tag: "Part 7",
  },
  {
    id: 8,
    title: "Serverless Functions",
    description:
      "For Part 8: https://romeo-lagarto-assessment.netlify.app/.netlify/functions/hello\nVerified the function at the provided Netlify URL (https://romeo-lagarto-assessment.netlify.app/.netlify/functions/hello)",
    cta: { primary: "TRY FUNCTION", secondary: "VIEW CODE" },
    tag: "Part 8",
  },
  {
    id: 9,
    title: "Security Process",
    description:
      'For Part 9:\nReview and Investigate  the Security Report\n            *Identify the Report & Obtain Information\n                       -Skim through the report to grasp the type of vulnerability (Example, XSS, SQL injection, authentication bypass).\n                       -If required, request further information from the reporter(reproduction steps, impacted endpoints, or any proof of concept)\n            *Try to Replicate the Problem\n                       -Whenever possible, replicate the reported problem in a testing environment without impacting live systems.\n                       -Verify and review internal logs and monitoring mechanisms for signs of exploitation.\n                       -Verify and review if the issue affects all users or specific instances.\n             *Evaluate Possible Impact\n                       -Determine if customer information, credentials, or key platform functionality are at risk.\n                       -Verify if recent deployments or changes might have been the cause of the vulnerability.\n\nResponse to the Reporter\n"Thank you for bringing this to our attention. Security is extremely important to Netlify, and security is always a top priority. We\'re actively investigating the issue to determine its scope and its effect. If we have additional questions, we will contact you, and we will share with you what we find out. We appreciate your responsible disclosure and thank you for helping us keep our platform secure."\nThis reaction comforts the reporter that their complaint is taken into consideration seriously without preemptively acknowledging the problem.\n\nEscalation Process\n           *Immediate Internal Reporting\n                         -Notify the relevant security and engineering groups, along with the report and initial findings.\n                         -Proceed as per the company incident response process, flagging the problem as high priority in the case of extreme risk.\n           *Coordinate Mitigation Efforts\n                         -On validation, collaborate with the engineering groups to create and validate a patch.\n                         -If needed, put in place temporary countermeasures (Example, turn off insecure functionality, raise access controls).\n            *Talk to Leadership & Stakeholders\n                         -If it is serious, alert top leadership and primary stakeholders.\n                         -Decide whether customer notification is required (Example, status page update, advisories).\n             *Monitor & Post Resolution Measures\n                         -Monitor whether the issue has been exploited.\n                         -Put in place extra security controls to avoid future occurrences of this kind.\n                         -Revise \n\nPost Answered in Forums:\n\nhttps://answers.netlify.com/t/cannot-find-module-netlify-functions-error-in-on-demand-builder/37974\nhttps://answers.netlify.com/t/redirect-proxy-set-custom-user-agent-for-the-request/143194',
    cta: { primary: "VIEW SECURITY", secondary: "LEARN MORE" },
    tag: "Part 9",
  },
]

export default function GameCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slideContainerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setCurrentSlide(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Increased time to allow reading longer content

    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Content */}
          <div className="md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="pl-4">
                <div className="mb-2 text-green-500 font-medium">{slide.tag}</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg">{slide.title}</h2>

                <div
                  ref={slideContainerRef}
                  className={`text-sm md:text-base mb-6 max-h-[250px] overflow-y-auto pr-4 custom-scrollbar text-shadow transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                >
                  {slide.description.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-2 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div
                  className={`flex gap-4 mb-8 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                >
                  <Link
                    href="#"
                    className="bg-green-600/60 hover:bg-green-700/60 text-white px-5 py-2 rounded-sm flex items-center text-sm backdrop-blur-sm"
                  >
                    {slide.cta.primary} <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-black/20 border border-white/20 hover:bg-white/10 text-white px-5 py-2 rounded-sm flex items-center text-sm backdrop-blur-sm"
                  >
                    {slide.cta.secondary} <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>

                {currentSlide === 0 && (
                  <div className="text-center md:text-left">
                    <p className="mb-2 text-sm">Follow PC Game Pass</p>
                    <Link href="#" className="inline-block">
                      <Facebook className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Visual indicator */}
          <div className="md:w-1/2 lg:w-3/5 flex items-center">
            <div className="w-full grid grid-cols-3 gap-2">
              {slides.map((_, index) => {
                const isActive = index === currentSlide
                const isPrev = index === (currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
                const isNext = index === (currentSlide === slides.length - 1 ? 0 : currentSlide + 1)

                return (
                  <div
                    key={index}
                    className={`aspect-video relative cursor-pointer overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "col-span-3 md:col-span-2 opacity-100"
                        : (isPrev || isNext)
                          ? "col-span-3 md:col-span-1 opacity-70"
                          : "hidden md:block md:col-span-1 opacity-40"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div
                      className={`absolute bottom-2 left-2 right-2 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="text-xs font-medium">{`Part ${index + 1}`}</div>
                    </div>
                    {isActive && <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 items-center">
        <button
          className="w-8 h-8 flex items-center justify-center hover:text-green-500 disabled:opacity-50"
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2 items-center flex-wrap justify-center max-w-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`rounded-full transition-all ${
                index === currentSlide ? "w-8 h-2 bg-green-500" : "w-2 h-2 bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="w-8 h-8 flex items-center justify-center hover:text-green-500 disabled:opacity-50"
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

