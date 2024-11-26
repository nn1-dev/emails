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
          The last event of the year,{" "}
          <Link href="https://nn1.dev/events/4" style={style.link}>
            NN1 Dev Club #4
          </Link>
          , is in two days. We have incredible speakers, pizza, drinks and more
          goodies for you all. Everyone is welcome, no matter what your
          experience level, gender identity, religion (or lack thereof), or
          technology choices are. There is a whole community of passionate geeks
          waiting for you there. We still have a few tickets left, so hurry up,
          register now, and we will see you on Thursday.
        </Text>
        <Button
          href="https://nn1.dev/events/4#get-your-free-ticket"
          style={style.button}
        >
          Register now
        </Button>
        <Hr style={style.hr} />
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
