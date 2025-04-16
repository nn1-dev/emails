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
      NN1 Dev Club #7: "The Future Needs More You" by Natalie de Weerd and
      "Charge or Cheat? The Ethics of Billing for AI-Generated Work" by Dr Kardi
      Somerfield{" "}
    </Heading>
    <Text>
      We are excited to invite you to our next meetup! Join us for two
      thought-provoking talks by <strong>Natalie de Weerd</strong> and{" "}
      <strong>Dr Kardi Somerfield</strong>. Connect with an incredible community
      of local software enthusiasts, enjoy food and drinks, and, most
      importantly, have tons of fun—all for FREE!
    </Text>
    <Text>
      🗓️ Thursday, 29/05/2025, 18:00
      <br />
      📍 Vulcan Works, Northampton, NN1 1EW
      <br />
      💰 Free (ticket required, limited to 100)
    </Text>
    <Button href="https://nn1.dev/events/7">Get your ticket</Button>
    <Hr />
    <Heading>NN1 Dev Club Open Collective</Heading>
    <Text>
      We put a lot of time and energy into building this community. We love it,
      but we've grown tired of constantly searching for event sponsors. Each
      event costs around £500, and we're now turning to you, our community, for
      support. Any funds beyond our costs will go directly to local charities.
      Through Open Collective, you can see exactly how every contribution is
      used, ensuring complete transparency.
    </Text>
    <Button href="https://opencollective.com/nn1-dev">Support us</Button>
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

const renderEmailNewsletter_2025_04_24 = async (props: EmailProps) => ({
  html: await render(<Email {...props} />),
  text: await render(<Email {...props} />, { plainText: true }),
});

export default Email;
export { renderEmailNewsletter_2025_04_24 as renderEmailNewsletter_2025_02_03 };
