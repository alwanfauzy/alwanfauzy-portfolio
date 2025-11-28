import Avatar from "@/components/avatar";
import Social from "@/components/social";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="mb-4">
              Hello I'm <br />
              <span className="text-accent">Alwan Fauzi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in building scalable, efficient software that
              delivers a seamless, cross-platform experience everywhere.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FaDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo Section */}
          <div className="order-1 mb-8 xl:mb-0">
            <Avatar />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
