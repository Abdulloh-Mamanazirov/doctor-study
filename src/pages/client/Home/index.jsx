import { About, Partners, Showcase, Speakers } from "./sections";
import { Countdown } from "../../../components";

const index = () => {
  return (
    <div>
      <div>
        <Showcase />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Speakers />
      </div>
      <div>
        <Partners />
      </div>
      <div className="mt-16">
        <Countdown
          startDate={new Date("2024-12-31T00:00:00")}
          title={
            "Rhinitis and sinusitis: multicomponent drugs with a low dose of active ingredients to help the practicing physician"
          }
          timezone={"Moscow, Russia"}
        />
      </div>
    </div>
  );
};

export default index;
