import * as React from "react";
import { render } from "@react-email/render";
import Button from "../components/Button.tsx";
import Hr from "../components/Hr.tsx";
import Link from "../components/Link.tsx";
import Text from "../components/Text.tsx";
import Layout from "../components/Layout.tsx";
import Socials from "../components/Socials.tsx";
import Heading from "../components/Heading.tsx";

interface EmailProps {
  unsubscribeUrl: string;
}

export const Email = ({ unsubscribeUrl }: EmailProps) => (
  <Layout>
    <Heading>
      NN1 Dev Club #9: "The MCP Revolution: Building Your Personal AI Assistant
      - From Theory to Jarvis" by Emmanuella Okorie and "Effective Partnerships
      Between Developers and Product Teams" by Kiran Patel
    </Heading>
    <Text>
      Our 9th meetup is coming to your town on 27/11/2025. This one is a perfect
      combo of low-level geekiness and some soft skills and product knowledge.
      Emmanuella Okorie is going to introduce us to the high-level theory of
      MCPs, show some practical examples and lay the groundwork for building
      your very own AI assistant. Kiran Patel will be giving a talk about
      effective collaboration between developers and the product team. Two
      fantastic talks!
    </Text>
    <Text>
      As always, entry is free and everyone is welcome! We'll provide some
      drinks and snacks on the house. Please note that registration is required
      as we have limited capacity (100 tickets only), so do book your spot
      early. We're looking forward to seeing you there 🤗
    </Text>
    <Text>
      🗓️ Thursday, 27/11/2025, 18:00
      <br />
      📍 Vulcan Works, Northampton, NN1 1EW
      <br />
      💰 Free (ticket required, limited to 100)
    </Text>
    <Button href="https://nn1.dev/events/9">Get your ticket</Button>
    <Hr />
    <Text>Questions? Reach out on social media or reply to this email!</Text>
    <Text>
      NN1 Dev Club Crew,
      <br />
      Pawel & Darren
    </Text>
    <Socials />
    <Hr />
    <Text>
      Are you no longer interested? You can{" "}
      <Link href={unsubscribeUrl}>unsubscribe</Link> anytime.
    </Text>
  </Layout>
);

Email.PreviewProps = {
  unsubscribeUrl: "#",
} as EmailProps;

const renderEmailNewsletter_2025_05_15 = async (props: EmailProps) => ({
  html: await render(<Email {...props} />),
  text: await render(<Email {...props} />, { plainText: true }),
});

export default Email;
export { renderEmailNewsletter_2025_05_15 };
