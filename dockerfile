FROM node:22.11.0 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Production
FROM node:20-alpine AS production
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production=true && \
    yarn global add serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist"]