import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { render } from "@react-email/render";
import { Text } from "@react-email/text";
import * as React from "react";
import style from "../style.tsx";

interface EmailProps {
  unsubscribeUrl: string;
}

export const Email = ({ unsubscribeUrl }: EmailProps) => (
  <Html>
    <Head />
    <Body style={style.body}>
      <Container style={style.container}>
        <Img
          src="https://nn1.dev/logo-email.png"
          width="119"
          height="28"
          alt="NN1 Dev Club Logo"
          style={style.img}
        />
        <Text style={style.text}>
          Let’s kick 2025 off with something different. We are excited to invite
          you to our next meet-up where members of our community will present
          the results of their weekend hacks. Due to very limited slots, please
          reach out as soon as possible if you would like to present something.
          We really hope you will like the new format. Registration is, as
          always, free and open now. Hurry up because the number of tickets is
          capped at 100.
        </Text>
        <Text style={style.text}>
          🗓️ Thursday, 30/01/2025, 18:00
          <br />
          📍 Vulcan Works, Northampton, NN1 1EW
          <br />
          💰 FREE
        </Text>
        <Button
          href="https://nn1.dev/events/5#get-your-free-ticket"
          style={style.button}
        >
          Register now
        </Button>
        <Text style={style.text}>
          If you have questions, ping us on{" "}
          <Link style={style.link} href="https://nn1.dev/#stay-in-touch">
            social media
          </Link>{" "}
          or reply to this email.
        </Text>
        <Text style={style.text}>
          NN1 Dev Club Crew,
          <br />
          Pawel & Darren
        </Text>
        <Hr style={style.hr} />
        <Text style={style.text}>
          Are you no longer interested? You can{" "}
          <Link style={style.link} href={unsubscribeUrl}>
            unsubscribe
          </Link>{" "}
          anytime.
        </Text>
      </Container>
    </Body>
  </Html>
);

Email.PreviewProps = {
  unsubscribeUrl: "#",
} as EmailProps;

const renderEmail = async (props: EmailProps) => ({
  html: await render(<Email {...props} />),
  text: await render(<Email {...props} />, { plainText: true }),
});

export default Email;
export { renderEmail };
