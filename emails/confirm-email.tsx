import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Hire1WelcomeEmailProps {
  confirmLink: any;
}

export const Hire1WelcomeEmail = ({ confirmLink }: Hire1WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to Hire1.ai, confirm your email address and start hiring top 1%
      MarTech experts
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dlnsqeeos/image/upload/v1711947506/o0dtho5imc9kyezluwap.png"
          width="115"
          height="35"
          alt="Koala"
          style={logo}
        />
        <Hr style={hr} />
        <Text style={paragraph}>
          Welcome to Hire1.ai, the AI powered platform for hiring top 1% martech
          experts in the industry.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={confirmLink}>
            Confirm Email
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Hire1.ai team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

Hire1WelcomeEmail.PreviewProps = {
  confirmLink: "https://test.com",
} as Hire1WelcomeEmailProps;

export default Hire1WelcomeEmail;

const main = {
  backgroundColor: "#020617",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 0",
};

const paragraph = {
  color: "#fff",
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#1BC5E1",
  borderRadius: "8px",
  color: "#000000",
  fontWeight: "500",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#1D3040",
  margin: "20px 0",
};

const footer = {
  color: "#ABABAB",
  fontSize: "12px",
};
