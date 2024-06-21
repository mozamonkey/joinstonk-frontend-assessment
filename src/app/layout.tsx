import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Container, CssBaseline, Grid } from "@mui/material";
import NavBar from "@/components/NavBar/NavBar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Chatify",
  description: "A web app for chatting with other users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                // background: "hsla(210, 14%, 9%, 0.8)",
              }}
            >
              <NavBar />
              <Container
                maxWidth={false}
                disableGutters
                sx={{
                  flex: 1,
                  // paddingBottom: 6,
                }}
              >
                {children}
              </Container>
            </Container>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
