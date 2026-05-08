// Preferred: use environment variable set in Vercel dashboard
// e.g. NEXT_PUBLIC_API_URL=https://skillscraft-backend.example
// Fallback kept for local dev / if env var is missing
export const url =
	(process.env.NEXT_PUBLIC_API_URL as string | undefined) ||
	"https://skillcarftbackend.vercel.app";