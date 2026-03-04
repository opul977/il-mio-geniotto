export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/profilo/:path*"] // Proteggi solo rotte private
};
