import * as React from "react";
import { render } from "@react-email/render";
import Layout from "../components/Layout.tsx";
import Text from "../components/Text.tsx";
import Hr from "../components/Hr.tsx";
import Link from "../components/Link.tsx";

interface EmailAdminNewsletterUnsubscribeProps {
  email: string;
}

export const EmailAdminNewsletterUnsubscribe = ({
  email,
}: EmailAdminNewsletterUnsubscribeProps) => (
  <Layout>
    <Text>Newsletter member unsubscribed ✨</Text>
    <Hr />
    <Text>
      <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
    </Text>
  </Layout>
);

EmailAdminNewsletterUnsubscribe.PreviewProps = {
  email: "hey@ho.hi",
} as EmailAdminNewsletterUnsubscribeProps;

const renderEmailAdminNewsletterUnsubscribe = async (
  props: EmailAdminNewsletterUnsubscribeProps,
) => ({
  html: await render(<EmailAdminNewsletterUnsubscribe {...props} />),
  text: await render(<EmailAdminNewsletterUnsubscribe {...props} />, {
    plainText: true,
  }),
});

export default EmailAdminNewsletterUnsubscribe;
export { renderEmailAdminNewsletterUnsubscribe };
