import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function VerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
          <Mail className="h-8 w-8 text-accent" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold">Check your email</h2>
          <p className="mt-2 text-muted-foreground">
            We've sent you a verification link. Please check your email to verify your account.
          </p>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link to="/auth/sign-in">Return to Sign In</Link>
        </Button>
      </div>
    </div>
  );
}