import * as React from "react";
import { render } from "@react-email/render";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import { Link } from "@react-email/link";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import style from "../style.tsx";

export const Email_2024_09_25 = () => (
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
          We are looking forward to seeing you tomorrow. Here is a helpful list
          of details about the event: date/time, location, closest parking, and
          schedule. Handy to have it all in one place, isn’t it?
        </Text>
        <Text style={style.text}>
          🗓️ Thursday, 26/09/2024, 18:00
          <br />
          📍{" "}
          <Link
            style={style.link}
            href="https://maps.app.goo.gl/q7RFeDME5cLZWPFA7"
          >
            Vulcan Works, 34-38 Guildhall Rd, Northampton, NN1 1EW
          </Link>
          <br />
          🅿️{" "}
          <Link
            style={style.link}
            href="https://maps.app.goo.gl/fk3jpaPLSLGrHNmH6"
          >
            St. John's Multi Storey Car Park
          </Link>
        </Text>

        <Button style={style.button} href="https://nn1.dev/events/3">
          Go to events page
        </Button>
        <Heading style={style.heading}>Schedule</Heading>
        <Text style={style.text}>
          18:00-18:15: Meet and Greet
          <br />
          18:15-18:30: Intro
          <br />
          18:15-18:30: "Visualising Data Pipelines in Diffusion Models" by
          Jordan Legg
          <br />
          19:00-19:15: Break
          <br />
          19:15-19:45: “The Impact of Generative AI on SEO" by James Bavington
          <br />
          19:45-22:00: Pub Time
        </Text>
        <Text style={style.text}>We are looking forward to seeing you 😘</Text>
        <Text style={style.text}>
          NN1 Dev Club Crew,
          <br />
          Pawel & Darren
        </Text>
      </Container>
    </Body>
  </Html>
);

const renderEmail_2024_09_25 = async () => ({
  html: await render(<Email_2024_09_25 />),
  text: await render(<Email_2024_09_25 />, { plainText: true }),
});

export default Email_2024_09_25;
export { renderEmail_2024_09_25 };
