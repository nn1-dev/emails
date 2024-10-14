import * as React from "react";
import { render } from "@react-email/render";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import style from "../style.tsx";

interface EmailAdminFeedbackProps {
  name?: string;
  stack?: string;
  who: string;
  interval: string;
  feedback?: string;
}

export const EmailAdminFeedback = ({
  name,
  stack,
  who,
  interval,
  feedback,
}: EmailAdminFeedbackProps) => (
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
        <Text style={style.text}>New feedback ✨</Text>
        <Hr style={style.hr} />
        {name ? (
          <Text style={style.text}>
            <strong>Name:</strong> {name}
          </Text>
        ) : null}
        {stack ? (
          <Text style={style.text}>
            <strong>Stack:</strong> {stack}
          </Text>
        ) : null}
        <Text style={style.text}>
          <strong>Who:</strong> {who}
        </Text>
        <Text style={style.text}>
          <strong>Interval:</strong> {interval}
        </Text>
        {feedback ? (
          <Text style={style.text}>
            <strong>Feedback:</strong> {feedback}
          </Text>
        ) : null}
      </Container>
    </Body>
  </Html>
);

EmailAdminFeedback.PreviewProps = {
  name: "Pablo Picasso",
  stack: "AWS, Rust, JavaScript",
  who: "Pro",
  interval: "Every 3 months is fine",
  feedback:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
} as EmailAdminFeedbackProps;

const renderEmailAdminFeedback = async (props: EmailAdminFeedbackProps) => ({
  html: await render(<EmailAdminFeedback {...props} />),
  text: await render(<EmailAdminFeedback {...props} />, { plainText: true }),
});

export default EmailAdminFeedback;
export { renderEmailAdminFeedback };
