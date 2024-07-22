import * as React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import { render } from "@react-email/render";
import style from "../style";
import { Link } from "@react-email/link";

interface EmailAdminNewsletterProps {
  email: string;
}

export const EmailAdminNewsletter = ({ email }: EmailAdminNewsletterProps) => (
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
        <Text style={style.text}>Newsletter member subscribed ✨</Text>
        <Hr style={style.hr} />
        <Text style={style.text}>
          <strong>Email:</strong>{" "}
          <Link href={`mailto:${email}`} style={style.link}>
            {email}
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

EmailAdminNewsletter.PreviewProps = {
  email: "hey@ho.hi",
} as EmailAdminNewsletterProps;

const renderEmailAdminNewsletter = (props: EmailAdminNewsletterProps) => ({
  html: render(<EmailAdminNewsletter {...props} />),
  text: render(<EmailAdminNewsletter {...props} />, { plainText: true }),
});

export default EmailAdminNewsletter;
export { renderEmailAdminNewsletter };
