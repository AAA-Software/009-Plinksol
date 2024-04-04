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

interface WelcomeEmailProps {
  confirmLink: any;
}

export const WelcomeEmail = ({ confirmLink }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Experience the thrill of playing Plinko online, backed by the security and
      transparency of blockchain technology.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="http://res.cloudinary.com/dlnsqeeos/image/upload/v1712223730/hosfc0q080hahzrvijv2.png"
          width="115"
          height="35"
          alt="Plinksol"
          style={logo}
        />
        <Hr style={hr} />
        <Text style={paragraph}>
          Welcome to PlinkoSol, experience the thrill of playing Plinko online,
          backed by the security and transparency of blockchain technology.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={confirmLink}>
            Confirm Email
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The PlinkSol team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Pfanghofweg 79, 8045 Graz, Austria</Text>
      </Container>
    </Body>
  </Html>
);

WelcomeEmail.PreviewProps = {
  confirmLink: "https://test.com",
} as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
  backgroundColor: "#10121A",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px 8px 20px",
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
  backgroundColor: "#3BA901",
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
  fontSize: "14px",
};
