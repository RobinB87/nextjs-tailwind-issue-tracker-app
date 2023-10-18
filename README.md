# nextjs-tailwind-issue-tracker-app

1. npx create-next-app
2. npm i react-icons --save
3. npm i prisma
4. npx prisma init
5. create prisma model
6. npx prisma migrate dev
7. npm i zod
8. npm i @radix-ui/themes
9. import '@radix-ui/themes/styles.css'
10. add to layout.tsx
11. wrap everything inside body in <Theme>
12. to add a theme, add <ThemePanel /> in theme tag to easily create and copy a theme tag
13. for font, add variable: "--font-inter" and add className={inter.variable} to html
14. create theme-config.css and import it in root layout
