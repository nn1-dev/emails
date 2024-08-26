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
import style from "../style.tsx";

interface EmailAdminNewsletterSubscribeProps {
  email: string;
}

export const EmailAdminNewsletterSubscribe = ({
  email,
}: EmailAdminNewsletterSubscribeProps) => (
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

EmailAdminNewsletterSubscribe.PreviewProps = {
  email: "hey@ho.hi",
} as EmailAdminNewsletterSubscribeProps;

const renderEmailAdminNewsletterSubscribe = async (
  props: EmailAdminNewsletterSubscribeProps,
) => ({
  html: await render(<EmailAdminNewsletterSubscribe {...props} />),
  text: await render(<EmailAdminNewsletterSubscribe {...props} />, {
    plainText: true,
  }),
});

export default EmailAdminNewsletterSubscribe;
export { renderEmailAdminNewsletterSubscribe };
