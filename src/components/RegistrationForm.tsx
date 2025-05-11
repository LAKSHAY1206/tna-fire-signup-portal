
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  playerName: z.string().min(3, {
    message: "Player name must be at least 3 characters.",
  }),
  gameId: z.string().min(5, {
    message: "Game ID must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  teamName: z.string().optional(),
  experience: z.string(),
  agreeTerms: z.boolean().refine(value => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const RegistrationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerName: "",
      gameId: "",
      email: "",
      phone: "",
      teamName: "",
      experience: "",
      agreeTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Registration Successful! 🎮",
        description: "Your registration for the Free Fire tournament has been submitted.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="registration-form" className="py-16 bg-esports-gray/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Register for <span className="text-esports-orange">Free Fire</span> Tournament
            </h2>
            <p className="text-gray-300">
              Fill out the form below to secure your spot in the competition.
            </p>
          </div>
          
          <div className="animated-border">
            <div className="esports-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="playerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Player Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your in-game name" 
                              className="esports-input"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gameId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Free Fire ID</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your Free Fire ID" 
                              className="esports-input"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your@email.com" 
                              className="esports-input"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your contact number" 
                              className="esports-input"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Team Name (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your team name if participating as a team" 
                            className="esports-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Gaming Experience</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="esports-input">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-esports-gray border border-esports-blue text-white">
                            <SelectItem value="beginner">Beginner (Less than 6 months)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (6 months - 2 years)</SelectItem>
                            <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                            <SelectItem value="professional">Professional/Competitive Player</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-esports-dark/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-esports-orange data-[state=checked]:border-esports-orange"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-white">
                            I agree to the tournament rules, terms and conditions
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="esports-btn w-full py-6 text-lg font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Complete Registration"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
