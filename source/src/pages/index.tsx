import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";

const faqs = [
  {
    question: "Where are your offices?",
    answer:
      "2657 127 St. in the South Surrey, BC – White Rock area close to Crescent Beach, and, Suite 105, 5007 47A Ave in downtown Ladner, B.C",
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
          className="text-blue-600 hover:text-blue-800 underline"
        >
          604-728-5207
        </a>{" "}
        or email{" "}
        <a
          href="mailto:timheadcounselling@gmail.com"
          className="text-blue-600 hover:text-blue-800 underline"
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
          className="text-blue-600 hover:text-blue-800 underline"
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
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Tim Head <span className="font-normal">Ph.D</span>{" "}
            <span className="font-normal">R.C.C.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4">Welcome!</p>
        </header>

        {/* Main Title */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            Tim Head Marriage Teens Family Counselling Therapist
          </h2>
          <nav className="text-sm text-gray-600 text-center mb-6">
            Home / Frequently Asked Questions
          </nav>
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
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
        </section>

        {/* End marker */}
        <div className="text-center mt-8 text-gray-500 text-sm">End</div>
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
