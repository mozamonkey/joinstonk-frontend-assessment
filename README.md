This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features implemented

### Chat ✅

The main view of the application features a chat window that users can send messages to via the text field at the bottom of the screen. Tags and commands in messages are colored in light blue, and `:emoji:` shortcodes in messages will render the corresponding emojis.

#### [CHAT] Emojis ✅

Users can add emojis to their messages by typing in `:emoji:`. Emoji suggestions will appear in a small tooltip as users are typing the emoji shortcode.

#### [CHAT] Tag a user ✅

Users can tag other users by typing `@`. A tooltip also appears right above their text input with suggestions on which users to tag based on what they're currently inputting.

#### [CHAT] Commands ✅

If the user inputs `/` into the chat textfield, a tooltip appears with a list of commands they're allowed to input along with a short description of what each command. The commands they can input are as follows:

- /mute @user - Mute a user
- /ban @user - Ban a user
- /title - Set a title for the current stream
- /description - Set a description for the current stream
