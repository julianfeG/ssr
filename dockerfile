# ---------- 1) BUILD STAGE ----------
FROM node:20-alpine AS builder

WORKDIR /app

# instalar deps (incluye devDependencies para build)
COPY package*.json ./
RUN npm install

# copiar código
COPY . .

# build next
RUN npm run build


# ---------- 2) RUNTIME STAGE ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# copiar solo lo necesario desde builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# opcional pero recomendado → user no root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
