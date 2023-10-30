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
15. npm i --save react-simplemde-editor easymde
16. npm i react-hook-form
17. npm i axios

Integrate react hook forms with zod:

18. npm i @hookform/resolvers
    const { register, control, handleSubmit } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
    });

19. npm i react-markdown
20. npm i -D @tailwindcss/typography
    Then import the plugin in tailwind.config.js
    And use it with className='prose'

21. npm i next-auth

https://authjs.dev/

22. npm i @next-auth/prisma-adapter

23. npm i @tanstack/react-query
24. npm i react-hot-toast
