import * as React from "react";
import { render } from "@react-email/render";
import Layout from "../components/Layout.tsx";
import Text from "../components/Text.tsx";
import Hr from "../components/Hr.tsx";

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
  <Layout>
    <Text>New feedback ✨</Text>
    <Hr />
    {name ? (
      <Text>
        <strong>Name:</strong> {name}
      </Text>
    ) : null}
    {stack ? (
      <Text>
        <strong>Stack:</strong> {stack}
      </Text>
    ) : null}
    <Text>
      <strong>Who:</strong> {who}
    </Text>
    <Text>
      <strong>Interval:</strong> {interval}
    </Text>
    {feedback ? (
      <Text>
        <strong>Feedback:</strong> {feedback}
      </Text>
    ) : null}
  </Layout>
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
