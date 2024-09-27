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
          We had a lot of fun hosting you all yesterday. Seeing a few familiar
          faces was good, but it was also incredible to welcome so many new
          people to the community. We try to make the NN1 Dev Club great for
          everyone, but we need your feedback. Tell us what you liked and where
          we can improve. Thank you!
        </Text>

        <Button style={style.button} href="https://nn1.dev/feedback">
          Submit your feedback
        </Button>
        <Heading style={style.heading}>Get involved</Heading>
        <Text style={style.text}>
          We have so many ideas and plans for the future, but our resources are
          limited. Arranging speakers is time-consuming, but you can help out by
          submitting your talk. If you have an idea on how we can improve our
          website, please open an issue or submit your pull request —{" "}
          <Link style={style.link} href="https://github.com/nn1-dev">
            our website and API are open-sourced
          </Link>
          . Lastly, we are looking for sponsors, so if you or your employer
          would like to invest in the future development of our community, we
          would greatly appreciate it.
        </Text>
        <Text style={style.text}>
          NN1 Dev Club Crew,
          <br />
          Paweł & Darren
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
