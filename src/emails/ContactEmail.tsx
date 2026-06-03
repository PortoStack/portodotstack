import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-background mx-auto my-auto px-2 font-sans text-[#F8FAFC]">
          <Container className="border-primary/40 bg-background mx-auto my-10 w-full max-w-xl rounded-xl border border-solid p-6">
            <Text className="text-secondary m-0 text-center text-[12px] font-bold tracking-[4px] uppercase">
              PortoStack Portfolio
            </Text>
            <Heading className="mx-0 mt-4 mb-8 p-0 text-center text-[28px] leading-8 font-bold text-[#F8FAFC]">
              New Message from Portfolio
            </Heading>

            <Text className="text-primary m-0 text-[13px] font-bold tracking-[3px] uppercase">
              Sender
            </Text>
            <Text className="mt-3 mb-0 text-[15px] leading-6 text-[#F8FAFC]">
              <strong className="text-secondary">Name:</strong> {name}
            </Text>
            <Text className="mt-2 mb-0 text-[15px] leading-6 text-[#F8FAFC]">
              <strong className="text-secondary">Email:</strong> {email}
            </Text>

            <Hr className="border-primary/35 mx-0 my-7 w-full border border-solid" />

            <Text className="text-primary m-0 text-[13px] font-bold tracking-[3px] uppercase">
              Message
            </Text>
            <Text className="border-primary/30 bg-background mt-3 rounded-lg border border-solid p-4 text-[15px] leading-7 text-[#F8FAFC]">
              {message}
            </Text>

            <Hr className="border-primary/25 mx-0 my-7 w-full border border-solid" />

            <Text className="m-0 text-center text-[12px] leading-5 text-[#52606f]">
              This email was sent from the PortoStack contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
