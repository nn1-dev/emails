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
import { Heading } from "@react-email/heading";
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
          The last meet-up of 2024 with Tom Keeber and Rob Hough is in exactly
          two weeks. If you don’t have a ticket yet,{" "}
          <Link
            href="https://nn1.dev/events/4/#get-your-free-ticket"
            style={style.link}
          >
            register for free now
          </Link>
          . We have some news to share about future events and communication
          with our community members and a small favour to ask.
        </Text>
        <Hr style={style.hr} />
        <Heading style={style.heading}>
          January is all about your side projects
        </Heading>
        <Text style={style.text}>
          We are planning something different for January’s event. This time we
          won’t be inviting speakers, we want to make this event about YOU and
          your side projects. If you have one (we know you do), don’t be shy,
          prepare a short (5-15 minutes) presentation. It’s a great opportunity
          to share with the other community members what you’re building. Email
          us at{" "}
          <Link href="mailto:club@nn1.dev" style={style.link}>
            club@nn1.dev
          </Link>{" "}
          to claim your slot.
        </Text>
        <Hr style={style.hr} />
        <Heading style={style.heading}>Discord server and socials</Heading>
        <Text style={style.text}>
          Social media is one of the ways to stay in touch with us. We are
          actively posting on{" "}
          <Link href="http://linkedin.com/company/nn1-dev" style={style.link}>
            LinkedIn
          </Link>
          ,{" "}
          <Link href="https://mastodon.social/@nn1dev" style={style.link}>
            Mastodon
          </Link>
          , and{" "}
          <Link href="https://bsky.app/profile/nn1.dev" style={style.link}>
            Bluesky
          </Link>
          . Due to{" "}
          <Link
            href="https://techcrunch.com/2024/10/17/elon-musks-x-is-changing-its-privacy-policy-to-allow-third-parties-to-train-ai-on-your-posts/"
            style={style.link}
          >
            recent changes to the privacy policy of Twitter/X
          </Link>
          , we are no longer active there. We do have an{" "}
          <Link href="https://www.instagram.com/nn1dev/" style={style.link}>
            Instagram
          </Link>{" "}
          account, but we have no time to manage it, so please reach out if you
          would like to help us!
          <br />
          <br />
          We now also have a Discord server, and this is a great place to stay
          in touch with local geeks, share inspirations, and get to know each
          other a bit better.
          <br />
        </Text>
        <Button href="https://chat.nn1.dev/" style={style.button}>
          Join our Discord server
        </Button>
        <Hr style={style.hr} />
        <Heading style={style.heading}>Help us, help you!</Heading>
        <Text style={style.text}>
          We’re actively looking for regular sponsorship for our events. We
          don’t need a lot of money, but your pizza, beers, juice, t-shirts and
          stickers do not come for free. Instead of spending our energy asking
          local companies for help before every single event, we would love to
          find a long-term sponsor and dedicate our energy to making the
          community stronger. Please let us know if you can help.
        </Text>
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
