import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import timHeadImage from "../images/tim-head.jpg";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen bg-purple-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Tim Head <span className="font-normal">Ph.D</span>{" "}
            <span className="font-normal">R.C.C.</span>
          </h1>
        </header>

        {/* Main Title */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 ">
            About me
          </h2>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={timHeadImage}
            alt="Tim Head"
            className="rounded-lg shadow-md border-2 border-purple-300 max-w-xs w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
          {/* Bio Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bio:</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed ml-4">
              Married with one daughter.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">EDUCATION:</h3>
            <ul className="space-y-2 ml-4">
              <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">·</span> Ph.D in Developmental
                Psychology, U.B.C.
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
              INTERNSHIP AND EXPERIENCE:
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">·</span> One year Psychology –
                Family Counselling Internship.
              </li>
              <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">·</span> Many years experience
                as a family counsellor (since 2005 in private practice, prior to
                that four with Delta Youth Services).
              </li>
              <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">·</span> One year as a Clinical
                Consultant to foster parents.
              </li>
              <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">·</span> Additional six years in
                part time private practice.
              </li>
              <li className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">·</span> Twelve years of
                experience working with children, youth and families in group
                homes, family homes, and therapy office settings - including
                work experience with autistic teens, teens on probation,
                homeless people, and individuals with drug and alcohol
                addictions combined with other psychiatric disorders.
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
              PHILOSOPHY:
            </h3>
            <div className="space-y-4 ml-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Everyone, no matter how old or unhappy -- can learn, grow, solve
                problems, and let go of suffering.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                For each of us, well-being is more than possible, and achievable
                through understandable methods of self-care.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Couples can engage in good communication and cultivate a healthy
                relationship if they accept that their own and their partners'
                intentions are good (assumption of good will), and assume that
                understanding is possible (assumption of understanding) but
                requires patience and hard work (assumption of commitment to
                relationship, and perhaps therapy).
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <SEO
    title="About me"
    description="Learn about Tim Head, Ph.D, R.C.C. - A registered clinical counsellor specializing in marriage, teens, and family counselling with extensive experience in developmental psychology and health education."
    pathname="/about"
  />
);
