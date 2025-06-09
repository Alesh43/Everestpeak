import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-8">
      {/* Optimized Background Image */}
      <Image
        src="/images/login-background2.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={75}
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Branding - EPIC */}
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md -mt-10">
          EPIC
        </h1>

        {/* Login Card */}
        <Card className="w-full max-w-md p-6 shadow-2xl bg-white/90">
          <CardContent className="flex flex-col gap-5 text-base">
            {/* Google Sign-in */}
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 justify-center text-base"
            >
              <img
                src="/images/google-logo.png"
                alt="Google Logo"
                className="w-5 h-5 object-contain"
              />
              Sign in with Google
            </Button>

            {/* Microsoft Sign-in */}
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 justify-center text-[16px]"
            >
              <img
                src="/images/microsoft-logo.png"
                alt="Microsoft Logo"
                className="w-5 h-5 object-contain"
              />
              Sign in with Microsoft
            </Button>

            {/* Divider */}
            <div className="text-center text-black-700 text-[19px]">or</div>

            {/* Email input with icon */}
            <div className="relative">
              <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[18px]" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-10 w-full text-[16px]"
              />
            </div>

            {/* Sign In button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[16px]">
              Sign In
            </Button>

            {/* Forgot password link */}
            <a
              href="#"
              className="text-center text-[18px] text-blue-700 hover:underline"
            >
              Forgot password?
            </a>

            {/* reCAPTCHA disclaimer */}
            <p className="text-[13px] text-center text-black-500 mt-2 leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#" className="underline text-blue-900">
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-blue-900">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
