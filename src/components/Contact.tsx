"use client";

import { motion } from "motion/react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmailSchema, SendContactEmailSchema } from "@/schema/email";
import { emailService } from "@/services/email-service";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SendContactEmailSchema>({
    resolver: zodResolver(sendContactEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSendContactEmail = async (data: SendContactEmailSchema) => {
    try {
      await emailService.sendEmailContact(data);

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      const errorMessage =
        (error instanceof AxiosError && error.response?.data?.error) ||
        "Failed to send message.";

      toast.error(errorMessage);
    }
  };

  return (
    <section
      id="contact"
      className="grid min-h-screen snap-start snap-always items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24"
    >
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-2xl"
        >
          <span className="text-primary text-sm font-black tracking-[0.25em] uppercase">
            Contact
          </span>
          <h2 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base leading-7 sm:text-lg">
            Whether you have a question, a project idea, or just want to say hi,
            I&apos;ll try my best to get back to you.
          </p>

          <div className="mt-8 grid gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-3 text-white/80">
              <Mail size={20} />
              yospunyaporto@gmail.com
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Phone size={20} />
              +66 82 942 0255
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin size={20} />
              Phitsanulok, Thailand
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(handleSendContactEmail)}
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, margin: "-120px" }}
          className="flex w-full flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 sm:p-8"
        >
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="text-sm text-gray-300">
                  Name
                </label>
                <input
                  {...field}
                  type="text"
                  className="bg-background rounded-md border border-gray-700 p-3 text-white transition-colors focus:border-white/5 focus:outline-none"
                />
                {fieldState.error && (
                  <span className="text-secondary text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-email"
                  className="text-sm text-gray-300"
                >
                  Email
                </label>
                <input
                  {...field}
                  className="bg-background rounded-md border border-gray-700 p-3 text-white transition-colors focus:border-white/5 focus:outline-none"
                />
                {fieldState.error && (
                  <span className="text-secondary text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />

          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-message"
                  className="text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  {...field}
                  rows={5}
                  className="bg-background resize-none rounded-md border border-gray-700 p-3 text-white transition-colors focus:border-white/5 focus:outline-none"
                />
                {fieldState.error && (
                  <span className="text-secondary text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-foreground hover:bg-primary/50 mt-4 flex items-center justify-center gap-2 rounded-md py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                Sending...
                <Loader2 size={18} className="animate-spin" />
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
