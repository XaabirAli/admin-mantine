import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
// import { useHistory} from 'react-router-dom' 

export function Login(){

  const admin = useNavigate();
  admin('./admin')




    return(  
        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 1000 })}
          >
            LogIn 
          </Title>
          <Text color="dimmed" size="xs" align="center" mt={5}>
            Log In To Make Appointment
            {/* <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
              Create account
            </Anchor> */}
          </Text>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" onClick={() => admin('./admin')}>
              Log in
            </Button>
            <Button fullWidth mt="xl" onClick={() => admin('./admin')}>
              Sing UP
            </Button>
          </Paper>
        </Container>
      );
    
}


