import * as React from "react";
import { render } from "@react-email/render";
import Layout from "../components/Layout.tsx";
import Text from "../components/Text.tsx";
import Button from "../components/Button.tsx";
import Link from "../components/Link.tsx";
import Heading from "../components/Heading.tsx";
import Hr from "../components/Hr.tsx";
import Socials from "../components/Socials.tsx";

interface EmailProps {
  ticketUrl: string;
}

export const Email = ({ ticketUrl }: EmailProps) => (
  <Layout>
    <Text>
      We are looking forward to seeing you tomorrow at the{" "}
      <strong>
        NN1 Dev Club #6: "Move Fast and Build Things: A Non-Technical Guide to
        AI Agents" by Eric Bye and "Dark Side of the Moon" by Rehan Butt
      </strong>
      . This is just a friendly reminder with mandatory info and a link to your
      ticket. Please be prepared to present your ticket at the entrance.
    </Text>
    <Text>
      🗓️ Thursday, 27/03/2025, 18:00
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

    <Button href={ticketUrl}>Open Your Ticket</Button>
    <Hr />
    <Heading>Schedule</Heading>
    <Text>
      18:00-18:30: Meet and Greet
      <br />
      18:30-19:00: "Move Fast and Build Things: A Non-Technical Guide to AI
      Agents" by Eric Bye
      <br />
      19:00-19:15: Break
      <br />
      19:15-20:00: "Dark Side of the Moon" by Rehan Butt
    </Text>
    <Hr />
    <Text>
      Looking forward to seeing you there!
      <br />
      <br />
      NN1 Dev Club Crew,
      <br />
      Pawel & Darren
    </Text>
    <Socials />
  </Layout>
);

Email.PreviewProps = {
  ticketUrl: "https://nn1.dev/events/5/123",
} as EmailProps;

const renderEmailEvent_6_2025_03_26 = async ({ ticketUrl }: EmailProps) => ({
  html: await render(<Email ticketUrl={ticketUrl} />),
  text: await render(<Email ticketUrl={ticketUrl} />, { plainText: true }),
});

export default Email;
export { renderEmailEvent_6_2025_03_26 };
