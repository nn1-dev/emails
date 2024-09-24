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
          The upcoming NN1 Dev Club meet-up is in two days. We put a lot of work
          into this one, and you’re not going to want to miss out on it. Let us
          give you a few reasons to book a free ticket, dig out your favourite
          umbrella, and join us on Thursday, 26/09/2024, at 18:00 at Vulcan
          Works.
        </Text>
        <Heading style={style.heading}>
          Guest speakers: Jordan Legg and James Bavington
        </Heading>
        <Text style={style.text}>
          Whether you like it or not, AI is everywhere! We invited speakers from
          industry-leading companies in their fields to explore two sectors that
          recently underwent transformative changes: SEO and text-to-image
          generation.
        </Text>
        <Heading style={style.heading}>It’s Free!</Heading>
        <Text style={style.text}>
          Not only are all our events totally free, we are providing food,
          drinks and of course amazing talks! Not your average Domino’s pizza
          either, we have something special lined up for you all. Be our guest.
        </Text>
        <Heading style={style.heading}>Community </Heading>
        <Text style={style.text}>
          Most importantly, by attending our event, you have an opportunity to
          engage with a local community of likeminded software enthusiasts.
          Everyone is welcome, and we will do our best to make you feel at home.
          Everyone!
        </Text>
        <Hr style={style.hr} />
        <Text style={style.text}>
          We have a very limited number of tickets available, but there are
          still a few left. Grab yours now, it only takes a second, and we will
          see each other on Thursday.
        </Text>
        <Button style={style.button} href="https://nn1.dev/events/3">
          Get your FREE ticket now
        </Button>
        <Text style={style.text}>
          If you have questions, ping us on social media or reply to this email.
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
