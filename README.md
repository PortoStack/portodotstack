

<h1 style="text-align: center">Portodotstack Portfolio</h1>

&emsp; &emsp;Personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Resend. The app presents profile, about, projects, experience, and contact sections, with a server-side API route for contact form email delivery.

<h2 style="text-align: center">Tech Stack</h2> 

<p style="display: flex; justify-content: center; gap: 8px;">
  <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width="42" height="42" />
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="42" height="42" />
  <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" width="42" height="42" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="42" height="42" />
  <img src="https://skillicons.dev/icons?i=docker" alt="Docker" width="42" height="42" />
</p>

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
touch .env.local
```

Add the variables listed in the Environment Variables section.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_VERSION=v1
RESEND_API_KEY=your_resend_api_key
```

`RESEND_API_KEY` is required for the contact form API route at `/api/v1/email`.

## Available Scripts

```bash
npm run dev
```

Runs the local development server on port `4000`.

```bash
npm run build
```

Builds the production application.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint.

## Docker

Build and run the app with Docker Compose:

```bash
docker compose up -d --build
```

The container exposes the app at [http://localhost:4000](http://localhost:4000).

Stop the container:

```bash
docker compose down
```

## Deployment

Deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

The workflow:

- Runs on pushes to `dev` and `main`
- Supports manual deployment from `dev` or `main`
- Builds the app before deployment
- Packages the repository
- Uploads it to the target server over SSH
- Runs `docker compose up -d --build --remove-orphans`

Required GitHub environment secrets:

- `SSH_HOST`
- `SSH_USER`
- `SSH_KEY`

Optional secrets:

- `SSH_PORT`
- `DEPLOY_PATH`
- `SERVER_NAME`
- `HTTP_PORT`
- `ENV_FILE`

## Project Structure

```text
.
├── public
│   └── images
│       ├── projects
│       ├── about.png
│       └── profile.png
└── src
    ├── app
    │   ├── api
    │   │   └── v1
    │   │       └── email
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    ├── config
    ├── data
    ├── emails
    ├── lib
    ├── schema
    └── services
```

## Contact API

The contact form sends a `POST` request to:

```text
/api/v1/email
```

Request body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Your message"
}
```

Successful responses return status `201` with `success: true`.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

Built by PortoStack using Next.js & Tailwind CSS
