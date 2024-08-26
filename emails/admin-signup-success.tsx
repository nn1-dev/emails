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
import style from "../style.js";

interface EmailAdminSignupSuccessProps {
  name: string;
  email: string;
}

export const EmailAdminSignupSuccess = ({
  name,
  email,
}: EmailAdminSignupSuccessProps) => (
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
        <Text style={style.text}>New signup ✨</Text>
        <Hr style={style.hr} />
        <Text style={style.text}>
          <strong>Name:</strong> {name}
          <br />
          <strong>Email:</strong>{" "}
          <Link href={`mailto:${email}`} style={style.link}>
            {email}
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

EmailAdminSignupSuccess.PreviewProps = {
  name: "Pawel Grzybek",
  email: "hey@ho.hi",
} as EmailAdminSignupSuccessProps;

const renderEmailAdminSignupSuccess = (
  props: EmailAdminSignupSuccessProps,
) => ({
  html: render(<EmailAdminSignupSuccess {...props} />),
  text: render(<EmailAdminSignupSuccess {...props} />, { plainText: true }),
});

export default EmailAdminSignupSuccess;
export { renderEmailAdminSignupSuccess };
