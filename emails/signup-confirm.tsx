import * as React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import { render } from "@react-email/render";
import style from "../style";

interface EmailSignupConfirmProps {
  url: string;
}

export const EmailFeedback = ({ url }: EmailSignupConfirmProps) => (
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
          Thanks for signing up for the upcoming NN1 Dev Club event. We need to
          make sure that you are you. Please confirm your email address by
          clicking the button below, and you will be all setup!
        </Text>
        <Button href={url} style={style.button}>
          Confirm your email
        </Button>
      </Container>
    </Body>
  </Html>
);

EmailFeedback.PreviewProps = {
  url: "#",
} as EmailSignupConfirmProps;

const renderEmailFeedback = (props: EmailSignupConfirmProps) => ({
  html: render(<EmailFeedback {...props} />),
  text: render(<EmailFeedback {...props} />, { plainText: true }),
});

export default EmailFeedback;
export { renderEmailFeedback };
