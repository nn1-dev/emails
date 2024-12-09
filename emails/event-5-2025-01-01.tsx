import * as React from "react";
import { render } from "@react-email/render";
import Layout from "../components/Layout.tsx";
import Text from "../components/Text.tsx";
import Button from "../components/Button.tsx";
import Link from "../components/Link.tsx";
import Heading from "../components/Heading.tsx";
import Socials from "../components/Socials.tsx";

export const Email = () => (
  <Layout>
    <Text>Lorem ipsum dolor sit amet...</Text>
    <Text>
      🗓️ Thursday, 30/01/2025, 18:00
      <br />
      📍{" "}
      <Link href="https://maps.app.goo.gl/q7RFeDME5cLZWPFA7">
        Vulcan Works, Northampton, NN1 1EW
      </Link>
      <br />
      🅿️{" "}
      <Link href="https://maps.app.goo.gl/fk3jpaPLSLGrHNmH6">
        St. John's Multi Storey Car Park
      </Link>
    </Text>

    <Button href="https://nn1.dev/events/5">Go to events page</Button>
    <Heading>Schedule</Heading>
    <Text>
      18:00-18:30: Meet and Greet
      <br />
      18:30-20:00: Rundown of side projects by Northamptonshire geeks
    </Text>
    <Text>We are looking forward to seeing you 😘</Text>
    <Text>
      NN1 Dev Club Crew,
      <br />
      Pawel & Darren
    </Text>
    <Socials />
  </Layout>
);

const renderEmailEvent_5_2025_01_01 = async () => ({
  html: await render(<Email />),
  text: await render(<Email />, { plainText: true }),
});

export default Email;
export { renderEmailEvent_5_2025_01_01 };
