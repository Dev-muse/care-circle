import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen h-screen">
      {/* TODO: OTP Verification and passkey modal */}
      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="assets/icons/logo-carecircle.svg"
            alt="carecircle logo"
            width={500}
            height={500}
            priority
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />

          <div className="text-14-regular flex justify-between mt-5">
            <p className="text-dark-600 justify-items-end xl:text-left ">
              &copy; {currentYear} CareCircle All rights reserved.
            </p>
            <Link href="?/admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="doctor"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
