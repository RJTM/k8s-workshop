FROM oven/bun:alpine

COPY package.json ./
COPY bun.lockb ./
COPY index.ts ./

RUN bun install

CMD [ "bun","start" ]