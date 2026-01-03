import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Fonts from "../components/fonts";
import timHeadImage from "../images/tim-head.jpeg";
import logoImage from "../images/logo.png";
import crescentBeachImage from "../images/crescent-beach.jpg";

const testimonials = [
  {
    text: "Dear Tim, I want to thank-you for the encouragement you have given me to explore the tools available for self-discovery available to all of us. With your guidance, intuition and ability, you were able to capture the emotion I was experiencing in our sessions and help me process and understand where it comes from. This understanding combined with learned breathing techniques and a new self-awareness in our sessions has given me the ability to accept myself with love and enthusiasm. I am now much more centered and able to live life with more freedom and peace. I am more connected with myself and know and feel that I am an integral part of my family. It has been hard work but also very rewarding and is evidenced in my relationships. Thank-you for your caring, supportive and effective therapy.",
    author: "Richard",
  },
  {
    text: "I have suffered from bouts of anxiety since I was a child. Tim has helped me examine the anxiety and give it a positive edge, like it has something to teach me, a positive intention to it. In recent years I have found that my anxiety has diminished. Tim has taught me not only to look at my anxiety in this way, but also to incorporate breath into the physical side of anxiety, which has been very helpful in easing the effects of it. Tim's skilled questioning allows me to find a different perspective on the problems in my life. In most cases, the solution to the problem is in seeing it in a completely different light. I find that Tim can lead me in the right direction with his questions to help me find the perspective I need. Tim is someone I find to be very easy to talk to so that I have been able to share (and get perspective on) the grief around my Father's death, 2 miscarriages, my marriage & children, including an addict son. I appreciate all that he has done for me.",
    author: "L.S.",
  },
  {
    text: "My name is Jim. I was referred to Tim by my family Doctor. I went to my family Doctor for a referral after my wife left me without warning for someone I thought was my friend. I am someone who believes that we have within ourselves the strength to create a better and happier life for ourselves and those around us. The means is what is usually lacking. I knew that I was not the first person on this earth who was in my situation. Tim was able to tap into my inner strength through: inner reflection, guiding words, hard truths, kind encouragement and physical exercises that enabled me to use my sadness and anger as a means to wholeness. His education and knowledge ensures that he does not lead one down some garden path where sugar coated solutions are created only to dissolve when a storm hits. He is a good listener, but also knew when I was just talking to avoid an issue. He knows how to push, but will not push you too far.",
    author: "Jim G.",
  },
  {
    text: (
      <>
        Tim is phenomenal, intuitive, compassionate, & accepting as always.
        <br />
        5/5 on punctuality, helpfulness, and knowledge
      </>
    ),
    date: "October 22, 2021",
    author: "",
  },
  {
    text: (
      <>
        Very professional, friendly, compassionate, and intelligent. I highly
        recommend Tim to everyone.
        <br />
        5/5 in punctuality, helpfulness, and knowledge
      </>
    ),
    date: "September 4, 2021",
    author: "",
  },
];

