import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import timHeadImage from "../images/tim-head.jpeg";

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
  {
    question: "How long have you been counselling professionally?",
    answer:
      "Full-time since around 1999 and part-time for a long time before that.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen bg-purple-50 text-gray-900">
      <div>
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Tim Head <span className="font-normal">Ph.D</span>{" "}
            <span className="font-normal">R.C.C.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">Welcome!</p>
        </header>

        {/* About Me Section */}
        <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Left Side: Header and Profile Image */}
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                About me
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Education
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Ph.D in
                    Developmental Psychology, U.B.C.
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed ml-6">
                    (Specialized in Family Attachment Relationships, and in
                    Developmental Psychopathology)
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Master's Degree in
                    Health Education, U.B.C.
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed ml-6">
                    (Specialized in child issues of neglect, physical and sexual
                    abuse)
                  </li>
                </ul>
              </div>

              {/* Internship and Experience Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Internship and Experience
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> One year Psychology
                    – Family Counselling Internship.
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Many years
                    experience as a family counsellor (since 2005 in private
                    practice, prior to that four with Delta Youth Services).
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> One year as a
                    Clinical Consultant to foster parents.
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Additional six
                    years in part time private practice.
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Twelve years of
                    experience working with children, youth and families in
                    group homes, family homes, and therapy office settings -
                    including work experience with autistic teens, teens on
                    probation, homeless people, and individuals with drug and
                    alcohol addictions combined with other psychiatric
                    disorders.
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Past facilitator of
                    workshops in counselling.
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
                    solve problems, and let go of suffering.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    For each of us, well-being is more than possible, and
                    achievable through understandable methods of self-care.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Couples can engage in good communication and cultivate a
                    healthy relationship if they accept that their own and their
                    partners' intentions are good (assumption of good will), and
                    assume that understanding is possible (assumption of
                    understanding) but requires patience and hard work
                    (assumption of commitment to relationship, and perhaps
                    therapy).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counselling Services Section */}
        <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
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
                <ul className="space-y-2 ml-4">
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Individual
                    counselling
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Teen counselling
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Anxiety
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Depression
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Bullying issues
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Self-esteem work
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Grief or loss
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Childhood neglect
                    and abuse issues
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Family of origin
                    work / psychotherapy
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Drug or alcohol
                    issues
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Work problems
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Road rage / Anger
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Life transitions
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Stress reduction
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Healing of trauma
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Other
                  </li>
                </ul>
              </div>

              {/* Family Counselling */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Family</h3>
                <ul className="space-y-2 ml-4">
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Family counselling
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Marriage or couples
                    counselling
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Parenting
                    challenges
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Parenting through
                    divorce
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Conflict resolution
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Communication
                    building
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Families affected
                    by mental illness
                  </li>
                  <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">·</span> Any Individual item
                    above
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Influences Section */}
        <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Left Side: Header */}
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                Influences
              </h2>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I have a general interest in experiential, non-intellectual
                therapies. In coordinating and balancing various influences I am
                guided by my Satir family and individual counselling training.
                It is highly positive and allows for considerable flexibility.
                (Satir is one of the pioneers of family therapy – see{" "}
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
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
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
        <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
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
                  className="border-l-4 border-purple-500 pl-6 pr-4 py-4 bg-white rounded-r-lg shadow-sm relative"
                >
                  <div className="absolute top-0 left-4 text-purple-300 text-6xl font-serif leading-none -mt-2">
                    "
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed italic relative z-10 mb-4">
                    {testimonial.text}
                  </p>
                  <footer className="text-right">
                    <cite className="text-base md:text-lg font-semibold text-purple-700 not-italic">
                      — {testimonial.author}
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section className="max-w-5xl mx-auto rounded-lg p-6 md:p-8 mb-8">
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
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Home / Frequently Asked Questions"
    description="Frequently asked questions about Tim Head Counselling services. Get information about appointments, costs, locations, and more for marriage, teens, and family counselling in South Surrey and Ladner, BC."
    pathname="/"
  />
);
