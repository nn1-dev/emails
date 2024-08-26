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
import style from "../style.js";

interface Email_2024_07_24Props {
  unsubscribeUrl: string;
}

export const Email_2024_07_24 = ({ unsubscribeUrl }: Email_2024_07_24Props) => (
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
        <Heading style={style.heading}>
          #3: "Visualising Data Pipelines in Diffusion Models" by Jordan Legg
          and "The Impact of Generative AI on SEO" by James Bavington
        </Heading>
        <Text style={style.text}>
          We would love to invite you to the third meetup. We have two talks by
          two incredible speakers prepared for you: "Visualising Data Pipelines
          in Diffusion Models" by Jordan Legg and "The Impact of Generative AI
          on SEO" by James Bavington. It is a beautiful combination of content
          for AI enthusiasts, graphic designers, digital marketing specialists,
          and web developers!
        </Text>
        <Text style={style.text}>
          🗓️ Thursday, 26/09/2024, 18:00
          <br />
          📍 Vulcan Works, 34-38 Guildhall Rd, Northampton, NN1 1EW
        </Text>
        <Text style={style.text}>
          As always, the event is FREE. To top it off, we have pizza, beers and
          some extras prepared for our attendees. You don't want to miss this
          one!
        </Text>
        <Button style={style.button} href="https://nn1.dev/events/3">
          Get your FREE ticket now
        </Button>
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

Email_2024_07_24.PreviewProps = {
  unsubscribeUrl: "#",
} as Email_2024_07_24Props;

const renderEmail_2024_07_24 = (props: Email_2024_07_24Props) => ({
  html: render(<Email_2024_07_24 {...props} />),
  text: render(<Email_2024_07_24 {...props} />, { plainText: true }),
});

export default Email_2024_07_24;
export { renderEmail_2024_07_24 };
