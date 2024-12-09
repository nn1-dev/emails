import React from "react";
import { Column } from "@react-email/column";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Row } from "@react-email/row";

function Socials() {
  return (
    <Row style={{ display: "table-cell", paddingBottom: "26px" }}>
      <Column style={{ paddingRight: "13px" }}>
        <Link href="https://github.com/nn1-dev">
          <Img
            src="https://nn1.dev/emails/github.png"
            width="39"
            height="39"
            alt="NN1 Dev Club Logo"
          />
        </Link>
      </Column>
      <Column style={{ paddingRight: "13px" }}>
        <Link href="http://linkedin.com/company/nn1-dev">
          <Img
            src="https://nn1.dev/emails/linkedin.png"
            width="39"
            height="39"
            alt="NN1 Dev Club Logo"
          />
        </Link>
      </Column>
      <Column style={{ paddingRight: "13px" }}>
        <Link href="https://mastodon.social/@nn1dev">
          <Img
            src="https://nn1.dev/emails/mastodon.png"
            width="39"
            height="39"
            alt="NN1 Dev Club Logo"
          />
        </Link>
      </Column>
      <Column style={{ paddingRight: "13px" }}>
        <Link href="https://bsky.app/profile/nn1.dev">
          <Img
            src="https://nn1.dev/emails/bluesky.png"
            width="39"
            height="39"
            alt="NN1 Dev Club Logo"
          />
        </Link>
      </Column>
      <Column style={{ paddingRight: "13px" }}>
        <Link href="https://chat.nn1.dev/">
          <Img
            src="https://nn1.dev/emails/discord.png"
            width="39"
            height="39"
            alt="NN1 Dev Club Logo"
          />
        </Link>
      </Column>
    </Row>
  );
}

export default Socials;
