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
          This is a brief reminder that the upcoming NN1 Dev Club Co-working Day
          is this Friday, 25th October. This is an incredible opportunity if you
          want to change the scenery and work surrounded by the local geeks.
          Just come to the{" "}
          <Link style={style.link} href="https://vulcanworks.co.uk">
            Vulcan Works
          </Link>
          , and the lovely team at the reception will point you to{" "}
          <Link
            style={style.link}
            href="https://vulcanworks.co.uk/wp-content/uploads/2023/04/Vulcan-Works-and-St-Johns-Floorplan.pdf"
          >
            the second co-working space room
          </Link>
          , where we will be waiting for you from 9 AM.
        </Text>
        <Text style={style.text}>
          P.S. In case you missed it, the info about the upcoming fourth meetup
          is live, and you can{" "}
          <Link style={style.link} href="https://nn1.dev/events/4/">
            register for free now
          </Link>
          . Half of the tickets are gone, so you better be quick.
        </Text>
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