const faqs = [
  {
    question: "Where are your offices?",
    answer:
      "2657 127 St. in the South Surrey, BC – White Rock area close to Crescent Beach",
  },
  {
    question: "How much does it cost?",
    answer: "$120 for a session lasting an hour to an hour and a quarter",
  },
  {
    question: "How do I make an appointment?",
    answer: (
      <>
        By phone{" "}
        <a
          href="tel:604-728-5207"
          className="text-purple-600 hover:text-purple-800 underline"
        >
          604-728-5207
        </a>{" "}
        or email{" "}
        <a
          href="mailto:timheadcounselling@gmail.com"
          className="text-purple-600 hover:text-purple-800 underline"
        >
          timheadcounselling@gmail.com
        </a>
      </>
    ),
  },
  {
    question: "How long does it take to get an appointment?",
    answer:
      "I can usually see you fairly quickly, the next day if I have a cancellation.",
  },
  {
    question: "Is there any coverage?",
    answer:
      "I am approved as a therapist by the B.C. Crime Victim Assistance Program, which provides coverage for some children and adults. Other possible funding through Employee Assistance Plans offered by employers or unions, eg, BCGEU.",
  },
  {
    question:
      "Do you specialize in working with men or women, children or teens?",
    answer:
      "I'm equally comfortable with men and women and work with them in about equal numbers. I am happy to see your teen; I recommend acting quickly as soon as they say they are willing.",
  },
  {
    question: "What does R.C.C. stand for?",
    answer: (
      <>
        Registered Clinical Counsellor. It means I am registered with The B.C.
        Association of Clinical Counsellors{" "}
        <a
          href="http://www.bc-counsellors.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 underline"
        >
          www.bc-counsellors.org/
        </a>{" "}
        They provide and demand a standard of professional and ethical behavior,
        provide ongoing professional updates, and investigate complaints,
        through the courts if necessary.
      </>
    ),
  },
  {
    question: "Have you had any complaints?",
    answer:
      "I encourage open and honest feedback about all feelings including complaints. I know I am not perfect, and in addition that the therapeutic process can generate some sensitive feelings. I have not received any formal complaints since becoming a member of BCACC or at any prior time.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-purple-50 text-gray-900">
        {/* Hero Banner */}
        <div
          id="banner1"
          className="flex flex-col justify-end bg-cover bg-center bg-no-repeat px-6 md:px-16 lg:px-24 xl:px-[100px] py-8 md:py-12"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5)), url(${crescentBeachImage})`,
            height: "80vh",
          }}
        >
          <div
            className="px-6 py-8 -mx-6 md:-mx-16 lg:-mx-24 xl:-mx-[100px] -mb-8 md:-mb-12"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
            }}
          >
            <h1 className="text-white font-bold text-5xl md:text-5xl lg:text-6xl mb-2 drop-shadow-lg">
              Phoenix Counselling
            </h1>
            <span className="font-heading font-semibold text-white text-3xl drop-shadow-lg">
              Tim Head <span className="font-normal text-2xl">Ph.D R.C.C.</span>
            </span>
          </div>
        </div>

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3">
                <img
                  src={logoImage}
                  alt="Phoenix Counselling Logo"
                  className="h-10 md:h-12 w-auto"
                />
                <span className="text-lg md:text-xl font-semibold text-gray-900">
                  Phoenix Counselling
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("about-me")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-base font-medium"
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("counselling-services")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-base font-medium"
                >
                  Counselling Services
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-base font-medium"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-base font-medium"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact-me")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-base font-medium"
                >
                  Contact Me
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-purple-600 transition-colors text-base font-medium"
                aria-label="Toggle menu"
              >
                Links
              </button>
            </div>
          </div>

          {/* Mobile Fullscreen Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white md:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <button
                  onClick={() => scrollToSection("about-me")}
                  className="text-2xl font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("counselling-services")}
                  className="text-2xl font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Counselling Services
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-2xl font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-2xl font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact-me")}
                  className="text-2xl font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 text-lg text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </header>

        <div>
          {/* Introduction Section */}
          <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Side: Header */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                  Introduction
                </h2>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Originally from Ontario I moved to the Lower Mainland in 1973
                  (having heard that the flowers come out in February). I did
                  all my post-secondary education here, worked in a variety of
                  social service agencies and opened up a private practice in
                  2005. I have a general interest in experiential,
                  non-intellectual therapies. In addition to reducing suffering
                  and increasing satisfaction I find experiential work enables
                  deeper healing.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  In integrating my various influences I am guided by my Satir
                  family and individual counselling training. It is highly
                  positive and allows for considerable flexibility. (Satir is
                  one of the pioneers of family therapy – including the inner
                  psychological work now called internal family systems work,
                  see{" "}
                  <a
                    href="http://www.satirpacific.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    www.satirpacific.org
                  </a>
                  ). Other influences include attachment theory and research,
                  Option counselling, somatic experiencing and breath work, and
                  the Socratic dialogue.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  I also offer clients the opportunity to improve their
                  relationships with a universal part of themselves called the
                  critic / judge. Our sessions can help you sharply reduce
                  negative criticism and judgement, making your relationships
                  more satisfying and giving more motivation, energy and clarity
                  for your goals and plans and living. Whether you are looking
                  for help with anxiety and / or depression, looking for some
                  help with a relationship, or are just hard on yourself this
                  work can be very worthwhile.
                </p>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section
            id="about-me"
            className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8 scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Side: Header and Profile Image */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                  About Me
                </h2>
                <img
                  src={timHeadImage}
                  alt="Tim Head"
                  className="rounded-lg shadow-md border-2 border-purple-300 max-w-xs w-full h-auto"
                />
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 space-y-6">
                {/* Education Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Education
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Ph.D in Developmental Psychology, U.B.C.{" "}
                      <span className="text-base md:text-lg text-gray-500">
                        (Specialized in Family Attachment Relationships, and in
                        Developmental Psychopathology)
                      </span>
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Master's Degree in Health Education, U.B.C.{" "}
                      <span className="text-base md:text-lg text-gray-500">
                        (Specialized in child issues of neglect, physical and
                        sexual abuse)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Internship and Experience Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Internship and Experience
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      One year Psychology – Family Counselling Internship.
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Many years experience as a family counsellor (since 2005
                      in private practice, prior to that four with Delta Youth
                      Services).
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      One year as a Clinical Consultant to foster parents.
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Additional six years in part time private practice.
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Twelve years of experience working with children, youth
                      and families in group homes, family homes, and therapy
                      office settings - including work experience with autistic
                      teens, teens on probation, homeless people, and
                      individuals with drug and alcohol addictions combined with
                      other psychiatric disorders.
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Past facilitator of workshops in counselling.
                    </li>
                  </ul>
                </div>

                {/* Philosophy Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Philosophy
                  </h3>
                  <div className="space-y-4 ml-4">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Everyone, no matter how old or unhappy -- can learn, grow,
                      solve problems, let go of suffering, and heal.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      For each of us, well-being is more than possible, and
                      achievable through understandable methods of self-care.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Couples can engage in good communication and cultivate a
                      healthy relationship if they accept that their own and
                      their partners' intentions are good (assumption of good
                      will), and assume that understanding is possible
                      (assumption of understanding) but requires patience and
                      hard work (assumption of commitment to relationship, and
                      perhaps therapy).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Counselling Services Section */}
          <section
            id="counselling-services"
            className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8 scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Side: Header */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                  Counselling Services
                </h2>
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  In general I work with clients at multiple levels according to
                  what best fits with each individual or family – emotional and
                  psychological, breath and body (internal sensation and other
                  experience), and spiritual.
                </p>

                {/* Individual Counselling */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Individual
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Individual counselling
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Teen counselling
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Anxiety
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Depression
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Bullying issues
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Self-esteem work
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Grief or loss
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Childhood neglect and abuse issues
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Family of origin work
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Critic / Judge work
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Drug or alcohol issues
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Work problems
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Road rage / Anger
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Life transitions
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Stress reduction
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Healing of trauma
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Other
                    </li>
                  </ul>
                </div>

                {/* Family Counselling */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Family
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Family counselling
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Marriage or couples counselling
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Parenting challenges
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Parenting through divorce
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Conflict resolution
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Communication building
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Families affected by mental illness
                    </li>
                    <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Any Individual item above
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="faqs"
            className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8 scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Side: Header */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                  Frequently Asked Questions
                </h2>
              </div>

              {/* Right Side: FAQ Items */}
              <div className="flex-1 space-y-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-purple-200 pb-6 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8 scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Side: Header */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                  Testimonials
                </h2>
              </div>

              {/* Right Side: Testimonials */}
              <div className="flex-1 space-y-8">
                {testimonials.map((testimonial, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 border-purple-500 pl-6 pr-4 pb-4 pt-8 bg-white rounded-r-lg shadow-sm relative"
                  >
                    <div className="absolute top-2 left-4 text-purple-300 text-6xl font-serif leading-none -mt-2">
                      "
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed relative z-10 mb-4">
                      {testimonial.text}
                    </p>
                    {testimonial.author && (
                      <footer className="text-right">
                        <cite className="text-base md:text-lg font-semibold text-purple-700 not-italic">
                          — {testimonial.author}
                        </cite>
                      </footer>
                    )}
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Me Section */}
          <section
            id="contact-me"
            className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8 scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Side: Header */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                  Contact Me
                </h2>
              </div>

              {/* Right Side: Contact Information */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <div className="text-base md:text-lg font-semibold text-gray-900">
                    Email
                  </div>
                  <div className="text-base md:text-lg text-gray-700">
                    <a
                      href="mailto:timheadcounselling@gmail.com"
                      className="text-purple-600 hover:text-purple-800 underline"
                    >
                      timheadcounselling@gmail.com
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-base md:text-lg font-semibold text-gray-900">
                    Phone
                  </div>
                  <div className="text-base md:text-lg text-gray-700">
                    <a
                      href="tel:604-728-5207"
                      className="text-purple-600 hover:text-purple-800 underline"
                    >
                      604-728-5207
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-base md:text-lg font-semibold text-gray-900">
                    Address
                  </div>
                  <div className="text-base md:text-lg text-gray-700">
                    2657 127 St. in the South Surrey, BC – White Rock area close
                    to Crescent Beach
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-white border-t border-purple-200 py-6 mt-8 text-center text-gray-700 text-xs">
        © {new Date().getFullYear()} developed by{" "}
        <a
          href="https://github.com/matinlotfali"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-800 font-medium"
        >
          Iman Mahmoudinasab
        </a>
        <span className="mx-2">|</span>
        Powered by GitHub Pages
      </footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <Fonts />
    <SEO
      title="Home / Frequently Asked Questions"
      description="Frequently asked questions about Tim Head Counselling services. Get information about appointments, costs, locations, and more for marriage, teens, and family counselling in South Surrey and Ladner, BC."
      pathname="/"
    />
  </>
);
