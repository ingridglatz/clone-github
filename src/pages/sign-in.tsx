import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Banner } from '../components/banner';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type SignInForm = {
  username: string;
  password: string;
};

const schema = z.object({
  username: z.string().min(2),
  password: z.string().min(8),
});

export function SignIn() {
  const form = useForm<SignInForm>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: SignInForm) => {
    console.log(data);
    navigate('/');
  };

  const hasError = useMemo(
    () => form.formState.errors.username || form.formState.errors.password,
    [form.formState.errors.password, form.formState.errors.username],
  );

  return (
    <>
      <div className="flex justify-center py-8">
        <GitHubLogoIcon className="w-12 h-12" />
      </div>

      <main className="w-[340px] px-4 mx-auto">
        <h1 className="text-2xl font-light text-center">Sign in to GitHub</h1>

        {hasError && <Banner type="error" message="Username or password is incorrect!" className="mt-4" />}
        <div className="max-w-sm p-4 bg-[#161b22] border border-[#21262d] rounded-md mt-4">
          <FormProvider {...form}>
            <form method="POST" className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <Input
                  label="Username or email address"
                  type="text"
                  name="username"
                  className="w-full"
                  errorMessage={form.formState.errors.username?.message}
                />
              </div>

              <div>
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  className="w-full"
                  labelLink={<a className="text-xs text-[#2f81f7]">Forgot password?</a>}
                  errorMessage={form.formState.errors.password?.message}
                />
              </div>

              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  );
}
