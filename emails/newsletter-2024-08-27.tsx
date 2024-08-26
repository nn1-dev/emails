import * as React from "react";
import { render } from "@react-email/render";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import { Link } from "@react-email/link";
import { Heading } from "@react-email/heading";
import { Button } from "@react-email/button";
import style from "../style.tsx";

interface Email_2024_08_27Props {
  unsubscribeUrl: string;
}

export const Email_2024_08_27 = ({ unsubscribeUrl }: Email_2024_08_27Props) => (
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
          Hey folks. We hope you had a lovely bank holiday weekend. Today is a
          quick one to remind you about two things.
        </Text>
        <Hr style={style.hr} />
        <Heading style={style.heading}>NN1 Dev Club co-working days</Heading>
        <Text style={style.text}>
          Thanks to the courtesy of Vulcan Works, we have an excellent
          opportunity to use their co-working space for FREE every last Friday
          of the month. There is a high probability we will go for lunch
          together or have a beer afterwards.
          <br />
          <br />
          The next one is this Friday, 30/08/2024. Just pop in to the Vulcan
          Works and register at the reception. Lovely girls will point you in
          the right direction.
        </Text>
        <Hr style={style.hr} />
        <Heading style={style.heading}>NN1 Dev Club #3 meet-up</Heading>
        <Text style={style.text}>
          The third meet-up is coming on Thursday, 26/09/2024. Apart from superb
          speakers, we have a bunch of extras prepared for you. Check our
          website for more details and book your FREE ticket if you haven't
          already.
        </Text>
        <Button style={style.button} href="https://nn1.dev/events/3">
          Get your FREE ticket now
        </Button>
        <Text style={style.text}>
          If you have questions, ping us on social media or reply to this email.
          <br />
          <br />
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

Email_2024_08_27.PreviewProps = {
  unsubscribeUrl: "#",
} as Email_2024_08_27Props;

const renderEmail_2024_08_27 = async (props: Email_2024_08_27Props) => ({
  html: await render(<Email_2024_08_27 {...props} />),
  text: await render(<Email_2024_08_27 {...props} />, { plainText: true }),
});

export default Email_2024_08_27;
export { renderEmail_2024_08_27 };
