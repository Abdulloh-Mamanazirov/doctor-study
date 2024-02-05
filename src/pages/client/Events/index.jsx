import { Checkbox, Radio } from "@mantine/core";
import { Countdown } from "../../../components";
import { Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function EventCard() {
  return (
    <Card shadow="sm" padding="xl" component={Link} to={crypto.randomUUID()}>
      <Card.Section>
        <Image
          src="https://www.shutterstock.com/image-vector/medical-conference-clinic-group-meeting-260nw-1721618806.jpg"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md" lineClamp={3}>
        Rhinitis and sinusitis: multicomponent drugs with a low dose of active
        ingredients to help the practicing physician.
      </Text>

      <Text mt="xs" c="dimmed" size="sm" lineClamp={6}>
        Please click anywhere on this card to claim your reward, this is not a
        fraud, trust us. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Aperiam facere magnam esse in pariatur, minima sit ex. Qui, minima
        accusamus!
      </Text>
    </Card>
  );
}

const index = () => {
  return (
    <section>
      <Countdown
        startDate={new Date("2024-12-31T00:00:00")}
        title={
          "Rhinitis and sinusitis: multicomponent drugs with a low dose of active ingredients to help the practicing physician"
        }
        timezone={"Moscow, Russia"}
      />
      <div className="grid sm:grid-cols-[20%,1fr]">
        <div className="sm:min-h-screen px-4 mb-5 sm:mb-0">
          {/* cities */}
          <details className="block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Cities</summary>
            <Checkbox.Group className="ml-3">
              <Checkbox value={"Moscow"} label="Moscow" mb={5} />
              <Checkbox
                value={"Sant peterburg"}
                label="Sant Peterburg"
                mb={5}
              />
              <Checkbox value={"Kazan"} label="Kazan" mb={5} />
              <Checkbox value={"Omsk"} label="Omsk" mb={5} />
              <Checkbox value={"Permian"} label="Permian" mb={5} />
              <Checkbox value={"Ryazan"} label="Ryazan" mb={5} />
              <Checkbox value={"Saratov"} label="Saratov" mb={5} />
              <Checkbox value={"Voronezh"} label="Voronezh" mb={5} />
            </Checkbox.Group>
          </details>
          <div className="hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Cities</h4>
            <Checkbox.Group className="ml-3">
              <Checkbox value={"Moscow"} label="Moscow" mb={5} />
              <Checkbox
                value={"Sant peterburg"}
                label="Sant Peterburg"
                mb={5}
              />
              <Checkbox value={"Kazan"} label="Kazan" mb={5} />
              <Checkbox value={"Omsk"} label="Omsk" mb={5} />
              <Checkbox value={"Permian"} label="Permian" mb={5} />
              <Checkbox value={"Ryazan"} label="Ryazan" mb={5} />
              <Checkbox value={"Saratov"} label="Saratov" mb={5} />
              <Checkbox value={"Voronezh"} label="Voronezh" mb={5} />
            </Checkbox.Group>
          </div>
          {/* fields */}
          <details className="mt-5 block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Fields</summary>
            <Checkbox.Group className="ml-3">
              <Checkbox
                value={"Allergology and immunology"}
                label="Allergology and immunology"
                mb={5}
              />
              <Checkbox
                value={"Dermatovenereology"}
                label="Dermatovenereology"
                mb={5}
              />
              <Checkbox
                value={"Infectious diseases"}
                label="Infectious diseases"
                mb={5}
              />
              <Checkbox value={"Cardiology"} label="Cardiology" mb={5} />
              <Checkbox value={"Neurology"} label="Neurology" mb={5} />
              <Checkbox
                value={"Otorhinolaryngology"}
                label="Otorhinolaryngology"
                mb={5}
              />
              <Checkbox value={"Ophthalmology"} label="Ophthalmology" mb={5} />
              <Checkbox value={"Pediatrics"} label="Pediatrics" mb={5} />
              <Checkbox value={"Therapy"} label="Therapy" mb={5} />
            </Checkbox.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Fields</h4>
            <Checkbox.Group className="ml-3">
              <Checkbox
                value={"Allergology and immunology"}
                label="Allergology and immunology"
                mb={5}
              />
              <Checkbox
                value={"Dermatovenereology"}
                label="Dermatovenereology"
                mb={5}
              />
              <Checkbox
                value={"Infectious diseases"}
                label="Infectious diseases"
                mb={5}
              />
              <Checkbox value={"Cardiology"} label="Cardiology" mb={5} />
              <Checkbox value={"Neurology"} label="Neurology" mb={5} />
              <Checkbox
                value={"Otorhinolaryngology"}
                label="Otorhinolaryngology"
                mb={5}
              />
              <Checkbox value={"Ophthalmology"} label="Ophthalmology" mb={5} />
              <Checkbox value={"Pediatrics"} label="Pediatrics" mb={5} />
              <Checkbox value={"Therapy"} label="Therapy" mb={5} />
            </Checkbox.Group>
          </div>
          {/* format */}
          <details className="mt-5 block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Format</summary>
            <Radio.Group>
              <Radio value={"Online"} label="Online" mb={5} />
              <Radio value={"Hybrid"} label="Hybrid" mb={5} />
            </Radio.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Format</h4>
            <Radio.Group>
              <Radio value={"Online"} label="Online" mb={5} />
              <Radio value={"Hybrid"} label="Hybrid" mb={5} />
            </Radio.Group>
          </div>
          {/* speakers */}
          <details className="mt-5 block sm:hidden pb-1 border-b border-gray-400">
            <summary className="text-lg font-bold mb-2">Speakers</summary>
            <Checkbox.Group className="ml-3">
              <Checkbox value={"Abuova G.N."} label="Abuova G.N." mb={5} />
              <Checkbox value={"Ageeva K.A."} label="Ageeva K.A." mb={5} />
              <Checkbox
                value={"Akarachkova E.S."}
                label="Akarachkova E.S."
                mb={5}
              />
              <Checkbox
                value={"Alekseeva L.I."}
                label="Alekseeva L.I."
                mb={5}
              />
              <Checkbox value={"Anokhin V.A."} label="Anokhin V.A." mb={5} />
              <Checkbox
                value={"Harutyunyan L.L."}
                label="Harutyunyan L.L."
                mb={5}
              />
              <Checkbox
                value={"Akhmadeeva L.R."}
                label="Akhmadeeva L.R."
                mb={5}
              />
              <Checkbox
                value={"Akhmedzhanova Z.I."}
                label="Akhmedzhanova Z.I."
                mb={5}
              />
              <Checkbox
                value={"Akhmedova N.Sh."}
                label="Akhmedova N.Sh."
                mb={5}
              />
              <Checkbox value={"Ashirova M.Z."} label="Ashirova M.Z." mb={5} />
              <Checkbox value={"Babak S.L."} label="Babak S.L." mb={5} />
              <Checkbox value={"Babik R.K."} label="Babik R.K." mb={5} />
            </Checkbox.Group>
          </details>
          <div className="mt-10 hidden sm:block">
            <h4 className="text-lg font-bold mb-2">Speakers</h4>
            <Checkbox.Group className="ml-3">
              <Checkbox value={"Abuova G.N."} label="Abuova G.N." mb={5} />
              <Checkbox value={"Ageeva K.A."} label="Ageeva K.A." mb={5} />
              <Checkbox
                value={"Akarachkova E.S."}
                label="Akarachkova E.S."
                mb={5}
              />
              <Checkbox
                value={"Alekseeva L.I."}
                label="Alekseeva L.I."
                mb={5}
              />
              <Checkbox value={"Anokhin V.A."} label="Anokhin V.A." mb={5} />
              <Checkbox
                value={"Harutyunyan L.L."}
                label="Harutyunyan L.L."
                mb={5}
              />
              <Checkbox
                value={"Akhmadeeva L.R."}
                label="Akhmadeeva L.R."
                mb={5}
              />
              <Checkbox
                value={"Akhmedzhanova Z.I."}
                label="Akhmedzhanova Z.I."
                mb={5}
              />
              <Checkbox
                value={"Akhmedova N.Sh."}
                label="Akhmedova N.Sh."
                mb={5}
              />
              <Checkbox value={"Ashirova M.Z."} label="Ashirova M.Z." mb={5} />
              <Checkbox value={"Babak S.L."} label="Babak S.L." mb={5} />
              <Checkbox value={"Babik R.K."} label="Babik R.K." mb={5} />
            </Checkbox.Group>
          </div>
        </div>
        <div className="min-h-screen px-2 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {new Array(12).fill(null).map((_, ind) => (
            <EventCard key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
