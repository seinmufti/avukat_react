import { Box, Button, Input, Textarea } from '@mui/joy';

const Contact = () => {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 3,
        bgcolor: 'background.surface',
        boxShadow: 'md',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Input name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Textarea name="message" placeholder="Your Message" minRows={4} required />
      <Button type="submit" variant="solid" color="primary">
        Send
      </Button>
    </Box>
  );
};

export default Contact;
