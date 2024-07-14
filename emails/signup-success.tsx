import * as React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import { Link } from "@react-email/link";
import { Button } from "@react-email/button";
import { render } from "@react-email/render";
import style from "../style";

interface EmailSignupSuccessProps {
  eventUrl: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
}

export const EmailSignupSuccess = ({
  eventUrl,
  eventName,
  eventDate,
  eventLocation,
}: EmailSignupSuccessProps) => (
  <Html>
    <Head />
    <Body style={style.body}>
      <Container>
        <Img
          src="https://nn1.dev/logo-email.png"
          width="119"
          height="28"
          alt="NN1 Dev Club Logo"
          style={style.img}
        />
        <Text style={style.text}>
          Thanks for signing up for the upcoming NN1 Dev Club event,{" "}
          <strong>{eventName}</strong>. We can't wait to see you! Here is handy
          information about the event.
        </Text>
        <Button href={eventUrl} style={style.button}>
          Events page
        </Button>

        <Text style={style.text}>
          🗓️ {eventDate}
          <br />
          📍 {eventLocation}
          <br />
          <br />
          If you have issues or questions, please reply to this email, send us a
          new one to{" "}
          <Link style={style.link} href="mailto:club@nn1.dev">
            club@nn1.dev
          </Link>
          , or reach out to us on social media channels:{" "}
          <Link style={style.link} href="http://linkedin.com/company/nn1-dev">
            LinkedIn
          </Link>
          ,{" "}
          <Link style={style.link} href="https://mastodon.social/@nn1dev">
            Mastodon
          </Link>{" "}
          and{" "}
          <Link style={style.link} href="https://x.com/nn1dev">
            X (Twitter)
          </Link>
          .{" "}
        </Text>
        <Hr style={style.hr} />
        <Text style={style.text}>Have a good day 👋</Text>
      </Container>
    </Body>
  </Html>
);

EmailSignupSuccess.PreviewProps = {
  eventUrl: "https://nn1.dev",
  eventName:
    '#1: "Boiling Nemo" by PJ Evans and "The Science of Software Engineering" by Junade Ali',
  eventDate: "Wednesday, 27/03/2024, 18:00",
  eventLocation: "Vulcan Works, 34-38 Guildhall Rd, Northampton, NN1 1EW",
} as EmailSignupSuccessProps;

const renderEmailSignupSuccess = (props: EmailSignupSuccessProps) => ({
  html: render(<EmailSignupSuccess {...props} />),
  text: render(<EmailSignupSuccess {...props} />, { plainText: true }),
});

export default EmailSignupSuccess;
export { renderEmailSignupSuccess };
