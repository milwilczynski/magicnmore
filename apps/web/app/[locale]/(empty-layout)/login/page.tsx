"use client";

import React, { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { FacebookIcon, GoogleIcon } from "@workspace/ui/icons";
import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";

export default function LoginBlock2() {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("auth.login");

  return (
    <section className="w-full h-[100vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 shadow-2xl dark:bg-card/95 backdrop-blur-sm">
        <CardHeader className="space-y-4 text-center">
          <div className="space-y-2">
            <CardTitle className="text-3xl space-y-2">
              <Logo
                size={64}
                companyProps={{
                  companyClassNames: "text-[20px]",
                }}
              />
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("preferred")}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Login Buttons */}
          <div className="flex flex-row gap-2 justify-center">
            <Button
              variant="outline"
              className="w-full gap-3 h-12 border-2"
              onClick={() => signIn("google")}
            >
              <GoogleIcon />
            </Button>
            <Button
              variant="outline"
              className="w-full gap-3 h-12 border-2"
              onClick={() => signIn("facebook")}
            >
              <FacebookIcon />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("or-continue")}
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t("email-hint")}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t("password")}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("password-hint")}
                  className="pl-10 pr-10 h-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12">
              {t("sign-in")}
            </Button>
          </form>

          <div className="text-center space-y-2">
            <Button variant="link" className="text-sm text-muted-foreground">
              {t("forgot-password")}
            </Button>
            <div className="text-sm text-muted-foreground">
              {t("new-user")}{" "}
              <Button variant="link" className="px-0 font-medium text-blue-600">
                {t("create-account")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
