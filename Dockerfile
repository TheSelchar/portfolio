# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Next.js application
RUN npm run build

# Add environment variables at build time
ARG OPENAI_API_KEY
ARG PINECONE_API_KEY
ENV OPENAI_API_KEY=$OPENAI_API_KEY
ENV PINECONE_API_KEY=$PINECONE_API_KEY

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 