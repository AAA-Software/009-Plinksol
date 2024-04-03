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

interface ResetPasswordEmailProps {
  resetLink: any;
}

export const ResetPasswordEmail = ({ resetLink }: ResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Hire1.ai reset your account password</Preview>
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
        <Text style={paragraph}>Hi,</Text>
        <Text style={paragraph}>
          Someone recently requested a password change for your Hire1.ai
          account. If this was you, you can set a new password here
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={resetLink}>
            Reset Password
          </Button>
        </Section>
        <Text style={paragraph}>
          If you don&apos;t want to change your password or didn&apos;t request
          this, just ignore and delete this message.
        </Text>
        <Text style={paragraph}>Happy Hiring!</Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

ResetPasswordEmail.PreviewProps = {
  resetLink: "https://test.com",
} as ResetPasswordEmailProps;

export default ResetPasswordEmail;

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
