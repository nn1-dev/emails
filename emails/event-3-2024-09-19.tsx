import * as React from "react";
import { render } from "@react-email/render";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import style from "../style.tsx";

export const Email_2024_09_19 = () => (
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
          Thanks again for signing up for the upcoming NN1 Dev Club event. We
          are looking forward to seeing you in just a few days. Incredible
          speakers, great pizza, drinks, and most importantly, a bunch of other
          passionate software geeks. You don’t want to miss this one. And of
          course, it's all FREE! . This is just a pre-event reminder with some
          important details.
        </Text>
        <Text style={style.text}>
          🗓️ Thursday, 26/09/2024, 18:00
          <br />
          📍 Vulcan Works, 34-38 Guildhall Rd, Northampton, NN1 1EW
        </Text>
        <Button style={style.button} href="https://nn1.dev/events/3">
          Go to events page
        </Button>
        <Text style={style.text}>
          Tickets are limited due to the venue capacity, but we still have a few
          tickets left. Please share the info about the event with anyone who
          may be interested. We try so hard to build a community of local
          software enthusiasts, and we would massively appreciate your help.{" "}
        </Text>
        <Text style={style.text}>See you 🫶</Text>
        <Text style={style.text}>
          NN1 Dev Club Crew,
          <br />
          Pawel & Darren
        </Text>
      </Container>
    </Body>
  </Html>
);

const renderEmail_2024_09_19 = async () => ({
  html: await render(<Email_2024_09_19 />),
  text: await render(<Email_2024_09_19 />, { plainText: true }),
});

export default Email_2024_09_19;
export { renderEmail_2024_09_19 };
