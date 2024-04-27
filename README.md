<kbd><img src="https://github.com/michael-pfister/deno-portfolio/assets/63919069/68757f25-e530-4e64-ac66-cc2a4861b493" alt="portfolio hero section"/></kbd>

This is an open source developer portfolio made using
[ThreeJS](https://threejs.org/) and [denoland fresh](https://fresh.deno.dev/).
The project has an MIT license which is a permissive software license. You may
use, copy, modify, merge publish, distribute, sublicense and sell copies of this
software without monetary cost.

## Usage

If you’d like to showcase your work and skills using this website as your own
portfolio page, follow these simple steps:

#### 1. Fork the repository

- Start by
  [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
  this repository to your GitHub account. It’s a quick process – just click the
  “Fork” button at the top right of this page.
- This will create a copy of the repository under your account.

#### 2. Deploy with Deno

- Deploying your portfolio (for free) is a breeze with
  [Deno Deploy](https://deno.com/deploy). If you’re new to this, don’t worry!
  Check out the
  [Deployment Guide](https://fresh.deno.dev/docs/getting-started/deploy-to-production)
  in the
  [denoland fresh documentation](https://fresh.deno.dev/docs/introduction) for
  step-by-step instructions.
- Once deployed, your portfolio will be accessible to the world!

## Setting Up Locally

1. Clone this project
   `git clone https://github.com/michael-pfister/deno-portfolio`
2. [Install deno](https://docs.deno.com/runtime/manual/getting_started/installation)
   (if you havent already)
3. Navigate to the cloned directory `cd deno-portfolio`
4. Start the development server by executing `deno task start`

## Configuration

Your portfolio should reflect your unique style and achievements. Here’s how you
can customize it:

- Most of the displayed content can be found in the `routes` directory,
  specifically in `_app.tsx` and `index.tsx`.
- To update your work experience, skills, or any other information, head to the
  relevant sections in `index.tsx`.
- Information about your social links, credentials and metadata can be
  configured inside of `_app.tsx`.

> Dont forget to replace the sample CV with your own under `static/cv.pdf`.

#### Example

To change your Work expierience simply update the provided array found inside of
the `Experience` function under `routes/index.tsx`. The page section should
generate automatically.

```ts
const experiences: Experience[] = [
  {
    title: "Full Stack Web Developer",
    company: "AST Advanced Sales Technologies GmbH",
    timePeriod: "Sep 2023 - Apr 2024",
    location: "Vienna, Austria",
  },
  {
    title: "Junior Web Developer",
    company: "AST Advanced Sales Technologies GmbH",
    timePeriod: "Feb 2023 - Sep 2023",
    location: "Vienna, Austria",
  },
];
```
