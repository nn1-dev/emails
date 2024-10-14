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

interface Email_2024_09_24Props {
  unsubscribeUrl: string;
}

export const Email_2024_09_24 = ({ unsubscribeUrl }: Email_2024_09_24Props) => (
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
          The fourth meet-up is fast approaching. Come and join us on Thursday,
          the 28th of November. We are stoked about the guest speakers! Tom
          Keeber will talk about Dunelm's journey from an unwieldy Websphere
          site managed by a single developer to one of Europe's largest AWS
          serverless infrastructures. Rob Hough will look into the paradigm
          shift introduced by LLMs and their potential to enhance the user
          experience. Great lineup, right? <br />
          <br />
          As always, the event is free, and the tickets are limited to 100.
          Looking retrospectively at our last event, they may sell out quickly.
          Grab yours now, and we shall see each other on Thursday, 28/11/2024.
        </Text>
        <Button style={style.button} href="https://nn1.dev/events/4">
          Register for free now
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

Email_2024_09_24.PreviewProps = {
  unsubscribeUrl: "#",
} as Email_2024_09_24Props;

const renderEmail_2024_09_24 = async (props: Email_2024_09_24Props) => ({
  html: await render(<Email_2024_09_24 {...props} />),
  text: await render(<Email_2024_09_24 {...props} />, { plainText: true }),
});

export default Email_2024_09_24;
export { renderEmail_2024_09_24 };
