import type { NextPage } from "next";
import Image from "next/image";
import SecondaryButton from "../components/buttons/SecondaryButton";
import HeadTag from "../components/HeadTag";
import HomeCard from "../components/Home/HomeCard";
import HomeCircleItem from "../components/Home/HomeCircleItem";
import { homeCardList } from "../utils/HomeCardList";
import { healthConcerns } from "../utils/HomeHealthConcers";
import homeBannerImage from "../public/images/doctors-home.png";

const Home: NextPage = () => {
  return (
    <div>
      <HeadTag />
      <div className="container my-10">
        <div className="bg-gradient-to-br from-sky-600 to-blue-300 h-40vh w-full sm:rounded-lg grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex justify-center text-left px-10 py-2">
            <div className="flex flex-col space-y-2">
              <h2 className="text-accentContrast">
                Choose the experts in end to end consultation.
              </h2>
              <h1 className="text-accentContrast text-4xl md:text-5xl font-bold">
                You are in safe hands
              </h1>
              <SecondaryButton
                label="Know More"
                className="w-50 !mt-6 text-accentContrast !hover:bg-black-500"
                to="/dashboard"
              />
            </div>
          </div>
          <div className="relative h-full hidden md:block">
            <Image
              src={homeBannerImage}
              layout="fill"
              objectFit="contain"
              alt="Doctors image"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="container px-5">
        <div className="py-10">
          <h2 className="text-4xl font-bold">
            What would you like to do today ?
          </h2>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {homeCardList.map((card, index) => (
              <HomeCard
                key={index}
                mainTitle={card.mainTitle}
                subTitle={card.subTitle}
                image={card.image}
                link={card.link}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container px-5">
        <div className="py-10">
          <h2 className="text-4xl font-bold">
            Consult top doctors online for any health concern.
          </h2>
          <p className="py-5">
            Private online consultations with verified doctors in all
            specialists
          </p>
          <div className="flex space-x-10 lg:space-x-0 w-full overflow-x-scroll overflow-hidden justify-between py-10">
            {healthConcerns.map((concern, index) => (
              <HomeCircleItem
                title={concern.title}
                image={concern.image}
                key={index}
                link={concern.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
