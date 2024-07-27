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
import style from "../style.tsx";

interface EmailNewsletterThanksProps {
  unsubscribeUrl: string;
}

export const EmailNewsletterThanks = ({
  unsubscribeUrl,
}: EmailNewsletterThanksProps) => (
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
          Thanks for signing up. We will keep you posted about the upcoming
          events, and we promise never to send you annoying crap. For more
          frequent updates, you can follow us on social media channels:{" "}
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

EmailNewsletterThanks.PreviewProps = {
  unsubscribeUrl: "#",
} as EmailNewsletterThanksProps;

const renderEmailNewsletterThanks = (props: EmailNewsletterThanksProps) => ({
  html: render(<EmailNewsletterThanks {...props} />),
  text: render(<EmailNewsletterThanks {...props} />, { plainText: true }),
});

export default EmailNewsletterThanks;
export { renderEmailNewsletterThanks };
