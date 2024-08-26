import * as React from "react";
import { render } from "@react-email/render";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { Button } from "@react-email/button";
import style from "../style.js";

interface EmailSignupSuccessProps {
  eventUrl: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventInviteUrlIcal: string;
  eventInviteUrlGoogle: string;
}

export const EmailSignupSuccess = ({
  eventUrl,
  eventName,
  eventDate,
  eventLocation,
  eventInviteUrlIcal,
  eventInviteUrlGoogle,
}: EmailSignupSuccessProps) => (
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
          Add it to your calendar:{" "}
          <Link style={style.link} href={eventInviteUrlIcal}>
            iCalendar
          </Link>{" "}
          or{" "}
          <Link style={style.link} href={eventInviteUrlGoogle}>
            Google Calendar
          </Link>
          <br />
          <br />
          If you have issues or questions, please reply to this email, or reach
          out to us on social media channels:{" "}
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
      </Container>
    </Body>
  </Html>
);

EmailSignupSuccess.PreviewProps = {
  eventUrl: "https://nn1.dev",
  eventName:
    '#2: "Design Secrets for Developers" by Thomas Reeve and "Type-safe localization of Unsplash.com" by Oliver Ash',
  eventDate: "Wednesday, 27/03/2024, 18:00",
  eventLocation: "Vulcan Works, 34-38 Guildhall Rd, Northampton, NN1 1EW",
  eventInviteUrlIcal: "#",
  eventInviteUrlGoogle: "#",
} as EmailSignupSuccessProps;

const renderEmailSignupSuccess = (props: EmailSignupSuccessProps) => ({
  html: render(<EmailSignupSuccess {...props} />),
  text: render(<EmailSignupSuccess {...props} />, { plainText: true }),
});

export default EmailSignupSuccess;
export { renderEmailSignupSuccess };
