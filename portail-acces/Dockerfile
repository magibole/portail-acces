ARG BUILD_FROM
FROM ${BUILD_FROM}

# Install Node.js
RUN apk add --no-cache nodejs npm

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install --production

# Copy server and static files
COPY server.js ./
COPY run.sh /run.sh
COPY public/ ./public/

RUN chmod +x /run.sh

CMD ["/run.sh"]
