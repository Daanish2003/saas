"use client"
import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import H3 from '@/components/typography/h3';
import P from '@/components/typography/paragraph';
import { Form, FormField, FormItem } from '@/components/ui/form';


const ContactHero = () => {
    const formSchema = z.object({
        name: z.string().min(1, { message: "Name is required" }),
        companyName: z.string().min(1, { message: "Company Name is required" }),
        email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
        subject: z.string().min(1, { message: "Subject is required" }),
        message: z.string().min(1, { message: "Message is required" }),
    })

    const contactForm = () => {
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
                companyName: "",
                email: "",
                subject: "",
                message: "",
            },
        })
    
    }
    
    const onSubmit = (values) => {
       if(values) {
        console.log(values);
       }
    }
  return (
    <section className="mt-32 px-20">
        <div className="bg-[#F0F2FE] p-64">
            <div className="">
                <div>
                    <H3>Drop us a message</H3>
                    <P>We will get back to you as soon as possible.</P>
                </div>
                <Form {...form}>
                    <form>
                    <FormField 
                        control={form.control}
                        name="Full Name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Full Name" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </form>
                </Form>
            </div>
        </div>
    </section>
  )
}

export default ContactHero