"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { stepOneSchema } from "../../../../src/lib/yup";
import { StepOneData } from "../../../../src/store/eventTypes";
import useFormStore from "../../../../src/store/useFormStore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ButtonSpinner from "../../../../src/components/auth/ButtonSpinner";

export default function StepOne() {
  const router = useRouter();
  const { stepOne, setData } = useFormStore();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="container mx-auto leading-tight py-10">
      <h1 className="text-center font-bold  text-[#1B1B21] text-3xl md:text-[40px] py-5 ">
        Enter your event name
      </h1>

      <p className="text-center">
        <Link
          href="/dashboard/onboarding/step-two"
          className=" text-[#303036] font-medium text-xl leading-6 hover:underline"
        >
          Not sure yet? Skip for now
        </Link>
      </p>

      <Formik
        initialValues={stepOne}
        validationSchema={stepOneSchema}
        onSubmit={async (data: StepOneData) => {
          setIsLoading(true);
          try {
            setData({ step: 1, data });
            await router.push("/dashboard/onboarding/step-two");
          } catch (error) {
            console.error("Error submitting form:", error);
          } finally {
            setIsLoading(false); // Reset loading state
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="pt-14 space-y-10">
            <div>
              <label
                htmlFor="name"
                className="block mb-4 text-[#46464F] font-medium text-[28px]"
              >
                Event Name
              </label>

              <Field
                type="text"
                className={`w-full border-[1.5px] border-[#0D35FB] text-lg bg-white rounded-lg p-4 font-semibold placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                  errors.name && touched.name
                                    ? "border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500"
                                    : touched.name
                                    ? "border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]"
                                    : ""
                                }`}
                placeholder="Enter your event name"
                name="name"
              />
              <br />
              <ErrorMessage
                name="name"
                component="span"
                className="text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-4 text-[#46464F] font-medium text-[28px]"
              >
                Event Description
              </label>
              <Field
                as="textarea"
                type="text"
                className={`w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                  errors.description && touched.description
                                    ? "border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500"
                                    : touched.description
                                    ? "border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]"
                                    : ""
                                }`}
                placeholder="Enter your event description"
                name="description"
                id="description"
              />
              <br />
              <ErrorMessage
                name="description"
                component="span"
                className="text-red-500 font-medium min-[992px]:text-base text-sm"
              />
            </div>
            <div className="grid">
              <button
                type="submit"
                className="p-[18px] rounded-[10px] bg-[#0D35FB] text-white font-medium text-base"
              >
                {isLoading ? <ButtonSpinner /> : "Continue"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
