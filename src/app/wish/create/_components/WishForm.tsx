"use client";

import { WishSchema } from "@/lib/validations";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { createWish } from "@/lib/actions/wish.action";
import NiceModal from "@ebay/nice-modal-react";

const WishForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof WishSchema>>({
    resolver: zodResolver(WishSchema),
    defaultValues: {
      recipient: "",
      sender: "",
      type: "private",
      wish: "",
    },
  });

  async function onSubmit(data: z.infer<typeof WishSchema>) {
    setIsSubmitting(true);

    try {
      const newWish = await createWish({
        recipient: data.recipient,
        sender: data.sender,
        type: data.type,
        wish: data.wish,
      });
      if (newWish) {
        NiceModal.show("URLModal", newWish);
      }
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <p>Send It Public</p>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value === "public"}
                    onCheckedChange={(checked) => {
                      field.onChange(checked ? "public" : "private");
                    }}
                  />
                </FormControl>
              </div>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {form.watch("type") === "private" && (
          <FormField
            control={form.control}
            name="recipient"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="">
                  Recipient <span className="">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Input
                    placeholder="Who you want to send this wish to?"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="sender"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="">
                Sender <span className="">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input placeholder="Who are you?" className="" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wish"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="">
                Wish <span className="">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Textarea
                  placeholder="What is your wish?"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sharing wishes..." : "Share Wishes"}
        </Button>
      </form>
    </Form>
  );
};

export default WishForm;
