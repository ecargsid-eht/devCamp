import { supabase } from "@/supabase";

export async function signupApi(
  firstName: string,
  lastName: string,
  email: string,
  password: string
){
  const {
    data: { user, session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (session !== null) {
    return {
      access_key: session.access_token,
      refresh_key: session.refresh_token,
      user: user
    };
  }
  if (error) {
    return String(error.message);
  }
}