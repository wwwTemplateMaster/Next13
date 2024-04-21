import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Select

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Select

// Avatar

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Avatar

// Separator

import { Separator } from "@/components/ui/separator";

// Separator

// Text Form

import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

// Text Form

export function Rating_Tabs() {
  return (
    <Tabs defaultValue="overall_rating" className="w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overall_rating">Overall Rating</TabsTrigger>
        <TabsTrigger value="rating_review">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="overall_rating">
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
            <CardDescription>4.2 out of 5</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="rating_review">
        <Card>
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardTitle style={{ marginRight: "55px" }}>135 Reviews</CardTitle>

              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Sort By:" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="pl-0">Filter:</SelectLabel>
                    <SelectItem value="apple" className="pl-0">
                      Most relevant
                    </SelectItem>
                    <SelectItem value="banana" className="pl-0">
                      Highest rated
                    </SelectItem>
                    <SelectItem value="blueberry" className="pl-0">
                      Lowest rated
                    </SelectItem>
                    <SelectItem value="grapes" className="pl-0">
                      Grapes
                    </SelectItem>
                    <SelectItem value="pineapple" className="pl-0">
                      Pineapple
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <CardDescription></CardDescription>
          </CardHeader>

          {/* Shad cn */}

          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-4.35-4.35m-7.97 2.14A9 9 0 1119 12c0 4.97-4.03 9-9 9z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Review with Shadcn"
                className="py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Search review */}

          <CardContent className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <Label htmlFor="username">Username</Label>
                {/* Add username here if needed */}
              </div>
            </div>
          </CardContent>

          <CardContent>
            <div className="flex items-center space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500" // Apply Tailwind CSS color class
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .292l1.768 4.773 4.97.41c.398.033.57.537.252.805l-3.81 3.182 1.355 4.944c.109.398-.292.72-.612.502L10 13.36l-4.523 2.66c-.32.189-.721-.104-.612-.502l1.355-4.944-3.81-3.182c-.318-.268-.146-.772.252-.805l4.97-.41L10 .292z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                {/* Add date posted component here */}
                <CardDescription>2 weeks ago</CardDescription>
              </div>
            </div>
          </CardContent>

          {/* <CardContent>
            <div>

            //star rating
            </div>
          </CardContent> */}

          {/* Comment */}

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Comment</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>

          {/* Comment */}

          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
