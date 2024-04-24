import theme from "../../../tailwind.config.ts";

export const handler: Handlers<User | null> = {
  async GET(req, _ctx) {
    return new Response(JSON.stringify(theme.daisyui.themes));
  },
};
