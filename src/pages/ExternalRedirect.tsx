import { useEffect } from "react";

type ExternalRedirectProps = {
  to: string;
};

const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">
        Redirecting... <a className="text-foreground underline" href={to}>Continue</a>
      </p>
    </main>
  );
};

export default ExternalRedirect;
